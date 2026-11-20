import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const houses = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/houses" }),
  schema: z.object({
    number: z.number().int(),
    rent: z.number(),
    energy: z.number(),
  }),
});

export const collections = { houses };
