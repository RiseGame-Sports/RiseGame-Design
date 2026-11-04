import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, onDark = false, style, ...rest }) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)', ...style,
    }}>
      <input
        type="checkbox" checked={on} disabled={disabled}
        onChange={(e) => { if (!controlled) setInner(e.target.checked); if (onChange) onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 18, height: 18, borderRadius: 'var(--radius-sm)',
        background: on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
        border: '1px solid ' + (on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--rg-mute)'),
        color: 'var(--rg-black)', transition: 'var(--transition-control)',
      }}>
        {on ? <Icon name="check" size={13} /> : null}
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
