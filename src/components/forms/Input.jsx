import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ icon, size = 'md', invalid = false, onDark = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return (
    <span style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
      height: h, padding: '0 var(--space-3)',
      background: onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (focus ? 'var(--rg-accent)' : invalid ? 'var(--rg-ink)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
      borderWidth: invalid && !focus ? 2 : 1,
      borderRadius: 'var(--radius-md)',
      transition: 'border-color var(--dur) var(--ease)',
      ...style,
    }}>
      {icon ? <Icon name={icon} size={16} style={{ color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }} /> : null}
      <input
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-body)', fontSize: 'var(--size-body)',
          color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
        }}
        {...rest}
      />
    </span>
  );
}
