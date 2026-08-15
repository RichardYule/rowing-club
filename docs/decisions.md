# Decision log

Lightweight record of significant decisions — what was decided, when, why, and
what it means going forward. Newest first. Add an entry whenever a decision is
made that future work shouldn't have to re-derive (or accidentally undo).

Format: **D-xx · date · decision** — context, consequences.

---

- **D-09 · 2026-08-15 · Demo deployment is deliberately de-indexed until launch.**
  The site has strong SEO by design, but the public `workers.dev` demo URL must
  not appear in search results while the site is a demo (the URL is even linked
  from this public repo). All responses carry `X-Robots-Tag: noindex, nofollow`
  (`public/_headers`) and every page emits a meta robots noindex, driven by a
  single switch: `SITE.indexable` in `src/consts.ts`. `robots.txt` deliberately
  stays crawlable (`Allow: /`) so crawlers can fetch pages and see those
  signals — blocking crawling would hide the noindex and could still leave URLs
  indexed as bare links. The Sitemap line is removed until launch. **Before
  launch:** set `SITE.indexable = true`, remove the `_headers` block, restore
  the Sitemap line (roadmap R-19).

- **D-08 · 2026-08-14 · Improvement work is tracked in-repo (`docs/roadmap.md`), not GitHub Issues.**
  The site owner wanted a way to record planned improvements and progress.
  Chose in-repo Markdown docs over GitHub Issues/Projects: versioned with the
  code, readable by non-developers on GitHub, and readable/writable by AI
  coding agents each session. Roadmap items carry stable IDs (`R-xx`); anything
  that changes direction gets an entry here. GitHub Issues can still be adopted
  later for granular tracking without changing the roadmap's role as the
  strategic summary.

- **D-07 · 2026-08-14 · Competitor-review data lives in `docs/reviews/` (public, factual tone; CSV matrix + Markdown notes).**
  A review of other rowing clubs' sites will generate structured comparison
  data. It is research input, not site content, so it does not go in `src/data/`
  (which feeds the UI). Stored as: `matrix.csv` (one row per club, scores per
  criterion — opens in any spreadsheet), one `<club-slug>.md` note per club,
  and `findings.md` (synthesis with stable finding IDs `F-xx` cited by roadmap
  items). The repo is public, so notes are kept neutral and factual. If the
  club later prefers privacy, the folder can be gitignored or moved to a
  private repo without touching the pipeline.

- **D-06 · 2026-08-14 · All email addresses use the `riuy.com` test domain until launch.**
  The site is deployed from `main` on every push, so real club inboxes must
  not be wired up while testing. Every email on the site
  (`enquiries@`, `membership@`, `learntorow@`, `juniors@`, `welfare@`,
  `press@`, `sponsorship@`) uses the `riuy.com` catch-all domain instead of
  `peterboroughcityrowing.co.uk`. Website URLs and social links still point at
  the real domain (they are links, not inboxes). **Before launch:** switch all
  addresses back to the real domain once the enquiry inbox is confirmed (R-03).

- **D-05 · 2026-08-14 · British Rowing affiliation shown as a footer band.**
  The club's British Rowing affiliation is displayed in the footer using the
  supplied SVG/PNG brand assets, linking to British Rowing. Confirms
  credibility for funders, other clubs and visitors.

### Decisions from the club (Aug 2026)

- **D-04 · 2026-08 · Results: link out now, build clever later.**
  Long-term ambition: pull results from every system UK regattas use
  (rowresults.co.uk, regatta.time-team.nl, raceleader.co.uk) into a single
  searchable archive. Phase 1 (shipped): a Results section on `/events/`
  linking to PCRC's pages on each external system, plus course records
  rebuilt as modern tables. Phase 2 (roadmap R-07, deliberately not started):
  normalising those systems into one archive — needs a data model
  (event → race → crew → time), per-source adapters, and caching vs
  build-time decisions.

- **D-03 · 2026-08 · Forms are consolidated, not replaced one-for-one.**
  The four WordPress forms (join, learn-to-row, crew entries, contact) become
  one enquiry form on `/contact/` with a "topic" selector routing to the right
  committee member. Contextual CTAs across the site link to
  `/contact/?topic=…` with the topic pre-selected. Anti-spam via Cloudflare
  Turnstile once the form posts to a Pages Function (roadmap R-04); until then
  a `mailto:` fallback keeps it functional.

- **D-02 · 2026-08 · News is written by the press secretary.**
  The site must make adding text and pictures easy for a non-developer.
  Handled as an Astro content collection (`src/content/news/`) — one Markdown
  file + images per post, editable entirely in the GitHub web interface.
  Step-by-step instructions: `docs/adding-news.md`.

- **D-01 · 2026-08 · The Big Build becomes the completed extension; sponsorship is story-led; volunteering roles are defined.**
  The appeal ended as a smaller build (multi-purpose room + extended kitchen),
  officially opened 1 Aug 2026 — archived at `/support/#the-extension` with
  donor thanks; fundraising CTAs now point at sponsorship. Sponsors and
  benefits live in `src/data/sponsors.ts` (seed example: Bridewell's £500
  blades for the junior girls' squad, 2025, plus 8 volunteering days).
  Regatta-day volunteer roles are typed data in `src/data/volunteering.ts`;
  non-regatta volunteering invites interest rather than listing fixed roles.
  Social members exist but are not promoted: no social tier on `/membership/`,
  no social join path.