# Jason Huang — Portfolio Website

Production portfolio for **Yisiyuan (Jason) Huang** — Software Engineer building
production AI systems end to end.

An editorial engineering portfolio with three evidence-backed case studies:

| Project | Route | Proof |
| --- | --- | --- |
| **PrismaSub** | `/work/prismasub` | Production ownership (live SaaS) |
| **Multimodal Video QA RAG** | `/work/multimodal-video-qa-rag` | Inspectable public code (GitHub) |
| **VLTNet** | `/work/vltnet` | Published research depth (ICPR 2024) |

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first design tokens, class-based dark mode)
- **Motion** (Framer Motion) for restrained scroll reveals (respects `prefers-reduced-motion`)
- **Lucide React** icons
- **@fontsource** — Newsreader (editorial serif) + Inter Variable (sans), installed locally, no remote font requests at build or runtime
- No backend, database, CMS, analytics, or third-party scripts

All content lives in one place: [`src/data/portfolio.ts`](src/data/portfolio.ts).

## Getting started

Requires Node.js 20.9+ (developed on Node 24).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run lint     # ESLint
npm run typecheck  # tsc --noEmit
npm run build    # production build
npm run start    # serve the production build
```

`next build` statically prerenders every page. The Open Graph image and
favicon are generated from code at build time — no remote assets.

> **Note on `next.config.ts`:** build workers run as worker threads so the
> project also builds in constrained preview environments. Next.js still runs
> its normal TypeScript validation during the production build, and
> `npm run typecheck` remains available as a separate fast check.

## Editing your information

1. Open [`src/data/portfolio.ts`](src/data/portfolio.ts) — every string on the
   site (hero, proof strip, experience, capabilities, case studies, contact,
   footer) is data in this file.
2. Page structure lives in `src/app/` and reusable components in
   `src/components/`.
3. Change the canonical/social domain in `siteConfig.siteUrl` (used by
   `sitemap.ts`, `robots.ts`, canonicals, and Open Graph URLs).

## Adding a Resume PDF

1. Drop the PDF at `public/resume/jason-huang-resume.pdf`.
2. In `src/data/portfolio.ts`, set `resumeUrl` to `"/resume/jason-huang-resume.pdf"`.

The Resume button is hidden automatically while `resumeUrl` is `null`. Do not
commit a fake or placeholder PDF — a missing file would 404.

## Adding a LinkedIn URL

In `src/data/portfolio.ts`, set `siteConfig.links.linkedin` to your profile
URL. While it is `null`, no LinkedIn button or `sameAs` JSON-LD entry is
rendered anywhere.

## Adding real project screenshots

The site uses Jason's confirmed portrait and real figures and trajectory demos
from the VLTNet research project. PrismaSub intentionally uses an architecture
diagram until confirmed product screenshots are supplied. To add one later:

1. Optimize it (e.g. `npx sharp-cli` or a compression tool) and put it in
   `public/projects/<slug>/`.
2. Use `next/image` (`import Image from "next/image"`) in the relevant case
   study page so it is served in modern formats with proper dimensions.
3. If the screenshot shows a real product UI, keep it accurate to the current
   product and caption it honestly (e.g. “PrismaSub desktop app”).

## Deploying to GitHub Pages

The site is configured as a static Next.js export and includes a GitHub Pages
workflow. To publish it:

1. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.
2. Push `main` to GitHub.
3. Follow the **Deploy portfolio to GitHub Pages** run under **Actions**. A
   successful run publishes the site at `https://jasonhysy.github.io/`.

No environment variables are required. The same static export can also be
hosted by another static provider later if needed.

## Content TODOs

The local `CONTENT_TODO.md` checklist tracks items still awaiting confirmation
(LinkedIn, GitHub profile, resume PDF, screenshots, and more). It is excluded
from the public repository; unconfirmed items are also hidden from the site.

## Route map

- `/` — home (hero, proof strip, selected work, experience, capabilities, about, education & publication, contact)
- `/work/prismasub` — PrismaSub case study
- `/work/vltnet` — VLTNet case study
- `/work/multimodal-video-qa-rag` — RAG case study
- `/sitemap.xml`, `/robots.txt`, `/icon.svg`, `/opengraph-image` — SEO assets
- any other path — custom 404 page
