import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageWidth: z.number().optional(),
    heroImageHeight: z.number().optional(),
  }),
});

export const collections = { blog };

