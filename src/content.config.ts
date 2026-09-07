import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    urlSlug: z.string().optional(),
    locale: z.enum(["fr", "en", "es", "nl"]).optional().default("fr"),
    translationKey: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string(),
    category: z.enum([
      "immobilier",
      "tourisme",
      "investissement",
      "quartiers",
      "guides",
      "analyses",
    ]),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number(),
    excerpt: z.string(),
    heroImage: z.string(),
    imageAlt: z.string(),
    articleType: z
      .enum(["Article", "NewsArticle", "BlogPosting"])
      .optional()
      .default("BlogPosting"),
    heroCaption: z.string().optional(),
    heroCredit: z.string().optional(),
    heroSource: z.string().url().optional(),
    heroLicense: z.string().url().optional(),
    heroWidth: z.number().int().positive().optional(),
    heroHeight: z.number().int().positive().optional(),
    forecastValidUntil: z.coerce.date().optional(),
    events: z
      .array(
        z.object({
          name: z.string(),
          startDate: z.string(),
          endDate: z.string().optional(),
          location: z.string(),
          city: z.string(),
          street: z.string().optional(),
          url: z.string().url(),
        }),
      )
      .optional()
      .default([]),
    featured: z.boolean().optional().default(false),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      )
      .optional()
      .default([]),
    disclaimer: z.boolean().optional().default(false),
  }),
});

export const collections = { articles };
