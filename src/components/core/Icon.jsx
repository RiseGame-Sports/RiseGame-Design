import React from 'react';

// Lucide (via lucide-static on unpkg) is the substituted icon set — the RiseGame
// brand pack ships no icon library. Glyphs are masked so they inherit currentColor.
const BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

export function Icon({ name, size = 20, style, title, ...rest }) {
  const url = 'url("' + BASE + name + '.svg")';
  return (
    <span
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      style={{
        display: 'inline-block', flex: '0 0 auto', width: size, height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: url, maskImage: url,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskPosition: 'center', maskPosition: 'center',
        ...style,
      }}
      {...rest}
    />
  );
}
