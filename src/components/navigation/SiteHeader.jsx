import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';

export function SiteHeader({ items = [], active, onNavigate, ctaLabel = 'Contact', ctaHref = 'mailto:info@risegame.com', assetBase, style, ...rest }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--surface-dark)', color: 'var(--text-inverse)',
      borderBottom: '1px solid var(--border-dark)', ...style,
    }} {...rest}>
      <Logo variant="wordmark" onDark height={26} assetBase={assetBase} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', marginLeft: 'auto' }}>
        {items.map((label) => (
          <a key={label} href="#" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate(label); }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--size-eyebrow)', fontWeight: 'var(--weight-bold)',
              letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', textDecoration: 'none',
              color: active === label ? 'var(--rg-accent)' : 'var(--rg-white)',
              paddingBottom: 2, borderBottom: '2px solid ' + (active === label ? 'var(--rg-accent)' : 'transparent'),
            }}>{label}</a>
        ))}
        <Button variant="secondary" size="sm" onDark href={ctaHref}>{ctaLabel}</Button>
      </nav>
    </header>
  );
}
