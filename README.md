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
| `@risegame/design-system` | All components except Logo, SiteHeader and Testimonial (see the next two rows): Button, IconButton, Icon, Badge, Tag, Card, Field, Input, Select, Checkbox, Radio, Switch, Tabs, AppTabBar, Dialog, Toast, EmptyState, ProgressBar, SectionHeading, ProductTile, StatTile, ActionGroup, SectionCard, ToolList, ToolRow, ScoreScale, PlayerRow, SlotCard. Types included. |
| `@risegame/design-system/logo` | `Logo`. |
| `@risegame/design-system/marketing` | `SiteHeader` and `Testimonial`. |
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

`Logo`, `SiteHeader` and `Testimonial` load the marks bundled in `assets/logos` through `new URL(..., import.meta.url)`, which Vite, webpack 5, Next.js and Parcel handle automatically. Import them from `@risegame/design-system/logo` (`Logo`) and `@risegame/design-system/marketing` (`SiteHeader`, `Testimonial`). Importing the main entry no longer emits the eight logo PNGs; an app gets them only when it imports `@risegame/design-system/logo`. To serve them from your own folder or a CDN, pass `assetBase="/brand/"`.

## Fonts and icons

Nothing loads from the network. `styles.css` imports `fonts.css`, which points at the Barlow Condensed and Roboto files in `dist/fonts/` (latin subset, from Fontsource, SIL Open Font License). Import `styles.css` and the bundler copies the fonts with it.

`Icon` draws Lucide glyphs through `lucide-react`. The package ships the icons its components and kits use (`src/components/core/icons.js`); an unknown name renders an empty box of the same size. To add a glyph, register it once at startup:

```jsx
import { registerIcons } from '@risegame/design-system';
import { Flag } from 'lucide-react';

registerIcons({ flag: Flag });
```

## Changing the system

1. Edit `src/` (components, styles) or `tokens/tokens.json`. Tokens change only in `tokens/tokens.json`; `dist/styles/tokens.css` and `dist/tokens.js` are generated from it.
2. Run `npm install` and then `npm run build` to regenerate `dist/` and the kit bundle.
3. Commit `src/` and `dist/` together, bump the version in `package.json`, and tag the release.

`dist/` is committed on purpose, so projects can install straight from GitHub without building.
