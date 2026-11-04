import React from 'react';

export function Radio({ label, name, value, checked, onChange, disabled = false, onDark = false, style, ...rest }) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)', ...style,
    }}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 18, height: 18, borderRadius: 'var(--radius-full)',
        background: onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
        border: '1px solid ' + (checked ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--rg-mute)'),
        transition: 'var(--transition-control)',
      }}>
        <span style={{ width: 9, height: 9, borderRadius: 'var(--radius-full)', background: checked ? 'var(--rg-accent)' : 'transparent' }} />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
