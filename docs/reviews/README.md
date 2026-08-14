# Competitor review — other rowing clubs' websites

Research input for improving this site. **This folder is not site content** —
nothing here is built into the website; it exists to inform
[`../roadmap.md`](../roadmap.md).

Tone: **neutral and factual** (the repo is public — describe what a site does
or lacks, e.g. "no online joining path; enquiry via email only", not
judgemental commentary). See decision D-07 in [`../decisions.md`](../decisions.md).

## How it works (the pipeline)

1. Pick a club; review its site against the criteria below (mobile as well as
   desktop; note load speed and anything broken).
2. Add a row to `matrix.csv` (scores + platform + notes).
3. Write `clubs/<club-slug>.md` — what's good, what's poor, links, anything
   worth adapting. Screenshots can go in `clubs/screenshots/` if useful.
4. Log insights in [`findings.md`](findings.md) with a stable ID (`F-xx`).
5. Anything actionable becomes a roadmap item (`R-xx`) citing the finding.

## Criteria (proposed — edit this list before starting the review)

| # | Criterion | What to look for |
| --- | --- | --- |
| 1 | First impression | Does the homepage immediately say what/where the club is? Real photos? Clear next step? |
| 2 | Joining journey | How many clicks from landing to "I know how to join"? Fees visible? Online join or email-only? |
| 3 | Learn-to-row path | Course dates, cost, commitment, what to expect, sign-up route — all in one place? |
| 4 | Juniors & parents | Safeguarding reassurance, costs, kit, session times, named contact — findable without asking? |
| 5 | Content depth & freshness | Real content vs empty shells; news/results actually maintained; how stale? |
| 6 | Events & results | Race calendar, hosted-regatta info (draw/schedule/directions), results or links out |
| 7 | Mobile experience | Usable on a phone (nav, tables, forms); text size; tap targets |
| 8 | Performance | Rough load speed on mobile; image weight; obvious jank |
| 9 | Accessibility | Alt text, contrast, keyboard nav, heading structure (a quick pass, not an audit) |
| 10 | SEO & findability | Titles/descriptions, structured data, sitemap; does the club surface for "[town] rowing club"? |
| 11 | Design & branding | Coherent identity, quality photography vs stock/clip-art, dated vs current |
| 12 | Contact & enquiries | Form or email-only; named roles; map/directions; response expectations |
| 13 | Member tools | Anything self-service for members: crew entries, booking, member area, WhatsApp links |
| 14 | Standouts | Anything clever worth stealing — record it even if it fits no criterion |

## Scoring rubric

Score each criterion 0–5:

| Score | Meaning |
| --- | --- |
| 0 | Absent or broken |
| 1 | Poor — present but actively unhelpful |
| 2 | Basic — token effort, hard to find or thin |
| 3 | Adequate — does the job, no friction |
| 4 | Good — clear, complete, low friction |
| 5 | Excellent — best-in-class; worth copying |

`overall` is a holistic 0–5, **not** an average — a site can be excellent at
the one thing that matters (joining) and mediocre elsewhere.

## File conventions

- Club notes: `clubs/<club-slug>.md` — slug is lowercase-hyphenated, e.g.
  `clubs/leander-club.md`. Use the template in `clubs/_template.md`.
- Matrix: one row per club; keep column order stable; quote any note field
  containing commas.
- Findings: `F-xx` IDs, never renumbered; each finding cites the clubs that
  demonstrate it.