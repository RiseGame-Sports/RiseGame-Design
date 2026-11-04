# ToolRow

One tool or item in a ToolList: a 40px icon tile, a title, a muted meta line, and exactly one action.

    <ToolRow icon="clipboard-list" title="Pitch counter" meta="Count every pitch" actionLabel="Start count" onAction={startCount} />
    <ToolRow icon="file-text" title="Last report" meta="Thu, Oct 22" onClick={openReport} />

The consumer provides
- `icon` (a Lucide slug), `title` and `meta`.
- Either `actionLabel` + `onAction`, which puts a labeled secondary small button on the right, or `onClick` / `href`, which makes the whole row the tap target and ends it in a muted chevron.

Do
- Write the action label as a verb for the row's job ("Start count", "View report", "Open").

Don't
- Use an icon-only button for an action with no universal glyph.
- Color the icon or the button accent. The screen's one green action lives outside the list.
