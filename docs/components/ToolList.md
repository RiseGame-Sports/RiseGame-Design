# ToolList

A single card of tool or item rows with hairline dividers. Use it instead of a grid of separate boxes.

    <ToolList onDark>
      <ToolRow icon="clipboard-list" title="Pitch counter" meta="Count every pitch" actionLabel="Start count" />
      <ToolRow icon="chart-no-axes-column" title="Season report" meta="Grant's season so far" actionLabel="View report" />
    </ToolList>

The consumer provides
- `ToolRow` children. ToolList passes `onDark` down and draws the dividers.
- `onDark` on black chrome.

Pair it with `SectionCard` (padding 0) when the list needs a section label.
