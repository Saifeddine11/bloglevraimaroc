import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { locales, type Locale } from '@/i18n/config';
import { absoluteUrl, localizedPath, staticAlternates, withXDefault, type RouteKey } from '@/i18n/routes';
import { articleAlternates, articleHref } from '@/i18n/articles';

const STATIC_ROUTE_META: Partial<Record<RouteKey, { changefreq: string; priority: string }>> = {
  home: { changefreq: 'weekly', priority: '1.0' },
  blog: { changefreq: 'weekly', priority: '0.9' },
  immobilier: { changefreq: 'weekly', priority: '0.8' },
  tourisme: { changefreq: 'weekly', priority: '0.8' },
  investissement: { changefreq: 'weekly', priority: '0.8' },
  quartiers: { changefreq: 'weekly', priority: '0.8' },
  guides: { changefreq: 'weekly', priority: '0.8' },
  analyses: { changefreq: 'weekly', priority: '0.8' },
  safe: { changefreq: 'monthly', priority: '0.8' },
  acheterSurPlanMaroc: { changefreq: 'monthly', priority: '0.75' },
  acheterSurPlanMarrakech: { changefreq: 'monthly', priority: '0.75' },
  risquesAchatMaroc: { changefreq: 'monthly', priority: '0.75' },
  verifierPromoteur: { changefreq: 'monthly', priority: '0.75' },
  vefaMaroc: { changefreq: 'monthly', priority: '0.75' },
  documentsAchat: { changefreq: 'monthly', priority: '0.75' },
  livraisonAppartement: { changefreq: 'monthly', priority: '0.75' },
  prixMarrakech: { changefreq: 'monthly', priority: '0.75' },
  about: { changefreq: 'monthly', priority: '0.5' },
  contact: { changefreq: 'monthly', priority: '0.5' },
  legal: { changefreq: 'yearly', priority: '0.3' },
  privacy: { changefreq: 'yearly', priority: '0.3' },
};

function toISODate(d: Date): string {
  return d.toISOString().split('T')[0];
}

function urlEntry(
  loc: string,
  lastmod: string,
  changefreq: string,
  priority: string,
  alternates?: Record<Locale | 'x-default', string>
): string {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    ...(alternates
      ? Object.entries(alternates).map(
          ([hreflang, href]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`
        )
      : []),
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export const GET: APIRoute = async () => {
  const today = toISODate(new Date());
  const articles = await getCollection('articles');

  const staticEntries = Object.entries(STATIC_ROUTE_META).flatMap(([routeKey, meta]) => {
    const key = routeKey as RouteKey;
    const alternates = withXDefault(staticAlternates(key));
    return locales.map((locale) =>
      urlEntry(absoluteUrl(localizedPath(locale, key)), today, meta.changefreq, meta.priority, alternates)
    );
  });

  const articleEntries = articles
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((article) =>
      urlEntry(
        absoluteUrl(articleHref(article)),
        toISODate(article.data.date),
        'monthly',
        '0.7',
        articleAlternates(article, articles)
      )
    );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...staticEntries,
    ...articleEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
