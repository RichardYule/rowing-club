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
| R-02 | Capture and prioritise the site owner's improvement ideas | Owner has ideas not yet recorded anywhere. Add as new `R-xx` items, agree Now/Next/Later placement. |

## Next

| ID | Item | Notes |
| --- | --- | --- |
| R-04 | Enquiry form backend: Cloudflare Pages Function + Turnstile | Replace the `mailto:` fallback with a Pages Function (e.g. `/api/enquiry`) and Cloudflare Turnstile anti-spam. See the comment in `src/components/EnquiryForm.astro`. Needs an email-sending service (e.g. Resend/Mailgun) or Cloudflare Email Workers decision. |
| R-05 | Migrate remaining old WordPress news posts | 128 posts existed on the old site; only 2 migrated so far. Migrate a curated selection (recent + significant); leave the rest archived. |
| R-06 | `llms.txt` + AI-scraper policy decision | Decide whether to publish `llms.txt` for AI answer engines and whether to allow/block AI training scrapers via `robots.txt` / Cloudflare bot rules. See the "Non-human users" section of `information-architecture.md`. |

## Later

| ID | Item | Notes |
| --- | --- | --- |
| R-07 | Results Phase 2: unified results archive | Normalise results from rowresults.co.uk, regatta.time-team.nl and raceleader.co.uk into one searchable archive (event → race → crew → time). Needs a data model, per-source adapters, caching vs build-time decisions. Deliberately deferred — see decision D-04 in `decisions.md`. |
| R-08 | Per-event pages for hosted regattas | The IA keeps this door open ("per-event pages later if needed") once more than one hosted event needs draw/schedule/results detail. |
| R-09 | Joining-journey upgrades | Evidence: F-01, F-02, F-05, F-12, F-15, F-19, F-20, F-21, F-29, F-31. Candidates: audience-split cards; numbered joining process; per-squad enquiry routing; pricing-card fees with monthly+annual; capacity signalling on full categories; publish ancillary fees (racking); FAQ block (cost/age/commitment/safety); explicit cox recruitment incl. free learn-to-cox idea. |
| R-10 | Learn-to-row funnel improvements | Evidence: F-03, F-06, F-11, F-13, F-14, F-24, F-26. Candidates: numbered course structure; waiting-list capture with honest wait times; capacity messaging; product ladder (taster → course → squad); signpost commercial taster partners for casual demand; honest scope statements. |
| R-11 | Lake-status automation | Evidence: F-04, F-28, F-32. Candidates: status page/banner fed by live data (EA gauges / sensor) with plain-English thresholds rather than manual updates. |
| R-12 | Commercial-arm separation review | Evidence: F-07, F-08, F-10. Decide whether lake hire / hosted events warrant a subsite or dedicated landing pages (visiting-crew info, parking, course map). |
| R-13 | Fundraising & goodwill features | Evidence: F-09, F-17, F-18. Candidates: donate link in nav (if charity status confirmed); photographer credits; recruitment posts with salary bands. |
| R-14 | Online booking & member tools | Evidence: F-16, F-22, F-25. Evaluate off-the-shelf options: British Rowing justgo/ClubHub for course booking; Bookwhen/Gymflow-style booking; whether a members portal is ever warranted. Depends on R-04. |
| R-15 | Social feeds on homepage | Evidence: F-23. Embed Instagram and/or Twitter/X for freshness without editorial effort. Owner confirmed (R-03, Aug 2026): Twitter/X (@P_C_R_C) is the club's main public channel — regatta results and announcements — and Instagram the most visible; both are candidates. Check privacy/perf trade-offs. |
| R-16 | School-partnership offer page | Evidence: F-27. Market termly/yearly school rowing packages alongside public courses (leverages the lake). |
| R-17 | Adaptive/para-rowing visibility | Evidence: F-30. If PCRC runs (or could run) adaptive rowing, name the programme explicitly rather than a token accessibility mention. |
| R-18 | Alumni & parents section | Evidence: F-33. Lightweight engagement home for junior leavers' families and past members. |

## Done

| ID | Item | Shipped | Notes |
| --- | --- | --- | --- |
| R-00 | Initial site build (16 URLs from 34 WordPress pages) | Aug 2026 | IA, content, components, data files, redirects, news collection. See `information-architecture.md`. |
| R-01 | Competitor review of other rowing-club websites | Aug 2026 | 12 sites reviewed (7 clubs + PCRC current/new in batch 1; Tideway Scullers, City of Cambridge, Enable Leisure, Walton, Marlow in batch 2). Output: `matrix.csv`, one note per club in `reviews/clubs/`, `findings.md` F-01–F-33, roadmap items R-09–R-18. |
| R-03 | Confirm `consts.ts` TODOs with the committee | Aug 2026 | Confirmed with owner: email `enquiries@riuy.com` is real but must change before go-live; no public phone (email only); founded 1948 confirmed; socials are Instagram (`peterborough_city_rowing_club`), Facebook members-only group, Twitter/X (`@P_C_R_C`) — no Strava. Footer + SEO updated accordingly. |