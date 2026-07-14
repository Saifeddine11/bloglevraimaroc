import type { CollectionEntry } from 'astro:content';
import { defaultLocale, locales, type Locale } from './config';
import { absoluteUrl, articlePath, withXDefault } from './routes';

export type ArticleEntry = CollectionEntry<'articles'>;

export function articleLocale(article: ArticleEntry): Locale {
  return article.data.locale ?? defaultLocale;
}

export function articleSlug(article: ArticleEntry): string {
  return article.data.slug ?? article.id.split('/').pop() ?? article.id;
}

export function articleTranslationKey(article: ArticleEntry): string {
  return article.data.translationKey ?? article.id.split('/').pop() ?? article.id;
}

export function articleHref(article: ArticleEntry): string {
  return articlePath(articleLocale(article), articleSlug(article));
}

export function filterArticlesByLocale(articles: ArticleEntry[], locale: Locale): ArticleEntry[] {
  return articles.filter((article) => articleLocale(article) === locale);
}

export function sortArticlesByDate(articles: ArticleEntry[]): ArticleEntry[] {
  return [...articles].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function articleAlternates(article: ArticleEntry, allArticles: ArticleEntry[]): Record<Locale | 'x-default', string> {
  const key = articleTranslationKey(article);
  const matches = allArticles.filter((candidate) => articleTranslationKey(candidate) === key);
  const byLocale = Object.fromEntries(matches.map((candidate) => [articleLocale(candidate), candidate])) as Partial<
    Record<Locale, ArticleEntry>
  >;
  const current = byLocale[articleLocale(article)] ?? article;
  const alternates = Object.fromEntries(
    locales.map((locale) => {
      const localized = byLocale[locale] ?? current;
      return [locale, absoluteUrl(articleHref(localized))];
    })
  ) as Record<Locale, string>;

  return withXDefault(alternates);
}

export const articleTranslations = {
  dahir: {
    fr: 'dahir-maroc-immobilier-acheteur',
    en: 'dahir-morocco-real-estate-buyer',
    es: 'dahir-marruecos-comprador-inmobiliario',
    nl: 'dahir-marokko-vastgoedkoper',
  },
  erreurs: {
    fr: 'erreurs-acheter-marrakech',
    en: 'mistakes-buying-property-marrakech',
    es: 'errores-comprar-inmueble-marrakech',
    nl: 'fouten-vastgoed-kopen-marrakech',
  },
} as const;
