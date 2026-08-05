# Tideway Rowing Club Website

A fast, SEO-friendly marketing site for a rowing club, built with **Astro 7**, **TypeScript (strict)** and **Tailwind CSS v4**, ready to deploy to **Cloudflare Pages**.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
├── astro.config.mjs        # Astro config: site URL, sitemap, Tailwind (Vite plugin)
├── tsconfig.json           # Strict TypeScript (extends astro/tsconfigs/strict)
├── public/                 # Static assets served as-is
│   ├── _headers            # Cloudflare Pages cache rules (immutable /_astro assets)
│   ├── robots.txt          # Allows crawlers, points to the sitemap
│   └── images/og-image.svg # Social share (Open Graph) image
└── src/
    ├── consts.ts           # Single source of truth: club name, contacts, nav links
    ├── styles/global.css   # Tailwind v4 entry + @theme design tokens (club palette, fonts)
    ├── data/               # Typed content (swap for a CMS later without touching UI)
    │   ├── events.ts       # Club events + date formatting helper
    │   └── membership.ts   # Membership tiers
    ├── components/         # Reusable UI (SEO, Header, Footer, cards, CTA…)
    ├── layouts/
    │   └── BaseLayout.astro# Shared <html> shell: SEO tags, header, footer, skip link
    └── pages/              # File-based routing: index, about, membership, events, contact, 404
```

## Customising

- **Club details** (name, contacts, address, socials): edit `src/consts.ts`.
- **Colours & fonts**: edit the `@theme` block in `src/styles/global.css`.
- **Events / pricing**: edit the typed data in `src/data/`.
- **Site URL** (canonical links, sitemap, OG tags): update `site` in `astro.config.mjs`, `url` in `src/consts.ts`, and `Sitemap:` in `public/robots.txt`.

## Deploying to Cloudflare Pages

**Via the dashboard (recommended):**

1. Push this repo to GitHub/GitLab.
2. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Use build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Every push to `main` triggers a new build.

**Via Wrangler CLI:**

```sh
npm run build
npx wrangler pages deploy ./dist
```

All pages are prerendered to static HTML in `./dist`, so no server runtime is
required. To add server-rendered routes later (e.g. a `/api/contact` endpoint
for the enquiry form), install `@astrojs/cloudflare` and follow the commented
snippet in `astro.config.mjs` — Cloudflare Pages hosts both static assets and
[Pages Functions](https://developers.cloudflare.com/pages/functions/).
