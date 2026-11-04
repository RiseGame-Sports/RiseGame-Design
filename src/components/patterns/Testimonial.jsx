import React from 'react';
import { Card } from '../core/Card.jsx';
import { Logo } from '../core/Logo.jsx';

export function Testimonial({ quote, name, role, location, tone = 'light', assetBase, style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <Card tone={tone} padding="var(--space-5)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }} {...rest}>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)', color: dark ? 'var(--rg-white)' : 'var(--rg-ink)', textWrap: 'pretty' }}>{quote}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'auto' }}>
        <Logo variant="rocket" onDark={dark} height={28} assetBase={assetBase} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', fontWeight: 'var(--weight-bold)', color: dark ? 'var(--rg-white)' : 'var(--rg-ink)' }}>{name}{role ? ' (' + role + ')' : ''}</span>
          {location ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--size-caption)', color: dark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }}>{location}</span> : null}
        </div>
      </div>
    </Card>
  );
}
