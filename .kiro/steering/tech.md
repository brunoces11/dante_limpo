# Technology Stack

## Framework & Runtime
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI primitives
- **Radix UI** - Headless UI components for accessibility
- **Lucide React** - Icon library
- **CSS Variables** - For theming with HSL color system

## Key Libraries
- **React Hook Form** - Form handling with Zod validation
- **React Markdown** - Markdown rendering with remark-gfm
- **Date-fns** - Date manipulation
- **Class Variance Authority** - Component variant management
- **Tailwind Merge & clsx** - Conditional CSS class handling

## Build Configuration
- **Static Export** - Configured for static site generation
- **Memory Optimization** - 8GB max old space size for builds
- **Webpack Build Worker** - Experimental build optimization
- **Image Optimization** - Disabled for static export
- **ESLint** - Ignored during builds

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production (static export)
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Component Management
```bash
npx shadcn-ui add [component]  # Add shadcn/ui components
```

## Path Aliases
- `@/*` - Root directory
- `@/components` - Components directory
- `@/lib` - Utility functions
- `@/hooks` - Custom React hooks
- `@/components/ui` - UI components