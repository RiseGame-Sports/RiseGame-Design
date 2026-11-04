Youth-sports software for leagues, coaches, parents and athletes. The through-line of the
brand is **upgrade** — better versions of things leagues already do. Not disruption, not
replacement.

**Brand in one line:** black field, white mark, neon green trail, rocket rising through the **R**.
Momentum, not sport-clipart.

---

## Sources this system was built from

Everything here is derived from the brand pack (logo masters and the brief, both in `docs/sources/`) plus the live public site.
No product source code, Figma file or app screenshots were provided.

| Source | What came from it |
|---|---|
| `docs/sources/design.md`: internal design brief, locked from Aaron's Sep 5 2026 logo pack, live risegame.com and the Aug 28 brand book | Color values, type roles, radius rules, product names + jobs, logo rules, do/don't list |
| The Sep 5 2026 logo pack (`*.png` / `*.ai` / `*.eps` / `*.psd`) | The marks in `assets/logos/` (PNGs trimmed and recolored programmatically); PNG masters in `docs/sources/` |
| `docs/sources/RG QR Code.jpg` | `assets/qr/risegame-qr-code.jpg` |
| https://risegame.com/ and https://www.risegame.com/products | Verbatim marketing copy, testimonials, nav structure, product one-liners |
| Referenced in the brief but **not supplied**: `/workspace/risegame-brand-guidelines.md` §5 (full voice), `/workspace/risegame-logos/from-site/risegame-logo.svg`, licensed font files | Gaps flagged below |

**Scope:** RiseGame only. **GroundsPal is a separate mark** — do not mix it into RiseGame
chrome until a GroundsPal chapter exists.

## Products

| Product | Job | Access |
|---|---|---|
| Tryout Scheduler | Parents sign up for tryout slots | https://signups.risegame.com |
| Tryouts By RiseGame | Coaches score athletes on the field | App Store / Play |
| Draft | Teams from evaluation scores | League Draft app |
| Reports | Parent-readable evaluation breakdown | After tryouts |
| Elevate | Year-round athlete tracking | App Store / Play |
| GroundsPal | League ops — separate brand | https://groundspal.com |

Connected flow for league admins: **Scheduler → Tryouts → Draft**, then Reports / Elevate as
relevant. Never say "Core". Elevate is Elevate. Do not invent interconnection claims.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, calm, precise. Momentum without panic. Practical, plain-spoken, written
from inside youth sports rather than above it. Warm about how hard volunteer-run leagues are;
never salesy, never corporate.

**The five moves that make it sound like RiseGame**

1. **Upgrade, not disrupt.** Frame everything as upgrading the league, teams, coaches and players.
2. **Insider, not vendor.** "Our team comprises parents, coaches, and board members who have
   traveled the complex journey of youth athletics." The origin story belongs near the front of
   anything long-form.
3. **Pain-point first, feature second.** Name the mess, then show the fix — the canonical example
   is the Scheduler line: *"Create time slots, share a link with parents, and let the system handle
   the rest — no phone calls, no spreadsheets, no chaos."*
4. **Transparency for parents.** The peek-behind-the-curtain angle — what do the coaches actually
   think about my player — is distinctive and no competitor says it out loud.
5. **Two audiences, two registers.** Admins and coaches get efficiency and fairness. Parents and
   players get visibility and development. Same voice, different proof points.

**Mechanics**

- Short sentences. Active verbs. One idea per line. Em-dash bullets.
- Tight beats thorough — when copy runs long, cut it.
- Headlines: short, present tense, product or job in the line. *"Simplify Your Tryouts With
  RiseGame."* *"Empower Youth Sports with RiseGame."*
- Second person for the reader ("your league", "your athlete"); first-person plural for RiseGame
  ("our team", "we recognize"). Never "I".
- **Title Case for marketing headlines** (as the live site does), sentence case for product-UI
  headings and labels, **UPPERCASE only** for nav, eyebrows, badges and tags.
- Say **evaluation scores**, not bare "scores".
- Name in type: **RiseGame** — one word, R and G capitalised.
- **No emoji.** Anywhere.
- No urgency language or styling: no countdowns, no "LAST CHANCE", no red alarms.
- No fabricated traction, testimonials or roadmap-as-live. Testimonials are verbatim from
  risegame.com/testimonials only.
- CTAs: one job per button. The locked league-admin meeting CTA is `info@risegame.com`; demo
  video is https://risegame.com/tutorials/. App Store links only when the message is
  app-download specific.

**Error and empty copy.** Explain, do not scold — "Add the name on the roster." Empty states name
the mess and offer the fix, in the product's own voice.

---

## VISUAL FOUNDATIONS

**The system in one sentence:** high-contrast black / white / neon, flat and tech, with one
accent doing all the work.

**Color.** Black `#000000` field, ink `#161616` headlines on light, white `#FFFFFF` marks and
surfaces, paper `#F2F2F2` chrome, mute `#666666` secondary text, and exactly one accent:
`#1DFE1B`. The logo trail `#78F951` lives **inside the mark files only** — it is never a second
button color. Retired / forbidden greens: HubSpot `#00FF03`, social `#7ED957`, site leftover
`#3EC96B`. Dark chrome adds `#0B0B0B` / `#161616` / `#242424` surfaces, `#2E2E2E` lines and
`#9A9A9A` muted type. Both chromes are legal: black with white type and neon accents, or white /
`#F2F2F2` with `#161616` type and neon buttons.

**Type.** Barlow Condensed 700 for every headline (line-height 1.02–1.08, no extra tracking);
Roboto for body, UI and buttons — 400 body, 500 links and buttons, 700 for nav, eyebrows, badges
and tags at 12px uppercase with 0.1em tracking. Two families, never a third. Fallbacks: Arial,
then system sans.

**Spacing and layout.** 4px base scale (4 → 128). Content max 1200px, prose max 720px. Marketing
sections run 96px vertical (48px tight); product UI works on 16 / 24px gutters. Controls are 32 /
40 / 48px tall; app rows and tab bars never go below the 44px tap minimum. Layout is a plain
top-to-bottom stack of full-width bands — dark band, light band, dark band — with the header fixed
in the marketing chrome and app tab bars pinned to the bottom. No sticky sidebars, no floating
action buttons.

**Corner radii.** 2px on web buttons (that is what the site ships). 2–8px across new product UI:
2px buttons and badges, 4px inputs and score tiles, 8px cards. Full radius is reserved for radio
dots, avatars and score chips. 15px exists only in legacy HubSpot email templates. Nothing is
pill-heavy unless asked.

**Cards.** White (or `#161616` on dark), 1px hairline border `#E2E2E2` (`#2E2E2E` on dark), 8px
radius, and a whisper of shadow — `0 1px 2px rgba(0,0,0,.06)`. Flat, not floating. Interactive
cards raise to `0 2px 8px rgba(0,0,0,.10)` and swap the border to ink (accent on dark). **No
colored left-border accents. No gradient fills. No skeuomorphism.**

**Shadows.** Near-black, low-spread, never colored, three steps only: card, raised, overlay
(`0 8px 24px rgba(0,0,0,.18)` for modals). Inner shadows are used only as hairline dividers.

**Backgrounds.** Solid fills. The only gradient in the whole system is the legibility scrim under
type on photography (`--scrim-bottom`, black 0 → 85%) — protection, never decoration. No
repeating patterns, no textures, no hand-drawn illustration, no bluish-purple anything.

**Imagery.** Real youth sports and real leagues — parents on the sideline, kids on the field.
Natural daylight, warm-neutral, un-stylised; no heavy grade, no grain, no duotone. Sport lives in
the photo, not in unique copy per sport. The brand pack shipped no photography, so kits use
labeled placeholder blocks (`docs/ui-kits/marketing-site/Photo.jsx`); swap in real photos before use.

**Transparency and blur.** Almost never. Transparency appears in the modal scrim (60% black) and
the photo scrim. There is no frosted glass and no backdrop blur.

**Animation.** Calm and short: 120ms press, 180ms hover and color swaps, 280ms bars and reveals,
all on `cubic-bezier(.2,0,.2,1)`. Fades and color transitions only. Nothing bounces, springs or
overshoots — the rocket rises, it does not wobble.

**Hover states.** The primary button inverts: neon fill → `#242424` fill with a white label.
Outline buttons fill with ink (white on dark). Ghost buttons go accent. Nav links go accent and
gain a 2px accent underline. Rows tint to `#F2F2F2` (`#161616` on dark). Cards raise and darken
their border. Never opacity-fade a control on hover.

**Press states.** 1px downward nudge (`translateY(1px)`), no shrink, no color change beyond the
hover state.

**Focus.** 2px accent outline at 2px offset — the accent is the focus color everywhere.

**Selected states.** Accent, but never as a wash: a 2px accent border on a slot card, an accent
fill on the one chosen score, an accent underline on the active tab.

**Disabled.** 40% opacity, `not-allowed` cursor, no color substitution.

**Logo usage.** Rocket always points up. The trail stays neon green. Clear space on all four
sides is at least the width of the rocket fins. Do not stretch, rotate, shadow, put type inside
the R, replace the trail with a photo, or use the retired circular green R.

## HIERARCHY AND CALLS TO ACTION

Every product screen has one job. The layout, the type and the green all point at it. When a screen feels busy, count the green before changing anything else.

**One primary per screen.** The `rg-accent` fill goes on one button only: the screen's job ("Track Grant's game"). When the state changes the job, the primary moves with it. A game in progress makes "Resume Grant's game" the primary, and "Start a new game" steps down to secondary. Two actions competing for "start here" means the job isn't decided yet.

**Green budget: three moments, at most.** On any one screen, accent appears only on the primary button, the selected item in a picker (a 2px underline, never a fill), and the active tab or nav item (a 2px bar). Nothing else gets green: not headlines, eyebrows, links, icons, card borders, section labels or avatars.

**The action ladder.**
- *Primary* is the `Button` `primary`: accent fill with a black label. One per screen.
- *Secondary* is the `Button` `secondary`: a 1px outline in white on dark or ink on light, with no fill. Use it for the second action in a group and for the action on a list row ("Start count", "View report", "Open").
- *Text link* is white or ink, weight 500, underlined. Use it for escapes and switches ("Switch", "See coach tools"). Links turn accent on hover only.
- Never add a second action color. If two buttons look equally important, demote one; don't recolor it.

**Button anatomy.** Labels are Roboto 500, sentence case and centered, with no trailing arrow on a primary. On a phone, stack the primary and secondary full width with the primary on top. On a tablet or wider, put them side by side as equal halves, or at natural width on a page, primary first. `ActionGroup` does this for you: `layout="stack"` on phones, `"row"` on tablets.

**Type carries the hierarchy, not color.** The headline is all `text-inverse` (white) on dark or `text-heading` on light; never color part of it. Eyebrows are uppercase `text-inverse-muted` / `text-muted`, never accent. Supporting copy is muted body text. Size steps do the ranking: display or h1 for the screen's question, Roboto 500 at 16px for row titles, 14px muted for meta lines.

**Lists of tools and items.** Use `ToolList` with `ToolRow` children: one dark card holding rows, not a grid of separate boxes. Each row has a 40px `rg-dark-surface-3` tile with a white 22px outline icon, a title and a muted meta line, then a labeled `secondary` small button on the right. Don't use icon-only buttons for actions that lack a universal glyph. If a row has no button, the whole row is the tap target and ends in a muted `chevron-right`.

**Sections.** Use `SectionCard`: a muted eyebrow above a plain dark card. No dashed boxes, no green fieldset borders and no labels set into the border line.

**Tab bars and nav.** Icons and labels are `rg-white` when active and `rg-dark-mute` when not, and the active item gets a 2px accent bar. Color stays off the icon and label. `AppTabBar` follows this rule.

The Tracker home redesign (Nov 2026) is the worked example of these rules, in phone and tablet, with and without a game in progress. Where the pre-redesign Tracker screenshots in `docs/sources/` disagree with this section (green labels in fieldset borders, a green active tab label), this section wins.

---

## ICONOGRAPHY

**The brand pack contains no icon set** — no icon font, no SVG sprite, no PNG glyphs. The one
piece of proprietary iconography is the rocket / **R** mark itself, which is used as an app icon,
favicon, avatar and small-chrome glyph (`assets/logos/rocket-*.png`, `assets/logos/risegame-r-*.png`). The
live site does the same thing: testimonials use the R mark where an avatar would go.

**Substitution (flagged):** UI icons use **Lucide**, loaded from CDN via `lucide-static` and
masked so glyphs inherit `currentColor` (see `src/components/core/Icon.jsx`). Lucide was chosen for
its thin, geometric, uniform-stroke outlines, which sit closest to the flat / minimal / tech
direction in the brief. **This is a substitution, not a brand decision** — if RiseGame has a real
icon set, replace `Icon.jsx`'s base URL (and run `npm run build`) and the whole system follows.

Rules:

- Outline glyphs only, one weight, no filled variants, never two icon sets on one screen.
- Icons are ink or white by default; accent only when the icon *is* the accent moment (a product
  tile glyph, a confirmation tick).
- 16px inside small controls, 18–22px in rows and buttons, 26–28px for product tiles and empty
  states.
- **No emoji as icons. No unicode dingbats.** Arrows are the Lucide `chevron-*` / `arrow-*`
  glyphs, not `→` or `»`.
- Common slugs in use: `calendar-days`, `clipboard-list`, `users`, `user-round`,
  `chart-no-axes-column`, `file-text`, `check`, `chevron-right`, `chevron-left`, `chevron-down`,
  `arrow-right`, `rocket`, `map-pin`, `clock`, `search`, `mail`, `phone`, `link`, `plus`,
  `pencil`, `trash-2`, `settings`, `download`, `upload`, `trending-up`, `x`, `ellipsis`.

---

## Font substitution — needs your input

No licensed font binaries came with the pack, so `src/styles/base.css` loads **Barlow Condensed** and
**Roboto** from Google Fonts — the same families the live site uses, so this is a hosting
substitution rather than a typeface substitution. If you can supply hosted files, drop them in
`fonts/`, list them in `tokens/tokens.json` `type.fonts`, and remove the `@import` at the top of `src/styles/base.css`. This is one of the open gaps
already listed in `docs/sources/design.md`.

---

## Pre-redesign Tracker, kept for layout reference only

`docs/sources/` holds eight screenshots of RiseGame Tracker as it shipped before the Nov 2026 redesign (`Screenshot 2026-09-05 at 11.29.48 AM.png` to `11.31.30 AM.png`: parent home light and dark, My games, Track a game, pitch entry, the safe-result and on-base dialogs, baserunning). Use them for layout and flow only. They are not ground truth for styling.

Where they disagree with this book, this book wins. Their green eyebrows set into fieldset card borders and green active tab labels break the green budget; sections use `SectionCard` and tab bars use `AppTabBar` instead. Their green is not the brand accent either: take every color from the tokens (`rg-accent` `#1DFE1B` is the UI accent, `rg-trail` stays inside the mark files).

---

## Index

**Root**
- `README.md`: install, imports and the component list.
- `tokens/tokens.json`: every color, type style, spacing step, size, radius, shadow, weight, duration and easing. `src/styles/tokens.css` carries the same values as CSS custom properties.
- `src/styles/base.css`: font import, element resets, `.rg-eyebrow` / `.rg-dark` helpers, and the two composite values (`--transition-control`, `--scrim-bottom`). `@risegame/design-system/styles.css` loads tokens and base together.
- `src/components/<group>/`: component sources; `src/index.d.ts` for props; `docs/components/<Name>.md` for usage rules.
- `docs/ui-kits/ds-bundle.js`: all 31 components on `window.RiseGameDesignSystem_66bdc7` for the UI kit pages, built by `npm run build` (not committed). `Logo`, `SiteHeader` and `Testimonial` resolve the marks from `assets/logos/` on their own.
- `docs/guidelines/`: one HTML card per foundation (color, type, spacing, radius, elevation, motion, brand marks).
- `docs/sources/design.md`: the internal design brief. `docs/handoff/elevate-redesign.md`: the Elevate redesign handoff.

**Assets**: `assets/logos/` (wordmarks, stacked lockups, R marks, rockets, black and white ink) and `assets/qr/`. Source material lives in `docs/sources/`: the logo pack masters (including the retired circular R), the pre-redesign Tracker screenshots and a risegame.com screenshot.

**Components** (each with usage rules in `docs/components/` and types in `src/index.d.ts`)

- Core — **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**, **Logo**
- Forms — **Field**, **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- Navigation — **SiteHeader**, **Tabs**, **AppTabBar**
- Feedback — **Dialog**, **Toast**, **EmptyState**, **ProgressBar**
- Patterns — **SectionHeading**, **ProductTile**, **Testimonial**, **StatTile**, **ActionGroup**, **SectionCard**, **ToolList**, **ToolRow**
- Evaluation — **ScoreScale**, **PlayerRow**, **SlotCard**

**Intentional additions.** No component library was supplied, so the primitives above are a
standard set sized to RiseGame's surfaces. Four entries go beyond a generic set and exist for a
named reason: **Icon** wraps the substituted glyph set behind one swappable seam; **Logo** makes
the supplied marks the only way to place the brand mark; **ScoreScale**, **PlayerRow** and
**SlotCard** encode the evaluation-score and time-slot patterns that every RiseGame product
repeats. If any of these already exist in the real codebase under different names, rename here to
match.

**UI kits** (`docs/ui-kits/<product>/`, each with its own `README.md` and `index.html`)

- `marketing-site/` — risegame.com Home and Products, verbatim copy.
- `tryout-scheduler/` — league-admin slot manager + the four-step parent signup flow.
- `tryouts-app/` — coach roster and on-field evaluation scoring, in an iOS frame.
- `draft-and-reports/` — live draft board and the parent-readable player report.
- `elevate/`: Elevate athlete, coach and family screens (see `docs/handoff/elevate-redesign.md`).

**Kit caveat.** Only the marketing site could be checked against a real source. The product
kits are built from locked copy, product jobs and these foundations — the *styling* is ground
truth, the *screen structure* is a proposal to verify against the shipped products.
