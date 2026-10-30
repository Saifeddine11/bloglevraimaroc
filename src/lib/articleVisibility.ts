import type { CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"articles">;

export const isPublished = (article: ArticleEntry): boolean =>
  article.data.published;

export const isIndexable = (article: ArticleEntry): boolean =>
  isPublished(article) && article.data.indexable;

export const isVisibleOnHomepage = (article: ArticleEntry): boolean =>
  isPublished(article) && article.data.showOnHomepage;

export const isVisibleInBlogGrid = (article: ArticleEntry): boolean =>
  isPublished(article) && article.data.showInBlogGrid;

export const isVisibleInRelatedArticles = (article: ArticleEntry): boolean =>
  isPublished(article) && article.data.showInRelatedArticles;

export const isVisibleInFeatured = (article: ArticleEntry): boolean =>
  isPublished(article) && article.data.showInFeatured;

export const isVisibleInSearchUI = (article: ArticleEntry): boolean =>
  isPublished(article) && article.data.showInSearchUI;

export const isIncludedInSitemap = (article: ArticleEntry): boolean =>
  isPublished(article) && article.data.includeInSitemap;
