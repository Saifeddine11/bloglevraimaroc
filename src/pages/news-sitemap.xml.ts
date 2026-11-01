import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "@/data/site";
import {
  articleHref,
  articleLocale,
  sortArticlesByDate,
} from "@/i18n/articles";

const TWO_DAYS_MS = 48 * 60 * 60 * 1000;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function publicationDate(date: Date): string {
  return date.toISOString();
}

export async function GET(_context: APIContext) {
  const now = Date.now();
  const articles = sortArticlesByDate(await getCollection("articles")).filter(
    (article) => {
      const age = now - article.data.date.valueOf();
      return (
        article.data.articleType === "NewsArticle" &&
        age >= 0 &&
        age <= TWO_DAYS_MS
      );
    },
  );

  const urls = articles
    .slice(0, 1000)
    .map((article) => {
      const locale = articleLocale(article);
      const loc = `${SITE.url.replace(/\/$/, "")}${articleHref(article)}`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(SITE.name)}</news:name>
        <news:language>${locale}</news:language>
      </news:publication>
      <news:publication_date>${publicationDate(article.data.date)}</news:publication_date>
      <news:title>${escapeXml(article.data.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
