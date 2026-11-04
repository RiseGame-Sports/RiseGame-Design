import React from 'react';
import { Card } from '../core/Card.jsx';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

export function ProductTile({ name, job, icon = 'rocket', href, ctaLabel = 'Learn more', tone = 'light', style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <Card tone={tone} interactive padding="var(--space-5)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      <Icon name={icon} size={26} style={{ color: 'var(--rg-accent)' }} />
      <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 'var(--weight-bold)', color: dark ? 'var(--rg-white)' : 'var(--rg-ink)' }}>{name}</h4>
      <p style={{ margin: 0, flex: 1, fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', lineHeight: 'var(--leading-body)', color: dark ? 'var(--rg-dark-mute)' : 'var(--text-muted)', textWrap: 'pretty' }}>{job}</p>
      {href ? <Button variant="ghost" size="sm" onDark={dark} href={href} iconRight="chevron-right" style={{ alignSelf: 'flex-start', padding: 0 }}>{ctaLabel}</Button> : null}
    </Card>
  );
}
