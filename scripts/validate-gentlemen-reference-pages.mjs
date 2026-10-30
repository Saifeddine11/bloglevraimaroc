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
  if (data.date !== "2026-09-16" || data.updatedDate !== "2026-09-16") {
    errors.push(`${route}: publication/update dates changed`);
  }
  if (/Montage Pictures/i.test(source)) {
    errors.push(`${route}: contains the incorrect name Montage Pictures`);
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
    for (const reference of localizedReferences) {
      if (html.includes(`${reference.route}/`)) {
        errors.push(`${reference.route}: leaked into discovery page ${route}`);
      }
    }
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
const reportMarkdown = `# The Gentlemen reference-page restoration\n\nGenerated ${report.generatedAt}.\n\n## Outcome\n\n- ${rows.length} public, indexable reference pages across ${groups.size} translation groups.\n- Preserved publication and update date: 2026-09-16.\n- Excluded from homepage, blog/category grids, featured modules, related modules, search UI, RSS, and Google News sitemap.\n- Included in the standard sitemap with self-canonical, hreflang, Article schema, and Open Graph metadata.\n- Deployment status: not deployed by this repository task.\n\n## Validation\n\n${errors.length === 0 ? "PASS — no validation errors." : `FAIL — ${errors.length} error(s).`}\n\n## Complete URL and title inventory\n\n| Locale | Title | Intended production URL |\n|---|---|---|\n${rows.map((row) => `| ${row.locale.toUpperCase()} | ${row.title.replace(/\|/g, "\\|")} | [${row.url}](${row.url}) |`).join("\n")}\n`;
await writeFile(path.join(outputRoot, "REPORT.md"), reportMarkdown);

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${rows.length} reference pages, ${groups.size} translation groups, discovery exclusions and SEO output verified.`,
);
