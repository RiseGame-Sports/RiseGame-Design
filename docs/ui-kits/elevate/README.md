# UI kit — RiseGame Elevate (fresh design)

A redesign of the shipped Elevate app, built from the eight screenshots supplied Sep 5 2026.
**The information architecture is unchanged** — Parent/Coach role toggle, athlete list with
co-parent access and report request, athlete detail with Assignments / Metrics / Profile,
sport-grouped capture cards, capture-card trend + record entry + history, the new-card sheet,
coach teams with Whiteboards and assistant-coach access, and the three-step workout builder.
What changed is the design.

## What moved, and why

| Current app | Fresh design |
|---|---|
| Light chrome, olive / lime green | Black chrome, one accent #1DFE1B — the brand's actual neon. Olive and social lime are on the forbidden-green list in design.md |
| Generic iOS system type | Barlow Condensed 700 for every heading and every number; Roboto for body and labels |
| 14–16px rounded cards, pill buttons | 2px buttons, 4px inputs and tiles, 8px panels — the 2–8px product-UI rule |
| Values as plain text | Values are the loudest thing on screen: condensed numerals at 30–52px, with a sparkline on every capture tile |
| Green outline buttons everywhere | One accent primary per screen; secondary is a white outline; tertiary is accent text |
| Circular initials avatars | Square accent tiles — the brand has no circular geometry outside radio dots |
| Empty states as gray sentences | Dashed hairline blocks in uppercase micro-type, with the fix offered inline |

## Click-through

Dashboard → an athlete → **Metrics** (tap a capture card for trend + record entry) or
**Assignments** (tap a workout) or **Profile**. The `+` on a metric group opens the new-card
sheet. Flip the toggle to **Coach** for teams, then Whiteboards → workout builder → workout
detail.

## Files

- `shell.jsx` — Screen, Scroll, TopBar, RoleToggle, GroupLabel, Panel, Spark, TrendChart
- `ParentHome.jsx`, `AthleteScreens.jsx`, `CoachScreens.jsx`
- `data.js` — sample family, capture cards with real entry histories, workout, sport list
- `ios-frame.jsx` — shared iOS bezel starter, not RiseGame-specific

## Open questions

- The current app shows points per exercise but no total. This design surfaces a season points
  total on Assignments — confirm that number exists.
- **Whiteboards** is promoted to the one accent action on the coach home. Confirm it deserves that.
- Attendance appears on the athlete rows because Elevate's marketing promises attendance
  tracking, but no attendance screen was in the screenshots. Flag if that data is not there yet.
- Capture-card groups are hard-coded to General / Baseball / Basketball / Football to match the
  screenshots; in the real app they follow the athlete's sports.
