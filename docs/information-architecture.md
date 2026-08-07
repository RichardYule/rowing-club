# Information Architecture — PCRC Site Redesign

Audit of <https://peterboroughcityrowing.co.uk/> (WordPress, 34 pages + 128 news posts +
hosted-event posts) and a proposed modern IA for this Astro project.

## Problems with the current site

1. **Thin, fragmented pages.** 34 pages, most under 400 words. Five squad pages
   (~130–510 words each), four Learn-to-Row pages, two near-identical course-record
   tables, two Big Build pages — all separately maintained, all sparse.
2. **Empty landing pages.** Home, About Us, Squads, Events, Learn to Row and Contact
   contain no page content at all — they exist only as menu parents and rely on
   widget/sidebar output.
3. **"About Us" is a dumping ground** of 9 unrelated items: policies, history, fees,
   facilities, social, welfare, clothing, a fundraising draw.
4. **The joining journey is split across three sections**: Membership (under About),
   Join Us form (under Squads), and the Learn-to-Row sign-up form — three different
   places a prospective member must find.
5. **"Events" mixes four different things**: regattas the club *hosts*, events the club
   *attends* (schedule), course records, and past results (an empty page).
6. **A dated fundraising campaign ("The Big Build", started 2018) is top-level nav**,
   equal in weight to joining the club.

## Audiences (user types)

Brainstormed user types for the PCRC site. ✳ marks audiences beyond the
obvious starting list (members, committee/coaches, learn-to-row, regatta
visitors, local press, community, bots, hackers).

### Primary — people who might join, or already belong

| Audience | What they need from the site | Where the IA serves them |
| --- | --- | --- |
| Members (competitive) | session info, race calendar, entries, kit, welfare contacts | `/squads/`, `/events/`, `/crew-entries/`, `/membership/#kit` |
| ✳ Social / non-rowing members | social calendar, club nights (Wed bar). Serve existing social members, but **do not promote**: no social tier on the membership page, no join path (club decision) | `/about/#social` (low-key), `/events/` |
| Committee members & coaches | policies, welfare docs, contact directory, regatta logistics | `/policies/`, `/welfare/`, `/contact/` |
| People wanting to learn to row | course dates, cost, commitment, what to expect, sign-up form | `/learn-to-row/` |
| ✳ Experienced rowers joining/transferring | squad standard, training times, fees, "can I just turn up?" | `/squads/` + `/membership/` (distinct from the LTR path) |
| ✳ Parents & guardians of juniors | safeguarding assurance, costs, kit list, session times, who to contact | `/squads/#juniors` + `/welfare/` (link prominently) |
| ✳ Junior rowers (13–18) themselves | mobile-first content, photos, results, people like them | `/squads/#juniors`, `/news/` |

### Regatta-day audiences — one event, three crowds

| Audience | What they need | Where |
| --- | --- | --- |
| ✳ Visiting competitors & their coaches | draw, schedule, course info, trailer parking, rules, results | `/events/` hosted-regatta sections |
| ✳ Spectators & families | directions, parking, food, viewing spots, "what am I watching?" | `/events/` + `/contact/` (map/directions) |
| PCRC's own racing members | entries, timetable | `/events/`, `/crew-entries/` |

### Community & external

| Audience | What they need | Where |
| --- | --- | --- |
| Local press / media | checkable facts, photos, recent results, a named contact | `/news/`, `/contact/` |
| Peterborough community | what the club is, open days, community value | `/`, `/about/` |
| ✳ Other clubs / lake hirers | facilities spec, hire terms, contact | `/lake-hire/` |
| ✳ Sponsors & donors (confirmed active — several company sponsors in the last year) | credibility, reach, recognition, how to sponsor/give | `/support/` + homepage CTA banner |
| ✳ Volunteers & officials (confirmed wanted) | "help run a regatta", roles, who to contact | `/support/`, `/events/`, `/contact/` |
| ✳ Schools & community groups | taster sessions, junior programmes, partnerships (cf. U3A) | `/learn-to-row/`, `/contact/` |
| ✳ Alumni / former members | club history, reconnecting, 100 Club, donating | `/about/#history`, `/support/` |
| ✳ Funders & authorities (council, Sport England, British Rowing) | evidence of governance, safeguarding and community impact | `/about/`, `/policies/`, `/welfare/` |
| ✳ Students (ARU Peterborough / UCP) | a local club to join | sub-type of "experienced rowers" |

### Non-human users

| Bot | Stance | Action |
| --- | --- | --- |
| Search crawlers (Google/Bing) | Welcome | static HTML, sitemap, fast pages — already in place |
| ✳ AI answer engines (ChatGPT, Perplexity, AI Overviews) | Welcome — increasingly the "front door" for "rowing club near me" | keep key facts (fees, location, course dates) as plain on-page text; consider `llms.txt` |
| ✳ AI training scrapers | Policy choice | allow or block via `robots.txt` / Cloudflare bot controls |
| ✳ Social preview crawlers (Facebook, WhatsApp, X) | Welcome | OG/Twitter meta — already in `SEO.astro` |
| Archivers (Wayback Machine) | Neutral | allow |

### Adversarial users

| Threat | Realistic target on a static site | Mitigation |
| --- | --- | --- |
| Form spammers | join / contact / enquiry forms — the #1 practical risk | Cloudflare Turnstile on every form |
| Account attackers | the GitHub & Cloudflare accounts behind the site, not the site itself | 2FA everywhere, least-privilege API tokens |
| Supply-chain attackers | npm dependencies | minimal deps, lockfile committed, `npm audit` |
| (Legacy CMS/plugin exploits) | — | **eliminated** — static hosting removes the old WordPress attack surface entirely |

Cross-cutting needs: mobile-first (juniors, regatta-day spectators on phones),
accessibility (screen readers; U3A and alumni skew older), and speed on
patchy riverside mobile signal.

## Design principles

- Audience-first: prospective members (adults, juniors/parents, experienced rowers)
  are the priority; then current members; then visitors/other clubs.
- Flat navigation: ≤7 top-level items, **no dropdowns**, no dead-end landing pages.
- One obvious conversion path: a persistent **"Join Us"** call-to-action.
- Every section page is a real page with content, scannable via anchor sections.

## Proposed sitemap

```text
/                        Home — hero, intro, next events, latest news, Join CTA
├── /about/              About the Club — history, facilities, social life
├── /squads/             Squads — Men's, Women's, Junior, Development, U3A (anchor sections)
├── /learn-to-row/       Learn to Row — adult courses, junior courses, coaching + enquiry form
├── /events/             Events — hosted regattas, race calendar, results
│   └── /events/course-records/   Course records (500m + 1000m tables together)
├── /news/               News (Astro content collection)
├── /contact/            Contact — form, committee/welfare contacts, map & directions
└── /membership/         ★ "Join Us" CTA — fees, how to join, join form, kit/clothing

Utility (footer only, not in nav):
├── /welfare/            Safeguarding, welfare & safety
├── /policies/           Club policies (PDF index)
├── /lake-hire/          Lake & facility hire (for other clubs)
├── /support/            Support the Club — sponsorship, volunteering, the completed extension project, 100 Club
├── /crew-entries/       Crew entries (members)
├── /privacy-policy/     Privacy policy
└── /404/                Not found
```

**Primary nav:** About · Squads · Learn to Row · Events · News · Contact — plus a
**Join Us** button → `/membership/`. Home is reached via the logo (standard pattern).
`/support/` is deliberately not in the nav: it gets a persistent footer slot, a
homepage CTA banner, and contextual links (`/events/` → volunteer at a regatta;
`/membership/` → social tier). If sponsorship becomes a strategic priority it can
swap into the nav (e.g. in place of News). Social membership is not promoted: no
social tier on `/membership/` and no "rowing or social" choice in the join form
(club decision — existing social members are served, new ones are not encouraged).

## Page-by-page disposition (34 current pages)

| Current page | Size | Decision | Goes to / rationale |
| --- | --- | --- | --- |
| Home | empty shell | **Keep** `/` | Rebuild with real intro + CTAs |
| About Us | empty shell | **Merge** | Rebuilt as content-rich `/about/` |
| ├ Club History | 434w | **Merge** | `/about/` history section |
| ├ Facilities and Lake Hire | 217w | **Merge** | `/about/` facilities section |
| │ └ Lake Hire | 187w | **Keep** `/lake-hire/` | Distinct audience (other clubs) + search value; linked from About & footer |
| ├ Social Activities | 186w | **Merge** | `/about/` social section — kept low-key; serves existing social members, no join path |
| ├ Membership (fees) | 379w | **Keep** `/membership/` | Promote to top-level conversion page |
| ├ Club Policies | 97w + PDFs | **Keep** `/policies/` | Compliance docs need a stable home; footer link |
| ├ Welfare and Safety | 5,066w | **Keep** `/welfare/` | Safeguarding must stay prominent (linked from Juniors); edit down |
| ├ Clothing | 222w | **Merge** | `/membership/` kit section |
| └ 100 Club | 203w | **Merge** | `/support/#100-club` |
| The Big Build | empty shell | **Archive** | `/support/#the-extension` — appeal complete: extension opened 1 Aug 2026; kept as a completed-project write-up inside Support the Club |
| ├ Buy a Brick | 127w | **Archive** | Donor thank-you inside `/support/#the-extension` |
| └ Our Building Plans | 384w | **Archive** | Folded into the completed-project story at `/support/#the-extension` |
| + Sponsorship & volunteering | new content | **Add** | `/support/` — sponsor stories (e.g. Bridewell's blades + volunteering day), regatta volunteer roles & sign-up |
| Squads | empty shell | **Merge** | Rebuilt as `/squads/` |
| ├ Mens Squad | 170w | **Merge** | `/squads/#men` |
| ├ Ladies Squad | 188w | **Merge** | `/squads/#women` (retitle "Women's Squad") |
| ├ Junior Squad | 510w | **Merge** | `/squads/#juniors` + link to `/welfare/` for parents |
| ├ Development Squad | 143w | **Merge** | `/squads/#development` |
| ├ U3A Rowing | 136w | **Merge** | `/squads/#u3a` |
| └ Join Us (form) | 116w | **Merge** | `/membership/` — fees + how to join + form on one page |
| Learn to Row | empty shell | **Merge** | Rebuilt as `/learn-to-row/` |
| ├ Adult Learn to Row | 236w | **Merge** | `/learn-to-row/#adult` |
| ├ Junior Learn to Row | 446w | **Merge** | `/learn-to-row/#junior` |
| ├ Learn to Coach | 360w | **Merge** | `/learn-to-row/#coaching` |
| └ Sign up for a course | 46w | **Merge** | enquiry form embedded in `/learn-to-row/` |
| Events | empty shell | **Merge** | Rebuilt as `/events/` |
| ├ Schedule of events | 316w | **Merge** | `/events/` race-calendar section |
| ├ Course Records: 500m | 623w | **Merge** | `/events/course-records/#500m` |
| ├ Course Records: 1000m | 939w | **Merge** | `/events/course-records/#1000m` |
| └ Results of Previous Years | empty | **Remove** | No content; link to external results systems from `/events/` instead |
| Crew Entries | 460w + form | **Keep** `/crew-entries/` | Working member tool; footer link only |
| Contact us | empty shell | **Keep** `/contact/` | Rebuild: form, key contacts, map/directions |
| Privacy Policy | 206w | **Keep** `/privacy-policy/` | Legal; footer |
| News (128 posts) | — | **Keep** `/news/` | Astro content collection; migrate recent posts |
| Hosted events (e.g. Summer Regatta) | CPT | **Merge** | Featured cards on `/events/`; per-event pages later if needed |

**Result: 34 pages → ~16 URLs**, and a nav of 6 items + CTA instead of 5 sections
with hidden submenus.

## Redirects (preserve search ranking)

Cloudflare serves `public/_redirects` — add rules mapping old WordPress URLs, e.g.:

```text
/about-us/                    /about/                  301
/about-us/club-history/       /about/#history          301
/about-us/facilities/         /about/#facilities       301
/about-us/social-activities/  /about/#social           301
/about-us/membership/         /membership/             301
/about-us/club-policies/      /policies/               301
/about-us/safety-welfare/     /welfare/                301
/about-us/clothing/           /membership/#kit         301
/about-us/100-club/           /support/#100-club       301
/squads/mens-squad/           /squads/#men             301
/squads/womens-squad/         /squads/#women           301
/squads/junior-squad/         /squads/#juniors         301
/squads/development-squad/    /squads/#development     301
/squads/u3a-rowing/           /squads/#u3a             301
/squads/join-form/            /membership/             301
/learn-to-row-adult/          /learn-to-row/#adult     301
/learn-to-row-junior/         /learn-to-row/#junior    301
/learn-to-coach/              /learn-to-row/#coaching  301
/learn-to-row-form/           /learn-to-row/#enquiry   301
/events/timetable/            /events/#calendar        301
/events/course-records-500m/  /events/course-records/#500m   301
/events/course-records-1000m/ /events/course-records/#1000m  301
/the-big-build/               /support/#the-extension  301
/the-big-build/buy-a-brick/   /support/#the-extension  301
/the-big-build/our-building-plans/ /support/#the-extension  301
```

## What changes in this repo

- **Kept and repopulated** with PCRC content: `/`, `/about/`, `/membership/`,
  `/events/`, `/contact/`, `/404/`.
- **Added:** `squads.astro`, `learn-to-row.astro`, `welfare.astro`, `policies.astro`,
  `support.astro`, `lake-hire.astro`, `crew-entries.astro`, `privacy-policy.astro`,
  `events/course-records.astro`, and `/news/` (index + article pages) backed by an
  Astro content collection.
- **Data:** sponsors and regatta volunteer roles are typed data
  (`src/data/sponsors.ts`, `src/data/volunteering.ts`); course records live in
  `src/data/course-records.ts`. No social tier in `src/data/membership.ts`
  (club decision).
- **Updated:** `src/consts.ts` (club name, contacts, nav links), Header/Footer nav,
  `site` in `astro.config.mjs` → <https://peterboroughcityrowing.co.uk>,
  `src/data/events.ts` & `membership.ts`, `public/robots.txt`, and
  `public/_redirects` per the table above.
- **Forms:** one consolidated `EnquiryForm` component (`/contact/`) with topic
  routing replaces the four WordPress forms — see decision 3 below.
- **News authoring:** step-by-step guide for the press secretary lives at
  `docs/adding-news.md` — see decision 2 below.

## Confirmed decisions

- Sponsors and volunteers are actively wanted → dedicated `/support/` page.
- Social members exist but are not to be encouraged → social content stays
  low-key in `/about/`; no social membership tier, no social join path.

### Decisions from the club (Aug 2026)

Answers to the six open questions, and how each is handled in this build:

1. **The Big Build → the completed extension.** The appeal ended as a smaller
   build: the conservatory was replaced by a large multi-purpose room and the
   kitchen was extended. The extension was **officially opened on 1 Aug 2026**.
   Handled as: a completed-project archive section at `/support/#the-extension`
   (what was built, thank-you to donors and Buy-a-Brick supporters), with
   fundraising CTAs now pointing at sponsorship rather than the building fund.
2. **News is written by the press secretary.** The site must make adding text
   and pictures easy for a non-developer. Handled as: an Astro content
   collection (`src/content/news/`) — one Markdown file + images per post,
   editable entirely in the GitHub web interface with no tooling to install.
   Step-by-step instructions: `docs/adding-news.md`.
3. **Forms are consolidated, not replaced one-for-one.** The four WordPress
   forms (join, learn-to-row, crew entries, contact) become **one enquiry form**
   on `/contact/` with a "topic" selector that routes the enquiry to the right
   committee member. Contextual CTAs across the site (membership, learn-to-row,
   crew entries, volunteering, sponsorship, lake hire) link to
   `/contact/?topic=…` with the right topic pre-selected. Anti-spam via
   Cloudflare Turnstile once the form posts to a Pages Function; until then a
   `mailto:` fallback keeps it functional.
4. **Results: link out now, build clever later.** Long-term ambition: the
   cleverest club site in the UK, pulling results from every system UK regattas
   use — [rowresults.co.uk](https://rowresults.co.uk),
   [regatta.time-team.nl](https://regatta.time-team.nl/nsr/2026/draw/events.php)
   (and its [beta](https://beta.regatta.time-team.nl/nsr/2026)) and
   [raceleader.co.uk](https://www.raceleader.co.uk/Results/Regatta/121) — plus a
   modern archive of every past PCRC regatta. **Phase 1 (this build):** a Results
   section on `/events/` linking to PCRC's pages on each external system, and
   course records rebuilt as modern tables at `/events/course-records/`.
   **Phase 2 (future, deliberately not started):** normalising/scraping those
   systems into a single searchable results archive. Needs a data model
   (event → race → crew → time), per-source adapters, and decisions on caching
   vs. build-time fetching — a project in its own right.
5. **Sponsorship is story-led.** The club has sponsors but no programme yet;
   the page should show what sponsorship achieves. Seed example:
   [Bridewell](https://bridewell.com) gave **£500 for a new pair of blades for
   the junior girls' squad (2025)** and sent **8 volunteers for a day** to strip
   the old railings around the extension ready for painting. Sponsors and
   benefits live in `src/data/sponsors.ts` so logos/stories are easy to extend.
6. **Volunteering roles are defined.** Regatta-day roles (typed data in
   `src/data/volunteering.ts`): Commentary (experience required — speak to
   John Canton), Start Timing, Start Marshal 100/200 m, CC Recorder (crews to
   the start), Landing Stages (boat flow + number collection), Finish Timing &
   Results, Cyclists for paperwork (times TBC), Stakeboat Supervisor, Stakeboat
   Operators, BBQ, Clubhouse Catering Stall, Clubhouse Bar, Pimms Stall.
   Non-regatta opportunities are ad hoc (working parties, painting, events) —
   the page invites people to register interest rather than listing fixed roles.
