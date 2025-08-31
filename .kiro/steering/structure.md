# Project Structure

## Root Directory Layout
```
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── lib/                    # Utility functions and helpers
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
├── .kiro/                  # Kiro AI configuration
└── node_modules/           # Dependencies
```

## App Directory (Next.js App Router)
- `app/layout.tsx` - Root layout with metadata and global styles
- `app/page.tsx` - Homepage component composition
- `app/[feature]/` - Feature-specific pages organized by domain:
  - `agentes-de-ia/` - AI agents information
  - `chat_principal/` - Main chat interface
  - `planos/` - Pricing plans
  - `para-escreventes/` - Content for notary staff
  - `para-oficiais/` - Content for registry officials
  - `documentacao/` - Documentation pages

## Components Organization
- `components/` - Main reusable components
  - `header.tsx` - Navigation header with mobile menu
  - `hero.tsx` - Landing page hero section
  - `features.tsx` - Feature showcase
  - `testimonials.tsx` - Customer testimonials
  - `chat-modal.tsx` - Chat interface modal
  - `assinatura.tsx` - Footer signature component
- `components/ui/` - shadcn/ui components (auto-generated)

## Styling & Configuration
- `globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration with custom theme
- `components.json` - shadcn/ui configuration

## Naming Conventions
- **Files**: kebab-case for pages (`chat-modal.tsx`)
- **Components**: PascalCase exports (`ChatModal`)
- **Directories**: kebab-case for routes (`chat_principal`, `para-escreventes`)
- **Utilities**: camelCase (`cn` function in `lib/utils.ts`)

## Key Patterns
- All components use TypeScript with proper typing
- Client components marked with `"use client"` directive
- Path aliases using `@/` prefix for imports
- Responsive design with mobile-first approach
- Portuguese language content and routes