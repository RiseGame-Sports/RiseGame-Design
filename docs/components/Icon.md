# Icon

A masked Lucide glyph that inherits currentColor — use it for every icon in RiseGame UI instead of hand-drawing SVG.

    <Icon name="calendar-days" size={20} />

Notes
- Lucide is a documented substitution: the brand pack contains no icon set. Outline glyphs only; never mix filled sets or emoji.
- Because the glyph is a mask, set colour on the icon or its parent (color: var(--rg-accent)).
- Common RiseGame slugs: calendar-days, clipboard-list, users, user-round, chart-no-axes-column, file-text, check, chevron-right, rocket, map-pin, clock.
