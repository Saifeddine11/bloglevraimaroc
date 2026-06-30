import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/data/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');
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
      link: `/articles/${article.id}/`,
      categories: [article.data.category],
    })),
    customData: `<language>fr</language>`,
    stylesheet: false,
  });
}
