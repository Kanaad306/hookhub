# HookHub - Product Specification (MVP)

## Project Overview

**HookHub** is a discovery and browsing platform for open-source Claude Code hooks. It serves as a centralized gallery where developers can explore community-created hooks to enhance their Claude Code workflow.

### What are Claude Code Hooks?

Claude Code hooks are user-defined shell commands that execute at specific points in Claude Code's workflow, providing deterministic control over the tool's behavior. They enable use cases like:
- Automatic code formatting
- Command logging and auditing
- Custom notifications
- File protection
- Automated feedback and validation

## Core Problem

Developers using Claude Code want to discover and implement useful hooks created by the community, but there's no centralized place to browse and find them.

## MVP Solution

A simple, elegant web application that displays a curated collection of Claude Code hooks in a browsable grid interface.

---

## Data Model

### Hook Entity

Each hook has the following attributes:

```typescript
interface Hook {
  id: string;                    // Unique identifier
  name: string;                  // Hook name (e.g., "Auto Format TypeScript")
  category: string;              // Category (e.g., "Formatting", "Security", "Logging")
  description: string;           // Brief description of what the hook does
  repoUrl: string;              // GitHub repository URL
  author?: string;              // GitHub username (optional for MVP)
  tags?: string[];              // Additional tags (optional for MVP)
}
```

### Categories

Initial categories for MVP:
- **Formatting** - Auto-formatting code on edits
- **Security** - File protection, command validation
- **Logging** - Command and action logging
- **Notifications** - Desktop/system notifications
- **Validation** - Pre/post tool use validation
- **Workflow** - Custom workflow enhancements

---

## MVP Features

### 1. Browse Hooks (Primary Feature)
- Display all hooks in a responsive grid layout
- Show hook cards with: name, category, description, and link to repo
- Responsive design (mobile, tablet, desktop)

### 2. Category Filtering
- Filter hooks by category
- Visual category tags/badges
- "All" option to show all hooks

### 3. Hook Card
Each card displays:
- Hook name (prominent)
- Category badge
- Description (truncated if too long)
- "View on GitHub" button/link
- Optional: Author avatar/name

### 4. Navigation
- Simple header with HookHub branding
- Category filter navigation/dropdown

---

## User Stories

### Must Have (MVP)
1. As a developer, I want to **browse all available hooks** so I can discover new ones
2. As a developer, I want to **filter hooks by category** so I can find hooks relevant to my needs
3. As a developer, I want to **view hook details** (name, description, category) so I can understand what each hook does
4. As a developer, I want to **access the GitHub repository** so I can view implementation details and install the hook

### Future (Post-MVP)
- As a developer, I want to search hooks by keyword
- As a developer, I want to submit my own hooks
- As a developer, I want to upvote useful hooks
- As a developer, I want to see hook installation instructions
- As a developer, I want to copy hook configuration to clipboard

---

## Technical Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel (recommended)

### File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (hooks grid)
│   └── globals.css         # Global styles
├── components/
│   ├── HookCard.tsx        # Individual hook card
│   ├── HookGrid.tsx        # Grid container for hooks
│   ├── CategoryFilter.tsx  # Category filter UI
│   └── Header.tsx          # App header
├── data/
│   └── hooks.json          # Static hooks data (MVP)
└── types/
    └── hook.ts             # TypeScript types
```

### Data Source (MVP)
- **Static JSON file** (`src/data/hooks.json`) containing curated hooks
- Manually curated initially
- Future: GitHub API integration, database

---

## UI/UX Requirements

### Design Principles
- **Clean & Minimal** - Focus on content, not clutter
- **Scannable** - Easy to browse many hooks quickly
- **Accessible** - WCAG 2.1 AA compliant
- **Responsive** - Works on all screen sizes

### Grid Layout
- **Desktop**: 3 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column
- Gap: 1.5rem between cards
- Max width: 1200px (centered)

### Hook Card Design
- Rounded corners
- Subtle shadow/border
- Hover state: Elevated shadow
- Category badge: Colored tag (top or inline)
- GitHub link: Clear CTA button
- Padding: 1.5rem
- Background: Card background vs page background contrast

### Color Scheme
- Follow existing Next.js dark/light mode theming
- Category badges: Distinct colors per category
- Primary CTA: GitHub link button

### Typography
- Use Geist Sans (already configured)
- Hook name: Large, bold
- Description: Medium, regular weight
- Category: Small, uppercase or badge style

---

## Sample Data Structure

```json
[
  {
    "id": "auto-format-ts",
    "name": "Auto Format TypeScript",
    "category": "Formatting",
    "description": "Automatically formats TypeScript files using Prettier after Claude edits them",
    "repoUrl": "https://github.com/example/claude-hook-auto-format-ts",
    "author": "johndoe",
    "tags": ["prettier", "typescript", "formatting"]
  },
  {
    "id": "bash-logger",
    "name": "Bash Command Logger",
    "category": "Logging",
    "description": "Logs all bash commands executed by Claude to a file for audit purposes",
    "repoUrl": "https://github.com/example/claude-hook-bash-logger",
    "author": "janedoe",
    "tags": ["logging", "bash", "audit"]
  },
  {
    "id": "sensitive-file-guard",
    "name": "Sensitive File Guard",
    "category": "Security",
    "description": "Prevents Claude from editing sensitive files like .env, credentials, and API keys",
    "repoUrl": "https://github.com/example/claude-hook-file-guard",
    "author": "securitydev",
    "tags": ["security", "protection", "files"]
  }
]
```

---

## MVP Scope Boundaries

### In Scope ✅
- Static display of curated hooks
- Grid layout with responsive design
- Category filtering
- Links to GitHub repositories
- Light/dark mode support (via Next.js defaults)

### Out of Scope ❌ (Future)
- User authentication
- Hook submissions by users
- Search functionality
- Upvoting/rating system
- Hook installation instructions
- Copy-to-clipboard for hook configs
- Backend API/database
- GitHub API integration
- Comments/reviews
- Hook analytics

---

## Success Metrics (MVP)

1. **Functional**: All hooks display correctly in grid
2. **Performance**: Page loads in < 2 seconds
3. **Responsive**: Works on mobile, tablet, desktop
4. **Accessible**: Passes basic accessibility checks
5. **Usable**: Category filtering works smoothly

---

## Development Phases

### Phase 1: Foundation (MVP)
1. Set up data structure and types
2. Create hooks.json with 10-15 sample hooks
3. Build HookCard component
4. Build HookGrid component
5. Implement category filtering
6. Style with Tailwind CSS
7. Test responsive layout
8. Deploy to Vercel

### Phase 2: Enhancement (Post-MVP)
- Add search functionality
- Implement user submissions
- Add upvoting system
- GitHub API integration
- Analytics

---

## Technical Considerations

### Performance
- Static generation (SSG) for fast load times
- Optimize images (if using hook logos/screenshots)
- Lazy loading for large grids (if needed)

### SEO
- Proper meta tags for sharing
- Semantic HTML
- Open Graph tags

### Accessibility
- Keyboard navigation
- Screen reader support
- ARIA labels where appropriate
- Focus indicators

---

## Open Questions

1. How will hooks be curated initially? (Manual vs. automated)
2. Should we show hook popularity/stars from GitHub?
3. Do we need hook screenshots/demos?
4. Should hooks have version information?
5. How often should the hook list be updated?

---

## Next Steps

1. Create initial hooks dataset (10-15 quality hooks)
2. Design hook card mockup
3. Implement core components
4. Deploy MVP
5. Gather feedback
6. Iterate
