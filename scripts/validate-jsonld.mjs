import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseHTML } from "linkedom";

const dist = path.join(process.cwd(), "dist");
const errors = [];
const stats = {
  pages: 0,
  jsonLdBlocks: 0,
  breadcrumbLists: 0,
  articles: 0,
  events: 0,
  faqPages: 0,
  newsSitemapEntries: 0,
};

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const next = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(next)));
    else if (entry.name === "index.html") files.push(next);
  }
  return files;
};

const usableName = (value) =>
  typeof value === "string" &&
  value.trim() !== "" &&
  value.trim() !== "undefined" &&
  value.trim() !== "null";

const crumbName = (element) => {
  if (usableName(element?.name)) return element.name.trim();
  if (usableName(element?.item?.name)) return element.item.name.trim();
  return "";
};

const crumbUrl = (element) => {
  if (typeof element?.item === "string") return element.item;
  if (typeof element?.item?.["@id"] === "string") return element.item["@id"];
  if (typeof element?.item?.url === "string") return element.item.url;
  return "";
};

let files;
try {
  files = await walk(dist);
} catch {
  console.error("dist/ is missing. Run npm run build first.");
  process.exit(1);
}

for (const file of files) {
  stats.pages += 1;
  const html = await readFile(file, "utf8");
  const route =
    `/${path.relative(dist, path.dirname(file)).replaceAll(path.sep, "/")}`.replace(
      /\/$/,
      "",
    ) || "/";
  const { document } = parseHTML(html);
  const scripts = [
    ...document.querySelectorAll('script[type="application/ld+json"]'),
  ];
  const pageSchemas = [];
  for (const script of scripts) {
    stats.jsonLdBlocks += 1;
    let parsed;
    try {
      parsed = JSON.parse(script.textContent ?? "");
    } catch (error) {
      errors.push(`${route}: malformed JSON-LD (${error.message})`);
      continue;
    }
    const graphs = Array.isArray(parsed)
      ? parsed
      : parsed?.["@graph"]
        ? parsed["@graph"]
        : [parsed];
    pageSchemas.push(...graphs);
    for (const schema of graphs) {
      const type = schema?.["@type"];
      const types = Array.isArray(type) ? type : [type];
      if (types.includes("BreadcrumbList")) {
        stats.breadcrumbLists += 1;
        const elements = schema.itemListElement;
        if (!Array.isArray(elements) || elements.length === 0) {
          errors.push(`${route}: BreadcrumbList has no itemListElement`);
          continue;
        }
        elements.forEach((element, index) => {
          if (element?.["@type"] !== "ListItem") {
            errors.push(`${route}: breadcrumb ${index + 1} is not a ListItem`);
          }
          if (element?.position !== index + 1) {
            errors.push(
              `${route}: breadcrumb position ${element?.position} !== ${index + 1}`,
            );
          }
          if (!usableName(crumbName(element))) {
            errors.push(
              `${route}: breadcrumb ${index + 1} missing name/item.name`,
            );
          }
          const url = crumbUrl(element);
          if (url && !url.startsWith("https://levraimaroc.com")) {
            errors.push(
              `${route}: breadcrumb ${index + 1} item is not an absolute production URL (${url})`,
            );
          }
          if (url.includes("undefined") || url.includes("null")) {
            errors.push(`${route}: breadcrumb ${index + 1} has a buggy URL`);
          }
        });
      }
      if (types.includes("NewsArticle") || types.includes("BlogPosting")) {
        stats.articles += 1;
        if (!usableName(schema.headline))
          errors.push(`${route}: article missing headline`);
        if (!schema.author) errors.push(`${route}: article missing author`);
        if (!schema.publisher)
          errors.push(`${route}: article missing publisher`);
        if (!schema.mainEntityOfPage)
          errors.push(`${route}: article missing mainEntityOfPage`);
        if (!schema.datePublished)
          errors.push(`${route}: article missing datePublished`);
        if (!schema.dateModified)
          errors.push(`${route}: article missing dateModified`);
      } else if (types.includes("Article")) {
        stats.articles += 1;
        if (!usableName(schema.headline))
          errors.push(`${route}: article missing headline`);
        if (!schema.author) errors.push(`${route}: article missing author`);
        if (!schema.publisher)
          errors.push(`${route}: article missing publisher`);
        if (!schema.mainEntityOfPage)
          errors.push(`${route}: article missing mainEntityOfPage`);
        const isCollectionArticle =
          /\/articles\/|\/articulos\/|\/artikelen\//.test(`${route}/`);
        if (isCollectionArticle && !schema.datePublished) {
          errors.push(`${route}: article missing datePublished`);
        }
      }
      if (types.includes("Event") || types.includes("MusicEvent"))
        stats.events += 1;
      if (types.includes("FAQPage")) {
        stats.faqPages += 1;
        for (const entity of schema.mainEntity ?? []) {
          if (!usableName(entity?.name))
            errors.push(`${route}: FAQ question missing name`);
        }
      }
    }
  }
  const articleSchemas = pageSchemas.filter((schema) =>
    ["Article", "NewsArticle", "BlogPosting"].includes(schema?.["@type"]),
  );
  if (articleSchemas.length > 1) {
    errors.push(`${route}: duplicate Article/NewsArticle schema`);
  }
}

try {
  const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
  if (!robots.includes("Sitemap: https://levraimaroc.com/sitemap-index.xml")) {
    errors.push("robots.txt missing regular sitemap discovery");
  }
  if (!robots.includes("Sitemap: https://levraimaroc.com/news-sitemap.xml")) {
    errors.push("robots.txt missing news sitemap discovery");
  }
} catch {
  errors.push("robots.txt is missing from dist/");
}

try {
  const xml = await readFile(path.join(dist, "news-sitemap.xml"), "utf8");
  if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
    errors.push("news-sitemap.xml missing XML declaration");
  }
  if (
    !xml.includes('xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"')
  ) {
    errors.push("news-sitemap.xml missing Google News namespace");
  }
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
    (match) => match[1],
  );
  const seen = new Set();
  const now = Date.now();
  stats.newsSitemapEntries = entries.length;
  for (const [index, entry] of entries.entries()) {
    const loc = entry.match(/<loc>([\s\S]*?)<\/loc>/)?.[1]?.trim();
    const language = entry
      .match(/<news:language>([\s\S]*?)<\/news:language>/)?.[1]
      ?.trim();
    const publicationDate = entry
      .match(/<news:publication_date>([\s\S]*?)<\/news:publication_date>/)?.[1]
      ?.trim();
    const title = entry
      .match(/<news:title>([\s\S]*?)<\/news:title>/)?.[1]
      ?.trim();
    const publicationName = entry
      .match(/<news:name>([\s\S]*?)<\/news:name>/)?.[1]
      ?.trim();
    if (!loc?.startsWith("https://levraimaroc.com/")) {
      errors.push(`news sitemap entry ${index + 1}: invalid loc`);
    }
    if (loc && seen.has(loc)) {
      errors.push(`news sitemap duplicate URL: ${loc}`);
    }
    if (loc) seen.add(loc);
    if (publicationName !== "Le Vrai Maroc") {
      errors.push(`news sitemap entry ${index + 1}: invalid publication name`);
    }
    if (!["fr", "en", "es", "nl"].includes(language ?? "")) {
      errors.push(`news sitemap entry ${index + 1}: invalid language`);
    }
    if (!usableName(title)) {
      errors.push(`news sitemap entry ${index + 1}: missing title`);
    }
    const timestamp = publicationDate ? Date.parse(publicationDate) : NaN;
    if (!Number.isFinite(timestamp)) {
      errors.push(`news sitemap entry ${index + 1}: invalid publication date`);
    } else if (now - timestamp > 48 * 60 * 60 * 1000 || now - timestamp < 0) {
      errors.push(
        `news sitemap entry ${index + 1}: outside two-day news window`,
      );
    }
    if (/undefined|null/.test(entry)) {
      errors.push(`news sitemap entry ${index + 1}: contains buggy literal`);
    }
  }
} catch {
  errors.push("news-sitemap.xml is missing from dist/");
}

if (errors.length) {
  console.error(errors.slice(0, 50).join("\n"));
  if (errors.length > 50) console.error(`…and ${errors.length - 50} more`);
  process.exit(1);
}

console.log(
  `PASS JSON-LD: ${stats.pages} pages, ${stats.jsonLdBlocks} blocks, ${stats.breadcrumbLists} BreadcrumbList, ${stats.articles} Article/NewsArticle, ${stats.events} Event, ${stats.faqPages} FAQPage, ${stats.newsSitemapEntries} News sitemap URLs`,
);
