<div align="center">

<br />

```
  ██╗     ██╗████████╗██╗  ██╗ ██████╗ ███████╗
  ██║     ██║╚══██╔══╝██║  ██║██╔═══██╗██╔════╝
  ██║     ██║   ██║   ███████║██║   ██║███████╗
  ██║     ██║   ██║   ██╔══██║██║   ██║╚════██║
  ███████╗██║   ██║   ██║  ██║╚██████╔╝███████║
  ╚══════╝╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

### **Naturally on the bottom. Concrete and passion.**

Innovative Method Feeder cages made from reinforced eco-concrete. 3D-printed precision · Natural concrete properties ·
Zero lead.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-4.x-7EA180?style=flat-square)](https://next-intl-docs.vercel.app/)

<br />

[🇵🇱 Polish version](http://localhost:3000) · [🇬🇧 English version](http://localhost:3000/en) ·
[Report an issue](../../issues)

<br />

</div>

---

## What is Lithos 3D?

Traditional Method Feeder cages are made from lead — a metal toxic to aquatic ecosystems. Every lost rig leaves a toxic
trace on the bottom of a lake or river for hundreds of years.

**Lithos changes that.** Instead of lead — reinforced eco-concrete with neutral pH. Instead of casting molds — precision
matrix molds printed with 3D technology. Same weight, same effectiveness, zero compromise with nature.

> The project is in active prototype testing. This site is used to build a list of beta testers.

---

## Product features

|                   | Lithos 3D                                | Traditional lead                 |
| ----------------- | ---------------------------------------- | -------------------------------- |
| **Environment**   | ✅ Neutral pH, zero toxins               | ❌ Toxic to the ecosystem        |
| **Camouflage**    | ✅ Matte concrete blends into the bottom | ❌ Shiny metal spooks fish       |
| **Precision**     | ✅ 3D printing — micron-level accuracy   | ❌ Casting with form limitations |
| **Durability**    | ✅ Fiber reinforcement, impact resistant | ❌ Deforms on impact             |
| **Manufacturing** | ✅ 100% Poland                           | ❌ Import                        |
| **Lead content**  | ✅ **0%**                                | ❌ ~100%                         |

---

## Tech stack

<table>
<tr>
<td valign="top" width="50%">

**Frontend**

- **Next.js 16.2** — App Router, React Server Components, Turbopack
- **React 19.2** with React Compiler (zero manual memoization)
- **TypeScript 5.9** in strict mode
- **Tailwind CSS 4.3** — CSS-first config (`@theme`)
- **Bricolage Grotesque** — Google Fonts variable font
- **lucide-react** — icons

</td>
<td valign="top" width="50%">

**Infrastructure**

- **next-intl 4.x** — i18n (PL + EN, no prefix for default locale)
- **Pino 10.x** — structured logging with `X-Request-ID`
- **T3 Env** — type-safe environment variables
- **Vitest 4.1** — unit & integration tests
- **Playwright 1.60** — E2E tests
- **Storybook 10.x** — component development

</td>
</tr>
</table>

---

## Quick start

### 1. Clone and install

```bash
git clone <repo-url>
cd lithos
npm ci
```

### 2. Environment variables

Create `.env.local`:

```env
# Full production URL (with https:// protocol)
# Used by SEO, sitemap.xml and robots.txt
# Falls back to http://localhost:3000 if not set
VERCEL_URL=https://lithos3d.com

# Log level: fatal | error | warn | info | debug | trace
LOG_LEVEL=debug
```

### 3. Run

```bash
npm run dev
```

| URL                                           | Version    |
| --------------------------------------------- | ---------- |
| [localhost:3000](http://localhost:3000)       | 🇵🇱 Polish  |
| [localhost:3000/en](http://localhost:3000/en) | 🇬🇧 English |

---

## Project structure

```
lithos/
│
├── app/
│   ├── [locale]/               ← per-locale pages (PL / EN)
│   │   ├── layout.tsx          ← font + metadata + NextIntlClientProvider
│   │   ├── page.tsx            ← landing page + JSON-LD schema
│   │   └── error.tsx           ← error boundary
│   │
│   ├── opengraph-image.tsx     ← OG image 1200×630 (Satori)
│   ├── apple-icon.tsx          ← Apple Touch Icon 180×180
│   ├── icon.tsx                ← favicon 32×32
│   ├── manifest.ts             ← Web App Manifest
│   ├── robots.ts               ← robots.txt
│   ├── sitemap.ts              ← sitemap.xml (PL + EN)
│   ├── global-error.tsx        ← root error boundary
│   ├── globals.css             ← Lithos palette + CSS animations
│   └── layout.tsx              ← root layout (metadataBase)
│
├── components/
│   ├── landing/
│   │   ├── landing-hero.tsx        ← hero with animated stone
│   │   ├── landing-anatomy.tsx     ← feeder anatomy
│   │   ├── landing-mission.tsx     ← mission / 3 pillars
│   │   ├── landing-process.tsx     ← 4-step production process
│   │   ├── landing-features.tsx    ← product features (dark section)
│   │   └── landing-signup.tsx      ← signup form ["use client"]
│   └── layout/
│       ├── landing-nav.tsx         ← sticky nav [async SC]
│       ├── landing-footer.tsx
│       └── language-switcher.tsx   ← PL / EN switcher
│
├── i18n/
│   ├── routing.ts              ← locales, defaultLocale, localePrefix
│   ├── request.ts              ← getRequestConfig (server-side)
│   └── navigation.ts           ← locale-aware Link, redirect, useRouter
│
├── messages/
│   ├── pl.json                 ← Polish translations
│   └── en.json                 ← English translations
│
├── data/env/
│   ├── server.ts               ← T3 Env (server)
│   └── client.ts               ← T3 Env (client, NEXT_PUBLIC_*)
│
├── lib/
│   └── logger.ts               ← Pino logger + createLogger()
│
├── tests/
│   ├── e2e/                    ← Playwright (*.e2e.ts)
│   └── unit/                   ← Vitest (*.test.ts)
│
├── proxy.ts                    ← middleware: next-intl + request logging
├── next.config.ts
└── tsconfig.json
```

---

## Internationalization

The app uses **next-intl v4** with `localePrefix: "as-needed"` routing:

```
/        →  🇵🇱 Polish   (default, no prefix)
/en      →  🇬🇧 English
```

Translation keys in `messages/*.json` are organized by section:

```
metadata · nav · hero · anatomy · mission · process · features · signup · footer
```

**Rule:** Synchronous Server Components use `useTranslations()`, async Server Components (e.g. `LandingNav`) use
`getTranslations()` from `next-intl/server`.

---

## SEO

Full SEO suite implemented for both locales:

- **Open Graph** — `og:title`, `og:description`, `og:image` (1200×630), `og:locale`, `og:type`
- **Twitter Card** — `summary_large_image`
- **hreflang** — `<link rel="alternate">` for PL and EN
- **Canonical URL** — per-locale
- **JSON-LD** — schema.org `Organization` + `WebSite` + `Product`
- **sitemap.xml** — both language versions with `changeFrequency` and `priority`
- **robots.txt** — `/api/` disallow, `host` declaration

---

## Scripts

```bash
# — Development —
npm run dev                   # dev server (Turbopack)
npm run build                 # production build
npm run start                 # production server

# — Code quality —
npm run type-check            # TypeScript (next typegen + tsc)
npm run lint                  # ESLint
npm run lint:fix              # ESLint with auto-fix
npm run prettier:check        # Prettier (check)
npm run prettier:write        # Prettier (fix)

# — Testing —
npm run test                  # all Vitest tests
npm run test:unit             # unit tests with coverage
npm run test:storybook        # Storybook component tests
npm run test:watch            # watch mode
npm run test:e2e              # E2E Playwright (requires build first)
npm run test:e2e:ui           # Playwright UI mode

# — Storybook —
npm run storybook:dev         # dev server (port 6006)
npm run storybook:build       # static build

# — Analysis —
npm run analyze               # bundle analyzer (ANALYZE=true)
```

---

## Health check

Monitoring endpoint available at multiple aliases:

```
GET /api/health
GET /healthz
GET /health
GET /ping
```

---

## License

Private project. All rights reserved © 2024–2025 Lithos 3D.
