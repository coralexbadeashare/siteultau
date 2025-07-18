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
6. CRITICAL: Before using ANY component (e.g., Phone, Truck, Wrench), verify it's imported
7. For lucide-react icons: Use correct names (e.g., SprayCan not Spray)

### CRITICAL CSS IMPORT RULES
When creating a new website subdirectory in the app folder:
1. ALWAYS import the global CSS file in the layout.tsx file
2. The correct import path from any subdirectory is: `import "../globals.css"`
3. Without this import, the site will have NO STYLING AT ALL
4. Double-check the import path is correct - it should point to app/globals.css
5. If creating nested layouts, ensure the parent layout imports globals.css

### CRITICAL LAYOUT AND HYDRATION RULES
To prevent Next.js hydration errors:
1. NEVER include `<html>` or `<body>` tags in subdirectory layouts (e.g., app/website/layout.tsx)
2. The root layout (app/layout.tsx) already provides these tags
3. Subdirectory layouts should return a `<div>` or fragment as the root element
4. Apply body-level styles to a wrapper div instead: `<div className="bg-black text-white min-h-screen">`
5. Avoid using browser-only APIs (window, document) in initial render
6. Don't use Math.random() or Date.now() in component render
7. Ensure consistent server/client rendering by avoiding conditional rendering based on `typeof window`

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
npm run lint         # Check for linting errors - MUST pass with 0 errors
npm run build        # Ensure build succeeds - MUST complete without errors
```

### Build Error Prevention Checklist
Before ANY commit or deployment:
1. Run `npm run lint` and fix ALL errors (not just warnings)
2. Check for undefined component usage (e.g., using Phone without importing it)
3. Remove ALL unused imports - ESLint will fail the build otherwise
4. Verify all lucide-react icon names are correct (e.g., SprayCan not Spray)
5. If build fails on Vercel, it's usually due to ESLint errors that must be fixed

### Styling Rules and Best Practices

### CRITICAL: Never use styled-jsx in Server Components
styled-jsx (the `<style jsx>` syntax) only works in Client Components. Since Next.js 13+ uses Server Components by default, you must either:
1. Add `'use client'` directive at the top of the file if you need styled-jsx
2. Use inline styles or CSS modules instead (preferred for Server Components)
3. For hover effects and dynamic styles in Server Components, use inline styles with event handlers

Example of what NOT to do in Server Components:
```tsx
// ❌ This will cause a build error in Server Components
<style jsx>{`
  .card:hover { transform: translateY(-5px); }
`}</style>
```

Instead, use inline styles or CSS classes:
```tsx
// ✅ Use inline styles for Server Components
<div style={{ transition: 'all 0.3s ease' }} 
     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
```

## CRITICAL: Common Build Failures and Prevention

### Most Common Vercel Build Failures
1. **Undefined components** - Using a component without importing it
   - ALWAYS import before use: `import { Phone, Truck, Wrench } from 'lucide-react'`
   - Build will fail with: `'ComponentName' is not defined`

2. **Unused imports** - Importing but not using components
   - Remove ALL unused imports before committing
   - Build will fail with: `'ComponentName' is defined but never used`

3. **Wrong icon names** - Using incorrect lucide-react icon names
   - Use correct names: `SprayCan` not `Spray`
   - Build will fail with: `Attempted import error: 'IconName' is not exported`

4. **Unused destructured variables**
   - Only destructure what you use: `const [items] = useState()` not `const [items, setItems]`
   - Build will fail with: `'setItems' is assigned a value but never used`

### Pre-commit Checklist
\u2705 Run `npm run lint` - MUST show 0 errors
\u2705 Run `npm run build` - MUST complete successfully
\u2705 Check all imports are used
\u2705 Check all used components are imported
\u2705 Verify lucide-react icon names

### TypeScript Build Errors
1. **Property does not exist on type** - Use proper type checking
   ```tsx
   // ❌ Wrong - TypeScript can't infer optional properties
   {detail.href ? <a href={detail.href}>...</a> : null}
   
   // ✅ Correct - Use 'in' operator for type narrowing
   {'href' in detail && detail.href ? <a href={detail.href}>...</a> : null}
   ```

## Common ESLint Issues and Solutions

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
   - IMPORTANT: This includes unused destructured variables:
   ```tsx
   // ❌ Wrong
   const [cartItems, setCartItems] = useState([]) // If setCartItems never used
   
   // ✅ Correct
   const [cartItems] = useState([]) // Only destructure what you use
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

**CRITICAL lucide-react icon rules:**
1. ALWAYS verify icon name exists in lucide-react before using
2. Common naming differences:
   - Use `SprayCan` not `Spray`
   - Use `ChevronDown` not `ChevronDown` (case sensitive)
3. If unsure about an icon name, check https://lucide.dev/icons/
4. Import errors with barrel optimization may occur - ensure exact icon names

### Styling
Use Tailwind CSS classes directly in components. Tailwind v4 is configured and ready.

## Navigation Component Best Practices

### Hover Dropdowns
Use CSS-based hover with Tailwind's `group` classes instead of JavaScript state:
```tsx
// ✅ Correct - CSS hover approach
<div className="relative group">
  <button className="...">
    Menu Item
    <ChevronDown className="transition-transform group-hover:rotate-180" />
  </button>
  <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
    {/* Dropdown content */}
  </div>
</div>

// ❌ Wrong - JavaScript state approach (causes flicker)
onMouseEnter={() => setDropdownOpen(true)}
onMouseLeave={() => setDropdownOpen(false)}
```

### Text Contrast on Transparent Navbars
When navbar is transparent over hero images, ensure text remains visible:
```tsx
// ✅ Correct - Add subtle gradient for contrast
className={scrolled ? 'bg-white/95' : 'bg-gradient-to-b from-black/50 to-transparent'}

// ❌ Wrong - Pure transparent can cause white-on-white text
className={scrolled ? 'bg-white/95' : 'bg-transparent'}
```