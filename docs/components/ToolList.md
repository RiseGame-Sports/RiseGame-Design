# ToolList

A single card of tool or item rows with hairline dividers. Use it instead of a grid of separate boxes.

    <ToolList onDark>
      <ToolRow icon="clipboard-list" title="Pitch counter" meta="Count every pitch" actionLabel="Start count" />
      <ToolRow icon="chart-no-axes-column" title="Season report" meta="Grant's season so far" actionLabel="View report" />
    </ToolList>

The consumer provides
- `ToolRow` children. ToolList passes `onDark` down and draws the dividers.
- `onDark` on black chrome.
- `striped` (default on): every second row takes the row tint, `surface-row-alt` paper on light and `surface-dark-row-alt` #242424 on dark. The first row stays on the card fill. `ToolRow` takes `alt` for the same fill when used alone.

Pair it with `SectionCard` (padding 0) when the list needs a section label.
