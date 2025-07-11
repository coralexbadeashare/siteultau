# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical Development Rules

### ALWAYS CHECK DEPENDENCIES BEFORE USING
Before importing any package that is not already in package.json, you MUST:
1. Check if the package exists in package.json dependencies
2. If not present, run `npm install [package-name]` BEFORE creating any files that import it
3. Common packages that need installation: lucide-react, framer-motion, react-hook-form, etc.

### ALWAYS IMPORT REQUIRED MODULES
When using any component or function, ALWAYS ensure it is properly imported:
1. Next.js components: `import Link from 'next/link'`, `import Image from 'next/image'`
2. React hooks: Must import from 'react' when using useState, useEffect, etc.
3. Custom components: Import from correct relative paths
4. Third-party libraries: Import according to their documentation
5. NEVER use components without importing them first

## Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Build & Production
npm run build        # Build for production
npm run start        # Start production server

# Quality Checks
npm run lint         # Run ESLint

# Package Management
npm install [package] # Install new dependencies BEFORE using them
```

## Project Structure

Multi-website Next.js application:
- `/app/kvan/` - KVAN construction company (English)
- `/app/zeldaprojects/` - Zelda Projects packaging company (Romanian)

Each website has:
- Independent layout with navigation/footer
- Dedicated components folder
- Own routing structure

## Current Dependencies

Core packages installed:
- next: 15.3.5
- react: ^19.0.0
- lucide-react: ^0.525.0
- tailwindcss: ^4

## Image Configuration

External images require domain configuration in `next.config.ts`:
```typescript
images: {
  remotePatterns: [{
    protocol: 'https',
    hostname: 'images.unsplash.com'
  }]
}
```

## Common Development Tasks

### Adding a new website
1. Create `/app/[website-name]/` directory
2. Add layout.tsx with navigation/footer components
3. Create page.tsx for homepage
4. Add `/components/` subdirectory for website-specific components

### Using icons
Icons come from lucide-react (already installed):
```tsx
import { Home, Menu, X } from 'lucide-react'
```

### Styling
Use Tailwind CSS classes directly in components. Tailwind v4 is configured and ready.