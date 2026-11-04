import React from 'react';

export function Switch({ label, checked, defaultChecked, onChange, disabled = false, onDark = false, style, ...rest }) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)', ...style,
    }}>
      <input type="checkbox" role="switch" checked={on} disabled={disabled}
        onChange={(e) => { if (!controlled) setInner(e.target.checked); if (onChange) onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        position: 'relative', display: 'inline-block', width: 38, height: 22,
        borderRadius: 'var(--radius-full)',
        background: on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-line)',
        transition: 'background-color var(--dur) var(--ease)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: on ? 19 : 3, width: 16, height: 16,
          borderRadius: 'var(--radius-full)', background: on ? 'var(--rg-black)' : 'var(--rg-white)',
          boxShadow: 'var(--shadow-card)', transition: 'left var(--dur) var(--ease)',
        }} />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
