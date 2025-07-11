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
npm run lint         # Run ESLint - ALWAYS run before committing

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

## Linting and Code Quality Rules

### CRITICAL: Always run before committing
```bash
npm run lint         # Check for linting errors
npm run build        # Ensure build succeeds
```

### Common ESLint Issues and Solutions

1. **Unescaped quotes in JSX**
   - Error: `react/no-unescaped-entities`
   - Solution: Replace quotes with HTML entities
   ```tsx
   // ❌ Wrong
   <p>"This is wrong"</p>
   
   // ✅ Correct
   <p>&ldquo;This is correct&rdquo;</p>
   <p>{`"This also works"`}</p>
   ```

2. **Using `<img>` instead of Next.js Image**
   - Error: `@next/next/no-img-element`
   - Solution: Use Next.js Image component
   ```tsx
   // ❌ Wrong
   <img src="/image.jpg" alt="Description" />
   
   // ✅ Correct
   import Image from 'next/image'
   <Image src="/image.jpg" alt="Description" width={500} height={300} />
   ```

3. **Unused imports**
   - Error: `@typescript-eslint/no-unused-vars`
   - Solution: Remove any imports not used in the file
   ```tsx
   // ❌ Wrong
   import { Calendar, Home } from 'lucide-react' // If Calendar not used
   
   // ✅ Correct
   import { Home } from 'lucide-react' // Only import what you use
   ```

4. **Missing useEffect dependencies**
   - Error: `react-hooks/exhaustive-deps`
   - Solution: Include all dependencies in the array
   ```tsx
   // ❌ Wrong
   useEffect(() => {
     // code using slides.length
   }, [currentSlide])
   
   // ✅ Correct
   useEffect(() => {
     // code using slides.length
   }, [currentSlide, slides.length])
   ```

5. **TypeScript type errors with state**
   - Error: `Element implicitly has an 'any' type because expression of type 'string' can't be used to index`
   - Solution: Use explicit types for state that will be used as object keys
   ```tsx
   // ❌ Wrong
   const [activeCategory, setActiveCategory] = useState('rally')
   // TypeScript infers activeCategory as string
   
   // ✅ Correct
   const [activeCategory, setActiveCategory] = useState<'rally' | 'circuit' | 'drift'>('rally')
   // And when setting:
   onClick={() => setActiveCategory(key as 'rally' | 'circuit' | 'drift')}
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