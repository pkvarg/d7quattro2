import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

const houses = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/houses" }),
  schema: z.object({
    number: z.number().int(),
    rent: z.number(),
    energy: z.number(),
  }),
});

export const collections = { posts, houses };
