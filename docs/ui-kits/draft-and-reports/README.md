# UI kit: Draft platform & Player Reports

Two surfaces, switchable at the top of `index.html`.

- `DraftBoard.jsx`: available-athlete list sorted by composite score, a compare panel with
  every drill score and the coach note, and team columns. Clicking **Draft to <team>** moves
  the athlete, advances the pick and confirms with a toast. This is the "feels like fantasy
  sports, backed by real tryout data" surface.
- `PlayerReport.jsx`: the parent-facing report: composite score, per-drill breakdown, what
  the coaches said, and one hand-off to Elevate. This is the "peek behind the curtain" angle.

`data.js` holds the sample pool, drills and teams; composites are computed from the scores.

**Source caveat.** No Draft or Reports source, Figma file or screenshots were supplied.
Styling follows the locked foundations; screen structure follows each product's stated job.
