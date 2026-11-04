# @risegame/design-system

The RiseGame design system as one package: design tokens, base styles, the brand marks and 31 React components. Every RiseGame project pulls from here so buttons, colors and type stay the same everywhere.

The brand rules live in [`docs/brand-book.md`](docs/brand-book.md). Read the **Hierarchy and calls to action** section before building a screen: one green button per screen, three green moments at most.

## Install

From GitHub (no registry needed):

```bash
npm install github:RiseGame-Sports/RiseGame-Design
```

Pin a release once tags exist: `github:RiseGame-Sports/RiseGame-Design#v0.1.0`.

React 18 or newer is a peer dependency.

## Use

Import the styles once, at your app root:

```js
import '@risegame/design-system/styles.css';
```

Then use the components:

```jsx
import { ActionGroup, Button, SectionCard, ToolList, ToolRow } from '@risegame/design-system';

<ActionGroup layout="stack">
  <Button size="lg">Track Grant's game</Button>
  <Button size="lg" variant="secondary" onDark>Practice scoring a game</Button>
</ActionGroup>

<SectionCard label="Tools" onDark>
  <ToolList>
    <ToolRow icon="clipboard-list" title="Pitch counter" meta="Count every pitch" actionLabel="Start count" />
    <ToolRow icon="chart-no-axes-column" title="Season report" meta="Grant's season so far" actionLabel="View report" />
  </ToolList>
</SectionCard>
```

Put `className="rg-dark"` (or a black background) on dark screens and pass `onDark` to components that sit on it.

## What's in the package

| Import | What you get |
|---|---|
| `@risegame/design-system` | All components: Button, IconButton, Icon, Badge, Tag, Card, Logo, Field, Input, Select, Checkbox, Radio, Switch, SiteHeader, Tabs, AppTabBar, Dialog, Toast, EmptyState, ProgressBar, SectionHeading, ProductTile, Testimonial, StatTile, ActionGroup, SectionCard, ToolList, ToolRow, ScoreScale, PlayerRow, SlotCard. Types included. |
| `@risegame/design-system/styles.css` | Tokens plus base styles: fonts, resets, `.rg-eyebrow`, `.rg-dark`. |
| `@risegame/design-system/tokens.css` | Just the CSS custom properties (`--rg-accent`, `--space-4`, ...). |
| `@risegame/design-system/tokens` | Tokens as JS: `tokens` (the full object) and `cssVars` (a flat name to value map). |
| `@risegame/design-system/tokens.json` | The source tokens file. |
| `@risegame/design-system/assets/logos/*.png` | Wordmarks, stacked lockups, R marks and rockets, in black and white ink. |
| `@risegame/design-system/assets/qr/risegame-qr-code.jpg` | The official QR code. |

Each component has a guide in [`docs/components/`](docs/components) covering what it's for, what you pass it, and the do's and don'ts.

## UI kits and guidelines

Screen references and foundation cards live in the repo but are not part of the published package:

- `docs/ui-kits/<product>/index.html`: clickable screens for the marketing site, Tryout Scheduler, Tryouts app, Draft and Reports, and Elevate. Their styling is ground truth; their screen structure is a proposal to check against the shipped product.
- `docs/guidelines/`: one HTML card per foundation (color, type, spacing, radius, elevation, motion, brand marks).
- `docs/handoff/elevate-redesign.md`: the Elevate redesign handoff.
- `docs/sources/`: the original brand pack, brief and screenshots the system was built from.

The kit pages load `docs/ui-kits/ds-bundle.js`, which `npm run build` generates and git ignores. Run the build once, then open a kit's `index.html` in a browser.

## Logos

`Logo`, `SiteHeader` and `Testimonial` load the marks bundled in `assets/logos` through `new URL(..., import.meta.url)`, which Vite, webpack 5, Next.js and Parcel handle automatically. To serve them from your own folder or a CDN, pass `assetBase="/brand/"`.

## Known gaps

- **Icons** come from Lucide, loaded from the unpkg CDN. That's a stand-in until RiseGame has its own set. Offline or locked-down apps won't show them. Swap the URL in `src/components/core/Icon.jsx` to change the source.
- **Fonts** (Barlow Condensed and Roboto) load from Google Fonts through `base.css`. Licensed files can replace them later.

## Changing the system

1. Edit `src/` (components, styles) or `tokens/tokens.json`.
2. Run `npm install` and then `npm run build` to regenerate `dist/` and the kit bundle.
3. Commit `src/` and `dist/` together, bump the version in `package.json`, and tag the release.

`dist/` is committed on purpose, so projects can install straight from GitHub without building.
