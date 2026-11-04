# Handoff: RiseGame Elevate: app redesign

## Overview

A visual and navigational redesign of the RiseGame Elevate mobile app (year-round athlete
tracking). The **information architecture of the existing app is preserved**: Parent/Coach role
switching, multiple athletes per account, capture cards for measurements, workout assignments,
the workout builder, coach teams, with two deliberate exceptions documented under
*Navigation changes*. Everything else that changed is presentation: the app moves onto the real
RiseGame brand (black field, single neon accent `#1DFE1B`, Barlow Condensed headlines, 2 to 8px
radii) and away from the generic-iOS light chrome with olive/lime green in the shipped build.

A **Light chrome** variant is included and toggleable; the design is authored dark.

## About the design files

The files in `docs/ui-kits/elevate/` are **design references created in HTML/React**: prototypes that show
intended look and behavior. **They are not production code to copy.** The task is to recreate
these designs inside Elevate's existing codebase using its established patterns, component
library, navigation and styling approach. Nothing here should be lifted verbatim; treat the HTML
as a spec you can click.

The prototype uses React 18 + Babel-in-browser purely so it runs by double-clicking a file. That
is a prototyping convenience, not an architectural suggestion.

### Where this lives

This handoff lives in the RiseGame design system repo (`risegame-design`). Paths in this
document are relative to the repo root.

Also present, and not part of this handoff: the other four UI kits (`docs/ui-kits/marketing-site`,
`tryout-scheduler`, `tryouts-app`, `draft-and-reports`), the foundation specimen cards in
`docs/guidelines/`, the brand guide at `docs/brand-book.md`, and the client's original source
material in `docs/sources/`. Ignore them for this build, or read `docs/brand-book.md` for the brand
rules behind every value in this spec.

## Fidelity

**High fidelity.** Colors, type, spacing, radii, control heights and states are final and exact.
Recreate pixel-for-pixel using the codebase's own primitives. Where a value here conflicts with
an existing component in the app, the values in *Design tokens* win; they come from the locked
RiseGame brand pack (`docs/sources/design.md`, Sep 5 2026), not from taste.

Two things are intentionally **not** final: photography (none was supplied) and any copy marked
as a proposal below.

## How to run the prototype

Run `npm install` and `npm run build` once (the build writes `docs/ui-kits/ds-bundle.js`, which
the prototype loads). Then serve the repo root over HTTP and open:

- `docs/ui-kits/elevate/index.html`: the full click-through, with the Dark/Light toggle
- `docs/ui-kits/elevate/directions.html`: three alternative dark directions for the parent home,
  side by side (exploration only; **not** the design to build)

```
cd risegame-design && python3 -m http.server 8080
# then open http://localhost:8080/docs/ui-kits/elevate/index.html
```

Opening via `file://` will fail: the browser blocks the local `.jsx` fetches.

---

## Navigation changes

This is the one structural change, and it is deliberate. In the shipped app **Metrics** and
**Profile** appear in *both* the bottom tab bar and the athlete's top tab row. The redesign
removes that duplication by giving the two rows different scopes:

| Row | Scope | Items |
|---|---|---|
| Bottom tab bar | The family / account | Parent: Dashboard · Workouts · Reports · Account. Coach: Teams · Workouts · Account |
| Athlete top tabs | The one selected athlete | Assignments · Metrics · Profile |

Metrics and Profile left the bottom bar because they only exist per athlete. Their slots became:

- **Reports**: the "request athlete report" flow, previously buried in a panel on the Dashboard.
  One row per athlete plus a Delivered section.
- **Account**: the parent's own name/email, co-parent access (moved off the Dashboard, where it
  competed with the athlete list), and notification switches.

No label now appears in both rows. "Profile" means the athlete; "Account" means the logged-in
parent.

---

## Screens / views

Device canvas for every screen: **402 × 874** (iPhone 16 Pro logical size). All screens are a
fixed header + scrolling body + fixed bottom tab bar. Status-bar clearance is **52px** of top
padding on the header.

### Shared chrome

**Header (`TopBar`)**: `shell.jsx`
- Layout: horizontal flex, `gap 12px`, padding `52px 12px 12px`, `border-bottom: 1px solid` line color.
- Left: either the **R** lockup at `height 26px` (`assets/logos/risegame-r-white.png` on dark,
  `risegame-r-black.png` on light), `margin-left 8px`, `margin-right 4px`; or a 32px back
  IconButton (`chevron-left`) when the screen is pushed.
- Center: title: Barlow Condensed 700, **20px**, line-height 1.05, `text-transform: uppercase`,
  `letter-spacing .01em`. Optional sub-line beneath: Roboto 400, **11px**, muted color.
- Right: slot for the role toggle, a Switch button, or an icon button.

**Role toggle (`RoleToggle`)**: Parent | Coach
- Container: `padding 2px`, panel background, `1px` line border, radius **4px**.
- Buttons: `min-width 74px`, `height 30px`, radius **2px**. Active = accent fill `#1DFE1B` with
  `#000` label. Inactive = transparent with muted label.
- Label: Roboto 700, **11px**, `letter-spacing .1em`, uppercase.

**Group label (`GroupLabel`)**: the section headers
- Roboto 700, **10px**, `letter-spacing .14em`, uppercase, muted color.
- Padding `0 16px`, `margin-bottom 8px`. Optional trailing 32px `plus` IconButton.

**Panel (`Panel`)**: the grouped container
- Panel background, `1px solid` line border, radius **8px**, `overflow: hidden`,
  `margin: 0 16px`. Internal rows are separated by `1px solid` line borders, never by gaps.

**Bottom tab bar (`AppTabBar`)**: `src/components/navigation/AppTabBar.jsx`
- `display: grid`, equal columns, black background (white in light chrome), `border-top 1px`,
  `padding-bottom 8px`. Each item: `min-height 44px`, icon **22px**, label Roboto 700 **10px**
  `letter-spacing .1em` uppercase.
- Active color: `#1DFE1B` on dark. **In light chrome the active color is `#161616`**, not the
  accent: neon on white measures 1.38:1 and fails contrast. Accent stays a fill only.

### 1. Parent Dashboard: `ParentHome.jsx`

**Purpose:** the parent opens the app and learns, in one glance, what is still open this week and
for whom.

- **Headline block**: padding `24px 16px 16px`.
  - Eyebrow "THIS WEEK": Roboto 700, 10px, `.14em`, uppercase, accent on dark / ink on light.
  - Headline: Barlow Condensed 700, **34px**, line-height 1.02, `text-wrap: balance`. Copy is
    computed: `"{n} workouts still open across {m} athletes."`
- **Your athletes**: `GroupLabel` + `Panel`. One row per athlete, `padding 12px 16px`, grid
  `44px | 1fr | 18px`, `gap 12px`, row separated by `1px` line.
  - Initials tile: **44 × 44**, radius **4px**, accent fill, `#000` label, Barlow Condensed 700 18px.
    (Square, not circular; the brand has no circular geometry outside radio dots.)
  - Name: Barlow Condensed 700, **19px**, line-height 1.05.
  - Sports line: Roboto 700, 10px, `.1em`, uppercase, muted, joined with ` · `,
    `white-space: nowrap; overflow: hidden; text-overflow: ellipsis`.
  - Stat pair: `{done}/{assigned} workouts` and `{n}% attendance`, value in Barlow Condensed 700
    14px, label in muted 11px.
  - Trailing `chevron-right`, 18px, muted.
  - Last row of the panel: full-width "＋ ADD ANOTHER ATHLETE", `min-height 46px`, Roboto 700
    12px `.1em` uppercase, accent on dark / ink on light.

### 2. Athlete detail: `AthleteScreens.jsx` → `AthleteDetail`

Header shows the athlete name with sub-line `"{sport} · Age {n}"`, and a **Switch** button on the
right (secondary outline, size sm, trailing `chevron-down`). Below it the athlete tab row
(`src/components/navigation/Tabs.jsx`): Roboto 700 14px `.1em` uppercase, `gap 24px`,
`border-bottom 1px`, active = ink/white label with a **2px accent underline**, inactive = muted.

#### 2a. Assignments tab
- `ProgressBar` at `padding 16px`: label "ASSIGNMENTS COMPLETE", value/max on the right, bar
  `height 6px`, radius 2px, accent fill on line-colored track, width transition `280ms`.
- "THIS WEEK" panel, one row per assignment, `min-height 62px`:
  - Completion box **26 × 26**, radius 2px. Done = accent fill + `check` glyph in `#000`.
    Not done = transparent with `1px` line border.
  - Title Barlow Condensed 700 **18px**; meta line Roboto 700 10px `.1em` uppercase muted,
    `"{sport} · {status}"`.
  - Trailing points badge: accent tone when complete, dark/neutral tone when not.
- "SEASON POINTS" panel: Barlow Condensed 700 **44px** value beside a 11px `.1em` uppercase
  "POINTS EARNED".
  **Proposal, verify.** The shipped app shows points per exercise but no total; confirm this
  number exists before building.

#### 2b. Metrics tab
- One `GroupLabel` per sport group (General, Baseball, Basketball, Football in the prototype;
  in production these follow the athlete's sports), each with a trailing `plus` IconButton that
  opens the new-card sheet.
- **Capture tile**: 2-up grid, `gap 8px`, `padding 0 16px 24px`.
  - Panel background, `1px` line border, radius **4px**, `padding 12px`, `gap 6px`.
  - Card name: Roboto 700, 10px, `.12em`, uppercase, muted.
  - Latest value: Barlow Condensed 700, **30px**, line-height 1.
  - Footer row: `"{n} entries"` (10px `.08em` uppercase muted) and a **54 × 20** sparkline:
    2px accent polyline, round caps, no axes, no fill. Single-entry cards show a dashed baseline.
- Empty group: dashed `1px` border, radius 4px, `padding 16px`, centered 11px `.08em` uppercase
  muted text `"No capture cards yet · {group}"`.

#### 2c. Profile tab
- Avatar block: **68 × 68** accent tile, radius **8px**, Barlow Condensed 700 28px `#000`
  initials; name at 26px; hometown 11px `.1em` uppercase muted.
- DETAILS panel: label/value rows, `min-height 46px`: label 11px `.1em` uppercase muted,
  value Barlow Condensed 700 17px, right-aligned. Then a sports chip row (`Tag`, `height 28px`,
  radius 2px, Roboto 500 14px), then a Parents row.
- ATHLETE CODE panel: code in Barlow Condensed 700 **30px** with `letter-spacing .08em`, a
  secondary **Copy** button, and the caption "Used to sign in on the athlete app."

### 3. Capture card detail: `AthleteScreens.jsx` → `CaptureCardScreen`

**Purpose:** see the trend, add today's measurement, audit history.

- Header title = card name, sub-line `"Unit: {unit}"`, trailing `ellipsis` IconButton.
- Hero: latest value in Barlow Condensed 700 **52px** (line-height .9), beside an accent badge
  `"+{delta} since {month}"` with a `trending-up` glyph.
- **Trend panel**: `padding 16px`. SVG, `height 150px`, `preserveAspectRatio: none`:
  area polygon in accent at **12% opacity**, polyline in accent at `stroke-width 1.4` with
  `vector-effect: non-scaling-stroke`, and a **6px** accent dot at each entry. Axis labels are the
  first and last entry dates, 10px `.08em` uppercase muted, left and right.
  In light chrome the line and dots switch to ink `#161616`; the 12% area fill stays accent.
- **Record entry panel**: two-up `Field` grid (value + date), a full-width notes `Field`, then a
  `size="lg"` primary button "Record entry", disabled until the value is non-empty.
- **Entry history panel**: newest first, `min-height 52px` rows: value in Barlow Condensed 700
  20px, date beneath in 10px `.08em` uppercase muted, trailing `trash-2` IconButton.

### 4. New capture card sheet: `CoachScreens.jsx` → `NewCardSheet`

Bottom sheet over a `rgba(0,0,0,.6)` scrim (the scrim is `position: absolute; inset: 0`, so the
screen container must be `position: relative`).

- Sheet: panel background, `border-top 1px`, radius **8px 8px 0 0**, `padding 16px`,
  `gap 16px`, `max-height 82%`, scrolls internally.
- Title "NEW BASEBALL CARD" Barlow Condensed 700 **24px** uppercase; trailing ghost **Done**.
- Fields: Name, Description (hint "Optional"), then a two-up Type `Select`
  (speed / height / weight / distance / custom) + Unit `Input` (hint "lbs, mph, s, %").
- **Decimal places**: 4-up grid, `gap 6px`. Each cell radius **4px**, `1px` line border, the
  numeral in Barlow Condensed 700 20px above a 9px example at 70% opacity
  (`28`, `28.5`, `28.54`, `28.543`). Selected = accent fill with `#000` content.
- Footer: secondary **Cancel** + primary **Create** (`fullWidth`, disabled until Name is filled).

### 5. Coach: My Teams, `CoachScreens.jsx` → `CoachTeams`

- MY TEAMS panel, empty state: centered, `padding 32px 24px`, `gap 12px`, `shield` glyph 30px
  (accent on dark, ink on light), "Create your first team" Barlow Condensed 700 **24px**, body
  12px/1.5 muted `max-width 230px`, then a `size="lg"` primary **Get started**. Footer row
  "＋ CREATE ANOTHER TEAM".
- **Whiteboards**: the one accent *surface* on the screen: full-width accent block,
  `min-height 62px`, radius **8px**, `#000` content, `layout-dashboard` glyph, title in Barlow
  Condensed 700 20px uppercase, sub-line Roboto 500 11px, trailing chevron.
  **Verify** this deserves top billing.
- ASSISTANT COACH ACCESS panel: 12px/1.5 muted paragraph, then a secondary full-width
  **Join as assistant coach** with a `key-round` glyph.

### 6. Coach: Workout builder, `CoachScreens.jsx` → `WorkoutBuilder`

Step 1 of 3 ("Name & sport"). Header carries a trailing `x` IconButton to cancel.
- Progress: three equal `height 3px` bars, `gap 4px`, radius 2px; completed/current in accent
  (ink in light chrome), remaining in line color.
- Workout title `Field` with `size="lg"` input, hint "Name it how you would say it out loud.",
  placeholder "e.g. Tuesday Agility Session".
- SPORT: wrapping chip grid, `gap 6px`. Chips `height 32px`, `padding 0 12px`, radius **2px**,
  Roboto 500 13px. Selected = accent fill + `#000`; unselected = transparent, `1px` line border,
  white/ink label. All 21 sports from the shipped app, alphabetical.
- Sticky footer: primary `size="lg"` **Next: add drills**, `fullWidth`, trailing chevron,
  disabled until the title is non-empty.

### 7. Coach: Workout detail, `CoachScreens.jsx` → `WorkoutDetail`

- Title: Barlow Condensed 700 **38px**, line-height 1.02, uppercase. Badge row beneath:
  accent sport badge, dark "Template" badge, dark total-points badge, `gap 6px`.
- EXERCISES panel, one row per exercise, grid `28px | 1fr | auto`, `padding 16px`:
  ordinal in Barlow Condensed 700 20px accent (ink in light chrome); name 19px; spec line
  (`60s`, `3 sets × 10 reps`) 10px `.1em` uppercase muted; description 12px/1.5 muted;
  trailing points badge.
- ASSIGNED ATHLETES: dashed `1px` block, radius 8px, `padding 24px`, centered 11px `.08em`
  uppercase muted "No athletes assigned yet". After assigning, becomes a panel of athlete rows
  (30px initials tile, name, accent "Assigned" badge) plus a confirmation `Toast`.
- Sticky footer: primary `size="lg"` **Assign to athletes** → becomes disabled **Assigned**.

### 8. Reports (family): `FamilyScreens.jsx` → `ReportsScreen`

- Info row: `info` glyph 16px muted + 12px/1.5 muted paragraph, with "RiseGame Tryouts App"
  emphasized in full-strength ink/white. Copy is verbatim from the shipped app.
- AVAILABLE TO REQUEST panel: `min-height 66px` rows: 34px initials tile, name 18px, meta
  `"{sport} · Spring 2026 tryouts"`, trailing `size="sm"` primary **Request**.
- DELIVERED: dashed empty block, "Nothing delivered yet".

### 9. Account (family): `FamilyScreens.jsx` → `AccountScreen`

- YOU panel: Name and Email `Field`s (email hint "Where confirmations and reports arrive").
- CO-PARENT ACCESS panel: `min-height 56px` rows: athlete name 14px/500 above
  `"Shared with {name}"` 11px muted, trailing ghost **Manage** with a chevron. Footer: secondary
  **Join as co-parent** with `key-round`.
- NOTIFICATIONS panel: four `Switch` rows, `gap 16px`: "New assignment posted",
  "Coach records a measurement", "Weekly recap on Sunday", "Report is ready".

---

## Interactions & behavior

**Navigation**
- Dashboard → tap an athlete row → athlete detail, defaulting to the **Metrics** tab.
- Metrics → tap a capture tile → capture card detail. Back returns to Metrics.
- Assignments → tap an assignment → workout detail.
- `+` on a metric group → the new-card bottom sheet.
- Role toggle Parent ⇄ Coach resets any pushed screen and lands on that role's first tab.
- Coach: Whiteboards → workout builder → **Next: add drills** → workout detail.
- Switching a bottom tab clears athlete/card/workout state (no cross-context back stack).

**States** (all durations from the tokens below)
- Primary button hover: accent fill → `#242424`, label `#000` → `#fff`, `180ms`.
- Secondary hover: transparent → ink fill (white fill on dark), label inverts.
- Ghost hover: label → accent.
- All buttons press: `translateY(1px)`, `120ms`. No scale, no shadow change.
- Rows hover: background → `#F2F2F2` on light, `#161616` on dark, `120ms`.
- Focus: `2px` accent outline at `2px` offset, everywhere.
- Disabled: `opacity .4`, `cursor: not-allowed`, no color substitution.
- Input focus: border → accent, `1px`, no glow. Invalid: `2px` ink border plus the `Field` error
  line, **never red**; the brand forbids urgency color.
- Selected: accent as a **border or fill**, never a tint wash.
- Transitions are color/opacity/width fades on `cubic-bezier(.2,0,.2,1)`. Nothing bounces,
  springs or overshoots.
- Reduced motion: durations may go to 0; no layout depends on animation.

**Form validation**
- "Record entry": value required; button disabled until non-empty.
- New card sheet: Name required; **Create** disabled until non-empty.
- Workout builder step 1: title required; **Next** disabled until non-empty.

**Empty states**: dashed border, uppercase micro-type, and the fix offered inline (see the
copy in each screen above). Voice rule: name the mess, then show the fix.

**Responsive**: the design is fixed-width phone. If a tablet layout is needed, the two-up
capture grid becomes four-up and panels gain a `max-width 720px` centered column; nothing else
changes.

## State management

Prototype state, all local to the root component in `index.html`:

| State | Type | Purpose |
|---|---|---|
| `dark` | boolean | Chrome theme. Ship as a system-appearance follower or a setting, your call. |
| `role` | `'Parent' \| 'Coach'` | Which bottom bar and home screen are active. |
| `tab` | string | Selected bottom tab. |
| `athlete` | athlete \| null | Pushed athlete detail. |
| `aTab` | `'assignments' \| 'metrics' \| 'profile'` | Athlete tab row. |
| `card` | captureCard \| null | Pushed capture card. |
| `workout` | boolean | Pushed workout detail. |
| `build` | boolean | Workout builder open. |
| `sheet` | boolean | New-card sheet open. |
| local to `ScoreScreen`/`NewCardSheet`/`WorkoutBuilder` | (none) | Draft field values before save. |

**Data the real app needs** (shape shown in `docs/ui-kits/elevate/data.js`): athletes with sports,
birthdate, hometown, parents, athlete code, weekly workout counts and attendance; capture cards
grouped by sport, each with a typed unit, decimal precision, and an ordered entry history
(`value`, `display label`, `date`, optional note); workout assignments with sport, points and
completion; workouts with ordered exercises (spec, points, description) and assigned athletes;
co-parent grants. Trend deltas and composites are derived, not stored.

## Design tokens

Authoritative source: `tokens/tokens.json` (mirrored in `src/styles/tokens.css`). Values below are the
brand-locked set; do not round or snap them to a framework's scale.

**Color: base**

| Token | Hex | Role |
|---|---|---|
| `--rg-black` | `#000000` | Dark page field |
| `--rg-ink` | `#161616` | Headlines on light; dark surfaces |
| `--rg-ink-2` | `#242424` | Primary-button hover fill |
| `--rg-white` | `#FFFFFF` | Marks, light surfaces |
| `--rg-paper` | `#F2F2F2` | Light chrome, row hover |
| `--rg-line` | `#E2E2E2` | Hairline on light |
| `--rg-mute` | `#666666` | Secondary text on light |
| `--rg-accent` | `#1DFE1B` | **The only UI accent** |
| `--rg-trail` | `#78F951` | Logo trail pixels: **marks only, never a UI fill** |
| `--rg-dark-surface` / `-2` / `-3` | `#0B0B0B` / `#161616` / `#242424` | Dark surfaces |
| `--rg-dark-line` | `#2E2E2E` | Hairline on dark |
| `--rg-dark-mute` | `#9A9A9A` | Secondary text on dark |

**Forbidden greens:** `#00FF03` (HubSpot), `#7ED957` (social), `#3EC96B` (site leftover), and the
olive/lime currently in the shipped Elevate build. One accent only.

**Color: Elevate theme pair** (`shell.jsx`)

| Token | Dark | Light |
|---|---|---|
| `--e-bg` | `#000000` | `#FFFFFF` |
| `--e-panel` | `#161616` | `#FFFFFF` |
| `--e-panel-2` | `#242424` | `#F2F2F2` |
| `--e-line` | `#2E2E2E` | `#E2E2E2` |
| `--e-mute` | `#9A9A9A` | `#666666` |
| `--e-ink` | `#FFFFFF` | `#161616` |
| `--e-accent-fg` | `#1DFE1B` | `#161616` |

`--e-accent-fg` is the rule that keeps light chrome legible: **accent never carries type or small
glyphs on white** (1.38:1). Accent on white is only ever a fill with a black label, or a
non-text indicator.

**Type**
- Display: **Barlow Condensed 700**: line-height 1.02 (display) to 1.08 (headings), no added
  tracking. Sizes in use: 120 / 52 / 44 / 38 / 34 / 30 / 26 / 24 / 20 / 19 / 18 / 17 / 14.
- Body/UI: **Roboto**: 400 body, 500 links and buttons, 700 nav, eyebrows, badges, tags.
  Sizes: 18 / 16 / 14 / 13 / 12 / 11 / 10. Body line-height 1.55.
- Eyebrow/nav/badge treatment: Roboto 700, uppercase, `letter-spacing .1em`
  (`.12em` to `.14em` on the 10px group labels).
- Fallbacks: Arial, then system sans. **Never a third family.**

**Spacing**: 4px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
Control heights 32 / 40 / 48. **Minimum tap target 44px**: app rows, tab bar items and the
on-field score buttons all clear it.

**Radius**: 2px buttons and badges · 4px inputs, tiles, initials tiles · 8px panels and cards ·
full radius only on radio dots and chart points. Never pill-shaped. (15px exists in legacy
HubSpot email templates only.)

**Shadows**: flat first, near-black, never colored:
- card `0 1px 2px rgba(0,0,0,.06), 0 1px 1px rgba(0,0,0,.04)`
- raised `0 2px 8px rgba(0,0,0,.10)`
- overlay `0 8px 24px rgba(0,0,0,.18)`
- modal scrim `rgba(0,0,0,.6)`
No shadows on buttons. No gradients anywhere except the photo legibility scrim.

**Motion**: 120ms press · 180ms hover and color · 280ms bars and reveals ·
easing `cubic-bezier(.2,0,.2,1)`.

## Assets

In `assets/logos/`, all from the client's Sep 5 2026 logo pack (trimmed and color-derived
programmatically, **never redrawn**):

- `risegame-r-white.png` (661 × 821): **R** lockup for dark chrome. The rocket is knocked out
  transparent, not filled.
- `risegame-r-black.png` (661 × 821): **R** lockup for light chrome.
- `risegame-wordmark-white.png` / `-black.png` (2000 × 277): full RISEGAME wordmark.

Logo rules: rocket always points up; the trail stays `#78F951` and is never recolored; clear
space of at least the rocket-fin width on all four sides; no stretching, rotation, shadows, or
type inside the **R**. The retired circular green **R** must not be used. Vector masters
(`.ai`, `.eps`, `.psd`) are in `docs/sources/`; use those for any new export rather than scaling
the PNGs.

**Icons: substitution, please replace.** The brand pack contains no icon set, so the prototype
draws **Lucide** glyphs, bundled through `lucide-react`, in `currentColor`
(`src/components/core/icons.js`). Swap this for whatever icon set the app already ships; the slugs in
use are `layout-grid`, `dumbbell`, `file-text`, `user-round`, `chart-no-axes-column`, `users`,
`shield`, `layout-dashboard`, `key-round`, `calendar-days`, `clock`, `check`, `plus`, `pencil`,
`trash-2`, `copy`, `mail`, `search`, `info`, `bell`, `trending-up`, `user-plus`, `ellipsis`, `x`,
`chevron-left`, `chevron-right`, `chevron-down`. Outline glyphs, one weight, no filled variants.
**No emoji, no unicode dingbats**: arrows are glyphs, not `→`.

**Photography**: none supplied. No screen in this design depends on it.

## Files

**The design**
- `docs/ui-kits/elevate/index.html`: entry point, routing, theme toggle, bottom bars
- `docs/ui-kits/elevate/shell.jsx`: theme provider + `Screen`, `Scroll`, `TopBar`, `RoleToggle`,
  `GroupLabel`, `Panel`, `Spark`, `TrendChart`
- `docs/ui-kits/elevate/ParentHome.jsx`: screen 1
- `docs/ui-kits/elevate/AthleteScreens.jsx`: screens 2 and 3
- `docs/ui-kits/elevate/CoachScreens.jsx`: screens 4 to 7
- `docs/ui-kits/elevate/FamilyScreens.jsx`: screens 8 and 9
- `docs/ui-kits/elevate/data.js`: sample data and the shapes the real app needs
- `docs/ui-kits/elevate/ios-frame.jsx`: device bezel for presentation only; **do not port**
- `docs/ui-kits/elevate/directions.html`: three alternative dark directions, exploration only
- `docs/ui-kits/elevate/README.md`: what changed versus the shipped app, and open questions

**Tokens and styles**: link `dist/styles/index.css` (in an app, `@risegame/design-system/styles.css`);
it `@import`s the tokens and base styles
- `tokens/tokens.json` (source values), `src/styles/tokens.css`, `src/styles/base.css`

**Design-system primitives the screens compose**: reference implementations, with prop contracts
in `src/index.d.ts` and usage rules in `docs/components/`
- `src/components/core/`: `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `Card`, `Logo`
- `src/components/forms/`: `Field`, `Input`, `Select`, `Switch`
- `src/components/navigation/`: `Tabs`, `AppTabBar`
- `src/components/feedback/`: `Toast`, `ProgressBar`
- `docs/ui-kits/ds-bundle.js`: the compiled bundle the prototype loads at runtime (generated by
  `npm run build`)

**Fonts**: Barlow Condensed and Roboto are bundled from Fontsource in `dist/fonts/`
because no licensed binaries were supplied. Use whatever the app already bundles; the families
are correct, only the source files are a stand-in.

## Open questions for the client

1. **Season points total** on Assignments: the shipped app shows per-exercise points but no
   total. Does this number exist?
2. **Attendance %** on the athlete rows: Elevate's marketing promises attendance tracking, but no
   attendance screen was in the reference screenshots. Is the data there?
3. **Whiteboards** as the single accent action on the coach home: correct priority?
4. **Capture-card groups** are hard-coded to General / Baseball / Basketball / Football to match
   the screenshots. Confirm production follows the athlete's own sports.
5. **Dark as default.** The design is authored dark to match the brand's black field and the
   RiseGame Tryouts app. Light chrome is included and equally on-brand. Confirm which ships.
