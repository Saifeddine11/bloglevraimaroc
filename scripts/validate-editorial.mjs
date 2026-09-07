import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import YAML from "yaml";
import { parseHTML } from "linkedom";

const reportRoot = "docs/editorial-2026-09-05";
const manifest = JSON.parse(
  fs.readFileSync(`${reportRoot}/articles.json`, "utf8"),
);
const pictures = JSON.parse(
  fs.readFileSync(`${reportRoot}/images.json`, "utf8"),
);
const baselineRoutes = JSON.parse(
  fs.readFileSync(`${reportRoot}/baseline-routes.json`, "utf8"),
);
const baselineImages = JSON.parse(
  fs.readFileSync(`${reportRoot}/baseline-images.json`, "utf8"),
);
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const site = "https://levraimaroc.com";
const diskFile = (pathname) => {
  const relative = decodeURIComponent(pathname).replace(/^\//, "");
  if (relative === "404") return "dist/404.html";
  const direct = path.join("dist", relative);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  return path.join(direct, "index.html");
};
assert(manifest.length === 80, "Expected 80 localized articles");
assert(
  new Set(manifest.map((a) => a.route)).size === 80,
  "Duplicate article route",
);
assert(pictures.length === 80, "Expected 80 integrated local images");
const heroes = pictures.filter((p) => p.position === 0);
assert(
  new Set(heroes.map((p) => p.page)).size === 20,
  "Duplicate cover source",
);
const metaTitles = new Set();
const descriptions = new Set();
const pages = [];
for (const a of manifest) {
  const text = fs.readFileSync(a.file, "utf8");
  const front = YAML.parse(text.split(/^---\s*$/m)[1]);
  assert(front.locale === a.locale, `${a.route}: wrong locale`);
  assert(
    !/\{\{(?:image|table|link):|@@(?:fr|en|es|nl)|TODO|PLACEHOLDER|example\.com/.test(
      text,
    ),
    `${a.route}: unfinished content`,
  );
  assert(!metaTitles.has(front.metaTitle), `${a.route}: duplicate SEO title`);
  assert(
    !descriptions.has(front.metaDescription),
    `${a.route}: duplicate description`,
  );
  metaTitles.add(front.metaTitle);
  descriptions.add(front.metaDescription);
  assert(
    front.metaDescription.length >= 100 && front.metaDescription.length <= 170,
    `${a.route}: description length`,
  );
  assert(
    front.heroImage.includes("/editorial-2026-09-05/"),
    `${a.route}: old cover`,
  );
  assert(front.heroWidth >= 1200, `${a.route}: cover below 1200 px`);
  const htmlFile = diskFile(a.route);
  assert(fs.existsSync(htmlFile), `${a.route}: missing route`);
  if (!fs.existsSync(htmlFile)) continue;
  const html = fs.readFileSync(htmlFile, "utf8");
  const { document } = parseHTML(html);
  const meta = (name) =>
    document
      .querySelector(`meta[property="${name}"],meta[name="${name}"]`)
      ?.getAttribute("content");
  assert(
    document.querySelector("html")?.lang === a.locale,
    `${a.route}: html language`,
  );
  assert(document.querySelectorAll("h1").length === 1, `${a.route}: H1 count`);
  assert(
    document.querySelector("h1")?.textContent === front.title,
    `${a.route}: H1 mismatch`,
  );
  assert(
    document
      .querySelector('link[rel="canonical"]')
      ?.getAttribute("href")
      ?.replace(/\/$/, "") ===
      site + a.route,
    `${a.route}: canonical`,
  );
  assert(meta("og:image") === site + front.heroImage, `${a.route}: OG cover`);
  assert(
    meta("twitter:image") === site + front.heroImage,
    `${a.route}: Twitter cover`,
  );
  assert(meta("og:image:alt") === front.imageAlt, `${a.route}: OG alt`);
  assert(
    meta("robots")?.includes("max-image-preview:large"),
    `${a.route}: image preview`,
  );
  for (const locale of ["fr", "en", "es", "nl", "x-default"]) {
    const alternate = document.querySelector(
      `link[rel="alternate"][hreflang="${locale}"]`,
    );
    const expected = manifest.find(
      (b) =>
        b.topic === a.topic &&
        b.locale === (locale === "x-default" ? "fr" : locale),
    );
    assert(
      alternate?.getAttribute("href")?.replace(/\/$/, "") ===
        site + expected?.route,
      `${a.route}: ${locale} alternate`,
    );
  }
  for (const img of document.querySelectorAll(".prose-rdm img")) {
    const src = img.getAttribute("src");
    assert(
      src?.startsWith("/images/articles/editorial-2026-09-05/"),
      `${a.route}: old or remote article image ${src}`,
    );
    assert(!!img.getAttribute("alt"), `${a.route}: empty image alt`);
    assert(
      fs.existsSync(diskFile(src ?? "")),
      `${a.route}: missing image ${src}`,
    );
    const picture = pictures.find((p) => p.path === src);
    assert(
      Number(img.getAttribute("width")) === picture?.width &&
        Number(img.getAttribute("height")) === picture?.height,
      `${a.route}: image dimensions ${src}`,
    );
  }
  const schemas = [];
  for (const script of document.querySelectorAll(
    'script[type="application/ld+json"]',
  )) {
    try {
      schemas.push(JSON.parse(script.textContent));
    } catch {
      failures.push(`${a.route}: invalid JSON-LD`);
    }
  }
  const article = schemas.find((s) => s["@type"] === front.articleType);
  assert(
    article?.headline === front.title &&
      article?.image?.url === site + front.heroImage,
    `${a.route}: Article schema`,
  );
  assert(
    article?.dateModified === new Date(front.updatedDate).toISOString(),
    `${a.route}: modified date`,
  );
  assert(
    schemas.some((s) => s["@type"] === "BreadcrumbList"),
    `${a.route}: breadcrumb schema`,
  );
  const faq = schemas.find((s) => s["@type"] === "FAQPage");
  const visibleFaqs = [...document.querySelectorAll("article details")];
  assert(
    faq?.mainEntity?.length === visibleFaqs.length && visibleFaqs.length >= 2,
    `${a.route}: FAQ schema mismatch`,
  );
  for (const [i, item] of visibleFaqs.entries()) {
    assert(
      faq?.mainEntity[i]?.name === item.querySelector("summary")?.textContent,
      `${a.route}: FAQ question mismatch`,
    );
    assert(
      faq?.mainEntity[i]?.acceptedAnswer?.text ===
        item.querySelector("p")?.textContent,
      `${a.route}: FAQ answer mismatch`,
    );
  }
  if ([18, 19].includes(a.topic))
    assert(
      schemas.filter((s) => s["@type"] === "MusicEvent").length ===
        (a.topic === 18 ? 2 : 1),
      `${a.route}: Event schema`,
    );
  if ([7, 16].includes(a.topic))
    assert(
      document.querySelector("[data-forecast-expiry]"),
      `${a.route}: forecast validity notice`,
    );
  const links = [...document.querySelectorAll('article a[href^="/"]')].map(
    (link) => link.getAttribute("href"),
  );
  pages.push({
    route: a.route,
    locale: a.locale,
    canonical: true,
    hreflang: true,
    structuredData: true,
    internalLinks: [...new Set(links)],
  });
}
for (const topic of new Set(manifest.map((a) => a.topic)))
  assert(
    manifest
      .filter((a) => a.topic === topic)
      .map((a) => a.locale)
      .sort()
      .join(",") === "en,es,fr,nl",
    `Topic ${topic}: incomplete translations`,
  );
for (const relative of baselineRoutes)
  assert(
    fs.existsSync(path.join("dist", relative)),
    `Existing route removed: ${relative}`,
  );
for (const [file, hash] of Object.entries(baselineImages))
  assert(
    fs.existsSync(file) &&
      crypto
        .createHash("sha256")
        .update(fs.readFileSync(file))
        .digest("hex") === hash,
    `Existing image changed: ${file}`,
  );
for (const picture of pictures) {
  assert(!picture.previouslyUsed, `Reused old photograph: ${picture.path}`);
  assert(
    picture.license &&
      picture.licenseUrl &&
      picture.artist &&
      picture.page &&
      picture.date &&
      picture.location,
    `Incomplete image attribution: ${picture.path}`,
  );
  const bytes = fs.readFileSync("public" + picture.path);
  assert(
    bytes.toString("ascii", 0, 4) === "RIFF" &&
      bytes.toString("ascii", 8, 12) === "WEBP",
    `Invalid WebP: ${picture.path}`,
  );
}
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(dir, entry.name))
        : [path.join(dir, entry.name)],
    );
const htmlFiles = walk("dist").filter((file) => file.endsWith(".html"));
const brokenLinks = new Map();
for (const file of htmlFiles) {
  const { document } = parseHTML(fs.readFileSync(file, "utf8"));
  const pageURL =
    site + "/" + file.replace(/^dist\//, "").replace(/index\.html$/, "");
  for (const element of document.querySelectorAll(
    'a[href],link[rel="alternate"]',
  )) {
    const href = element.getAttribute("href");
    if (!href || /^(mailto:|tel:|javascript:|#)/.test(href)) continue;
    let url;
    try {
      url = new URL(href, pageURL);
    } catch {
      failures.push(`${file}: malformed URL ${href}`);
      continue;
    }
    if (url.origin === site && !fs.existsSync(diskFile(url.pathname)))
      brokenLinks.set(url.pathname, file);
  }
}
for (const [target, from] of brokenLinks)
  failures.push(`Broken internal link ${target} from ${from}`);
const sitemap = walk("dist")
  .filter((f) => /sitemap.*\.xml$/.test(f))
  .map((f) => fs.readFileSync(f, "utf8"))
  .join("\n");
const rss = fs.readFileSync("dist/rss.xml", "utf8");
for (const a of manifest) {
  assert(sitemap.includes(site + a.route), `${a.route}: missing from sitemap`);
  if (a.locale === "fr")
    assert(rss.includes(site + a.route), `${a.route}: missing from RSS`);
}
const result = {
  checkedAt: new Date().toISOString(),
  articles: manifest.length,
  topics: 20,
  locales: ["fr", "en", "es", "nl"],
  images: pictures.length,
  htmlPages: htmlFiles.length,
  preservedRoutes: baselineRoutes.length,
  preservedImages: Object.keys(baselineImages).length,
  failures,
  pages,
};
fs.writeFileSync(
  `${reportRoot}/validation.json`,
  JSON.stringify(result, null, 2) + "\n",
);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `PASS: ${manifest.length} articles, ${pictures.length} images, ${htmlFiles.length} HTML pages; existing routes and image hashes preserved.`,
  );
