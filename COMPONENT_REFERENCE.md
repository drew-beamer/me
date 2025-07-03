# Component Reference Guide

A detailed reference for all reusable components in the Drew Beamer portfolio project.

## Overview

This guide provides in-depth documentation for each component including props, styling, accessibility features, and real-world usage examples.

## ProjectCard Component

### File Location
`src/components/ProjectCard.astro`

### Description
A card component that displays project information in a clickable, interactive format. This component is the primary way projects are displayed on the homepage.

### Props Interface

```typescript
interface Props {
  project: CollectionEntry<"projects">;
}
```

### Detailed Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `project` | `CollectionEntry<"projects">` | ✅ | Complete project object from Astro content collections |
| `project.id` | `string` | ✅ | Unique identifier for the project (used for routing) |
| `project.data.title` | `string` | ✅ | Display name of the project |
| `project.data.description` | `string` | ✅ | Brief description shown on the card |
| `project.data.image` | `string \| undefined` | ❌ | Optional image URL for the project |
| `project.data.priority` | `number` | ❌ | Sort priority (defaults to 0) |

### Visual Design

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│  [56x56 Image/Avatar] Project Title              [>]   │
│                      Project Description               │
└─────────────────────────────────────────────────────────┘
```

#### Styling Classes
- Container: `group flex items-center justify-start gap-x-4 no-underline`
- Image container: `size-14 shrink-0`
- Content area: `flex grow flex-col gap-1`
- Title: `font-mono text-lg group-hover:underline`
- Description: `text-muted-foreground line-clamp-1 text-sm overflow-ellipsis`

### Usage Examples

#### Basic Usage
```astro
---
import ProjectCard from "@/components/ProjectCard.astro";
import { getCollection } from "astro:content";

const projects = await getCollection("projects");
---

{projects.map((project) => (
  <ProjectCard project={project} />
))}
```

#### With Sorting and Filtering
```astro
---
import ProjectCard from "@/components/ProjectCard.astro";
import { getCollection } from "astro:content";

const allProjects = await getCollection("projects");

// Sort by priority (descending) then by title (ascending)
const sortedProjects = allProjects.sort(
  (a, b) => 
    b.data.priority - a.data.priority || 
    a.data.title.localeCompare(b.data.title)
);

// Filter high priority projects
const featuredProjects = allProjects.filter(
  project => project.data.priority >= 2
);
---

<section>
  <h2>Featured Projects</h2>
  <div class="not-prose flex flex-col gap-y-4">
    {featuredProjects.map((project) => (
      <ProjectCard project={project} />
    ))}
  </div>
</section>

<section>
  <h2>All Projects</h2>
  <div class="not-prose flex flex-col gap-y-4">
    {sortedProjects.map((project) => (
      <ProjectCard project={project} />
    ))}
  </div>
</section>
```

#### Responsive Grid Layout
```astro
---
import ProjectCard from "@/components/ProjectCard.astro";
import { getCollection } from "astro:content";

const projects = await getCollection("projects");
---

<!-- Mobile: Single column, Desktop: Two columns -->
<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
  {projects.map((project) => (
    <ProjectCard project={project} />
  ))}
</div>
```

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support via native anchor element
- **Screen Reader Support**: Proper semantic structure with descriptive text
- **Focus Management**: Visible focus indicators on keyboard navigation
- **Alt Text**: Images include proper alt attributes using project title

### Interactive States

#### Hover Effects
- Title underline appears on hover
- Subtle visual feedback for better UX
- Group hover effect coordinated across entire card

#### Focus States
- Browser default focus outline for accessibility
- Maintains focus visibility standards

### Image Handling

#### With Image
```astro
<!-- When project.data.image exists -->
<Image
  src={project.data.image}
  alt={project.data.title}
  width={56}
  height={56}
  class="my-0 rounded-md object-cover"
/>
```

#### Without Image (Fallback)
```astro
<!-- When project.data.image is undefined -->
<div class="bg-muted flex size-14 shrink-0 items-center justify-center rounded-md">
  <span class="text-muted-foreground font-mono text-3xl">
    {project.data.title.charAt(0)}
  </span>
</div>
```

### Performance Considerations

- **Image Optimization**: Uses Astro's `Image` component for automatic optimization
- **Lazy Loading**: Images are lazy-loaded by default
- **Responsive Images**: Automatically generates responsive image sizes

### Customization Options

#### Styling Variations
```astro
<!-- Custom spacing -->
<div class="flex flex-col gap-y-6">
  {projects.map((project) => (
    <ProjectCard project={project} />
  ))}
</div>

<!-- Card borders -->
<div class="space-y-4">
  {projects.map((project) => (
    <div class="rounded-lg border border-gray-200 p-4">
      <ProjectCard project={project} />
    </div>
  ))}
</div>
```

#### Content Filtering
```astro
---
// Show only projects with images
const projectsWithImages = projects.filter(p => p.data.image);

// Show projects by priority threshold
const importantProjects = projects.filter(p => p.data.priority > 1);

// Search functionality
const searchTerm = "discord";
const searchResults = projects.filter(p => 
  p.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  p.data.description.toLowerCase().includes(searchTerm.toLowerCase())
);
---
```

### Related Components

- **Layout**: Use within the main `Layout` component
- **Prose**: Wrap in `Prose` layout for consistent typography
- **Navigation**: Links automatically route to project detail pages

### Best Practices

1. **Data Validation**: Ensure project data matches `ProjectMetadataSchema`
2. **Image Optimization**: Use web-optimized images (WebP, AVIF)
3. **Consistent Sizing**: Maintain 56x56px dimensions for project images
4. **Performance**: Consider pagination for large project lists
5. **Accessibility**: Always provide meaningful alt text for images

### Troubleshooting

#### Common Issues

**Missing Image Display**
```typescript
// Ensure image URLs are accessible and properly formatted
const project = {
  data: {
    title: "My Project",
    description: "Description",
    image: "https://example.com/image.jpg", // Must be valid URL
    priority: 1
  }
};
```

**Routing Issues**
```typescript
// Ensure project.id matches the file name in src/content/projects/
// File: src/content/projects/my-project.md
// Results in: project.id = "my-project"
// Routes to: /projects/my-project
```

**Styling Conflicts**
```astro
<!-- Wrap in not-prose to prevent prose styling conflicts -->
<div class="not-prose">
  <ProjectCard project={project} />
</div>
```

### Migration Guide

If upgrading from a previous version or implementing custom project cards:

1. Ensure project data follows the `ProjectMetadataSchema`
2. Update any custom styling to match the Tailwind classes
3. Replace manual image handling with Astro's `Image` component
4. Update routing to use the new `/projects/[project]` structure

This component is designed to be the primary interface for project display throughout the application, providing consistent styling, behavior, and accessibility features.