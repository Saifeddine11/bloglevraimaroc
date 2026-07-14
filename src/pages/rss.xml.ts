import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/data/site';
import type { APIContext } from 'astro';
import { articleHref, articleLocale } from '@/i18n/articles';

export async function GET(context: APIContext) {
  const articles = (await getCollection('articles')).filter((article) => articleLocale(article) === 'fr');
  const sorted = articles.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site?.toString() ?? SITE.url,
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.excerpt,
      link: articleHref(article),
      categories: [article.data.category],
    })),
    customData: `<language>fr</language>`,
    stylesheet: false,
  });
}
