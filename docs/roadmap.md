# Roadmap

The single to-do list for site improvements. Every piece of planned work lives
here with a stable ID (`R-xx`) so decisions, reviews and commits can reference it.

**How to use it:**

- Columns are **Now** (actively being worked on), **Next** (queued), **Later**
  (good ideas, deliberately not started) and **Done**.
- Each item: ID · title · status · notes (evidence, links, acceptance criteria).
- When work starts, move the item to **Now**. When finished, move it to **Done**
  with the date and the commit/PR that shipped it.
- Anything that changes direction gets an entry in
  [`decisions.md`](decisions.md); anything that inspires an item gets cited
  (e.g. "evidence: F-03" from [`reviews/findings.md`](reviews/findings.md)).
- Keep IDs stable — never renumber. If an item is abandoned, mark it
  `Abandoned` with a reason rather than deleting it.

## Now

| ID | Item | Notes |
| --- | --- | --- |
| R-01 | Competitor review of other rowing-club websites | Method, criteria and rubric in [`reviews/README.md`](reviews/README.md). Output: `matrix.csv` + one note per club + `findings.md`. Each actionable finding becomes a new roadmap item citing its finding ID. |
| R-02 | Capture and prioritise the site owner's improvement ideas | Owner has ideas not yet recorded anywhere. Add as new `R-xx` items, agree Now/Next/Later placement. |

## Next

| ID | Item | Notes |
| --- | --- | --- |
| R-03 | Confirm `consts.ts` TODOs with the committee | Public enquiry inbox, public phone number (or not), founding year (currently 1948, unconfirmed), real social handles. See `src/consts.ts`. |
| R-04 | Enquiry form backend: Cloudflare Pages Function + Turnstile | Replace the `mailto:` fallback with a Pages Function (e.g. `/api/enquiry`) and Cloudflare Turnstile anti-spam. See the comment in `src/components/EnquiryForm.astro`. Needs an email-sending service (e.g. Resend/Mailgun) or Cloudflare Email Workers decision. |
| R-05 | Migrate remaining old WordPress news posts | 128 posts existed on the old site; only 2 migrated so far. Migrate a curated selection (recent + significant); leave the rest archived. |
| R-06 | `llms.txt` + AI-scraper policy decision | Decide whether to publish `llms.txt` for AI answer engines and whether to allow/block AI training scrapers via `robots.txt` / Cloudflare bot rules. See the "Non-human users" section of `information-architecture.md`. |

## Later

| ID | Item | Notes |
| --- | --- | --- |
| R-07 | Results Phase 2: unified results archive | Normalise results from rowresults.co.uk, regatta.time-team.nl and raceleader.co.uk into one searchable archive (event → race → crew → time). Needs a data model, per-source adapters, caching vs build-time decisions. Deliberately deferred — see decision D-04 in `decisions.md`. |
| R-08 | Per-event pages for hosted regattas | The IA keeps this door open ("per-event pages later if needed") once more than one hosted event needs draw/schedule/results detail. |

## Done

| ID | Item | Shipped | Notes |
| --- | --- | --- | --- |
| R-00 | Initial site build (16 URLs from 34 WordPress pages) | Aug 2026 | IA, content, components, data files, redirects, news collection. See `information-architecture.md`. |