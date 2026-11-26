# AppTabBar

Bottom navigation for the Tryouts and Elevate mobile apps. The bar follows the theme: a white bar on light screens, dark chrome with `onDark`.

    <AppTabBar value="score" onChange={setTab}
      items={[{value:'roster',label:'Roster',icon:'users'},{value:'score',label:'Score',icon:'clipboard-list'}]} />

Notes
- Light (default): `surface-card` white #FFFFFF with a 1px `border-default` #D6D6D6 top border, so the bar separates from the paper page. The active tab is ink #161616, inactive tabs are mute #666666.
- Dark (`onDark`): dark chrome with a 1px `border-dark` top border. The active tab is white, inactive tabs are #9A9A9A.
- Both versions draw a 2px accent bar along the active tab's top edge. Color never goes on the icon or label.
- A count badge on a tab (for example families waiting) is neutral: ink number on light (white on dark), mute or hairline border, never accent. Tabs are 56px tall, above the 44px tap minimum.
- `lines: ['Players &', 'Teams']` on an item splits its label over two lines. `label` stays the accessible name source and the fallback.
- `buttonProps` on an item spreads onto that tab's button (for `data-*` hooks, `aria-label`, `id`). The component's own `type`, `onClick` and `aria-current` win.
- `compact` puts the icon beside the label: tabs are a 44px row with a 6px gap, for screens that cannot spare 56px.
