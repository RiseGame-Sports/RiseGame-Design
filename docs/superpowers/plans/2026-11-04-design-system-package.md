# RiseGame Design System Package Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Revised scope (2026-11-04, supersedes the task order below)

The Tracker (`/Users/zengy/Sites/risegame/risegame-whiteboard`) is the first product redesigned onto this package. It will vendor the package with `git subtree`, so no GitHub install, token or release tags are needed yet.

Run now, in this order:
1. Task 1, without release tags.
2. Task 2. Push `main` to `RiseGame-Design` but skip the `v0.1.0` tag.
3. Task 3.
4. Task 6. Required before the Tracker, whose service worker precaches every built file and must work offline.
5. New: in `risegame-whiteboard`, run `git subtree add --prefix=packages/design-system git@github.com:RiseGame-Sports/RiseGame-Design.git main --squash`, add `"@risegame/design-system": "file:packages/design-system"`, and confirm `npm run build`, the generated `dist/sw.js` and `npm run lint` still pass. Branch first; do not touch any screen.
6. New: write the Tracker redesign plan as its own plan in `risegame-whiteboard/docs/superpowers/plans/`. It covers pointing the app's `--rg-*` vars (`src/App.css:20-50`) at package tokens; swapping in AppTabBar, Dialog, Button, IconButton, Icon (the 22 glyphs in `src/components/icons.tsx` go through `registerIcons` or Lucide equivalents), Field, Input and Select; moving the sport CSS onto tokens, with field and court colors as named `field-*` tokens; and removing deep green `#0A650A`, red errors, gradients, colored left borders and unicode arrows. The brand book replaces `docs/revamp/DESIGN_RULES.md`, and light mode stays. Stop for Steve's review before any screen changes.

Deferred until something needs them: Task 4 (Tailwind, for when the Laravel platform adopts the package), Task 5 (Flutter), Task 7 (lint config) and version tags.

**Goal:** Turn `risegame-design/` into the single source of the RiseGame design system, generating every stack's tokens from one file, so all products (and the future `risegame/` monorepo with its Flutter app) look the same.

**Architecture:** `tokens/tokens.json` is the master. `scripts/build.mjs` generates `dist/` (CSS tokens, Tailwind v4 `@theme`, JS tokens, compiled React components, self-hosted fonts) and `flutter/lib/risegame_tokens.dart`. The old `../design-system/` folder is folded in under `docs/` and retired. The repo ships to `RiseGame-Sports/RiseGame-Design` now and moves into `risegame/packages/design-system` later via `git subtree add`.

**Tech Stack:** Node 20+ ESM, Babel (existing), esbuild, Node built-in test runner (`node --test`), Tailwind CSS v4 CLI (test only), oxlint, lucide-react, @fontsource, Flutter/Dart (installed at `/opt/homebrew/bin`).

**Spec (decisions made in conversation, 2026-11-04):**
1. This repo replaces `/Users/zengy/Sites/risegame/design-system/` as the one source. Its unique content (ui_kits, guidelines, Elevate handoff, brand source uploads, SKILL.md) moves here.
2. `tokens.json` is the master. `tokens.css` becomes generated. Outputs: CSS, Tailwind v4 `@theme` CSS, JS, Dart.
3. Drop the published UMD bundle. Blade pages get components through Laravel's Vite.
4. Icons and fonts are bundled, not loaded from unpkg or Google Fonts.
5. Ship a shared oxlint config that flags off-system values.
6. No Dependabot, no registry. Install from GitHub tags until the monorepo merge; `dist/` stays committed until then.
7. Fix British spellings ("colour" and similar) to American English.

## Global Constraints

- Paths: repo root is `/Users/zengy/Sites/risegame/risegame-design`. Workspace root is `/Users/zengy/Sites/risegame`.
- Pin every new dependency to an exact version (`npm install -E`).
- Tests use `node --test test/` with no test framework dependency. `npm test` runs them.
- `npm run build` must be deterministic: running it twice yields no git diff.
- Writing in README, docs, comments and commit messages: no em dashes or en dashes, American English, sentence case.
- Brand rules from `/Users/zengy/Sites/risegame/CLAUDE.md` apply to anything visual: accent `#1DFE1B` only, Barlow Condensed 700 for headlines, Roboto for everything else, no third family.
- Do not touch `/Users/zengy/Sites/risegame/risegame/` (the Laravel app). Its adoption of this package is a later plan.
- Never delete the old `design-system/` folder. Rename it to `design-system.retired`.
- Every commit message ends with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A Tailwind theme variable with the same name as a `tokens.css` variable but a different value (for example font size `--text-body` against the color `--text-body`) silently breaks body text color in every Tailwind app. Pinned in Task 4.
2. An unknown icon name must render an empty box of the requested size, not throw or break layout. Pinned in Task 6.
3. Logos load through `new URL('../../../assets/...', import.meta.url)`; any change to `dist/` depth breaks them with no build error. Pinned in Task 1.
4. CSS loaded with a plain `<link>` (ui-kits, no-build pages) must find its fonts: every `url()` in `dist/styles` must resolve to a real file. Pinned in Task 6.
5. A token alias (`{rg-ink}`) that points at a missing token must fail the build, not emit `var(--missing)`. Pinned in Task 3.

---

### Task 1: Repo baseline, CI and test harness

**Files:**
- Create: `test/build.test.mjs`, `.github/workflows/ci.yml`, `package-lock.json`, `CHANGELOG.md`
- Modify: `package.json`, `.gitignore`, `README.md`, `docs/brand-book.md`, `docs/components/AppTabBar.md`
- Delete: `umd/`

**Interfaces:**
- Produces: `npm test` (runs `node --test test/`), `npm run build`. Later tasks add test files under `test/` and outputs to `scripts/build.mjs`.

- [ ] **Step 1:** `git init -b main`, `npm install` to create `package-lock.json`. Add `"test": "node --test test/"` to scripts. Remove the `./umd` export and `umd` from `files`, delete `umd/`. Add `coverage/` to `.gitignore`.
- [ ] **Step 2: Write tests in `test/build.test.mjs`:**
  - `every new URL() asset in dist resolves`: scan `dist/**/*.js` for `new URL('<rel>', import.meta.url)`, resolve each against the file's location, assert the file exists. Expect 8+ matches (Logo plus SiteHeader and Testimonial).
  - `index exports every component`: `import('../dist/index.js')` is not loadable without React, so instead parse `dist/index.js` export names and assert the set equals the 31 names in the README table (ToolList and ToolRow included), and that each has a matching `declare` in `dist/index.d.ts`.
  - `no British spellings in docs`: grep `README.md` and `docs/**/*.md` (excluding `docs/sources/` and `docs/superpowers/`) for `/(colour|organis|licence|programme|behaviour|centre|centred|grey)/i` (no leading `\b`, so "recoloured" is caught), assert zero hits.
- [ ] **Step 3:** Run `npm test`. Expected: spelling test FAILS (10 "colour" hits); the other two PASS.
- [ ] **Step 4:** Replace the British spellings in `docs/brand-book.md` and `docs/components/AppTabBar.md`. Remove the UMD row and "Known gaps" UMD mentions from `README.md`.
- [ ] **Step 5:** Run `npm test`. Expected: PASS.
- [ ] **Step 6:** Create `.github/workflows/ci.yml`: on push and pull_request, Node 20, `npm ci`, `npm run build`, `git diff --exit-code` (fails if committed outputs are stale), `npm test`.
- [ ] **Step 7:** Create `CHANGELOG.md` with a `0.1.0` entry. Commit everything, plan included; message `chore: initial design system package`.

### Task 2: Fold in the old design-system folder and publish v0.1.0

**Files:**
- Create: `docs/ui-kits/` (from `../design-system/ui_kits/`), `docs/guidelines/` (from `../design-system/guidelines/`), `docs/handoff/elevate-redesign.md` (from `../design-system/design_handoff_elevate_redesign/README.md`), `docs/sources/` (from `../design-system/uploads/`), `SKILL.md`, `scripts/build-kits.mjs`, `test/kits.test.mjs`
- Modify: `package.json`, `.gitignore`, `README.md`, `/Users/zengy/Sites/risegame/CLAUDE.md`, `/Users/zengy/Sites/risegame/AGENTS.md`, symlink `/Users/zengy/Sites/risegame/.claude/skills/risegame-design`

**Interfaces:**
- Consumes: `npm run build` from Task 1.
- Produces: `docs/ui-kits/ds-bundle.js` (generated, gitignored) setting `window.RiseGameDesignSystem_66bdc7` to every export of `src/index.js`. Task 6 changes what it bundles but not its shape.

- [ ] **Step 1:** Copy the four folders listed above. Do not copy `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` (Task 7 uses it from the retired folder), `thumbnail.html`, `.thumbnail`, `styles.css`, `tokens/`, `components/`, `readme.md` (same content as `docs/brand-book.md`). Keep `docs/` out of the published `files` except `docs/brand-book.md` and `docs/components/`.
- [ ] **Step 2:** Rewrite references in the copied HTML: `../../styles.css` and `../styles.css` become the relative path to `dist/styles/index.css`; `../../_ds_bundle.js` becomes `../ds-bundle.js`; `../assets/risegame-r-black.png` becomes the relative path to `assets/logos/risegame-r-black.png`.
- [ ] **Step 3: Write `test/kits.test.mjs`:**
  - `every local src/href in docs/ui-kits and docs/guidelines resolves`: parse `src="..."` and `href="..."` that are not `http(s):`, assert each file exists (after build).
  - `kit bundle exposes every component`: run the bundle in `node:vm` with a context providing `window`, `document` (stub with `currentScript.src` set to a `file://` URL of the bundle) and `window.React` stubbed as `{ createElement: () => null, Fragment: 'f', useState: (v) => [v, () => {}], useEffect: () => {}, useRef: () => ({}) , forwardRef: (f) => f }`; assert all 31 export names are functions on `window.RiseGameDesignSystem_66bdc7`.
- [ ] **Step 4:** Run `npm test`. Expected: FAIL (bundle missing).
- [ ] **Step 5:** Implement `scripts/build-kits.mjs` with esbuild: entry `src/index.js`, format `iife`, `globalName: 'RiseGameDesignSystem_66bdc7'`, a plugin resolving `react` and `react-dom` to `module.exports = window.React` / `window.ReactDOM`, jsx loader for `.jsx`, `.png` assets left as `new URL` calls by defining `import.meta.url` as `__rgBase`, where a banner sets `var __rgBase = new URL('../../src/components/core/x.js', document.currentScript.src).href;` so `../../../assets/...` resolves to the repo `assets/`. Call it at the end of `scripts/build.mjs`. Gitignore `docs/ui-kits/ds-bundle.js` and exclude it from the CI diff check.
- [ ] **Step 6:** Run `npm run build && npm test`. Expected: PASS. Open `docs/ui-kits/tryouts-app/index.html` in a browser (or headless Chrome screenshot) and confirm the screen renders with the logo.
- [ ] **Step 7:** In `docs/brand-book.md`, rewrite the stale parts that came from the old design tool: the "Shipped product reference: RiseGame Tracker" section (it calls the pre-redesign Tracker, with its green eyebrow set in the card border, ground truth, which contradicts the green budget and `SectionCard`; it becomes "the pre-redesign Tracker, kept for layout reference only"), and the mentions of `asset-map.js`, the bundle, and the `Logos`/`Screens`/`Originals`/`Reference` asset groups (point to `assets/logos/`, `assets/qr/` and `docs/sources/` instead). Write `SKILL.md` at repo root, same frontmatter as the old one (`name: risegame-design`), body pointing to `docs/brand-book.md`, `docs/components/`, `docs/ui-kits/`, `docs/guidelines/`, `tokens/tokens.json`, `assets/`.
- [ ] **Step 8:** Repoint `/Users/zengy/Sites/risegame/.claude/skills/risegame-design` to `../../risegame-design`. In workspace `CLAUDE.md` and `AGENTS.md`, replace the `design-system/...` paths with the new ones: guidelines `risegame-design/docs/brand-book.md`, tokens `@risegame/design-system/styles.css` or `risegame-design/tokens/tokens.json`, component docs `risegame-design/docs/components/<Name>.md` with source in `risegame-design/src/components/<group>/`, logos `risegame-design/assets/`, screen references `risegame-design/docs/ui-kits/<product>/`. Rename `/Users/zengy/Sites/risegame/design-system` to `design-system.retired`.
- [ ] **Step 9:** Commit `feat: fold in ui kits, guidelines and brand sources`. Add remote `git@github.com:RiseGame-Sports/RiseGame-Design.git` (match the protocol `risegame/` uses), push `main`, tag `v0.1.0`, push the tag. Confirm CI passes with `gh run watch`.

### Task 3: Generate tokens.css from tokens.json

**Files:**
- Create: `scripts/tokens.mjs`, `test/tokens.test.mjs`, `test/fixtures/tokens.before.css` (copy of current `src/styles/tokens.css`)
- Modify: `scripts/build.mjs`; delete `src/styles/tokens.css` (build writes `dist/styles/tokens.css`)

**Interfaces:**
- Produces in `scripts/tokens.mjs`:
  - `loadTokens(path?: string): Tokens` (reads `tokens/tokens.json`)
  - `resolveValue(tokens, value: string): string` returns the literal value, following `{alias}` chains; throws `Error('Unknown token alias: <name>')` on a missing target.
  - `flatVars(tokens): Array<{ name: string, value: string, ref?: string }>` every CSS custom property in source order; `value` is the literal, `ref` is the alias target name when the token is an alias. Covers color tokens (first theme), every family with a `tokens` array, and `font-<family>` from `type.families`.
  - `renderTokensCss(tokens): string`
- Tasks 4 and 5 consume `loadTokens`, `resolveValue` and `flatVars`. The existing `cssVars` in `dist/tokens.js` must be built from `flatVars`.

- [ ] **Step 1: Write `test/tokens.test.mjs`:**
  - `generated tokens.css matches the hand-written file`: parse custom properties from `renderTokensCss(loadTokens())` and from the fixture into maps; assert equal (compare values whitespace- and case-insensitively), and the selector is `:root, [data-theme="light"]`.
  - `alias renders as var()`: `renderTokensCss` output contains `--text-body: var(--rg-ink)` or whatever the fixture holds for `text-body`.
  - `missing alias throws`: `resolveValue({ ...tokens with one alias pointing at 'nope' }, '{nope}')` throws `Unknown token alias: nope`.
  - `cssVars matches flatVars`: `import('../dist/tokens.js')` `cssVars` keys equal `flatVars` names prefixed `--`.
- [ ] **Step 2:** Run `npm test`. Expected: FAIL (module missing).
- [ ] **Step 3:** Implement `scripts/tokens.mjs`; make `build.mjs` write `dist/styles/tokens.css` from `renderTokensCss` (header comment `/* Generated from tokens/tokens.json. Do not edit. */`) and build `cssVars` from `flatVars`.
- [ ] **Step 4:** Run `npm run build && npm test`. Expected: PASS. Run `npm run build` again and confirm `git status` shows no change.
- [ ] **Step 5:** Update README "Changing the system": tokens change only in `tokens/tokens.json`. Commit `feat: generate tokens.css from tokens.json`.

### Task 4: Tailwind v4 theme

**Files:**
- Create: `test/theme.test.mjs`, `test/fixtures/tailwind/input.css`, `test/fixtures/tailwind/content.html`
- Modify: `scripts/tokens.mjs`, `scripts/build.mjs`, `package.json` (export `"./theme.css": "./dist/styles/theme.css"`, devDeps `tailwindcss`, `@tailwindcss/cli`), `README.md`

**Interfaces:**
- Consumes: `loadTokens`, `resolveValue`, `flatVars` from Task 3.
- Produces: `renderThemeCss(tokens): string` in `scripts/tokens.mjs`, written to `dist/styles/theme.css`.

Naming (values are literals from `resolveValue`, never `var()`, so no reference cycles):

| Token family | Theme variable | Utility example |
|---|---|---|
| color `rg-accent`, `text-body`, `surface-card` | `--color-<name>` | `bg-rg-accent`, `text-text-body` |
| `type.families` `display`, `body`, `mono` | `--font-<family>` | `font-display` |
| fontSize `size-h1` | `--text-<name>` (keeps `size-` prefix) | `text-size-h1` |
| radius `radius-card` | `--radius-<name minus radius->` | `rounded-card` |
| shadow `shadow-card` | `--shadow-<name minus shadow->` | `shadow-card` |
| easing `ease` | `--ease-rg` (plus `--ease-<name minus ease->` for others) | `ease-rg` |

Spacing stays on Tailwind's default 4px scale (no override).

- [ ] **Step 1: Write `test/theme.test.mjs`:**
  - `theme.css is one @theme block with literal values`: output starts with the generated header, contains `@theme {`, and no `var(`.
  - `no clash with tokens.css`: for every name defined in both `theme.css` and `dist/styles/tokens.css`, the values are identical. Explicitly assert `--text-body` is not defined in `theme.css`.
  - `tailwind compiles utilities`: run `npx @tailwindcss/cli -i test/fixtures/tailwind/input.css` (input imports `tailwindcss` and `../../../dist/styles/theme.css`; content file uses `bg-rg-accent rounded-card text-size-h1 font-display shadow-card ease-rg`) and assert the output contains `#1dfe1b` (case-insensitive) for `.bg-rg-accent`, the card radius value from tokens.json for `.rounded-card`, and `Barlow Condensed` for `.font-display`.
- [ ] **Step 2:** Run `npm test`. Expected: FAIL.
- [ ] **Step 3:** Implement `renderThemeCss` per the table; write it in `build.mjs`.
- [ ] **Step 4:** Run `npm run build && npm test`. Expected: PASS.
- [ ] **Step 5:** README: add the `theme.css` row and a Tailwind v4 snippet (`@import "tailwindcss"; @import "@risegame/design-system/tokens.css"; @import "@risegame/design-system/theme.css";`). Commit `feat: tailwind v4 theme from tokens`.

### Task 5: Flutter tokens

**Files:**
- Create: `flutter/pubspec.yaml`, `flutter/lib/risegame_tokens.dart` (generated, committed), `flutter/analysis_options.yaml`, `flutter/README.md`, `test/dart.test.mjs`
- Modify: `scripts/tokens.mjs`, `scripts/build.mjs`, `.gitignore` (`flutter/.dart_tool/`, `flutter/pubspec.lock`), CI workflow diff check covers `flutter/lib`

**Interfaces:**
- Consumes: `loadTokens`, `resolveValue`, `flatVars`.
- Produces: `renderDart(tokens): string`. Dart package `risegame_tokens` exporting:
  - `abstract final class RgColors` with `static const Color <camelName>` for every color token (`rg-accent` becomes `rgAccent`, value `Color(0xFF1DFE1B)`; 8-digit alpha from any rgba literal).
  - `RgSpacing` (`space-1` becomes `space1`, `double`), `RgSizes`, `RgRadius` (`double`), `RgFontSize` (`size-display-1` becomes `display1`, `double`), `RgFontWeight` (`FontWeight.w700` etc.), `RgLineHeight` (`double`), `RgLetterSpacing` (`em` values as `double` em multipliers, documented), `RgDuration` (`Duration`), `RgEasing` (`Cubic`), `RgFonts` (`display = 'Barlow Condensed'`, `body = 'Roboto'`: first family name only).
  - Shadows are skipped (CSS strings), noted in `flutter/README.md`.
- pubspec: `name: risegame_tokens`, `publish_to: none`, sdk `^3.5.0`, dependency `flutter: { sdk: flutter }`.

- [ ] **Step 1: Write `test/dart.test.mjs`:**
  - `dart file contains the accent`: generated source contains `static const Color rgAccent = Color(0xFF1DFE1B);`.
  - `every token appears`: count of `static const` lines equals the number of non-shadow tokens plus font families.
  - `identifiers are valid`: every identifier matches `/^[a-z][A-Za-z0-9]*$/` and is unique within its class.
  - `flutter analyze passes`: run `flutter pub get` then `flutter analyze` in `flutter/`; assert exit code 0. Skip the test with a message if `flutter` is not on PATH.
- [ ] **Step 2:** Run `npm test`. Expected: FAIL.
- [ ] **Step 3:** Implement `renderDart`; `build.mjs` writes `flutter/lib/risegame_tokens.dart` with a generated-file header.
- [ ] **Step 4:** Run `npm run build && npm test`. Expected: PASS.
- [ ] **Step 5:** `flutter/README.md`: how the monorepo Flutter app depends on it (`risegame_tokens: { path: ../packages/design-system/flutter }`), and that fonts come from the `google_fonts` package or bundled TTFs. Commit `feat: flutter tokens package`.

### Task 6: Bundle fonts and icons

**Files:**
- Create: `test/assets.test.mjs`
- Modify: `src/styles/base.css`, `src/components/core/Icon.jsx`, `scripts/build.mjs`, `package.json` (dependency `lucide-react`; devDeps `@fontsource/barlow-condensed`, `@fontsource/roboto`, `react`, `react-dom`), `README.md` (remove "Known gaps")

**Interfaces:**
- Consumes: kit bundle build from Task 2 (unchanged shape).
- Produces: `dist/fonts/*.woff2` and `dist/styles/fonts.css` (`@font-face` rules with relative `../fonts/` URLs), imported first by `dist/styles/index.css`. `Icon` keeps its props `{ name: string, size?: number = 20, title?: string, style?, ...rest }`.

- [ ] **Step 1: Write `test/assets.test.mjs`:**
  - `no remote URLs in dist`: no `https?://` in `dist/styles/**` or `dist/components/**`.
  - `every css url() resolves`: each `url(...)` in `dist/styles/*.css` points at an existing file.
  - `fonts cover the weights in use`: `fonts.css` has `@font-face` for Barlow Condensed 400, 500, 600, 700 and Roboto 400, 500, 700, 900, latin subset, `font-display: swap`.
  - `icon names used in src are registered`: collect `icon="..."` and `name="..."` string literals passed to `Icon`/`icon` props across `src/`, `docs/components/*.md` and `docs/ui-kits/`, assert each is a key of `ICONS`.
  - `brand book slugs are registered`: every slug in the "Common slugs in use" list of `docs/brand-book.md` is a key of `ICONS`.
  - `registerIcons adds names`: after `registerIcons({ 'goal-post': SomeComponent })`, `renderToString(createElement(Icon, { name: 'goal-post' }))` contains `<svg`.
  - `Icon renders an accessible box`: `renderToString(createElement(Icon, { name: 'check', size: 24, title: 'Done' }))` contains `role="img"`, `aria-label="Done"`, `width:24px`; without `title` it contains `aria-hidden="true"`.
  - `unknown icon does not throw`: `renderToString(createElement(Icon, { name: 'not-an-icon' }))` returns a string with `width:20px`.
- [ ] **Step 2:** Run `npm test`. Expected: FAIL.
- [ ] **Step 3:** Build copies the eight latin woff2 files from `@fontsource` into `dist/fonts/` and writes `fonts.css`. Remove the Google Fonts `@import` from `base.css`; `index.css` imports `fonts.css`, `tokens.css`, `base.css`.
- [ ] **Step 4:** Create `src/components/core/icons.js` exporting `ICONS` (kebab-case name to a statically imported `lucide-react` component, covering the tested names) and `registerIcons(map: Record<string, ComponentType>): void` for app-specific glyphs. Rewrite `Icon` as a span (role/aria as tested, inline-flex, fixed width and height) rendering `ICONS[name]` with `size`, `color="currentColor"` and the default stroke. Unknown names render the empty span. Export `registerIcons` from `src/index.js` with types in `index.d.ts`. Do not use `lucide-react/dynamic`: it emits one chunk per icon, and the Tracker's service worker precaches every built file, so it would precache about 1,500 icon files.
- [ ] **Step 5:** Run `npm run build && npm test`. Expected: PASS. Reopen a ui-kit page and confirm icons and fonts load with the network offline (DevTools offline or no internet).
- [ ] **Step 6:** Commit `feat: bundle fonts and icons`.

### Task 7: Shared lint config and the next version (0.3.0; 0.2.0 went to the Tracker's package needs)

**Files:**
- Create: `lint/oxlintrc.json`, `test/lint.test.mjs`, `test/fixtures/lint/bad.jsx`, `test/fixtures/lint/good.jsx`
- Modify: `package.json` (export `"./oxlint.json": "./lint/oxlintrc.json"`, add `lint` to `files`, devDep `oxlint`), `README.md`, `CHANGELOG.md`

**Interfaces:**
- Consumes: `/Users/zengy/Sites/risegame/design-system.retired/_adherence.oxlintrc.json` as the starting point.
- Produces: an oxlint config consuming repos reference with `"extends": ["./node_modules/@risegame/design-system/lint/oxlintrc.json"]`.

- [ ] **Step 1:** Copy the adherence file to `lint/oxlintrc.json`. Replace the `no-restricted-imports` patterns with one forbidding `@risegame/design-system/dist/*` (message: import from `@risegame/design-system`). Add prop rules in the existing style for `ActionGroup`, `SectionCard`, `ToolList`, `ToolRow` using the props declared in `src/index.d.ts`. Add a `no-restricted-syntax` rule for string literals containing emoji (`\p{Extended_Pictographic}`), message "No emoji in RiseGame UI. Use the Icon component."
- [ ] **Step 2: Write `test/lint.test.mjs`:** run `npx oxlint -c lint/oxlintrc.json --format json` on each fixture.
  - `bad.jsx` (contains `color: '#00FF03'`, `padding: '13px'`, `fontFamily: 'Inter'`, `<Button variant="danger">`, `<ToolRow foo="x">`, `'Great job 🎉'`, `import { Button } from '@risegame/design-system/dist/components/core/Button.js'`) yields one diagnostic per line, each message matching the rule above.
  - `good.jsx` (uses `var(--rg-accent)`, `<Button variant="primary">`, `<Icon name="check" />`) yields zero diagnostics.
- [ ] **Step 3:** Run `npm test`. Expected: PASS if the copied rules work; fix any rule that misses its fixture line (the emoji regex is the likely one).
- [ ] **Step 4:** README: lint section with the `extends` snippet. Bump version to `0.3.0` (0.2.0 is taken by the Tracker's package needs), CHANGELOG entry listing Tasks 3 to 7. Commit `feat: shared lint config`, tag `v0.3.0`, push `main` and the tag, confirm CI with `gh run watch`.
