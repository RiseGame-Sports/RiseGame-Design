import React from 'react';
import { ICONS } from './icons.js';

// Lucide outline glyph in a fixed box that inherits currentColor. The glyphs are
// bundled (see icons.js); an unknown name renders the empty box at the same size.
export function Icon({ name, size = 20, style, title, ...rest }) {
  const Glyph = ICONS[name];
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': 'true' };
  return (
    <span
      {...a11y}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flex: '0 0 auto', width: size, height: size,
        ...style,
      }}
      {...rest}
    >
      {Glyph ? <Glyph size={size} color="currentColor" aria-hidden="true" focusable="false" /> : null}
    </span>
  );
}
