# Changelog

## 0.1.0

- Initial design system package: tokens, base styles, brand marks and 31 React components.
- Test harness (`npm test`) and CI that rebuilds and fails on stale committed output.
- Removed the UMD bundle.
- Fonts and icons are bundled: `dist/fonts/` and `fonts.css` replace Google Fonts, and `Icon` draws `lucide-react` glyphs instead of masks from unpkg. New `registerIcons` export for app-specific glyphs.
