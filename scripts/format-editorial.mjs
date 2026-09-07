import fs from "node:fs";
import { spawnSync } from "node:child_process";
const manifest = JSON.parse(
  fs.readFileSync("docs/editorial-2026-09-05/articles.json", "utf8"),
);
const files = [
  "package.json",
  "src/content.config.ts",
  "src/layouts/BaseLayout.astro",
  "src/layouts/ArticleLayout.astro",
  "scripts/validate-editorial.mjs",
  "scripts/format-editorial.mjs",
  ...manifest.map((article) => article.file),
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
