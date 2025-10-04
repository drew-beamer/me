import { z } from "astro:content";

export const ProjectMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  priority: z.number().default(0),
});
