<div align="center">

# 🪨 Lithos 3D

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=github&utm_campaign=lithos)
[![CI](https://github.com/JanSzewczyk/lithos/actions/workflows/pr-check.yml/badge.svg)](https://github.com/JanSzewczyk/lithos/actions/workflows/pr-check.yml)
[![CodeQL](https://github.com/JanSzewczyk/lithos/actions/workflows/codeql.yml/badge.svg)](https://github.com/JanSzewczyk/lithos/actions/workflows/codeql.yml)

**Landing page for eco-friendly, zero-lead, 3D-printed concrete fishing feeders.**

[Features](#-features) • [Getting Started](#-getting-started) • [Documentation](#-table-of-contents) •
[Deployment](#-deployment)

</div>

---

## 👋 Hello there!

Traditional Method Feeder cages are made from lead — a metal toxic to aquatic ecosystems. Every lost rig leaves a toxic
trace on a lake or river bed for hundreds of years. **Lithos 3D** changes that: reinforced eco-concrete with neutral pH,
precision matrix molds 3D-printed to micron-level accuracy, same weight, same effectiveness — zero compromise with
nature.

This repository contains the marketing landing page used to collect beta tester sign-ups. The site supports Polish and
English out of the box and ships with a complete testing and CI/CD setup.

|                   | Lithos 3D                                | Traditional lead                 |
| ----------------- | ---------------------------------------- | -------------------------------- |
| **Environment**   | ✅ Neutral pH, zero toxins               | ❌ Toxic to the ecosystem        |
| **Camouflage**    | ✅ Matte concrete blends into the bottom | ❌ Shiny metal spooks fish       |
| **Precision**     | ✅ 3D printing — micron-level accuracy   | ❌ Casting with form limitations |
| **Durability**    | ✅ Fiber reinforcement, impact resistant | ❌ Deforms on impact             |
| **Manufacturing** | ✅ 100% Poland                           | ❌ Import                        |
| **Lead content**  | ✅ **0%**                                | ❌ ~100%                         |

## ✨ Features

### 🏗️ Core Technologies

- **[Next.js 16](https://nextjs.org/)** — App Router, React Server Components, Turbopack dev server
- **[React 19](https://react.dev/)** with React Compiler — zero manual memoization required
- **[TypeScript 5.9](https://www.typescriptlang.org/)** — strict mode, path aliases via `~/`
- **[Tailwind CSS 4.3](https://tailwindcss.com/)** — CSS-first config with `@theme` directive, no config file needed
- **[next-intl 4.x](https://next-intl-docs.vercel.app/)** — i18n with Polish and English, `localePrefix: "as-needed"`
- **[lucide-react](https://lucide.dev/)** — icon library

### 🧪 Testing & Quality

- **[Vitest 4](https://vitest.dev/)** — unit and Storybook component tests with V8 coverage
- **[Playwright 1.60](https://playwright.dev/)** — end-to-end tests with `@axe-core/playwright` for accessibility
  auditing
- **[Storybook 10](https://storybook.js.org/)** — component development and visual testing with a11y addon
- **[Testing Library](https://testing-library.com/)** — React component testing utilities
- **WCAG 2.1 AA** — skip links, ARIA labels, screen reader support built into every component

### 🤖 Automation & DevOps

- **[GitHub Actions](https://github.com/features/actions)** — PR checks, CodeQL security scanning, automated publishing
- **[Dependabot](https://docs.github.com/en/code-security/dependabot)** — automated dependency updates
- **[Semantic Release](https://semantic-release.gitbook.io/)** — automated versioning and changelogs from Conventional
  Commits

### 🔧 Developer Experience

- **[Pino](https://getpino.io/)** — structured JSON logging with unique `X-Request-ID` per request
- **[T3 Env](https://env.t3.gg/)** — type-safe environment variables validated at build time via Zod
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** — `@szum-tech` shared configurations
- **Turbopack** — fast incremental bundler for development

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🎯 Getting Started](#-getting-started)
- [🚀 Deployment](#-deployment)
- [📃 Scripts Overview](#-scripts-overview)
- [🧪 Testing](#-testing)
- [🎨 Styling](#-styling)
- [💻 Environment Variables](#-environment-variables)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📧 Contact & Support](#-contact--support)

---

## 🎯 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 20.x or higher)
- **npm** package manager
- **Git** for version control

### 📦 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/JanSzewczyk/lithos.git
cd lithos
```

#### 2. Install Dependencies

```bash
npm ci
```

#### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Full production URL with https:// protocol
# Used by SEO metadata, sitemap.xml, and robots.txt
# Falls back to http://localhost:3000 if not set
VERCEL_URL=https://lithos3d.com

# Log level: fatal | error | warn | info | debug | trace
LOG_LEVEL=debug
```

#### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the Polish version or
[http://localhost:3000/en](http://localhost:3000/en) for English.

---

## 🚀 Deployment

The project is configured for deployment on [Vercel](https://vercel.com/). Import the repository and configure the
environment variables listed in the [Environment Variables](#-environment-variables) section. No additional build
configuration is needed — Vercel auto-detects Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=github&utm_campaign=lithos)

Set `VERCEL_URL` to the production domain with the full protocol:

```env
VERCEL_URL=https://lithos3d.com
```

Vercel automatically injects `NODE_ENV=production`. `LOG_LEVEL` defaults to `info` when not set.

---

## 📃 Scripts Overview

### 🛠️ Development

| Script          | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start dev server with Turbopack |
| `npm run build` | Create production build         |
| `npm run start` | Start production server         |

### 🧹 Code Quality

| Script                   | Description                            |
| ------------------------ | -------------------------------------- |
| `npm run type-check`     | Run `next typegen` then `tsc --noEmit` |
| `npm run lint`           | ESLint check                           |
| `npm run lint:fix`       | ESLint with auto-fix                   |
| `npm run prettier:check` | Prettier format check                  |
| `npm run prettier:write` | Prettier auto-format                   |

### 🧪 Testing

| Script                   | Description                             |
| ------------------------ | --------------------------------------- |
| `npm run test`           | Run all Vitest tests                    |
| `npm run test:unit`      | Unit tests only                         |
| `npm run test:storybook` | Storybook component tests with coverage |
| `npm run test:watch`     | Watch mode                              |
| `npm run test:ui`        | Vitest UI                               |
| `npm run test:e2e`       | Playwright E2E (requires build first)   |
| `npm run test:e2e:ui`    | Playwright UI mode                      |

### 📦 Storybook

| Script                    | Description                  |
| ------------------------- | ---------------------------- |
| `npm run storybook:dev`   | Start Storybook on port 6006 |
| `npm run storybook:build` | Build static Storybook       |

### 📊 Analysis

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run analyze` | Run bundle analyzer (`ANALYZE=true npm run build`) |

---

## 🧪 Testing

Vitest 4 is configured with two separate project modes:

- **unit** — Node.js environment for pure unit tests (`tests/unit/**/*.test.ts`)
- **storybook** — Browser environment via Playwright for Storybook component interaction tests

End-to-end tests run against a production build:

```bash
npm run build && npm run test:e2e
```

Accessibility is verified via `@axe-core/playwright` in the E2E suite. Storybook ships with `@storybook/addon-a11y` for
per-story accessibility audits during development.

---

## 🎨 Styling

Tailwind CSS 4.3 uses a CSS-first configuration via the `@theme` directive in `app/globals.css`. No `tailwind.config.js`
file is needed.

### Custom Color Palette

| Token           | Value     | Usage                      |
| --------------- | --------- | -------------------------- |
| `cement`        | `#F9F9F8` | Page background            |
| `concrete`      | `#EAEBEB` | Borders, dividers          |
| `concrete-dark` | `#D1D4D5` | Darker borders             |
| `ink`           | `#2C3033` | Primary text               |
| `ink-soft`      | `#3A3F42` | Secondary text             |
| `ink-muted`     | `#6B7173` | Muted text, labels         |
| `accent`        | `#7EA180` | Green accent (CTA, badges) |
| `accent-deep`   | `#5F8463` | Darker accent hover state  |
| `accent-soft`   | `#E4ECDF` | Light green backgrounds    |
| `moss`          | `#4A6B4D` | Dark moss text             |

**Font:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) — loaded via `next/font/google`
as a variable font, exposed as `--font-bricolage`.

---

## 💻 Environment Variables

Validated at build time using [T3 Env](https://env.t3.gg/) (`data/env/server.ts`):

| Variable     | Type                                     | Default                 | Description                                                             |
| ------------ | ---------------------------------------- | ----------------------- | ----------------------------------------------------------------------- |
| `NODE_ENV`   | `development\|test\|production`          | —                       | Required by Next.js                                                     |
| `VERCEL_URL` | `string`                                 | `http://localhost:3000` | Full base URL with protocol — used for SEO, sitemap, and canonical URLs |
| `LOG_LEVEL`  | `fatal\|error\|warn\|info\|debug\|trace` | `info`                  | Pino log verbosity                                                      |
| `ANALYZE`    | `true\|false`                            | `false`                 | Enable bundle analyzer                                                  |
| `CI`         | `true\|false\|0\|1`                      | —                       | CI environment flag                                                     |

> `VERCEL_URL` must include the protocol (`https://lithos3d.com`, not `lithos3d.com`). The `getBaseUrl()` helper adds
> the prefix automatically when it is missing.

---

## 📁 Project Structure

```
lithos/
├── app/
│   ├── [locale]/               # Per-locale pages (PL / EN)
│   │   ├── layout.tsx          # Font + metadata + NextIntlClientProvider
│   │   ├── page.tsx            # Landing page + JSON-LD schema
│   │   └── error.tsx           # Error boundary
│   ├── api/
│   │   └── health/route.ts     # Health check endpoint
│   ├── opengraph-image.tsx     # OG image 1200×630 (Satori)
│   ├── apple-icon.tsx          # Apple Touch Icon 180×180
│   ├── icon.tsx                # Favicon 32×32
│   ├── manifest.ts             # Web App Manifest
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml (PL + EN)
│   ├── global-error.tsx        # Root error boundary
│   ├── globals.css             # Lithos palette + custom CSS classes
│   └── layout.tsx              # Root layout (metadataBase)
├── components/
│   ├── landing/
│   │   ├── landing-hero.tsx        # Hero section with product image
│   │   ├── landing-anatomy.tsx     # Feeder anatomy section
│   │   ├── landing-mission.tsx     # Mission / 3 pillars
│   │   ├── landing-process.tsx     # 4-step production process
│   │   ├── landing-features.tsx    # Product features (dark section)
│   │   └── landing-signup.tsx      # Beta sign-up form ["use client"]
│   └── layout/
│       ├── landing-nav.tsx         # Sticky nav [async SC]
│       ├── landing-footer.tsx      # Footer
│       └── language-switcher.tsx   # PL / EN switcher
├── i18n/
│   ├── routing.ts              # Locales, defaultLocale, localePrefix
│   ├── request.ts              # getRequestConfig (server-side)
│   └── navigation.ts           # Locale-aware Link, redirect, useRouter
├── messages/
│   ├── pl.json                 # Polish translations
│   └── en.json                 # English translations
├── data/env/
│   ├── server.ts               # T3 Env server-side variables
│   └── client.ts               # T3 Env client-side (NEXT_PUBLIC_*)
├── lib/
│   └── logger.ts               # Pino logger + createLogger()
├── tests/
│   ├── e2e/                    # Playwright (*.e2e.ts)
│   └── unit/                   # Vitest (*.test.ts)
├── proxy.ts                    # Middleware: next-intl + request logging
├── next.config.ts
└── tsconfig.json
```

### Key Directories

- **`app/[locale]/`** — All locale-specific routing. The root `app/layout.tsx` is minimal; `app/[locale]/layout.tsx`
  owns fonts, metadata, and the `NextIntlClientProvider`.
- **`components/landing/`** — Six self-contained landing page sections, each driven by `useTranslations()` for i18n.
- **`components/layout/`** — Navigation, footer, and language switcher. `LandingNav` is an async Server Component using
  `getTranslations()`.
- **`i18n/`** — next-intl configuration: `routing.ts` drives middleware; `navigation.ts` exports locale-aware `Link`,
  `redirect`, and `useRouter` wrappers.
- **`messages/`** — Translation files keyed by section (`nav`, `hero`, `anatomy`, `mission`, `process`, `features`,
  `signup`, `footer`).
- **`data/env/`** — T3 Env schemas validated at build time; throws on missing or malformed values rather than silently
  failing.

### Important Configuration Files

- **`next.config.ts`** — React Compiler enabled, Pino externalized for server-side logging, next-intl plugin wired via
  `createNextIntlPlugin`
- **`proxy.ts`** — Next.js 16 middleware (replaces `middleware.ts`): next-intl locale detection combined with
  `X-Request-ID` injection
- **`vitest.config.ts`** — Dual-project setup: `unit` (Node environment) and `storybook` (browser via Playwright)
- **`release.config.js`** — Semantic Release using `@szum-tech/semantic-release-config`

---

## 🤝 Contributing

Contributions are welcome! See the Contributing flow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact & Support

- 🐛 [Open an issue](https://github.com/JanSzewczyk/lithos/issues)
- ⭐ [Star this repository](https://github.com/JanSzewczyk/lithos)
- 👨‍💻 Check out the maintainer's [GitHub profile](https://github.com/JanSzewczyk)

---

<div align="center">

**Made with ❤️ by [JanSzewczyk](https://github.com/JanSzewczyk)**

If this project helped you, please consider giving it a ⭐ on GitHub!

[⬆ Back to Top](#-lithos-3d)

</div>
