# PCRC Brand Kit (web-first)

The reference for how Peterborough City Rowing Club looks online: logo,
colours and fonts, where the assets live, and the rules for using them.

Scope: the website and digital assets. Kit, print and signage should follow
the same palette; formal print values (Pantone/CMYK) can be added once a
vector original of the crest is available (see "Sourcing" below).

---

## 1. Logo

### Assets

| File | Size | Use |
| --- | --- | --- |
| `public/images/brand/pcrc-logo-lockup.png` | 288×105 | Primary logo — crest + wordmark. Site header on ≥640 px screens. |
| `public/images/brand/pcrc-crest.png` | 95×105 | Crest only — small screens, favicons, social avatars. |
| `public/favicon.ico` | 16/32/48 | Browser tab icon (generated from the crest). |
| `public/images/apple-touch-icon.png` | 180×180 | iOS home-screen icon (crest on white). |
| `public/images/og-image.svg` | 1200×630 | Social share card (brand colours, no crest). |

### Usage rules

- **Clear space:** keep empty space around the logo of at least the height of
  the crest's shield on all sides.
- **Minimum size:** lockup 120 px wide on screen; crest 24 px high. Below
  that, the wordmark becomes illegible.
- **Backgrounds:** the current artwork is designed for light backgrounds
  (white or `royal-50`). Do not place it on royal blue or photos without a
  light panel behind it.
- **Don'ts:** don't recolour, stretch, rotate, add effects, or redraw the
  crest. Note the crest's printed gold is greener than the brand Old Gold —
  that stays *inside the crest artwork only* (decision, Aug 2026) and must
  not be sampled for other uses.

### Sourcing

These PNGs are the best available copies, taken from the previous website's
media library. **A vector original (SVG/AI/EPS/PDF) should replace them when
one can be obtained** — ask whoever handles kit/flag orders. To replace:
drop the new file(s) into `public/images/brand/` using the same names (or
update the two `<img>` paths in `src/components/Header.astro`), then
regenerate `public/favicon.ico` and `public/images/apple-touch-icon.png`
from the new crest.

---

## 2. Colours

### Primary palette

| Colour | Hex | RGB | Role | Why this value |
| --- | --- | --- | --- | --- |
| **Royal Blue** | `#0367A6` | 3, 103, 166 | Primary brand colour — headers, buttons, links | Sampled from the club crest. Sits in the same royal-blue family used by Peterborough United (~#0054A6–#0066CC), so it reads as "Peterborough sport" without copying anyone. |
| **Old Gold** | `#CFB53B` | 207, 181, 59 | Accent — calls to action, highlights, the support page | Canonical "Old Gold". The crest's printed gold is greener (#B7BA48); the club confirmed `#CFB53B` as the brand gold (Aug 2026). |
| **Navy** | `#193A5E` | 25, 58, 94 | Dark anchor — hero, footer, headings on light | Also from the crest; deepens Royal Blue for dark sections. |
| **Heritage Red** | `#D43935` | 212, 57, 53 | **Crest detail only — never in UI** | Present in the crest artwork; documented so it isn't accidentally adopted. |
| **White / off-white** | `#FFFFFF`, `#F0F7FC` | — | Backgrounds, reversed text | `royal-50` (#F0F7FC) is the tinted "paper". |

Neutral greys use Tailwind's `slate` scale (unchanged) for body text and
borders — they sit neutrally beside the brand colours.

### Colour scales (design tokens)

Declared in `src/styles/global.css` as `--color-royal-*` and `--color-gold-*`
(Tailwind v4 `@theme`). Use the token names in classes, e.g.
`bg-royal-700`, `text-gold-400`. **Change a value in that one file and the
whole site follows.**

| Token | Hex | Typical use |
| --- | --- | --- |
| `royal-50` | `#F0F7FC` | Page-section backgrounds |
| `royal-100` | `#DCEBF8` | Footer/border tints on navy |
| `royal-200` | `#B9D7F0` | Subtle borders, blockquote rules |
| `royal-300` | `#8ABDE4` | Decorative accents on dark |
| `royal-400` | `#559DD4` | Hover accents on dark |
| `royal-500` | `#2C80BF` | Mid blue (fills, gradients) |
| **`royal-600`** | **`#0367A6`** | **Royal Blue — links, eyebrows, focus rings** |
| `royal-700` | `#075889` | Primary buttons, badges |
| `royal-800` | `#124A70` | Button hover, section headings |
| `royal-900` | `#193A5E` | Navy — hero gradients, feature panels |
| `royal-950` | `#102A44` | Darkest — footer, hero base, text on gold |

| Token | Hex | Typical use |
| --- | --- | --- |
| `gold-300` | `#E5D073` | CTA hover |
| `gold-400` | `#DBC14F` | CTA background (Join us, banners) |
| **`gold-500`** | **`#CFB53B`** | **Old Gold — brand accent** |
| `gold-600`–`950` | `#AE982C` → `#383212` | Rarely needed; deep gold text on light |

### Accessibility rules (WCAG AA, tested)

| Combination | Contrast | Verdict |
| --- | --- | --- |
| White on `royal-600` | 6.0:1 | ✅ body text & buttons |
| White on `royal-700/800/900/950` | ≥ 6.8:1 | ✅ preferred for buttons |
| `royal-950` on `gold-400/500` | ≥ 7.1:1 | ✅ the standard gold-CTA pairing |
| **White on gold (any shade ≤ 500)** | ~2:1 | ❌ never — use `royal-950` text |
| `royal-600/700` links on white | ≥ 6.0:1 | ✅ |
| `gold-700`+ text on white | ≥ 4.6:1 | ✅ small print ok from 700 up |

Rule of thumb: **royal is the colour you read on; gold is the colour you
tap.** Gold always carries navy (`royal-950`) text, never white.

---

## 3. Typography

| Role | Font | Weights | Used for |
| --- | --- | --- | --- |
| Display | **Montserrat** | 600, 700, 800 | Headings, buttons, stats, the wordmark feel |
| Body | **Source Sans 3** | 400, 500, 600 | Paragraphs, forms, tables, captions |

Loaded from Google Fonts in `src/layouts/BaseLayout.astro`; declared as
`--font-display` / `--font-body` in `src/styles/global.css` and used via the
`font-display` / `font-body` classes.

Rules: headings sentence-case, bold (700) or extrabold (800) for heroes;
eyebrow labels in 600 uppercase with wide letter-spacing; never set body
copy in Montserrat.

**Changing fonts later:** edit the two `--font-*` lines in `global.css` and
the Google Fonts `<link>` in `BaseLayout.astro` — two lines, one link. (For
better privacy/performance you could self-host via
[Fontsource](https://fontsource.org) instead: install the packages and import
the CSS in `global.css`.)

---

## 4. What's *not* brand colour

The events calendar uses functional pill colours (amber/rose/emerald/slate)
to distinguish Regatta / Social / Course / Training / Club categories. Those
are UI semantics, not brand — don't use them as decoration elsewhere, and
don't "fix" them to royal/gold; the distinction aids scanning.

Error states use `rose-600`; the course-records migration notice uses amber.
Same rule: functional, not brand.

---

## 5. Where everything lives

```text
docs/brand-kit.md              ← this document
public/images/brand/           ← crest + lockup (source assets)
public/favicon.ico             ← browser icon
public/images/apple-touch-icon.png
public/images/og-image.svg     ← social share card (brand colours)
src/styles/global.css          ← @theme: royal/gold scales + fonts
src/components/Header.astro    ← logo in the site header
src/layouts/BaseLayout.astro   ← favicon links + font loading
```
