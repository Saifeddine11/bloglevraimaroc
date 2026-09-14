import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { parseHTML } from "linkedom";

const reportRoot = "docs/editorial-2026-09-14";
const manifest = JSON.parse(
  fs.readFileSync(`${reportRoot}/articles.json`, "utf8"),
);
const pictures = JSON.parse(
  fs.readFileSync(`${reportRoot}/images.json`, "utf8"),
);
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const site = "https://levraimaroc.com";
const diskFile = (pathname) => {
  const relative = decodeURIComponent(pathname).replace(/^\//, "");
  const direct = path.join("dist", relative);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  return path.join(direct, "index.html");
};
const frontmatter = (file) =>
  YAML.parse(fs.readFileSync(file, "utf8").split(/^---\s*$/m)[1]);

assert(
  manifest.length === 48,
  "Expected 48 localized records in 2026-09-14 manifest",
);
assert(
  new Set(manifest.map((a) => a.route)).size === manifest.length,
  "Duplicate article route in 2026-09-14 manifest",
);
assert(
  pictures.length === 28,
  "Expected 28 integrated local images for 2026-09-14",
);
for (const p of pictures) {
  assert(
    p.path.startsWith("/images/articles/editorial-2026-09-14/"),
    `${p.path}: wrong image batch path`,
  );
  assert(
    fs.existsSync(path.join("public", p.path.replace(/^\//, ""))),
    `${p.path}: missing public file`,
  );
  assert(
    !!p.credit && !!p.source && !!p.licenseUrl,
    `${p.path}: incomplete credit metadata`,
  );
}

const byTopic = new Map();
for (const a of manifest) {
  const front = frontmatter(a.file);
  assert(front.locale === a.locale, `${a.route}: wrong locale`);
  assert(
    front.translationKey === a.topic,
    `${a.route}: translationKey mismatch`,
  );
  assert(
    front.metaDescription.length >= 100 && front.metaDescription.length <= 170,
    `${a.route}: description length ${front.metaDescription.length}`,
  );
  assert(
    !/TODO|PLACEHOLDER|example\.com|\{\{|@@/.test(
      fs.readFileSync(a.file, "utf8"),
    ),
    `${a.route}: unfinished placeholder`,
  );
  if (a.action === "created") {
    assert(
      front.heroImage.startsWith("/images/articles/editorial-2026-09-14/"),
      `${a.route}: new article uses old cover`,
    );
  }
  const htmlFile = diskFile(a.route);
  assert(fs.existsSync(htmlFile), `${a.route}: missing built route`);
  if (!fs.existsSync(htmlFile)) continue;
  const html = fs.readFileSync(htmlFile, "utf8");
  const { document } = parseHTML(html);
  assert(
    document.querySelector("html")?.lang === a.locale,
    `${a.route}: html lang`,
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
  assert(
    document
      .querySelector('meta[name="robots"]')
      ?.getAttribute("content")
      ?.includes("max-image-preview:large"),
    `${a.route}: robots image preview`,
  );
  if (a.action === "created") {
    for (const img of document.querySelectorAll(".prose-rdm img")) {
      const src = img.getAttribute("src");
      assert(
        src?.startsWith("/images/articles/editorial-2026-09-14/"),
        `${a.route}: non-batch inline image ${src}`,
      );
      assert(!!img.getAttribute("alt"), `${a.route}: missing image alt`);
    }
  }
  if (!byTopic.has(a.topic)) byTopic.set(a.topic, []);
  byTopic.get(a.topic).push(a);
}
for (const [topic, rows] of byTopic) {
  assert(
    new Set(rows.map((r) => r.locale)).size === 4,
    `${topic}: missing localized variants`,
  );
}
const validation = {
  generatedAt: new Date().toISOString(),
  failures,
  checkedArticles: manifest.length,
  checkedImages: pictures.length,
};
fs.writeFileSync(
  `${reportRoot}/validation.json`,
  JSON.stringify(validation, null, 2),
);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  `2026-09-14 editorial validation passed (${manifest.length} records, ${pictures.length} images).`,
);
