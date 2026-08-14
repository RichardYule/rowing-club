# Review findings

Synthesis of the club-by-club reviews: recurring patterns, best-in-class
examples per criterion, and anything worth adapting. Each finding has a stable
ID (`F-xx`) that roadmap items cite as evidence. Newest first.

## Recurring patterns

- **Nobody has online joining/payment.** Every club ends its joining journey at a form or mailto; fees are always informational. (PCRC-new's one-page journey is already ahead here.)
- **Fees presentation varies wildly** — pricing cards (Nottingham), wide tables (PCRC-current), inline text blobs (Thames). Scannability is the differentiator.
- **Honesty converts.** The best funnels state capacity/wait/scope plainly: Wallingford strikes through full categories, Nottingham says "2026 courses are full", Leeds publishes its 6-month wait, Thames says it has no juniors/LTR.
- **Commercial arms get separated.** Thames (events), Lea (regattas, weddings), Nottingham (boat club venue) all spin revenue activities onto subsites, keeping the club site focused.
- **Member tooling is universally weak** except Lea's dedicated portal. Most clubs have nothing beyond a mailto.
- **Dated builds accumulate accessibility debt**: broken heading hierarchies (Wallingford, PCRC-current, Lea), unlabelled icon links (Nottingham), decorative characters read aloud (Nottingham).
- **Big clubs are thin on juniors/LTR by design** (Thames), while community clubs lead with them (Leeds, Wallingford). PCRC's LTR + junior focus matches the community-club pattern.
- **Online booking exists — but only outside the clubs.** A leisure trust books everything via Bookwhen/Gymflow (Enable Leisure) and one club routes LTR booking through British Rowing's justgo (Cambridge); no club has native booking. Off-the-shelf tools are the realistic path.
- **Heading-hierarchy chaos is near-universal** on template builds (Tideway h1→h4, Cambridge h4/h5/h6, Marlow multiple h1s) — reinforces that PCRC-new's semantic HTML is a durable accessibility edge.
- **Live water/status data is embeddable.** Walton embeds Thames Conditions/GaugeMap with a plain-English threshold; Marlow runs a status banner site-wide. Lake status can be automated, not hand-updated.

## Best in class, by criterion

| Criterion | Best | Why |
| --- | --- | --- |
| First impression | Thames | Full-bleed photography, clean nav |
| Joining journey | Tideway Scullers | Numbered process, per-squad application forms, monthly+annual pricing |
| Learn-to-row path | Enable Leisure | Complete bookable ladder taster→membership (best club-based: Leeds, Marlow) |
| Juniors & parents | Marlow | Largest junior squad, tiered evidence, alumni/parents section |
| Content depth | Wallingford | Fresh monthly news, detailed squad copy |
| Events & results | Thames | Events as standalone commercial subsite |
| Mobile | Leeds / Thames | Squarespace responsive builds |
| Performance | PCRC (new) | Static Astro on Cloudflare, ~300 ms load |
| Accessibility | PCRC (new) | Skip link, landmarks, alt text, `lang` |
| SEO | PCRC (new) | JSON-LD, OG/Twitter, sitemap, robots.txt |
| Design & branding | Thames | Premium photography-led identity |
| Contact & enquiries | Leeds | Embedded forms + prefilled mailtos |
| Member tools | Lea | Dedicated members portal |
| Standouts | Leeds / Marlow | Cox recruitment + waiting lists; adaptive rowing, free learn-to-cox, venue hire |

## Findings

- **F-01 · 2026-08-14 · Achievement-led squad marketing** — Lead squad sections with countable results ("11 GB vests in 2025", Victor Ludorum wins), not adjectives. *Wallingford.* → R-09
- **F-02 · 2026-08-14 · Capacity signalling on fees** — Strike-through or badge membership categories that are full. *Wallingford.* → R-09
- **F-03 · 2026-08-14 · Indoor learn-to-row course** — Low-commitment (£40/4 weeks) indoor course as a funnel into water courses. *Wallingford.* → R-10
- **F-04 · 2026-08-14 · Water-status page in main nav** — River status given a nav slot; PCRC equivalent is lake status. *Wallingford.* → R-11
- **F-05 · 2026-08-14 · Pricing-card fee presentation** — Monthly alongside annual on scannable cards rather than a wide table. *Nottingham.* → R-09
- **F-06 · 2026-08-14 · Honest course-capacity messaging** — "2026 courses are full — watch for 2027" keeps demand warm without losing leads. *Nottingham.* → R-10
- **F-07 · 2026-08-14 · Venue hire as separate subsite** — Keeps the club site focused while monetising facilities. *Nottingham.* → R-12
- **F-08 · 2026-08-14 · Dedicated events subsite/socials** — Hosted regattas commercialised as a standalone brand. *Thames.* → R-12
- **F-09 · 2026-08-14 · Donate in main nav** — Fundraising made prominent for charity-status clubs. *Thames.* → R-13
- **F-10 · 2026-08-14 · Visiting-crew page** — Parking, boathouse, course map for visiting rowers; PCRC hosts visiting crews for lake hire. *Thames.* → R-12
- **F-11 · 2026-08-14 · Honest scope statements** — Say plainly what the club does *not* offer to prevent wasted enquiries. *Thames.* → R-10
- **F-12 · 2026-08-14 · Audience-split "Get Involved" cards** — Separate paths for beginners, experienced rowers, and coxes. *Leeds.* → R-09
- **F-13 · 2026-08-14 · Numbered LTR course structure** — Show the course as numbered steps (ergo → water → novice sessions → pathway choice). *Leeds.* → R-10
- **F-14 · 2026-08-14 · Waiting-list capture with honest wait times** — Convert demand even when courses are full. *Leeds.* → R-10
- **F-15 · 2026-08-14 · Dedicated cox recruitment path** — Coxes are scarce; market to them explicitly. *Leeds.* → R-09
- **F-16 · 2026-08-14 · Separate members portal** — Public site stays simple; members get real tools (join, event sign-up, directory). *Lea.* → R-14
- **F-17 · 2026-08-14 · Photographer credits in footer** — Cheap goodwill with club photographers. *Lea.* → R-13
- **F-18 · 2026-08-14 · Recruitment posts with salary bands** — Signals a professional, funded organisation. *Lea.* → R-13
- **F-19 · 2026-08-14 · Per-squad application forms** — Route each application to the right squad's form rather than one generic enquiry. *Tideway Scullers.* → R-09
- **F-20 · 2026-08-14 · Numbered joining process** — State the steps (apply → review → membership form) so applicants know what happens next. *Tideway Scullers.* → R-09
- **F-21 · 2026-08-14 · Publish ancillary fees** — Racking/boat-storage prices alongside membership, not hidden. *Tideway Scullers.* → R-09
- **F-22 · 2026-08-14 · Book LTR via British Rowing justgo/ClubHub** — NGB handles payments/bookings; no custom backend. *City of Cambridge.* → R-14
- **F-23 · 2026-08-14 · Embed the club Instagram feed** — Homepage freshness without editorial effort. *City of Cambridge.* → R-15
- **F-24 · 2026-08-14 · Partner-route for casual LTR demand** — Signpost commercial taster providers; keep the club course focused on joiners. *City of Cambridge.* → R-10
- **F-25 · 2026-08-14 · Third-party booking systems (Bookwhen/Gymflow)** — Off-the-shelf course booking with payments. *Enable Leisure.* → R-14
- **F-26 · 2026-08-14 · Product ladder from taster to membership** — A clear next step at every level. *Enable Leisure.* → R-10
- **F-27 · 2026-08-14 · School-partnership offer** — Termly/yearly school rowing packages alongside public courses. *Enable Leisure.* → R-16
- **F-28 · 2026-08-14 · Live water-conditions embed** — Automated status with a plain-English threshold. *Walton.* → R-11
- **F-29 · 2026-08-14 · FAQ-style join page** — Answer cost/age/commitment/safety inline where people look. *Walton.* → R-09
- **F-30 · 2026-08-14 · Adaptive/para-rowing programme visibility** — A named inclusive programme beats token accessibility statements. *Marlow.* → R-17
- **F-31 · 2026-08-14 · Free learn-to-cox course** — Removes the pay barrier for the scarcest role. *Marlow.* → R-09
- **F-32 · 2026-08-14 · Status banner on every page** — Traffic-light water/safety status with zero clicks. *Marlow.* → R-11
- **F-33 · 2026-08-14 · Alumni/parents section** — Lightweight engagement home for leavers' families and past members. *Marlow.* → R-18