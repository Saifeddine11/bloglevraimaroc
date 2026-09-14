import fs from "node:fs";
import { spawnSync } from "node:child_process";
const manifests = [
  "docs/editorial-2026-09-05/articles.json",
  "docs/editorial-2026-09-14/articles.json",
]
  .filter((file) => fs.existsSync(file))
  .flatMap((file) => JSON.parse(fs.readFileSync(file, "utf8")));
const files = [
  "package.json",
  "src/content.config.ts",
  "src/layouts/BaseLayout.astro",
  "src/layouts/ArticleLayout.astro",
  "scripts/validate-editorial.mjs",
  "scripts/validate-editorial-2026-09-14.mjs",
  "scripts/format-editorial.mjs",
  ...manifests.map((article) => article.file),
];
const result = spawnSync(
  process.execPath,
  [
    "node_modules/prettier/bin/prettier.cjs",
    "--plugin=prettier-plugin-astro",
    process.argv.includes("--write") ? "--write" : "--check",
    ...files,
  ],
  { stdio: "inherit" },
);
process.exit(result.status ?? 1);
