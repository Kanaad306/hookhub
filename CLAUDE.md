# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**HookHub** is a Next.js 15 application built with TypeScript, React 19, and Tailwind CSS v4. This is a fresh project bootstrapped with `create-next-app` using the App Router architecture.

## Commands

### Development
```bash
npm run dev        # Start development server at http://localhost:3000
npm run build      # Create production build
npm start          # Start production server
npm run lint       # Run ESLint
```

## Architecture

### Framework & Routing
- **Next.js 15** with App Router (not Pages Router)
- All routes and pages are in `src/app/` directory
- `src/app/layout.tsx` - Root layout with Geist fonts (Sans and Mono)
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles with Tailwind imports

### Styling
- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- CSS custom properties for theming (light/dark mode via `prefers-color-scheme`)
- Theming variables: `--background`, `--foreground`, `--font-geist-sans`, `--font-geist-mono`
- Global styles defined in `src/app/globals.css`

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

### Linting
- ESLint with Next.js config (`next/core-web-vitals`, `next/typescript`)
- Flat config format (ESLint 9+)
- Ignores: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`

## File Structure Conventions
- Components and pages use `.tsx` extension
- All source code lives in `src/` directory
- Static assets in `public/` directory
- App Router conventions: use `page.tsx` for routes, `layout.tsx` for layouts
