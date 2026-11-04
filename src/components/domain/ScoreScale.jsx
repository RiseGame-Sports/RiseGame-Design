import React from 'react';

export function ScoreScale({ max = 5, value, onChange, size = 'md', readOnly = false, label, onDark = false, style, ...rest }) {
  const box = size === 'sm' ? 28 : size === 'lg' ? 52 : 40;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label ? (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--size-caption)', fontWeight: 'var(--weight-bold)',
          letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
          color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)',
        }}>{label}</span>
      ) : null}
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        {Array.from({ length: max }, (_, i) => i + 1).map((n) => {
          const on = value === n;
          return (
            <button key={n} disabled={readOnly} onClick={() => onChange && onChange(n)}
              aria-pressed={on}
              style={{
                width: box, height: box, borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-display)', fontSize: size === 'sm' ? 15 : 20, fontWeight: 'var(--weight-bold)',
                background: on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
                color: on ? 'var(--rg-black)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
                border: '1px solid ' + (on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
                cursor: readOnly ? 'default' : 'pointer',
                transition: 'var(--transition-control)',
              }}>{n}</button>
          );
        })}
      </div>
    </div>
  );
}
