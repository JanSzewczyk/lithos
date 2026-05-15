# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lithos 3D** is a landing page for an eco-friendly fishing product — reinforced concrete Method Feeder cages printed with 3D technology. Zero lead, produced in Poland.

Built on Next.js 16.2.6 with App Router, React 19.2.6, TypeScript, Tailwind CSS 4.3.0, React Compiler, next-intl v4 (Polish + English), and comprehensive testing infrastructure (Vitest 4.1, Playwright 1.60).

## Commands

### Development

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint             # ESLint check
npm run lint:fix         # ESLint with auto-fix
npm run prettier:check   # Prettier check
npm run prettier:write   # Prettier with auto-fix
npm run type-check       # TypeScript type checking
```

### Testing

```bash
npm run test                  # Run all Vitest tests
npm run test:unit             # Unit tests only (with coverage)
npm run test:storybook        # Storybook component tests (with coverage)
npm run test:watch            # Watch mode
npm run test:ui               # Vitest UI

# Run a single test file
npx vitest run path/to/file.test.ts
npx vitest run --project=unit path/to/file.test.ts

# E2E tests (Playwright) - requires build first
npm run build && npm run test:e2e
npm run test:e2e:ui           # Playwright UI mode
```

### Storybook

```bash
npm run storybook:dev         # Start Storybook (port 6006)
npm run storybook:build       # Build static Storybook
```

### Analysis

```bash
npm run analyze               # Bundle analyzer
```

## Architecture

### Tech Stack

- **Next.js**: 16.2.6 (App Router, Turbopack, React Compiler)
- **React**: 19.2.6 with React Compiler enabled
- **TypeScript**: 5.9.3 (strict mode)
- **Tailwind CSS**: 4.3.0 (CSS-first config via `@theme` directive)
- **next-intl**: 4.x (i18n — Polish + English, `localePrefix: "as-needed"`)
- **lucide-react**: icons
- **Vitest**: 4.1 (unit & integration tests)
- **Playwright**: 1.60 (E2E tests)
- **Storybook**: 10.x (component development)
- **Zod**: 4.x (env validation)
- **Pino**: 10.x (structured logging)

### Path Aliases

Use `~/` prefix for absolute imports (configured in tsconfig.json):

```typescript
import logger from "~/lib/logger";
import { env } from "~/data/env/server";
import { routing } from "~/i18n/routing";
```

### Key Directories

- **app/**: Next.js App Router. Root `app/layout.tsx` is minimal (returns `children`). Locale pages live in `app/[locale]/`.
- **app/[locale]/**: Locale-specific layout (with `NextIntlClientProvider`, Bricolage Grotesque font, full metadata), page, and error boundary.
- **components/landing/**: Landing page sections (Hero, Anatomy, Mission, Process, Features, Signup). All use `useTranslations()`.
- **components/layout/**: Nav (`LandingNav` — async SC using `getTranslations`), Footer, `LanguageSwitcher`.
- **i18n/**: next-intl configuration — `routing.ts` (locales, defaultLocale), `request.ts` (server config), `navigation.ts` (locale-aware Link/redirect).
- **messages/**: Translation files — `pl.json` and `en.json` with keys for all landing sections + metadata.
- **lib/**: Utilities — `logger.ts` (Pino).
- **data/env/**: T3 Env type-safe environment variables (`server.ts`, `client.ts`).
- **tests/e2e/**: Playwright E2E tests (`*.e2e.ts` pattern).
- **tests/unit/**: Vitest unit tests (`*.test.ts` pattern).

### i18n Architecture

Routing: `localePrefix: "as-needed"`, `defaultLocale: "pl"`:
- `/` → Polish (no prefix)
- `/en` → English

Middleware lives in `proxy.ts` (Next.js 16 convention — replaces `middleware.ts`). It runs next-intl locale detection and request logging in one pass.

Translation keys are structured by section:
```
metadata, nav, hero, anatomy, mission, process, features, signup, footer
```

**Server Components** use `useTranslations("section")` (sync) or `getTranslations({ locale, namespace })` (async — required when the component itself is `async`).

**Client Components** (`"use client"`) use `useTranslations("section")` directly — next-intl works with both RSC and client components.

### Lithos Color Palette

Defined via `@theme` in `app/globals.css`:

| Token | Value | Usage |
|---|---|---|
| `cement` | `#F9F9F8` | Page background |
| `concrete` | `#EAEBEB` | Borders, dividers |
| `concrete-dark` | `#D1D4D5` | Darker borders |
| `ink` | `#2C3033` | Primary text |
| `ink-soft` | `#3A3F42` | Secondary text |
| `ink-muted` | `#6B7173` | Muted text, labels |
| `accent` | `#7EA180` | Green accent (CTA, badges) |
| `accent-deep` | `#5F8463` | Darker accent |
| `accent-soft` | `#E4ECDF` | Light green background |
| `moss` | `#4A6B4D` | Dark moss text |

Font: `--font-display: var(--font-bricolage)` (Bricolage Grotesque, loaded via `next/font/google`).

### Custom CSS Classes

Defined in `app/globals.css`:

- `.stone-stage`, `.stone`, `.stone-grain`, `.holes` — animated hero feeder visual (organic blob morphing + holes grid)
- `.float-label`, `.fl-1`, `.fl-2`, `.fl-3` — floating annotation labels on the hero stone
- `.mini-stone`, `.ms1`, `.ms2`, `.ms3` — mini stone cluster in the Features section
- `.anatomy-visual-bg`, `.anatomy-holes` — product anatomy section visual
- `.btn-primary-tw`, `.btn-secondary-tw` — CTA button styles
- `.form-select-tw` — styled native `<select>` element

### SEO Configuration

- **`app/layout.tsx`** — root layout with `metadataBase` pointing to `VERCEL_URL`
- **`app/[locale]/layout.tsx`** — full metadata: title, description, keywords, openGraph (with OG image), twitter card, hreflang alternates, robots directive
- **`app/opengraph-image.tsx`** — 1200×630 branded OG image (Satori/next-og)
- **`app/apple-icon.tsx`** — 180×180 Apple Touch Icon
- **`app/sitemap.ts`** — sitemap with `changeFrequency`, `priority`, and language alternates for both locales
- **`app/robots.ts`** — robots.txt with `/api/` disallow and `host` declaration
- **`app/[locale]/page.tsx`** — JSON-LD structured data (Organization + WebSite + Product schema)

### Environment Variables

Validated at build-time via T3 Env (`data/env/server.ts`):

| Variable | Type | Usage |
|---|---|---|
| `NODE_ENV` | `development\|test\|production` | Required |
| `VERCEL_URL` | `string` (optional) | Base URL for SEO/sitemap. Full URL with protocol, e.g. `https://lithos3d.com`. Falls back to `http://localhost:3000`. |
| `LOG_LEVEL` | `fatal\|error\|warn\|info\|debug\|trace` | Default: `info` |
| `ANALYZE` | `true\|false` | Enable bundle analyzer |
| `CI` | `true\|false\|0\|1` | CI environment flag |

### Logging

Uses Pino logger (`lib/logger.ts`). Create child loggers with context:

```typescript
import logger, { createLogger } from "~/lib/logger";
const pageLogger = createLogger({ module: "landing-page" });
```

Request logging is handled automatically via `proxy.ts` with unique `X-Request-ID` header per request.

### Testing Configuration

Vitest 4.1 is configured with two project modes:

- **unit**: Node environment for unit tests (`*.test.ts` files)
- **storybook**: Browser environment (Playwright) for Storybook component tests

### Health Checks

Built-in health endpoint at `/api/health` with URL aliases: `/healthz`, `/api/healthz`, `/health`, `/ping`

### Next.js Configuration

- React Compiler enabled (`reactCompiler: true`)
- Pino externalized for server-side logging (`serverExternalPackages`)
- Bundle analyzer available via `ANALYZE=true`
- next-intl plugin via `createNextIntlPlugin("./i18n/request.ts")`

## Conventions

- Commits follow [Conventional Commits](https://www.conventionalcommits.org/) for semantic release
- ESLint: Uses `@szum-tech/eslint-config`
- Prettier: Uses `@szum-tech/prettier-config`
- Semantic Release: Uses `@szum-tech/semantic-release-config`

## Common Pitfalls

| Area | Don't | Do |
|------|-------|----|
| Components | Add `'use client'` unnecessarily | Default to Server Components |
| Memoization | Use `useMemo`/`useCallback`/`memo` with React Compiler | Let compiler optimize automatically |
| Imports | Use relative paths (`../../../lib/utils`) | Use path aliases (`~/lib/utils`) |
| Logging | Use `console.log` in production code | Use structured Pino logging (`logger.info(...)`) |
| i18n in async SC | Use `useTranslations` in an `async` function | Use `getTranslations` from `next-intl/server` |
| i18n in sync SC | Use `getTranslations` | Use `useTranslations` directly |
| `VERCEL_URL` | Use directly as URL | Always pass through `getBaseUrl()` helper (adds `https://` protocol if missing) |
| OG Image (Satori) | Mix text nodes and elements in the same div | Use `display: flex` on every element with multiple children |
