import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ options = [], size = 'md', onDark = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return (
    <span style={{
      position: 'relative', display: 'flex', alignItems: 'center',
      height: h, background: onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (focus ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)', transition: 'border-color var(--dur) var(--ease)', ...style,
    }}>
      <select
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          appearance: 'none', WebkitAppearance: 'none', flex: 1, minWidth: 0, height: '100%',
          padding: '0 var(--space-6) 0 var(--space-3)', border: 0, outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-body)', fontSize: 'var(--size-body)',
          color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)', cursor: 'pointer',
        }}
        {...rest}
      >
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <Icon name="chevron-down" size={16} style={{ position: 'absolute', right: 10, pointerEvents: 'none', color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }} />
    </span>
  );
}
