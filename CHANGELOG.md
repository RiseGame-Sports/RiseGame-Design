# Changelog

## 0.2.0

- Style A for setting sections apart (2026-11-25). Light page ground (`surface-page`) is paper #F2F2F2; cards stay white. `border-default` is the card hairline #D6D6D6 (new `rg-card-line`); the light `AppTabBar` is white with that hairline so it separates from the paper page. New tokens: `surface-row-alt`, `surface-dark-row-alt`, `section-gap` (32px), `section-label-gap` (10px), `card-pad` (16px), `size-section-label` (13px) and the `section-label` type style with `.rg-section-label`. `SectionCard` headers are ink (white on dark) in `section-label`, and `SectionCard` and `ToolList` carry `shadow-card` on light. `ToolList` stripes every second row (`striped`, `ToolRow` `alt`). Light pixels change; dark changes only in the row tint.
- `Logo` moves to `@risegame/design-system/logo`; `SiteHeader` and `Testimonial` move to `@risegame/design-system/marketing`. Importing the main entry no longer emits the eight logo PNGs; an app gets them only when it imports `@risegame/design-system/logo`. Breaking for imports of those three from the main entry.
- `AppTabBar`: follows the theme. Light is the default (white bar, #D6D6D6 hairline top border, ink active, mute inactive); `onDark` keeps the dark bar (white active, #9A9A9A inactive).
- `AppTabBar`: items take `lines` (a two-line label) and `buttonProps` (spread onto the tab's button); the bar takes `compact` (icon beside the label, 44px row, 6px gap).
- `Button` and `IconButton` apply hover colors only where the device has hover, through the new internal `shouldHover()`. A tap on a phone no longer sticks the hover state.

## 0.1.0

- Initial design system package: tokens, base styles, brand marks and 31 React components.
- Test harness (`npm test`) and CI that rebuilds and fails on stale committed output.
- Removed the UMD bundle.
- Fonts and icons are bundled: `dist/fonts/` and `fonts.css` replace Google Fonts, and `Icon` draws `lucide-react` glyphs instead of masks from unpkg. New `registerIcons` export for app-specific glyphs.
