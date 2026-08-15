# Peterborough City Rowing Club Website

A fast, SEO-friendly site for Peterborough City Rowing Club (PCRC), built with
**Astro 7**, **TypeScript (strict)** and **Tailwind CSS v4**, deployed to
**Cloudflare** as a fully static site.

The information architecture — including the audit of the old WordPress site
and the decisions behind this structure — is documented in
[`docs/information-architecture.md`](docs/information-architecture.md).
The club brand (logo, Royal Blue `#0367A6` / Old Gold `#CFB53B` palette,
fonts and usage rules) is documented in
[`docs/brand-kit.md`](docs/brand-kit.md).

Planned improvements and their progress are tracked in
[`docs/roadmap.md`](docs/roadmap.md) (the single to-do list, with stable
`R-xx` IDs); significant decisions are recorded in
[`docs/decisions.md`](docs/decisions.md) (`D-xx`). Research into other
rowing clubs' websites lives in [`docs/reviews/`](docs/reviews/README.md) —
its findings (`F-xx`) feed new roadmap items.

## Current state (Aug 2026)

- **Demo deployment** at <https://rowing-club.cloudflare-svc-763.workers.dev/> —
  not yet live on the real domain.
- **Deliberately de-indexed** from search engines while it's a demo
  (`SITE.indexable = false` in `src/consts.ts` + an `X-Robots-Tag` header —
  decision D-09).
- **All email addresses use the `riuy.com` test domain** until launch (D-06).
- **Site constants confirmed** with the owner (R-03): founded 1948, no public
  phone number, real socials (Instagram, members-only Facebook group,
  Twitter/X `@P_C_R_C`).
- **To go live:** follow the checklist in roadmap item R-19.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type-check with `astro check` |
| `npm run deploy` | Deploy with Wrangler (`wrangler deploy`) |

## Adding news (press secretary)

News posts are Markdown files in `src/content/news/` — no code required, and
everything can be done in the GitHub web interface. **Step-by-step guide:
[`docs/adding-news.md`](docs/adding-news.md).**

## Project structure

```text
├── astro.config.mjs        # Astro config: site URL, sitemap, Tailwind (Vite plugin)
├── tsconfig.json           # Strict TypeScript (extends astro/tsconfigs/strict)
├── wrangler.jsonc          # Cloudflare static-assets deployment config
├── docs/                   # IA audit, roadmap, decision log, guides
│   ├── roadmap.md          # Improvement backlog (Now/Next/Later/Done, R-xx)
│   ├── decisions.md        # Decision log (D-xx)
│   └── reviews/            # Competitor-site reviews (matrix.csv, findings F-xx)
├── public/                 # Static assets served as-is
│   ├── _headers            # Cloudflare cache rules + noindex while demo (D-09)
│   ├── _redirects          # 301s from the old WordPress URLs
│   ├── robots.txt          # Allows crawlers; sitemap line returns at launch (D-09)
│   └── images/             # og-image + news/ (post photos) + sponsors/ (logos)
└── src/
    ├── consts.ts           # Single source of truth: club name, contacts, nav links
    ├── content.config.ts   # News content collection (typed Markdown)
    ├── content/news/       # One Markdown file per news post
    ├── styles/global.css   # Tailwind v4 entry + @theme design tokens
    ├── data/               # Typed content (swap for a CMS later without touching UI)
    │   ├── events.ts       # Club calendar + hosted regattas
    │   ├── membership.ts   # Membership tiers (no social tier — club decision)
    │   ├── sponsors.ts     # Sponsor stories for /support/
    │   ├── volunteering.ts # Regatta volunteer roles for /support/
    │   ├── course-records.ts # Thorpe Meadows 500m/1000m records
    │   ├── contacts.ts     # Committee role inboxes for /contact/
    │   └── enquiry-topics.ts # Topics for the consolidated enquiry form
    ├── components/         # Reusable UI (SEO, Header, Footer, cards, forms…)
    ├── layouts/
    │   └── BaseLayout.astro# Shared <html> shell: SEO tags, header, footer, skip link
    └── pages/              # File-based routing, incl. news/, events/course-records/
```

## Customising

- **Club details** (name, contacts, address, socials): edit `src/consts.ts`.
  All values were confirmed with the owner in Aug 2026 (R-03); the email
  addresses intentionally use the `riuy.com` test domain until launch (D-06).
- **Colours & fonts**: edit the `@theme` block in `src/styles/global.css`
  (the `royal`/`gold` scales are the club colours — see `docs/brand-kit.md`).
- **Events / fees / sponsors / volunteer roles**: edit the typed data in `src/data/`.
- **The enquiry form** currently submits via the visitor's email client. To
  handle submissions server-side, add a Cloudflare Pages Function (e.g.
  `/api/enquiry`) with Cloudflare Turnstile, and point the form's `action` at
  it — see the comment in `src/components/EnquiryForm.astro`.

## Deploying to Cloudflare

The site builds to static files in `./dist` and is served via Wrangler static
assets (`wrangler.jsonc`). `npm run deploy` publishes it; connecting the
GitHub repo to Cloudflare gives automatic deploys on every push to `main`
(which is also how new news posts go live).

All pages are prerendered to static HTML, so no server runtime is required.