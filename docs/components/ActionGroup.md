# ActionGroup

Lays out a screen's primary and secondary action the way the hierarchy rules ask: stacked full width on a phone, equal halves side by side when there is room.

    <ActionGroup layout="stack">
      <Button size="lg">Track Grant's game</Button>
      <Button size="lg" variant="secondary" onDark>Practice scoring a game</Button>
    </ActionGroup>

The consumer provides
- One `Button` `primary` first, then at most one `Button` `secondary`. ActionGroup makes each full width of its slot, so labels sit centred.
- `layout`: `stack` on phones, `row` on tablets, `auto` (default) to wrap by available width.

Do
- Keep the primary first, top or left.
- Change which action is primary when the screen's job changes (Track becomes Resume once a game is running).

Don't
- Put two primaries in a group, or a third button. Move extra actions to a ToolList or a text link.
- Add a trailing arrow to the primary label.
