import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sitemapExcludedPathnames = new Set([
  '/404/',
  '/en/404/',
  '/es/404/',
  '/nl/404/',
  '/mentions-legales/',
  '/confidentialite/',
  '/en/legal-notice/',
  '/en/privacy-policy/',
  '/es/aviso-legal/',
  '/es/politica-privacidad/',
  '/nl/juridische-vermelding/',
  '/nl/privacybeleid/',
]);
const shouldIncludeInSitemap = (page) => {
  const { pathname } = new URL(page);
  if (sitemapExcludedPathnames.has(pathname)) return false;
  return !/(^|\/)(404|500|error|not-found)(\/)?$/i.test(pathname);
};

export default defineConfig({
  site: 'https://levraimaroc.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: shouldIncludeInSitemap,
    }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
