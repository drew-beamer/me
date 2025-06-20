import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { ProjectMetadataSchema } from "./schemas";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ProjectMetadataSchema,
});

export const collections = { projects };
