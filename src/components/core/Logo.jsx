import React from 'react';

const FILES = {
  wordmark: { light: 'risegame-wordmark-black.png', dark: 'risegame-wordmark-white.png', ratio: 2000 / 277 },
  stacked: { light: 'risegame-lockup-stacked-black.png', dark: 'risegame-lockup-stacked-white.png', ratio: 1600 / 1227 },
  r: { light: 'risegame-r-black.png', dark: 'risegame-r-white.png', ratio: 661 / 821 },
  rocket: { light: 'rocket-black.png', dark: 'rocket-white.png', ratio: 343 / 762 },
};

// The marks ship inside the package (assets/logos). Bundlers that understand
// `new URL(..., import.meta.url)` (Vite, webpack 5, Parcel, Next.js) copy them
// automatically. Pass `assetBase` to serve them from your own folder or CDN instead.
const URLS = {
  'risegame-wordmark-black.png': new URL('../../../assets/logos/risegame-wordmark-black.png', import.meta.url).href,
  'risegame-wordmark-white.png': new URL('../../../assets/logos/risegame-wordmark-white.png', import.meta.url).href,
  'risegame-lockup-stacked-black.png': new URL('../../../assets/logos/risegame-lockup-stacked-black.png', import.meta.url).href,
  'risegame-lockup-stacked-white.png': new URL('../../../assets/logos/risegame-lockup-stacked-white.png', import.meta.url).href,
  'risegame-r-black.png': new URL('../../../assets/logos/risegame-r-black.png', import.meta.url).href,
  'risegame-r-white.png': new URL('../../../assets/logos/risegame-r-white.png', import.meta.url).href,
  'rocket-black.png': new URL('../../../assets/logos/rocket-black.png', import.meta.url).href,
  'rocket-white.png': new URL('../../../assets/logos/rocket-white.png', import.meta.url).href,
};

export function Logo({ variant = 'wordmark', onDark = false, height = 32, assetBase, style, ...rest }) {
  const spec = FILES[variant] || FILES.wordmark;
  const file = onDark ? spec.dark : spec.light;
  return (
    <img
      src={assetBase ? assetBase + file : URLS[file]}
      alt="RiseGame"
      style={{ height, width: height * spec.ratio, display: 'block', ...style }}
      {...rest}
    />
  );
}
