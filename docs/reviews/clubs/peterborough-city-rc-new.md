# Peterborough City Rowing Club — new Astro site (baseline)

- **URL:** <https://rowing-club.cloudflare-svc-763.workers.dev/>
- **Platform:** Astro 7 static site on Cloudflare (this repo)
- **Reviewed:** 2026-08-14
- **Overall:** 3.5 — strong structure/performance; form backend, content depth and member tools still to come
- **Matrix row added:** yes

## Scores

| # | Criterion | Score | Note |
| --- | --- | --- | --- |
| 1 | First impression | 4 | Real hero photo, H1, clear Join CTA; but hero image is generic racing stock-style, not unmistakably PCRC |
| 2 | Joining journey | 4 | Persistent Join Us button → `/membership/` with fees, how-to-join and enquiry form on one page; no online payment yet |
| 3 | Learn-to-row path | 4 | One page: adult + junior courses, costs, commitment, what to expect, embedded enquiry form with topic pre-selected |
| 4 | Juniors & parents | 4 | `/squads/#juniors` + prominent welfare links; safeguarding contacts clear; could add a parents' FAQ |
| 5 | Content depth & freshness | 3 | Every page has real content; only 2 news posts migrated (128 on old site); events data is placeholder-dated |
| 6 | Events & results | 3 | Hosted regattas + race calendar + modern course-record tables; results link out (Phase 1); no per-event pages yet |
| 7 | Mobile experience | 4 | Mobile-first Tailwind build, hamburger nav, responsive tables; tested at 390px |
| 8 | Performance | 5 | DCL 198 ms, load 304 ms, 10 resources; 558 KB mostly responsive images; static HTML on Cloudflare edge |
| 9 | Accessibility | 4 | Skip link, `lang`, semantic landmarks, alt text everywhere, focus states; full audit not yet run |
| 10 | SEO & findability | 4 | Titles/descriptions, OG/Twitter, JSON-LD, sitemap, robots.txt; domain not yet live so no ranking history |
| 11 | Design & branding | 4 | Coherent club brand (royal/gold, Montserrat), quality photography; some pages still text-heavy |
| 12 | Contact & enquiries | 3 | Consolidated enquiry form with topic routing — but currently `mailto:` fallback (no server backend); no map embed yet |
| 13 | Member tools | 2 | Crew-entries page is a mailto form; no booking, no member area, no calendar feed |
| 14 | Standouts | 3 | Course-record tables; news authoring for non-developers via GitHub web UI; consolidated topic-routed enquiry form |

## What's good

- One-page joining journey (fees + how to join + form together) — fixes the old site's core problem
- Blazing performance: static HTML, ~300 ms load, zero console errors
- Accessibility built in: skip link, landmarks, alt text, `lang`, focus states
- Full SEO stack: JSON-LD, OG/Twitter cards, sitemap, robots.txt
- News authoring workflow a non-developer can run from the GitHub web UI
- 301 redirects preserve all old WordPress URLs

## What's poor

- Enquiry form has no server backend (opens email client) — friction and no spam protection yet (R-04)
- News archive nearly empty (2 of 128 posts) (R-05)
- No map/directions block on contact page
- Member tools thin: crew entries via mailto, no booking/calendar integration
- Emails still on test domain (D-06) — launch blocker
- Several `consts.ts` TODOs unconfirmed (phone, founding year, socials) (R-03)

## Worth adapting

- (self — see findings for what competitors do better)

## Findings logged

- (to be added after competitor reviews identify gaps)