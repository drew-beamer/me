# Content Management API Guide

A comprehensive guide to working with content collections, schemas, and data management in the Drew Beamer portfolio project.

## Table of Contents

1. [Content Collection System](#content-collection-system)
2. [Data Schemas](#data-schemas)
3. [Content API Methods](#content-api-methods)
4. [Project Management](#project-management)
5. [Data Validation](#data-validation)
6. [Advanced Usage Patterns](#advanced-usage-patterns)

## Content Collection System

### Overview

The project uses Astro's content collections system to manage project data with type safety and validation. All content is stored in markdown files with frontmatter metadata.

### Collection Configuration

**File**: `src/content.config.ts`

```typescript
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { ProjectMetadataSchema } from "./schemas";

const projects = defineCollection({
  loader: glob({ 
    pattern: "**/*.{md,mdx}", 
    base: "./src/content/projects" 
  }),
  schema: ProjectMetadataSchema,
});

export const collections = { projects };
```

### Directory Structure

```
src/content/
├── config.ts                    # Alternative config (legacy)
└── projects/                    # Project content directory
    ├── scrubjay.md              # Individual project file
    ├── hamiltonian-gift-exchange.md
    └── [other-projects].md
```

## Data Schemas

### ProjectMetadataSchema

**File**: `src/schemas.ts`

```typescript
import { z } from "astro:content";

export const ProjectMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  priority: z.number().default(0),
});
```

#### Field Specifications

| Field | Type | Validation Rules | Description |
|-------|------|------------------|-------------|
| `title` | `string` | Required, non-empty | Project display name |
| `description` | `string` | Required, non-empty | Brief project description |
| `image` | `string?` | Optional, URL format recommended | Project thumbnail image |
| `priority` | `number` | Optional, defaults to 0 | Sort order (higher = first) |

#### Type Inference

**File**: `src/types.ts`

```typescript
import type { z } from "astro:content";
import type { ProjectMetadataSchema } from "./schemas";

export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;
```

## Content API Methods

### Core Collection Methods

#### getCollection()

Retrieves all items from a specific collection.

```typescript
import { getCollection } from "astro:content";

// Get all projects
const projects = await getCollection("projects");

// Type: CollectionEntry<"projects">[]
// Each entry contains: { id, data, body, collection }
```

#### getEntry()

Retrieves a single entry by ID.

```typescript
import { getEntry } from "astro:content";

// Get specific project
const project = await getEntry("projects", "scrubjay");

// Type: CollectionEntry<"projects"> | undefined
```

#### render()

Renders the markdown content of an entry.

```typescript
import { render } from "astro:content";

const project = await getEntry("projects", "scrubjay");
const { Content, headings } = await render(project);

// Content: Astro component
// headings: Array of heading objects
```

### Collection Entry Structure

```typescript
interface CollectionEntry<T> {
  id: string;                    // File name without extension
  collection: string;            // Collection name ("projects")
  data: ProjectMetadata;         // Validated frontmatter data
  body: string;                  // Raw markdown content
}
```

#### Example Entry

```typescript
{
  id: "scrubjay",
  collection: "projects",
  data: {
    title: "ScrubJay",
    description: "The rare bird alert for Discord",
    image: "https://storage.googleapis.com/storage.drewtils.xyz/scrubjay.webp",
    priority: 2
  },
  body: "ScrubJay is a Discord bot that helps birders..."
}
```

## Project Management

### Creating New Projects

#### 1. Create Content File

Create a new file in `src/content/projects/`:

```markdown
---
title: "My New Project"
description: "A description of what this project does"
image: "https://example.com/project-image.jpg"
priority: 1
---

# My New Project

This is the main content of your project written in markdown.

## Features

- Feature 1
- Feature 2

## Technology Stack

- Technology 1
- Technology 2
```

#### 2. File Naming

- Use kebab-case for file names: `my-new-project.md`
- File name becomes the project ID for routing
- URL will be: `/projects/my-new-project`

### Updating Project Data

#### Frontmatter Updates

```markdown
---
title: "Updated Project Name"
description: "Updated description"
image: "https://example.com/new-image.jpg"
priority: 3  # Higher priority moves it up in lists
---
```

#### Content Updates

Simply edit the markdown content below the frontmatter section.

### Data Validation

Schema validation occurs automatically:

```typescript
// ✅ Valid project data
const validProject = {
  title: "Valid Project",
  description: "This project is valid",
  image: "https://example.com/image.jpg",
  priority: 1
};

// ❌ Invalid project data (missing required fields)
const invalidProject = {
  title: "Invalid Project"
  // Missing description - will fail validation
};
```

## Advanced Usage Patterns

### Filtering and Sorting

#### Priority-Based Sorting

```typescript
const projects = await getCollection("projects");

const sortedProjects = projects.sort((a, b) => {
  // Primary sort: priority (descending)
  if (a.data.priority !== b.data.priority) {
    return b.data.priority - a.data.priority;
  }
  // Secondary sort: title (ascending)
  return a.data.title.localeCompare(b.data.title);
});
```

#### Filtering by Criteria

```typescript
const projects = await getCollection("projects");

// Featured projects (high priority)
const featuredProjects = projects.filter(
  project => project.data.priority >= 2
);

// Projects with images
const projectsWithImages = projects.filter(
  project => project.data.image
);

// Search by title or description
const searchResults = projects.filter(project => {
  const searchTerm = "discord";
  return project.data.title.toLowerCase().includes(searchTerm) ||
         project.data.description.toLowerCase().includes(searchTerm);
});
```

### Dynamic Route Generation

**File**: `src/pages/projects/[project].astro`

```typescript
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const projects = await getCollection("projects");
  
  return projects.map((project) => ({
    params: { project: project.id },
    props: { project },
  }));
}

const { project } = Astro.props;
```

### Content Rendering

```typescript
import { render } from "astro:content";

// Render specific project
const project = await getEntry("projects", "scrubjay");
const { Content, headings } = await render(project);

// Extract table of contents from headings
const tableOfContents = headings.filter(h => h.depth <= 3);
```

### Error Handling

```typescript
import { getEntry } from "astro:content";

try {
  const project = await getEntry("projects", projectId);
  
  if (!project) {
    throw new Error(`Project ${projectId} not found`);
  }
  
  // Process project...
} catch (error) {
  console.error("Error loading project:", error);
  // Handle error appropriately
}
```

### Bulk Operations

#### Get All Project Metadata

```typescript
const projects = await getCollection("projects");
const projectMetadata = projects.map(project => ({
  id: project.id,
  title: project.data.title,
  description: project.data.description,
  priority: project.data.priority,
  hasImage: !!project.data.image
}));
```

#### Count and Statistics

```typescript
const projects = await getCollection("projects");

const stats = {
  total: projects.length,
  withImages: projects.filter(p => p.data.image).length,
  highPriority: projects.filter(p => p.data.priority >= 2).length,
  averagePriority: projects.reduce((sum, p) => sum + p.data.priority, 0) / projects.length
};
```

### Custom Collection Queries

#### Get Recent Projects

```typescript
const projects = await getCollection("projects");

// Assuming projects have a date in content or filename
const recentProjects = projects
  .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  .slice(0, 5);
```

#### Paginated Results

```typescript
const projects = await getCollection("projects");
const pageSize = 6;
const currentPage = 1;

const paginatedProjects = projects
  .sort((a, b) => b.data.priority - a.data.priority)
  .slice((currentPage - 1) * pageSize, currentPage * pageSize);

const totalPages = Math.ceil(projects.length / pageSize);
```

## Data Migration Patterns

### Schema Evolution

When updating the schema, follow these patterns:

#### Adding Optional Fields

```typescript
// Old schema
const OldProjectMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
});

// New schema with backward compatibility
const ProjectMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),     // New optional field
  priority: z.number().default(0),  // New field with default
});
```

#### Data Transformation

```typescript
const projects = await getCollection("projects");

const transformedProjects = projects.map(project => ({
  ...project,
  data: {
    ...project.data,
    // Add computed fields
    slug: project.id,
    excerpt: project.data.description.substring(0, 100) + "...",
    // Transform existing fields
    tags: project.data.description.toLowerCase().split(" ")
  }
}));
```

## Performance Optimization

### Caching Strategies

```typescript
// Cache collection data for multiple uses
let cachedProjects: CollectionEntry<"projects">[] | null = null;

async function getProjectsWithCache() {
  if (!cachedProjects) {
    cachedProjects = await getCollection("projects");
  }
  return cachedProjects;
}
```

### Selective Loading

```typescript
// Only load metadata, skip content rendering
const projectsMetadata = await getCollection("projects");

// Only render content when needed
const projectWithContent = await render(
  projectsMetadata.find(p => p.id === "scrubjay")
);
```

## Best Practices

1. **Consistent Naming**: Use kebab-case for file names
2. **Image Optimization**: Use web-optimized formats (WebP, AVIF)
3. **Priority System**: Use meaningful priority values (0-5 range recommended)
4. **Description Length**: Keep descriptions concise (under 150 characters)
5. **Content Structure**: Use consistent markdown heading hierarchy
6. **Validation**: Always validate data with the schema before processing
7. **Error Handling**: Implement proper error handling for missing content
8. **Performance**: Cache collection data when possible

This guide provides the foundation for working with the content management system effectively while maintaining type safety and data integrity.