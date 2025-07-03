# API Documentation

This documentation covers all public APIs, components, layouts, schemas, and content collections in the Drew Beamer portfolio website built with Astro.

## Table of Contents

1. [Components](#components)
2. [Layouts](#layouts)
3. [Schemas & Types](#schemas--types)
4. [Content Collections](#content-collections)
5. [Pages](#pages)
6. [Configuration](#configuration)

## Components

### ProjectCard

A reusable component for displaying project information as a clickable card.

**File**: `src/components/ProjectCard.astro`

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `project` | `CollectionEntry<"projects">` | Yes | A project entry from the projects content collection |

#### Usage

```astro
---
import ProjectCard from "@/components/ProjectCard.astro";
import { getCollection } from "astro:content";

const projects = await getCollection("projects");
---

<div class="flex flex-col gap-y-4">
  {projects.map((project) => <ProjectCard project={project} />)}
</div>
```

#### Features

- **Adaptive Image Display**: Shows project image if available, otherwise displays the first letter of the project title
- **Hover Effects**: Interactive hover states with underline effect
- **Responsive Design**: Optimized for different screen sizes
- **Automatic Navigation**: Links to individual project pages (`/projects/${project.id}`)

#### Visual Elements

- 56x56px image or placeholder with first letter of title
- Project title in mono font
- Project description with text truncation
- Chevron right icon indicating navigation

## Layouts

### Layout

The main layout component that wraps all pages with HTML structure and metadata.

**File**: `src/layouts/Layout.astro`

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Page title for `<title>` tag |
| `description` | `string` | No | `"Drew Beamer's personal website"` | Meta description for SEO |

#### Usage

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout title="My Page" description="A description of my page">
  <h1>Page content goes here</h1>
</Layout>
```

#### Features

- **SEO Optimized**: Includes meta tags for description, viewport, and generator
- **Dark Theme**: Pre-configured with dark theme styling
- **Responsive Container**: Centers content with max width and responsive padding
- **Favicon Support**: Includes SVG favicon link
- **Global Styles**: Imports global CSS styles

### Prose

A layout wrapper that applies prose styling to content, particularly useful for markdown content.

**File**: `src/layouts/Prose.astro`

#### Props

None - this component only provides a styled wrapper.

#### Usage

```astro
---
import Prose from "@/layouts/Prose.astro";
---

<Prose>
  <h1>Styled Heading</h1>
  <p>This content will have prose styling applied.</p>
</Prose>
```

#### Features

- **Typography Styling**: Applies prose typography classes
- **Dark Theme**: Inverted prose colors for dark theme
- **Mono Font Headings**: Uses monospace font for headings
- **Full Width**: Removes max-width constraints for full content width

## Schemas & Types

### ProjectMetadataSchema

Zod schema for validating project frontmatter data.

**File**: `src/schemas.ts`

#### Schema Definition

```typescript
const ProjectMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  priority: z.number().default(0),
});
```

#### Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Project title |
| `description` | `string` | Yes | - | Project description |
| `image` | `string` | No | - | URL to project image |
| `priority` | `number` | No | `0` | Sort priority (higher = shown first) |

#### Usage

```typescript
import { ProjectMetadataSchema } from "@/schemas";

// Validate project data
const projectData = {
  title: "My Project",
  description: "A great project",
  image: "https://example.com/image.jpg",
  priority: 1
};

const validatedData = ProjectMetadataSchema.parse(projectData);
```

### ProjectMetadata Type

TypeScript type derived from the ProjectMetadataSchema.

**File**: `src/types.ts`

#### Type Definition

```typescript
export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;
```

#### Usage

```typescript
import type { ProjectMetadata } from "@/types";

const project: ProjectMetadata = {
  title: "Example Project",
  description: "An example project description",
  image: "https://example.com/image.jpg",
  priority: 2
};
```

## Content Collections

### Projects Collection

A content collection for managing project data and content.

**File**: `src/content.config.ts`

#### Configuration

```typescript
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ProjectMetadataSchema,
});

export const collections = { projects };
```

#### Usage

```astro
---
import { getCollection } from "astro:content";

// Get all projects
const projects = await getCollection("projects");

// Sort projects by priority and title
const sortedProjects = projects.sort(
  (a, b) => 
    b.data.priority - a.data.priority || 
    a.data.title.localeCompare(b.data.title)
);
---
```

#### Content File Structure

Create markdown files in `src/content/projects/` with frontmatter:

```markdown
---
title: Project Name
description: Brief project description
image: https://example.com/image.jpg
priority: 1
---

# Project Content

Your project content in markdown format goes here.

## Features

- Feature 1
- Feature 2

## Technology

Built with modern web technologies.
```

#### API Methods

| Method | Description | Example |
|--------|-------------|---------|
| `getCollection("projects")` | Get all projects | `const projects = await getCollection("projects")` |
| `render(project)` | Render project content | `const { Content } = await render(project)` |

## Pages

### Index Page

The main landing page displaying bio and project listings.

**File**: `src/pages/index.astro`

#### Features

- **Personal Bio**: Introduction and personal information
- **Project Showcase**: Displays all projects sorted by priority
- **Responsive Design**: Optimized for mobile and desktop
- **SEO Friendly**: Proper meta tags and semantic HTML

#### Data Fetching

```astro
---
const projects = await getCollection("projects");
const sortedProjects = projects.sort(
  (a, b) => 
    b.data.priority - a.data.priority || 
    a.data.title.localeCompare(b.data.title)
);
---
```

### Project Detail Page

Dynamic page for individual project details.

**File**: `src/pages/projects/[project].astro`

#### Static Path Generation

```typescript
export async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { project: project.id },
    props: { project },
  }));
}
```

#### Features

- **Dynamic Routing**: Generates pages for each project
- **Markdown Rendering**: Renders project content from markdown
- **Navigation**: Back button to return to main page
- **SEO**: Custom title and description per project

## Configuration

### Content Configuration

**File**: `src/content.config.ts`

Configures content collections and validation schemas.

### TypeScript Configuration

**File**: `tsconfig.json`

Astro TypeScript configuration with path aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Best Practices

### Adding New Projects

1. Create a new markdown file in `src/content/projects/`
2. Include required frontmatter fields:
   ```markdown
   ---
   title: "Project Name"
   description: "Project description"
   image: "https://example.com/image.jpg" # optional
   priority: 1 # optional, default is 0
   ---
   ```
3. Write project content in markdown below the frontmatter

### Component Development

1. Use TypeScript interfaces for props
2. Follow Astro's component structure with frontmatter
3. Apply consistent styling using Tailwind classes
4. Include proper accessibility attributes

### Content Management

1. Use the projects content collection for all project data
2. Follow the ProjectMetadataSchema for consistent data structure
3. Use priority field to control project ordering
4. Optimize images for web performance

## Styling Guidelines

The project uses Tailwind CSS with a dark theme. Key styling patterns:

- **Colors**: Use `text-muted-foreground` for secondary text
- **Spacing**: Consistent gap spacing with `gap-y-4`, `gap-x-4`
- **Typography**: Mono font for headings and project titles
- **Layouts**: Flexbox with responsive design patterns

## Development Workflow

1. **Local Development**: `npm run dev` or `pnpm dev`
2. **Building**: `npm run build` or `pnpm build`
3. **Linting**: `npm run lint` or `pnpm lint`
4. **Formatting**: `npm run format` or `pnpm format`

For questions or contributions, refer to the project's package.json scripts and configuration files.