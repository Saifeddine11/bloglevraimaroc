import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseHTML } from "linkedom";
import sharp from "sharp";

const root = process.cwd();
const keys = new Set([
  "the-gentlemen-saison-3-maroc-rabat-erfoud",
  "the-gentlemen-saison-3-rabat",
  "the-gentlemen-saison-3-erfoud",
  "lieux-tournage-the-gentlemen-saison-3-maroc",
  "pourquoi-productions-internationales-maroc",
  "accrocar-vehicules-luxe-the-gentlemen-maroc",
  "coulisses-logistique-automobile-the-gentlemen-maroc",
  "rolls-royce-bentley-the-gentlemen-maroc",
  "accrocar-mobilite-productions-internationales",
  "ecosysteme-marocain-productions-internationales",
]);
const routeRoots = { fr: "articles", en: "en/articles", es: "es/articulos", nl: "nl/artikelen" };
const sourceDirs = ["", "en", "es", "nl"];
const rows = [];
const errors = [];

const field = (text, name) => text.match(new RegExp(`^${name}: \\"([^\\"]+)\\"`, "m"))?.[1];

for (const dir of sourceDirs) {
  const sourceDir = path.join(root, "src/content/articles", dir);
  for (const filename of await readdir(sourceDir)) {
    if (!filename.endsWith(".md")) continue;
    const source = await readFile(path.join(sourceDir, filename), "utf8");
    const translationKey = field(source, "translationKey");
    if (!keys.has(translationKey)) continue;
    const locale = field(source, "locale");
    const slug = field(source, "urlSlug");
    const title = field(source, "title");
    const heroImage = field(source, "heroImage");
    const body = source.split("---").slice(2).join("---");
    const wordCount = body.trim().split(/\s+/).length;
    const route = `/${routeRoots[locale]}/${slug}`;
    const htmlPath = path.join(root, "dist", route, "index.html");
    let html;
    try { html = await readFile(htmlPath, "utf8"); } catch { errors.push(`${route}: generated page missing`); continue; }
    const { document } = parseHTML(html);
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href");
    const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')];
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
    const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((node) => {
      try { return [JSON.parse(node.textContent)]; } catch { return []; }
    });
    const schemaTypes = schemas.map((schema) => schema["@type"]);
    const requiredSchema = ["BreadcrumbList", "FAQPage"];
    const articleSchema = schemas.find((schema) => ["Article", "NewsArticle"].includes(schema["@type"]));
    if (canonical !== `https://levraimaroc.com${route}`) errors.push(`${route}: wrong canonical ${canonical}`);
    for (const hreflang of ["fr", "en", "es", "nl", "x-default"]) {
      if (!alternates.some((node) => node.getAttribute("hreflang") === hreflang)) errors.push(`${route}: missing hreflang ${hreflang}`);
    }
    if (robots.includes("noindex") || !robots.includes("max-image-preview:large")) errors.push(`${route}: robots directive incorrect`);
    if (!articleSchema?.image || articleSchema.image["@type"] !== "ImageObject") errors.push(`${route}: missing article ImageObject`);
    for (const type of requiredSchema) if (!schemaTypes.includes(type)) errors.push(`${route}: missing ${type} schema`);
    if (!document.querySelector('meta[property="og:image"]')) errors.push(`${route}: missing Open Graph image`);
    if (!document.querySelector('meta[name="twitter:card"]')) errors.push(`${route}: missing Twitter card`);
    const localLinks = [...document.querySelectorAll("article a[href]")]
      .map((node) => node.getAttribute("href"))
      .filter((href) => href?.startsWith("/") && !href.startsWith("/#"));
    for (const href of localLinks) {
      const clean = href.split("#")[0].replace(/\/$/, "");
      const target = path.join(root, "dist", clean, "index.html");
      try { await stat(target); } catch { errors.push(`${route}: broken internal link ${href}`); }
    }
    const imageFile = path.join(root, "public", heroImage.replace(/^\//, ""));
    try {
      const meta = await sharp(imageFile).metadata();
      if (meta.width !== 1600 || meta.height !== 900) errors.push(`${route}: hero is ${meta.width}x${meta.height}`);
    } catch { errors.push(`${route}: hero image missing ${heroImage}`); }
    rows.push({ locale, translationKey, title, slug, route, wordCount, heroImage, canonical, alternateCount: alternates.length, schemaTypes });
  }
}

if (rows.length !== 40) errors.push(`Expected 40 localized files, found ${rows.length}`);
for (const key of keys) {
  const locales = rows.filter((row) => row.translationKey === key).map((row) => row.locale).sort().join(",");
  if (locales !== "en,es,fr,nl") errors.push(`${key}: locale set is ${locales}`);
}
const sitemap = await readFile(path.join(root, "dist/sitemap-0.xml"), "utf8");
for (const row of rows) if (!sitemap.includes(`https://levraimaroc.com${row.route}`)) errors.push(`${row.route}: absent from sitemap`);
const rss = await readFile(path.join(root, "dist/rss.xml"), "utf8");
for (const row of rows.filter((item) => item.locale === "fr")) if (!rss.includes(`https://levraimaroc.com${row.route}`)) errors.push(`${row.route}: absent from RSS`);

const report = { generatedAt: new Date().toISOString(), articleFiles: rows.length, translationGroups: keys.size, errors, rows: rows.sort((a, b) => a.translationKey.localeCompare(b.translationKey) || a.locale.localeCompare(b.locale)) };
await writeFile(path.join(root, "docs/editorial-2026-09-16-gentlemen/validation.json"), `${JSON.stringify(report, null, 2)}\n`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${rows.length} pages, ${keys.size} translation groups, canonical/hreflang/schema/images/links/sitemap/RSS verified.`);
