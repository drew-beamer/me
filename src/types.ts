import type { z } from "astro:content";
import type { ProjectMetadataSchema } from "./schemas";

export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;
