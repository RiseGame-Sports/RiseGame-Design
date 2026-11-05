# Changelog

## 0.2.0

- `Logo` moves to `@risegame/design-system/logo`; `SiteHeader` and `Testimonial` move to `@risegame/design-system/marketing`. Importing the main entry no longer emits the eight logo PNGs; an app gets them only when it imports `@risegame/design-system/logo`. Breaking for imports of those three from the main entry.
- `AppTabBar`: items take `lines` (a two-line label) and `buttonProps` (spread onto the tab's button); the bar takes `compact` (icon beside the label, 44px row, 6px gap).
- `Button` and `IconButton` apply hover colors only where the device has hover, through the new internal `shouldHover()`. A tap on a phone no longer sticks the hover state.

## 0.1.0

- Initial design system package: tokens, base styles, brand marks and 31 React components.
- Test harness (`npm test`) and CI that rebuilds and fails on stale committed output.
- Removed the UMD bundle.
- Fonts and icons are bundled: `dist/fonts/` and `fonts.css` replace Google Fonts, and `Icon` draws `lucide-react` glyphs instead of masks from unpkg. New `registerIcons` export for app-specific glyphs.
