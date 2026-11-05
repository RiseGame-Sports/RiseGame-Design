# Logo

Renders a supplied RiseGame mark at a fixed height. It is the only correct way to place the logo.

    import { Logo } from '@risegame/design-system/logo';

    <Logo variant="wordmark" onDark height={28} assetBase="../../assets/logos/" />
    <Logo variant="rocket" height={40} />

Notes
- Set assetBase to the relative path from your page to assets/logos/.
- Clear space: at least the width of the rocket fins on all four sides.
- Do not stretch, rotate, shadow, recolor the trail, or use the retired circular green R.
