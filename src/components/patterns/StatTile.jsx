import React from 'react';

export function StatTile({ value, label, tone = 'light', style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-1)',
      padding: 'var(--space-4)',
      background: dark ? 'var(--surface-dark-card)' : 'var(--surface-card-alt)',
      border: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-card)', ...style,
    }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--size-h2)', fontWeight: 'var(--weight-bold)',
        lineHeight: 1, color: dark ? 'var(--rg-white)' : 'var(--rg-ink)',
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--size-caption)', fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
        color: dark ? 'var(--rg-dark-mute)' : 'var(--text-muted)',
      }}>{label}</span>
    </div>
  );
}
