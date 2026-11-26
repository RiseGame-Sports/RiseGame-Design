# SectionCard

A labeled section of a product screen: an uppercase section header above one white card on the paper page.

    <SectionCard label="Jump back in" onDark padding="12px 16px">…</SectionCard>
    <SectionCard label="Tools" onDark><ToolList>…</ToolList></SectionCard>

The consumer provides
- `label`: the section name. It is set in `section-label` (13px uppercase) in `text-heading` ink on light and `text-inverse` white on dark, never mute, never accent.
- Children: a ToolList (leave `padding` at 0) or free content (pass `padding`).
- `onDark` on black chrome.

Spacing
- Stack sections in a column with `gap: var(--section-gap)` (32px). The header sits `--section-label-gap` (10px) above its card, so the space above a header is larger than the space below it.
- Card content has `--card-pad` (16px) padding. The card carries the full-strength `shadow-card` on light and no shadow on dark.

Don't
- Use dashed borders, accent borders or a label set into the border line.
- Nest a SectionCard inside another.
