import React from 'react';

export function Tabs({ items = [], value, onChange, onDark = false, style, ...rest }) {
  return (
    <div role="tablist" style={{
      display: 'flex', gap: 'var(--space-5)',
      borderBottom: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'), ...style,
    }} {...rest}>
      {items.map((item) => {
        const label = typeof item === 'string' ? item : item.label;
        const id = typeof item === 'string' ? item : item.value;
        const on = value === id;
        return (
          <button key={id} role="tab" aria-selected={on} onClick={() => onChange && onChange(id)}
            style={{
              background: 'none', border: 0, padding: '0 0 var(--space-3)', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', fontWeight: 'var(--weight-bold)',
              letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
              color: on ? (onDark ? 'var(--rg-white)' : 'var(--rg-ink)') : (onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'),
              borderBottom: '2px solid ' + (on ? 'var(--rg-accent)' : 'transparent'),
              marginBottom: -1, transition: 'var(--transition-control)',
            }}>{label}</button>
        );
      })}
    </div>
  );
}
