---
name: risegame-design
description: Use this skill to generate well-branded interfaces and assets for RiseGame, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Start with `docs/brand-book.md`: the brand rules, the green budget and the hierarchy for every screen.

Then use what you need:

- `docs/components/<Name>.md`: what each of the 31 components is for, its props, and the do's and don'ts. Sources are in `src/components/<group>/`.
- `docs/ui-kits/<product>/`: screen references per product. Their styling is ground truth; their screen structure is a proposal to check against the shipped product. Run `npm run build` once so `docs/ui-kits/ds-bundle.js` exists, then open a kit's `index.html`.
- `docs/guidelines/`: one HTML card per foundation (color, type, spacing, radius, elevation, motion, brand marks).
- `tokens/tokens.json`: every token value. In code, import `@risegame/design-system/styles.css` instead of copying values.
- `assets/`: the logos (`assets/logos/`) and the QR code (`assets/qr/`). Never redraw the mark.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, install `@risegame/design-system` and use its components and styles.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
