# Icon

A Lucide glyph, bundled through lucide-react, that inherits currentColor. Use it for every icon in RiseGame UI instead of hand-drawing SVG.

    <Icon name="calendar-days" size={20} />

Notes
- Lucide is a documented substitution: the brand pack contains no icon set. Outline glyphs only; never mix filled sets or emoji.
- The glyph draws in currentColor: set color on the icon or its parent (color: var(--rg-accent)).
- An unknown name renders an empty box of the same size. Add app-specific glyphs with registerIcons({ slug: Component }).
- Common RiseGame slugs: calendar-days, clipboard-list, users, user-round, chart-no-axes-column, file-text, check, chevron-right, rocket, map-pin, clock.
