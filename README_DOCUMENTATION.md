# Documentation Index

This is the comprehensive documentation suite for the Drew Beamer portfolio website built with Astro. All public APIs, components, functions, and usage patterns are documented across multiple focused guides.

## Documentation Files

### 📚 [API Documentation](API_DOCUMENTATION.md)
**Complete API reference covering all components, layouts, schemas, and configuration**

- **Components**: ProjectCard usage and props
- **Layouts**: Layout and Prose components  
- **Schemas & Types**: Data validation and TypeScript types
- **Content Collections**: Projects collection configuration
- **Pages**: Index and dynamic project pages
- **Configuration**: Setup and best practices

### 🧩 [Component Reference Guide](COMPONENT_REFERENCE.md)
**Detailed component documentation with examples and implementation patterns**

- **ProjectCard Deep Dive**: Props, styling, accessibility, examples
- **Visual Design Specs**: Layout structure and CSS classes
- **Usage Examples**: Basic usage, filtering, responsive layouts
- **Customization Options**: Styling variations and content filtering
- **Troubleshooting**: Common issues and solutions

### 📝 [Content Management API Guide](CONTENT_API_GUIDE.md)
**Comprehensive guide to content collections, schemas, and data management**

- **Content Collection System**: Configuration and structure
- **Data Schemas**: Validation rules and type safety
- **Content API Methods**: getCollection, getEntry, render
- **Project Management**: Creating, updating, and organizing content
- **Advanced Patterns**: Filtering, sorting, caching, performance

## Quick Start Guide

### For Developers

1. **Start Here**: Read [API Documentation](API_DOCUMENTATION.md) for overview
2. **Component Usage**: Check [Component Reference](COMPONENT_REFERENCE.md) for detailed component docs
3. **Content Management**: Use [Content API Guide](CONTENT_API_GUIDE.md) for data handling

### For Content Managers

1. **Adding Projects**: See "Creating New Projects" in [Content API Guide](CONTENT_API_GUIDE.md)
2. **Project Structure**: Reference "Content File Structure" examples
3. **Data Validation**: Understand required fields and validation rules

## Architecture Overview

### Technology Stack
- **Framework**: Astro 5.10.0
- **Styling**: Tailwind CSS 4.0.4
- **Type Safety**: TypeScript with Zod validation
- **Content**: Markdown with frontmatter
- **Icons**: Lucide Astro icons

### Project Structure
```
src/
├── components/           # Reusable UI components
│   └── ProjectCard.astro
├── layouts/             # Page layouts and wrappers
│   ├── Layout.astro
│   └── Prose.astro
├── pages/               # Routes and page components
│   ├── index.astro
│   └── projects/[project].astro
├── content/             # Content collections
│   ├── config.ts
│   └── projects/        # Project markdown files
├── schemas.ts           # Zod validation schemas
├── types.ts            # TypeScript type definitions
└── styles/             # Global styles
```

## Key Features

### 🎨 Component System
- **ProjectCard**: Responsive project display with adaptive images
- **Layout**: SEO-optimized page wrapper with dark theme
- **Prose**: Typography-focused content wrapper

### 📊 Content Management
- **Type-Safe Collections**: Validated with Zod schemas
- **Markdown Support**: Rich content with frontmatter metadata
- **Dynamic Routing**: Automatic page generation for projects
- **Priority System**: Flexible project ordering

### 🔧 Developer Experience
- **Full TypeScript**: End-to-end type safety
- **Hot Reload**: Fast development with Astro dev server
- **Linting & Formatting**: ESLint and Prettier configuration
- **Path Aliases**: Clean imports with `@/` prefix

## API Quick Reference

### Essential Imports
```typescript
// Content Collections
import { getCollection, getEntry, render } from "astro:content";

// Components
import ProjectCard from "@/components/ProjectCard.astro";
import Layout from "@/layouts/Layout.astro";
import Prose from "@/layouts/Prose.astro";

// Types & Schemas
import type { ProjectMetadata } from "@/types";
import { ProjectMetadataSchema } from "@/schemas";
```

### Common Patterns

#### Get All Projects
```typescript
const projects = await getCollection("projects");
```

#### Sort Projects by Priority
```typescript
const sortedProjects = projects.sort(
  (a, b) => b.data.priority - a.data.priority || 
            a.data.title.localeCompare(b.data.title)
);
```

#### Render Project List
```astro
<div class="flex flex-col gap-y-4">
  {projects.map((project) => (
    <ProjectCard project={project} />
  ))}
</div>
```

#### Create Project Page
```astro
---
import Layout from "@/layouts/Layout.astro";
import Prose from "@/layouts/Prose.astro";

const project = await getEntry("projects", "project-id");
const { Content } = await render(project);
---

<Layout title={project.data.title}>
  <Prose>
    <h1>{project.data.title}</h1>
    <Content />
  </Prose>
</Layout>
```

## Development Commands

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix linting issues
pnpm format           # Check Prettier formatting
pnpm format:fix       # Fix formatting issues
```

## Schema Reference

### Project Metadata
```typescript
{
  title: string;        // Required: Project name
  description: string;  // Required: Brief description
  image?: string;       // Optional: Image URL
  priority?: number;    // Optional: Sort order (default: 0)
}
```

## Best Practices Summary

### Content Management
1. Use kebab-case for project file names
2. Include descriptive titles and descriptions
3. Optimize images for web (WebP, AVIF)
4. Use priority system for featured projects

### Component Development
1. Define TypeScript interfaces for props
2. Follow Astro component patterns
3. Use Tailwind CSS for styling
4. Implement proper accessibility features

### Performance
1. Cache content collection results when possible
2. Use Astro's built-in image optimization
3. Implement lazy loading for images
4. Consider pagination for large project lists

## Support & Contributing

### Documentation Updates
When updating the codebase, ensure documentation stays current:
1. Update relevant documentation files
2. Add examples for new features
3. Update type definitions and schemas
4. Test all code examples

### Getting Help
1. Check the appropriate documentation file first
2. Review the troubleshooting sections
3. Look for similar patterns in existing code
4. Refer to Astro's official documentation for framework-specific questions

---

This documentation suite provides comprehensive coverage of all public APIs, components, and usage patterns. Each file focuses on a specific aspect while maintaining consistency across the entire documentation set.