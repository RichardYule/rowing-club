# Photo inventory & review queue

Every photo used on the site, where it came from, and its review status.
Photos were sourced from the club's own WordPress media library (already
published on the old site — the club obtains photo consent annually for all
members, specifically juniors).

**Club rules for photos** (agreed Aug 2026):

- No full names of members in file names or alt text — describe the scene
  instead ("a women's crew racing at St Neots").
- Consent status is assumed OK for photos previously published on the old
  site. If the club enables a welfare-officer approval step later, the
  "Approved" column below is the review queue.
- New photos added to the site must be listed here.

## Images in use

| File (`src/assets/images/`) | Used on | Alt text | Source (old media library) | Approved |
| --- | --- | --- | --- | --- |
| hero-lake-racing.jpg | Home hero | — (decorative; behind scrim) | 2023/06/IMG_5245.jpeg (Spring Regatta 2023) | assumed |
| hero-racing-eight.jpg | Events › regattas banner | A PCRC eight racing side by side at a summer regatta | 2022/06/IMG_6374-scaled.jpeg (Nottingham City Regatta) | assumed |
| squad-men-eight.jpg | Squads › Men | A PCRC eight racing at the Peterborough Jubilee Regatta | 2022/06/IMG_6669.jpeg | assumed |
| squad-women-quad.jpg | Squads › Women | A PCRC women's crew racing at St Neots Regatta | 2026/07/St-Neots-…-Sarah-Watson.jpg | assumed |
| juniors-nationals.jpg | Squads › Juniors | PCRC juniors racing at the National Schools Regatta | 2026/06/image005.jpg | assumed |
| racing-home-lake.jpg | Squads › Development | A PCRC crew racing side by side in the summer season | 2026/06/IMG_8387.jpg (Henley Women's Regatta) | assumed |
| history-50th-reunion.jpg | Squads › U3A · About › history | Members and friends at the 50th-anniversary reunion row | 2026/05/PCRC-50th-anniversary-…-2026.jpg | assumed |
| learn-to-row-adults.jpg | Learn to Row › Adult | New rowers at a club event on the lake | 2025/07/Row-Rhythm-Fest-25_Group-25-July-3-scaled.jpg | assumed |
| juniors-podium.jpg | Learn to Row › Junior | PCRC juniors representing the Eastern Region at JIRR | 2025/04/PCRC_2025-4_3_…JIRR-Eastern-Region-team.jpg | assumed |
| coaching-launch.jpg | Learn to Row › Coaching | A PCRC coach interviewed about the inclusive rowing programme | 2025/03/Row-the-Rhythm-Mar-25-Picture1…ITV-Anglia.jpg | assumed |
| squad-men-quad.jpg | About › facilities | A PCRC quad out training on the lake | 2022/01/PCRC-New-Years-Day-Race-2022-…-quad.jpg | assumed |
| boat-naming-2025.jpg | About › club life | Members naming seven new club boats in April 2025 | 2025/04/DSC_3084-e1745930001228.jpg | assumed |
| racing-eight-2023.jpg | Support › volunteering | Crews and volunteers on the water on race day | 2023/03/IMG_0139-scaled.jpeg | assumed |
| clubhouse-demolition-2023.jpg | Support › the extension · news post | The old conservatory being demolished in 2023 | 2023/07/PCRC-building-extension-project-…-2.jpg | assumed |
| buy-a-brick.jpg | Support › the extension | An engraved brick bought by a supporter | 2019/01/PCRC-Buy-a-brick-example-1-copy.jpg | assumed |
| membership-kit-all-in-one.png | Membership › kit | The PCRC racing all-in-one in royal blue and old gold | 2018/08/Peterborough_AIO_480x480-1.png | assumed |
| racing-sculler-2023.jpg | Lake hire | A sculler on the water — calm conditions | 2023/04/DSC06193-scaled.jpeg (Bedford Head) | assumed |

### In the library but not currently placed

`squad-juniors-crew.jpg`, `squad-juniors-pair.jpg`, `squad-women-masters.jpg`,
`juniors-nationals.jpg` (also used), `racing-masters-quad.jpg`,
`racing-women-quad.jpg`, `learn-to-row-inclusive.jpg`, `regatta-banner.jpg`,
`regatta-pair-2022.jpg` — keep for future pages/news posts.

### News post photos (`src/content/news/`)

| File | Post | Source | Approved |
| --- | --- | --- | --- |
| summer-regatta-2026.jpg | Summer Regatta round-up | 2023/06/IMG_5245.jpeg | assumed |
| extension-build-2023.jpg | Extension opening | 2023/07/PCRC-building-extension-project-…-2.jpg | assumed |

## How images are optimised (performance)

All photos go through `astro:assets` at build time via the
`src/components/SitePicture.astro` wrapper:

- **AVIF + WebP** variants, quality 50; JPEG only as the last-resort fallback.
- **Responsive widths** (480/768/1200 for section photos, up to 1600 for
  full-width heroes/banners) with per-use `sizes` attributes — phones never
  download desktop-sized files. Sources are never upscaled.
- **Lazy loading** everywhere except the single home-page hero, which is
  `eager` + `fetchpriority="high"` (it is the LCP element).
- Intrinsic `width`/`height` attributes always set → no layout shift (CLS).
- Output is hashed static files under `/_astro/`, covered by the immutable
  cache headers in `public/_headers`.

Budgets: hero ≤ ~120 KB per variant, cards ≤ ~50 KB. Originals in
`src/assets/images/` may be large — the build re-encodes them, so do not
"pre-compress" into mush; 1–2 MB JPEGs are ideal source material.
