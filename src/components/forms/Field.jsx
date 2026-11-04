import React from 'react';

export function Field({ label, hint, error, required = false, htmlFor, onDark = false, children, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', fontWeight: 'var(--weight-bold)',
          color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
        }}>
          {label}{required ? <span style={{ color: 'var(--rg-mute)' }}> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span style={{ fontSize: 'var(--size-caption)', fontWeight: 'var(--weight-medium)', color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 'var(--size-caption)', color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
