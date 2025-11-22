# Coefficient & Correlation Educational Platform

## Overview

This is an interactive educational platform designed to help students and professionals master statistical concepts related to coefficients and correlations. The application provides three main learning modalities: interactive flashcards for concept review, visual scatter plot demonstrations showing different correlation types, and an interactive quiz system for knowledge assessment. The platform tracks user progress including cards viewed and quiz performance.

The application is built as a modern single-page application with a RESTful API backend, implementing Material Design principles adapted for educational content. It emphasizes clean, focused learning interfaces similar to Khan Academy and Brilliant.org.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, configured for fast HMR and optimized production builds
- Wouter for lightweight client-side routing
- Single-page application pattern with all routes handled client-side

**UI Component System:**
- Shadcn/ui component library (New York style variant) providing pre-built, accessible React components
- Radix UI primitives as the foundation for complex interactive components (dialogs, popovers, accordions, etc.)
- Tailwind CSS for utility-first styling with custom design tokens
- Design system based on CSS custom properties (HSL color space) for consistent theming
- Typography: Inter font family for all text content
- Spacing system based on Tailwind's 4-unit scale (4, 6, 8)

**State Management & Data Fetching:**
- TanStack Query (React Query) for server state management, caching, and synchronization
- Custom query client configured with specific refetch policies (no automatic refetch on window focus, infinite stale time)
- Local component state using React hooks for UI-specific state (flashcard flipping, quiz navigation)
- Mutation-based updates for user actions (quiz submissions, flashcard progress)

**Data Visualization:**
- Recharts library for rendering correlation scatter plots
- Three visualization types showing positive, negative, and no correlation
- Responsive chart containers that adapt to viewport size

**Key Architectural Patterns:**
- Component composition with clear separation between presentational and container components
- Custom hooks for reusable logic (useToast, useIsMobile)
- Path aliases (@/, @shared/, @assets/) for clean imports
- Form validation using React Hook Form with Zod resolvers

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server framework
- Node.js runtime with ES modules (type: "module")
- Dual-mode setup: development (with Vite middleware) and production (serving static assets)
- TypeScript for type safety across the entire backend

**API Design:**
- RESTful API endpoints under `/api` prefix
- Resource-based routing pattern:
  - GET `/api/flashcards` - Retrieve all flashcards
  - GET `/api/quiz/questions` - Retrieve all quiz questions
  - POST `/api/quiz/submit` - Submit quiz answers for scoring
  - GET `/api/progress` - Retrieve user progress data
- JSON request/response format
- Request body validation using Zod schemas

**Data Storage Strategy:**
- In-memory storage implementation (MemStorage class) for development/demonstration
- Interface-based storage abstraction (IStorage) allowing easy swap to persistent storage
- Pre-seeded educational content (flashcards covering Pearson correlation, Spearman correlation, coefficient of determination, etc.)
- User progress tracking in memory (flashcards viewed, quiz scores)

**Database Schema (Drizzle ORM):**
- PostgreSQL-compatible schema defined using Drizzle ORM
- Three main tables:
  - `flashcards`: Educational content with term, definition, formula, example, and category
  - `quiz_questions`: Multiple-choice questions with options array and correct answer index
  - `user_progress`: Tracks viewed flashcards (text array), quiz count, and scores
- UUID primary keys using PostgreSQL's gen_random_uuid()
- Schema-first approach with Zod validation derived from Drizzle schemas

**Middleware & Request Processing:**
- JSON body parsing with raw body preservation for webhook scenarios
- Request/response logging with timing information
- Error handling with proper HTTP status codes
- CORS and security headers (implicit through Express defaults)

### External Dependencies

**Database & ORM:**
- Drizzle ORM v0.39+ for type-safe database operations
- @neondatabase/serverless for PostgreSQL connectivity (serverless-optimized driver)
- Drizzle Kit for schema migrations and database push operations
- Note: Currently using in-memory storage; PostgreSQL integration is prepared but not active

**UI Component Libraries:**
- @radix-ui/* packages (20+ component primitives) for accessible, unstyled UI components
- class-variance-authority for variant-based component styling
- cmdk for command palette functionality
- embla-carousel-react for carousel/slider components
- lucide-react for icon system
- recharts for data visualization

**Form & Validation:**
- react-hook-form for performant form state management
- zod for schema validation
- @hookform/resolvers for connecting Zod to React Hook Form

**Development Tools:**
- @replit/vite-plugin-* packages for Replit-specific development features
- tsx for running TypeScript in development
- esbuild for production server bundling
- Vite plugins for React Fast Refresh and error overlays

**Styling:**
- tailwindcss v3+ for utility-first CSS
- postcss with autoprefixer for CSS processing
- tailwind-merge and clsx for conditional class composition

**Additional Libraries:**
- date-fns for date formatting and manipulation
- nanoid for generating unique identifiers
- wouter for lightweight routing (alternative to react-router)

**Font Loading:**
- Google Fonts (Inter family) loaded via CDN in index.html
- Preconnect hints for performance optimization

**Build & Runtime:**
- Vite v5+ as primary build tool
- Node.js with ES module support
- TypeScript v5+ with strict mode enabled
- Path aliases configured across tsconfig, vite, and tailwind