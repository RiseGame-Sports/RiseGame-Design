# RiseGame — design.md
**For:** Claude Design / Claude Code UI work  
**Status:** Internal. Locked from Aaron’s Sep 5 2026 logo pack + live risegame.com + Aug 28 brand book.  
**Scope:** RiseGame only. GroundsPal is a separate mark — do not mix into RiseGame chrome until a GroundsPal chapter exists.

Official product copy: https://www.risegame.com/products only. Do not invent features or traction.

---

## Brand in one line

Black field. White mark. Neon green trail. Rocket rises through the **R**. Momentum, not sport-clipart.

---

## Logo files (use these; do not redraw)

Source folder: `/workspace/risegame-logos/from-aaron-2026-09-05/`

| File | Use |
|---|---|
| `risegame-logo.ai` | Master vector (Illustrator). Prefer for print / new exports. |
| `risegame-wordmark-white-on-dark.png` | Full **RISEGAME** wordmark (white + rocket-R + green trails) on dark. Headers, splash, dark UI. |
| `risegame-r-lockup-black.png` | **R** lockup, black on transparent/light-ready tile. Primary app/chrome lockup when you need black R. |
| `risegame-r-lockup-white-on-black.png` | **R** lockup, white on black. Dark UI, favicon tiles. |
| `risegame-rocket-white-on-black.png` | Rocket + green trails only. App icon, favicon, avatar, small chrome. |

Also on disk (older / site): `/workspace/risegame-logos/` and `from-site/risegame-logo.svg` (live web wordmark). Prefer Aaron’s Sep 5 pack for new design work.

### Logo rules
- Rocket always points **up**.
- Trail stays neon green. Do not recolor to HubSpot lime, social lime, or arbitrary product green.
- Clear space: at least the width of the rocket fins on all four sides.
- Do not stretch, rotate, add drop shadows, put type inside the R, or replace the trail with a photo.
- Do not use the old circular green R (`R-Logo-Circle-Small.png`) — retired.
- Name in type: **RiseGame** (one word, R and G caps).

---

## Color

| Token | Hex | Role |
|---|---|---|
| `black` | `#000000` | Logo field, dark UI, contrast |
| `ink` | `#161616` | Headlines on light |
| `white` | `#FFFFFF` | Marks, light surfaces (PNG whites may sample `#FCFCFC` — use `#FFFFFF`) |
| `accent` | `#1DFE1B` | Primary neon — site `--accent`, buttons, links that need energy |
| `trail` | `#78F951` | Exact pixels in logo trail (sampled Sep 5). **Marks only** — not a second button color |
| `mute` | `#666666` | Secondary text |
| `paper` | `#F2F2F2` | Light page chrome |

**Primary button:** fill `#1DFE1B`, label `#000000`. Hover: fill `#242424`, label white.  
**One accent in UI:** `#1DFE1B`. Trail `#78F951` stays in the logo files.

Do not use: HubSpot `#00FF03`, social `#7ED957`, site leftover `#3EC96B`, or a third green.

---

## Typography

From live risegame.com:

| Role | Face | Weight |
|---|---|---|
| Headlines (H1–H4) | **Barlow Condensed** | 700 |
| Body, UI, buttons | **Roboto** | 400 body; 500 links/buttons; 700 nav |
| Nav / tags | Roboto 700, uppercase, tracking ~0.1em | |

Fallback if web fonts unavailable: system sans for UI; do not introduce a third family. HubSpot may fall back to Arial; new templates prefer Roboto → Arial.

Headlines: short, present tense, product or job in the line. Example: **Simplify Your Tryouts With RiseGame**.

---

## Products (names + jobs)

Never say **Core**. Elevate is Elevate.

| Product | Job | Access |
|---|---|---|
| Tryout Scheduler | Parents sign up for tryout slots | https://signups.risegame.com |
| Tryouts By RiseGame | Coaches score athletes on the field | App Store / Play (Tryouts) |
| Draft | Teams from evaluation scores | League Draft app |
| Reports | Parent-readable evaluation breakdown | After tryouts (marketing: careful — follow locked copy) |
| Elevate | Year-round athlete tracking | App Store / Play (Elevate) |
| GroundsPal | League ops (locations, Events, Registration live but off marketing emails until Aaron says) | https://groundspal.com / app.groundspal.com |

Connected flow for league admins: **Scheduler → Tryouts → Draft** (then Reports / Elevate as relevant). Do not invent interconnection claims Aaron has not locked.

---

## UI / layout defaults for Claude Design

- Dark chrome OK: black / near-black (`#000`–`#161616`) with white type and `#1DFE1B` accents.
- Light chrome OK: white / `#F2F2F2` with `#161616` type and `#1DFE1B` buttons.
- Corner radius: web buttons ~2px. Email historically ~15px — for **new product UI**, prefer 2–8px, not pill-heavy unless asked.
- Photography: real youth sports / leagues. Sport lives in the photo, not unique copy per sport.
- CTAs: one job per button. League-admin growth → product URL or `info@risegame.com` for meetings — not App Store as the default league-president CTA unless the email is app-download specific.
- Locked league-admin meeting CTA: `info@risegame.com`. Demo video: https://risegame.com/tutorials/. Multi-product page: https://www.risegame.com/products.

---

## Do / don’t (design)

**Do**
- Use Aaron’s Sep 5 marks and `#1DFE1B` as the single accent.
- Keep high contrast (black / white / neon).
- Flat, minimal, tech — no skeuomorphism, no clipart rockets.

**Don’t**
- Redraw the logo or invent a light wordmark without Aaron.
- Mix GroundsPal branding into RiseGame Tryouts / Draft / Elevate chrome.
- Claim traction, fake testimonials, or roadmap as live.
- Use urgency styling (countdown reds, “LAST CHANCE”) in brand UI.

---

## Voice (short)

Confident, calm, precise. Momentum without panic. Evaluation scores (not bare “scores”). Official language from the products page only.

Full voice: `/workspace/risegame-brand-guidelines.md` §5 / Picante voice file.

---

## Open gaps (Aaron)

- [ ] Confirm font files / license for offline Claude Design (Barlow Condensed + Roboto)
- [ ] GroundsPal logo + colors → separate `design-groundspal.md` or chapter
- [ ] Light-background full wordmark export (if needed beyond black R lockup)
- [ ] Whether HubSpot CTAs migrate fully to `#1DFE1B` + 2px radius on all new templates

---

*Generated 2026-09-05 for Claude Design. Update when Aaron supplies GroundsPal marks or font files.*
