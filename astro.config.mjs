import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";
import fs from "node:fs";
import { parse as parseYaml } from "yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articleRootByLocale = {
  fr: "articles",
  en: "articles",
  es: "articulos",
  nl: "artikelen",
};
const articleContentDirectory = path.resolve(
  __dirname,
  "./src/content/articles",
);
const sitemapExcludedArticlePathnames = new Set(
  fs
    .readdirSync(articleContentDirectory, { recursive: true, encoding: "utf8" })
    .filter((relativePath) => /\.(md|mdx)$/.test(relativePath))
    .flatMap((relativePath) => {
      const source = fs.readFileSync(
        path.join(articleContentDirectory, relativePath),
        "utf8",
      );
      const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!frontmatter) return [];
      const data = parseYaml(frontmatter[1]);
      if (data.includeInSitemap !== false) return [];
      const locale = data.locale ?? "fr";
      const articleRoot = articleRootByLocale[locale];
      const filenameSlug = path.basename(relativePath, path.extname(relativePath));
      const slug = data.urlSlug ?? data.slug ?? filenameSlug;
      return [
        locale === "fr"
          ? `/articles/${slug}/`
          : `/${locale}/${articleRoot}/${slug}/`,
      ];
    }),
);
const sitemapExcludedPathnames = new Set([
  "/404/",
  "/en/404/",
  "/es/404/",
  "/nl/404/",
  "/mentions-legales/",
  "/confidentialite/",
  "/en/legal-notice/",
  "/en/privacy-policy/",
  "/es/aviso-legal/",
  "/es/politica-privacidad/",
  "/nl/juridische-vermelding/",
  "/nl/privacybeleid/",
]);
const shouldIncludeInSitemap = (page) => {
  const { pathname } = new URL(page);
  if (sitemapExcludedPathnames.has(pathname)) return false;
  if (sitemapExcludedArticlePathnames.has(pathname)) return false;
  return !/(^|\/)(404|500|error|not-found)(\/)?$/i.test(pathname);
};

export default defineConfig({
  site: "https://levraimaroc.com",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      filter: shouldIncludeInSitemap,
    }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
