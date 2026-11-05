# AppTabBar

Bottom navigation for the Tryouts and Elevate mobile apps. Always on black chrome.

    <AppTabBar value="score" onChange={setTab}
      items={[{value:'roster',label:'Roster',icon:'users'},{value:'score',label:'Score',icon:'clipboard-list'}]} />

Notes
- The active tab is white with a 2px accent bar along its top edge; inactive tabs are #9A9A9A. Color never goes on the icon or label. Tabs are 56px tall, above the 44px tap minimum.
- `lines: ['Players &', 'Teams']` on an item splits its label over two lines. `label` stays the accessible name source and the fallback.
- `buttonProps` on an item spreads onto that tab's button (for `data-*` hooks, `aria-label`, `id`). The component's own `type`, `onClick` and `aria-current` win.
- `compact` puts the icon beside the label: tabs are a 44px row with a 6px gap, for screens that cannot spare 56px.
