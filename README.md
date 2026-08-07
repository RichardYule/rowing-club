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
├── docs/                   # IA audit + the news-authoring guide
├── public/                 # Static assets served as-is
│   ├── _headers            # Cloudflare cache rules (immutable /_astro assets)
│   ├── _redirects          # 301s from the old WordPress URLs
│   ├── robots.txt          # Allows crawlers, points to the sitemap
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
  Items marked `TODO` (email, phone, founding year, social handles) need
  confirming with the committee.
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
