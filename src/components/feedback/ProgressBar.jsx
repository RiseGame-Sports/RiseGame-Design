import React from 'react';

export function ProgressBar({ value = 0, max = 100, label, onDark = false, height = 6, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / (max || 1)) * 100));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label ? (
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--font-body)', fontSize: 'var(--size-caption)', fontWeight: 'var(--weight-bold)',
          letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
          color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)',
        }}>
          <span>{label}</span><span>{value} / {max}</span>
        </div>
      ) : null}
      <div role="progressbar" aria-valuenow={value} aria-valuemax={max} style={{
        height, borderRadius: 'var(--radius-sm)',
        background: onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-line)', overflow: 'hidden',
      }}>
        <div style={{ width: pct + '%', height: '100%', background: 'var(--rg-accent)', transition: 'width var(--dur-slow) var(--ease)' }} />
      </div>
    </div>
  );
}
