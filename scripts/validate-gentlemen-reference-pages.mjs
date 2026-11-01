import { readFile, readdir, stat, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { parseHTML } from "linkedom";

const root = process.cwd();
const contentRoot = path.join(root, "src/content/articles");
const outputRoot = path.join(
  root,
  "docs/editorial-2026-10-29-gentlemen-reference-pages",
);
const routeRoots = {
  fr: "articles",
  en: "en/articles",
  es: "es/articulos",
  nl: "nl/artikelen",
};
const referenceFlags = {
  published: true,
  indexable: true,
  showOnHomepage: false,
  showInBlogGrid: false,
  showInRelatedArticles: false,
  showInFeatured: false,
  showInSearchUI: false,
  includeInSitemap: true,
};
const errors = [];
const rows = [];
const pillarTranslationKey = "the-gentlemen-saison-3-maroc-rabat-erfoud";
const pillarUpdatedLocales = new Set(["fr", "en"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolutePath)));
    else if (/\.mdx?$/.test(entry.name)) files.push(absolutePath);
  }
  return files;
}

for (const filename of await walk(contentRoot)) {
  const source = await readFile(filename, "utf8");
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) continue;
  const data = parseYaml(frontmatter[1]);
  if (!String(data.heroImage ?? "").startsWith("/images/articles/gentlemen-maroc/")) {
    continue;
  }
  const locale = data.locale ?? "fr";
  const slug = data.urlSlug ?? data.slug ?? path.basename(filename, path.extname(filename));
  const route = `/${routeRoots[locale]}/${slug}`;
  for (const [flag, expected] of Object.entries(referenceFlags)) {
    if (data[flag] !== expected) {
      errors.push(`${route}: ${flag} must be ${expected}`);
    }
  }
  const expectedUpdatedDate =
    data.translationKey === pillarTranslationKey && pillarUpdatedLocales.has(locale)
      ? "2026-10-30"
      : "2026-09-16";
  if (data.date !== "2026-09-16") {
    errors.push(`${route}: original publication date changed`);
  }
  if (data.updatedDate !== expectedUpdatedDate) {
    errors.push(`${route}: updatedDate must be ${expectedUpdatedDate}`);
  }
  if (/Montage Pictures/i.test(source)) {
    errors.push(`${route}: contains the incorrect name Montage Pictures`);
  }
  if (
    data.translationKey === pillarTranslationKey &&
    pillarUpdatedLocales.has(locale)
  ) {
    for (const required of [
      "Rabat",
      "Erfoud",
      "Robert Carlyle",
      "Elijah Wood",
      "Orlando Bloom",
      "Rolls-Royce Cullinan",
      "Bentley Bentayga",
      "https://accrocar.com/",
      "MOONAGE PICTURES (THE GENTLEMEN) LIMITED",
    ]) {
      if (!source.includes(required)) {
        errors.push(`${route}: pillar is missing ${required}`);
      }
    }
    const hasOfficialUpdateDate =
      locale === "fr"
        ? source.includes("23 octobre 2026")
        : source.includes("23 October 2026");
    if (!hasOfficialUpdateDate) {
      errors.push(`${route}: pillar is missing the 23 October Netflix update`);
    }
    if (/<details>/i.test(source)) {
      errors.push(`${route}: pillar must not generate FAQPage markup from details elements`);
    }
    if (!/no official (date|release)|aucune date[^\n]+officielle/i.test(source)) {
      errors.push(`${route}: pillar must state that no official release date exists`);
    }
    if (!/does not prove|ne prouve pas/i.test(source)) {
      errors.push(`${route}: pillar must distinguish supply from on-screen use`);
    }
  }
  const imagePath = path.join(root, "public", data.heroImage.replace(/^\//, ""));
  try {
    await stat(imagePath);
  } catch {
    errors.push(`${route}: missing hero image ${data.heroImage}`);
  }
  rows.push({
    locale,
    translationKey: data.translationKey,
    title: data.title,
    route,
    url: `https://levraimaroc.com${route}`,
    heroImage: data.heroImage,
  });
}

rows.sort(
  (a, b) =>
    a.translationKey.localeCompare(b.translationKey) ||
    a.locale.localeCompare(b.locale),
);
if (rows.length !== 40) errors.push(`Expected 40 reference pages, found ${rows.length}`);
const groups = new Map();
for (const row of rows) {
  const locales = groups.get(row.translationKey) ?? [];
  locales.push(row.locale);
  groups.set(row.translationKey, locales);
}
if (groups.size !== 10) errors.push(`Expected 10 translation groups, found ${groups.size}`);
for (const [key, locales] of groups) {
  if (locales.sort().join(",") !== "en,es,fr,nl") {
    errors.push(`${key}: locale set is ${locales.join(",")}`);
  }
}

const routeSet = new Set(rows.map((row) => `${row.route}/`));
const sitemap = await readFile(path.join(root, "dist/sitemap-0.xml"), "utf8");
const rss = await readFile(path.join(root, "dist/rss.xml"), "utf8");
let newsSitemap = "";
try {
  newsSitemap = await readFile(path.join(root, "dist/news-sitemap.xml"), "utf8");
} catch {
  // A news sitemap is optional; reference pages must not be forced into it.
}

for (const row of rows) {
  const htmlPath = path.join(root, "dist", row.route.replace(/^\//, ""), "index.html");
  let html = "";
  try {
    html = await readFile(htmlPath, "utf8");
  } catch {
    errors.push(`${row.route}: generated page missing`);
    continue;
  }
  const { document } = parseHTML(html);
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href");
  const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
  const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')];
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(
    (node) => {
      try {
        return [JSON.parse(node.textContent)];
      } catch {
        return [];
      }
    },
  );
  if (canonical !== row.url) errors.push(`${row.route}: canonical is ${canonical}`);
  if (!robots.includes("index, follow") || robots.includes("noindex")) {
    errors.push(`${row.route}: robots directive is ${robots}`);
  }
  for (const hreflang of ["fr", "en", "es", "nl", "x-default"]) {
    if (!alternates.some((node) => node.getAttribute("hreflang") === hreflang)) {
      errors.push(`${row.route}: missing hreflang ${hreflang}`);
    }
  }
  if (!schemas.some((schema) => schema["@type"] === "Article")) {
    errors.push(`${row.route}: missing Article schema`);
  }
  if (
    row.translationKey === pillarTranslationKey &&
    pillarUpdatedLocales.has(row.locale)
  ) {
    const articleSchema = schemas.find((schema) => schema["@type"] === "Article");
    if (!articleSchema?.image || articleSchema.image["@type"] !== "ImageObject") {
      errors.push(`${row.route}: pillar Article schema is missing ImageObject`);
    }
    if (!schemas.some((schema) => schema["@type"] === "BreadcrumbList")) {
      errors.push(`${row.route}: pillar is missing BreadcrumbList schema`);
    }
    if (schemas.some((schema) => schema["@type"] === "FAQPage")) {
      errors.push(`${row.route}: pillar must not emit FAQPage schema`);
    }
    if (!String(articleSchema?.dateModified ?? "").startsWith("2026-10-30")) {
      errors.push(`${row.route}: pillar dateModified is not 2026-10-30`);
    }
    if (!document.querySelector('meta[name="twitter:image"]')) {
      errors.push(`${row.route}: pillar is missing Twitter image metadata`);
    }
    if (document.querySelectorAll('a[href="https://accrocar.com/"]').length !== 1) {
      errors.push(`${row.route}: pillar must contain one prominent Accrocar homepage link`);
    }
    if (document.querySelectorAll('article img[src*="/gentlemen-maroc/"]').length < 2) {
      errors.push(`${row.route}: pillar must contain original inline production images`);
    }
  }
  if (!document.querySelector('meta[property="og:image"]')) {
    errors.push(`${row.route}: missing Open Graph image`);
  }
  const relatedLinks = [
    ...document.querySelectorAll('section[aria-labelledby="related-heading"] a[href]'),
  ].map((node) => node.getAttribute("href"));
  if (relatedLinks.some((href) => routeSet.has(href))) {
    errors.push(`${row.route}: reference page leaked into related module`);
  }
  if (!sitemap.includes(`<loc>${row.url}/</loc>`)) {
    errors.push(`${row.route}: absent from standard sitemap`);
  }
  if (rss.includes(row.url)) errors.push(`${row.route}: present in RSS discovery feed`);
  if (newsSitemap.includes(row.url)) errors.push(`${row.route}: present in news sitemap`);
}

const listingRoutes = {
  fr: ["/", "/blog/", "/immobilier/", "/tourisme/", "/investissement/", "/quartiers/", "/guides/", "/analyses/"],
  en: ["/en/", "/en/blog/", "/en/real-estate/", "/en/tourism/", "/en/investment/", "/en/neighborhoods/", "/en/guides/", "/en/analysis/"],
  es: ["/es/", "/es/blog/", "/es/inmobiliario/", "/es/turismo/", "/es/inversion/", "/es/barrios/", "/es/guias/", "/es/analisis/"],
  nl: ["/nl/", "/nl/blog/", "/nl/vastgoed/", "/nl/toerisme/", "/nl/investeren/", "/nl/wijken/", "/nl/gidsen/", "/nl/analyses/"],
};
for (const [locale, routes] of Object.entries(listingRoutes)) {
  const localizedReferences = rows.filter((row) => row.locale === locale);
  for (const route of routes) {
    const htmlPath = path.join(root, "dist", route.replace(/^\//, ""), "index.html");
    const html = await readFile(htmlPath, "utf8");
    const { document } = parseHTML(html);
    for (const reference of localizedReferences) {
      const links = [
        ...document.querySelectorAll(`a[href="${reference.route}/"]`),
      ];
      if (links.some((link) => link.closest("article"))) {
        errors.push(`${reference.route}: leaked into a listing card on ${route}`);
      }
    }
  }
}

const tourismContextRoutes = {
  fr: "/tourisme/",
  en: "/en/tourism/",
  es: "/es/turismo/",
  nl: "/nl/toerisme/",
};
for (const [locale, route] of Object.entries(tourismContextRoutes)) {
  const pillar = rows.find(
    (row) => row.locale === locale && row.translationKey === pillarTranslationKey,
  );
  const htmlPath = path.join(root, "dist", route.replace(/^\//, ""), "index.html");
  const html = await readFile(htmlPath, "utf8");
  if (!pillar || !html.includes(`href="${pillar.route}/"`)) {
    errors.push(`${route}: missing the limited contextual pillar link`);
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  articleFiles: rows.length,
  translationGroups: groups.size,
  errors,
  rows,
};
await mkdir(outputRoot, { recursive: true });
await writeFile(
  path.join(outputRoot, "validation.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);
const reportMarkdown = `# The Gentlemen reference-page restoration\n\nGenerated ${report.generatedAt}.\n\n## Outcome\n\n- ${rows.length} public, indexable reference pages across ${groups.size} translation groups.\n- Preserved original publication date: 2026-09-16. The FR/EN pillar dateModified is 2026-10-30 after a substantive official-source update.\n- Excluded from homepage, listing grids, featured modules, related modules, search UI, RSS, and Google News sitemap.\n- One contextual pillar link is present on each localized tourism category page.\n- Included in the standard sitemap with self-canonical, hreflang, Article schema, and Open Graph metadata.\n- Deployment status: not deployed by this repository task.\n\n## Validation\n\n${errors.length === 0 ? "PASS — no validation errors." : `FAIL — ${errors.length} error(s).`}\n\n## Complete URL and title inventory\n\n| Locale | Title | Intended production URL |\n|---|---|---|\n${rows.map((row) => `| ${row.locale.toUpperCase()} | ${row.title.replace(/\|/g, "\\|")} | [${row.url}](${row.url}) |`).join("\n")}\n`;
await writeFile(path.join(outputRoot, "REPORT.md"), reportMarkdown);

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${rows.length} reference pages, ${groups.size} translation groups, discovery exclusions and SEO output verified.`,
);
