# CLAUDE.md - AI Assistant Guide for iosifv.com

This document provides comprehensive guidance for AI assistants working with this codebase.

## Project Overview

**iosifv.com** is a personal portfolio and blog website built with Next.js 14, featuring:
- Personal brand showcase and portfolio
- Project gallery with detailed MDX-based project pages
- Page view tracking with Upstash Redis
- Interactive UI with Framer Motion animations
- Social links and contact information

**Original Template**: Based on [chronark.com](https://github.com/chronark/chronark.com) by Andreas Thomas

## Tech Stack

### Core Framework
- **Next.js 14.2.15** - React framework with App Router architecture
- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type-safe development
- **pnpm** - Package manager (use `pnpm` not `npm` or `yarn`)

### Styling & UI
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Framer Motion 10.18.0** - Animation and interactions
- **Lucide React 0.284.0** - Icon library
- **Custom Fonts**:
  - Inter (Google Font) - Primary font
  - CalSans (Local) - Display font for headings

### Content Management
- **Contentlayer 0.3.4** - Type-safe MDX content management
- **MDX** - Markdown with JSX support
- **Remark GFM** - GitHub Flavored Markdown
- **Rehype plugins**:
  - `rehype-pretty-code` - Syntax highlighting (GitHub Dark theme)
  - `rehype-slug` - Auto-generate heading IDs
  - `rehype-autolink-headings` - Clickable heading links

### Backend/Services
- **Upstash Redis** - Serverless Redis for page view counting
- **Vercel Analytics** - Web analytics
- **Beam Analytics** - Additional analytics (token: `01CjKDmoTYbYsGYzE4ZTCq1R`)
- **Edge Runtime** - API routes on Vercel Edge Network

### Development Tools
- **Rome 12.1.3** - Linter and formatter
- **Prettier 3.3.3** - Code formatting

## Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── components/
│   │   ├── analytics.tsx         # Beam Analytics integration
│   │   ├── card.tsx             # Interactive hover card
│   │   ├── mdx.tsx              # MDX components
│   │   ├── nav.tsx              # Navigation
│   │   └── particles.tsx        # Animated background
│   ├── contact/                  # Contact page
│   ├── links/                    # Social links page
│   ├── projects/                 # Projects section
│   │   ├── [slug]/              # Dynamic project routes
│   │   │   ├── header.tsx       # Project header
│   │   │   ├── mdx.css          # MDX styles
│   │   │   ├── page.tsx         # Project page template
│   │   │   └── view.tsx         # View counter
│   │   ├── article.tsx          # Project card
│   │   ├── layout.tsx
│   │   └── page.tsx             # Projects listing
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── content/                      # MDX content files
│   └── projects/                # Project content
│       ├── casa4.mdx
│       ├── homeless.developer.mdx
│       └── [other projects...]
├── pages/                        # Pages Router (legacy)
│   └── api/
│       └── incr.ts              # Page view counter API
├── public/                       # Static assets
│   ├── fonts/
│   └── images/
├── types/                        # TypeScript definitions
│   └── mdx.d.ts
├── util/                         # Utilities
│   └── mouse.ts                 # Mouse tracking hook
├── contentlayer.config.js       # Content configuration
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
└── tsconfig.json                # TypeScript config
```

## Development Setup

### Prerequisites
- Node.js (version from .nvmrc if present)
- pnpm package manager

### Getting Started
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Format code
pnpm fmt
```

### Environment Variables
Required environment variables (in `.env.local`):
```bash
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
NEXT_PUBLIC_BEAM_TOKEN=01CjKDmoTYbYsGYzE4ZTCq1R  # Currently hardcoded
```

## Code Conventions

### File Naming
- **Components**: `kebab-case.tsx` (e.g., `mdx-components.tsx`)
- **Content**: `kebab-case.mdx` (e.g., `homeless.developer.mdx`)
- **Types**: `camelCase` exports in PascalCase files

### TypeScript Patterns
```typescript
// Server Components (default - no "use client")
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  return <div>{project.title}</div>;
}

// Client Components (interactive)
"use client";
export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const [hovering, setHovering] = useState(false);
  // ... interactive logic
  return <motion.div>{children}</motion.div>;
};
```

### Styling Approach
- **Tailwind utility classes** - Primary styling method
- **Mobile-first** - Use responsive breakpoints (`sm:`, `md:`, `lg:`)
- **Custom animations** - Defined in `tailwind.config.js`
- **Consistent spacing** - Use Tailwind spacing scale

Example:
```tsx
<div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
  <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
    Title
  </h1>
</div>
```

### Import Order
1. React/Next.js imports
2. Third-party libraries
3. Local components
4. Utilities
5. Types
6. Styles

## Content Management with Contentlayer

### Content Types
Defined in `contentlayer.config.js`:
- **Project** - Portfolio projects
- **Page** - General pages (future use)

### Creating New Project
1. Create MDX file in `content/projects/`
2. Add required frontmatter:
```mdx
---
title: "Project Title"
description: "Brief description"
date: "2024-01-15"
url: https://project-url.com
published: true
repository: username/repo
---

# Project Content

Your MDX content here...
```

### Project Frontmatter Fields
- `title` (required) - Project name
- `description` (required) - Short description
- `date` (required) - Publication date
- `published` (required) - Visibility flag
- `url` (optional) - Live project URL
- `repository` (optional) - GitHub repo

### MDX Features
- **Custom components** - Defined in `mdx-components.tsx`
- **Syntax highlighting** - GitHub Dark theme
- **Auto-linked headings** - All headings clickable
- **GFM support** - Tables, task lists, strikethrough

## Key Components

### `app/components/card.tsx`
Interactive card with mouse-following gradient effect. Uses Framer Motion for animations.

**Usage**:
```tsx
<Card>
  <div className="p-4">
    Content with hover effects
  </div>
</Card>
```

### `app/components/particles.tsx`
Animated particle background that follows mouse movement using Canvas API.

**Usage**:
```tsx
<Particles className="absolute inset-0" quantity={100} />
```

### `app/components/nav.tsx`
Navigation component with scroll-based styling changes using Intersection Observer.

### `app/projects/[slug]/view.tsx`
Page view counter that:
- Increments views via `/api/incr` endpoint
- Displays view count with smooth transitions
- Uses IP-based deduplication (24h window)

## Data & APIs

### Page View Tracking
**Endpoint**: `/pages/api/incr.ts`

**Flow**:
1. Client requests increment via POST to `/api/incr`
2. API hashes IP address for privacy
3. Checks Redis if IP viewed in last 24h
4. Increments counter if new/expired
5. Returns total view count

**Redis Keys**:
- `pageviews:projects:{slug}` - View count
- `deduplicate:{slug}:{hashedIP}` - Deduplication (24h TTL)

### Contentlayer Generated Types
Import from `contentlayer/generated`:
```typescript
import { allProjects } from "contentlayer/generated";

// All projects (filtered by published)
const published = allProjects.filter(p => p.published);

// Sort by date
const sorted = published.sort((a, b) =>
  new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
  new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
);
```

## Performance Optimizations

### Incremental Static Regeneration (ISR)
Project pages revalidate every 60 seconds:
```typescript
export const revalidate = 60;
```

### Static Generation
All published projects pre-rendered at build time:
```typescript
export async function generateStaticParams() {
  return allProjects
    .filter(p => p.published)
    .map(p => ({ slug: p.slug }));
}
```

### Edge Runtime
Page view API runs on Vercel Edge Network for global low latency:
```typescript
export const runtime = "edge";
```

## Custom Animations

Defined in `tailwind.config.js`:
```javascript
animations: {
  "fade-in": "fade-in 1s ease-in-out",      // Opacity fade
  "title": "title 1s ease-out forwards",    // Blur + fade
  "fade-left": "fade-left 1s ease-in-out",  // Slide from left
  "fade-right": "fade-right 1s ease-in-out" // Slide from right
}
```

**Usage**:
```tsx
<h1 className="animate-title">Animated Title</h1>
```

## Common Tasks

### Adding a New Project
```bash
# 1. Create MDX file
touch content/projects/my-new-project.mdx

# 2. Add frontmatter and content
# 3. Build to verify
pnpm build

# 4. Check locally
pnpm dev
```

### Updating Styles
1. Modify Tailwind classes in components
2. Custom animations go in `tailwind.config.js`
3. Global styles in `global.css`
4. MDX-specific styles in `app/projects/[slug]/mdx.css`

### Running Linter/Formatter
```bash
pnpm fmt
```

This runs:
- Rome check with auto-fix
- Rome format with write

### Testing Locally
```bash
# Development mode
pnpm dev

# Production build locally
pnpm build && pnpm start
```

## Deployment

### Platform
**Vercel** - Automatic deployments from GitHub

### Build Command
```bash
pnpm build
```

### Output
- Static pages and assets
- Edge functions for API routes
- ISR cache configuration

### Environment Setup
Configure environment variables in Vercel dashboard:
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

## Important Notes

### Known Dependencies
- **OpenTelemetry overrides** in `package.json` - Required for compatibility
- **MDX-RS experimental** - Faster MDX compilation in `next.config.mjs`

### Patterns to Follow
1. **Server Components by default** - Only add `"use client"` when needed
2. **Type safety** - Use TypeScript, avoid `any`
3. **Mobile-first responsive** - Test on mobile viewports
4. **Accessibility** - Use semantic HTML, proper ARIA labels
5. **Performance** - Leverage ISR, Edge runtime, static generation

### Patterns to Avoid
1. **Client components for static content** - Unnecessary JS bundle
2. **Inline styles** - Use Tailwind utilities
3. **Direct database calls in client** - Use API routes
4. **Untyped props** - Define interfaces/types
5. **Missing published flag** - Projects won't show without it

## Debugging

### Content Not Showing
- Check `published: true` in frontmatter
- Verify MDX syntax is valid
- Check date format: `YYYY-MM-DD`
- Rebuild: `pnpm build`

### View Counter Not Working
- Verify Redis environment variables
- Check browser network tab for `/api/incr` requests
- Ensure Edge runtime is deployed on Vercel

### Styling Issues
- Clear `.next` cache: `rm -rf .next`
- Check Tailwind class names
- Verify PostCSS configuration
- Check browser console for errors

## File Locations Reference

| What | Where |
|------|-------|
| Add project content | `content/projects/{slug}.mdx` |
| Modify homepage | `app/page.tsx` |
| Update navigation | `app/components/nav.tsx` |
| Configure analytics | `app/components/analytics.tsx` |
| Adjust content schema | `contentlayer.config.js` |
| Modify MDX rendering | `mdx-components.tsx` |
| Update API routes | `pages/api/` |
| Add custom animations | `tailwind.config.js` |
| Global styles | `global.css` |
| Project page styles | `app/projects/[slug]/mdx.css` |

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentlayer Documentation](https://contentlayer.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Upstash Redis Documentation](https://docs.upstash.com/redis)

---

**Last Updated**: 2025-11-18
**Maintained by**: AI assistants working with this codebase
