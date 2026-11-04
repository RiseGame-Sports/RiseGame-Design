# SectionCard

A labelled section of a product screen: a muted uppercase eyebrow above one plain card.

    <SectionCard label="Jump back in" onDark padding="12px 16px">…</SectionCard>
    <SectionCard label="Tools" onDark><ToolList>…</ToolList></SectionCard>

The consumer provides
- `label`: the section name. It is set uppercase in `text-inverse-muted` or `text-muted`, never accent.
- Children: a ToolList (leave `padding` at 0) or free content (pass `padding`).
- `onDark` on black chrome.

Don't
- Use dashed borders, accent borders or a label set into the border line.
- Nest a SectionCard inside another.
