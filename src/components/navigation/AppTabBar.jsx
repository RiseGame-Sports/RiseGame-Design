import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function AppTabBar({ items = [], value, onChange, style, ...rest }) {
  return (
    <nav style={{
      display: 'grid', gridTemplateColumns: 'repeat(' + Math.max(items.length, 1) + ',1fr)',
      background: 'var(--rg-black)', borderTop: '1px solid var(--border-dark)',
      paddingBottom: 'var(--space-2)', ...style,
    }} {...rest}>
      {items.map((item) => {
        const on = value === item.value;
        return (
          <button key={item.value} type="button" aria-current={on ? 'page' : undefined}
            onClick={() => onChange && onChange(item.value)}
            style={{
              position: 'relative',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              minHeight: 56, padding: '10px 0 var(--space-2)',
              background: 'none', border: 0, cursor: 'pointer',
              color: on ? 'var(--rg-white)' : 'var(--rg-dark-mute)',
              transition: 'var(--transition-control)',
            }}>
            <span aria-hidden="true" style={{
              position: 'absolute', top: -1, left: '20%', right: '20%', height: 2,
              background: on ? 'var(--rg-accent)' : 'transparent',
            }} />
            <Icon name={item.icon} size={22} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 'var(--weight-bold)',
              letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
            }}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
