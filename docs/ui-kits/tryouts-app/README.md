# UI kit: Tryouts By RiseGame (coach app)

Click a player on the roster to open scoring; **Save and next player** writes the
evaluation scores back to the roster and the badge flips to Scored.

- `RosterScreen.jsx`: dark roster with search, scored progress, per-player composite score.
- `ScoreScreen.jsx`: one tap-scale per drill (52px targets), coach note, sticky save bar.
- `ios-frame.jsx`: the shared iOS bezel starter (not RiseGame-specific).
- `data.js`: sample event, drills and players.

Design notes taken from the brand pack: app chrome is black, the accent marks only the
selected score, rows and score buttons clear the 44px tap minimum so the app works on a
field in the sun.

**Source caveat.** No app source, Figma file or store screenshots were supplied. Styling
follows the locked foundations; screen structure follows the product's stated job
("Coaches score athletes on the field") and should be checked against the shipped app.
