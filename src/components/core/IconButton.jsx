import React from 'react';
import { Icon } from './Icon.jsx';
import { shouldHover } from './hover.js';

const BOX = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, label, variant = 'ghost', size = 'md', onDark = false, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const active = hover && !disabled;
  const fills = {
    ghost: { background: active ? (onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)') : 'transparent', color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)', border: '1px solid transparent' },
    outline: { background: active ? (onDark ? 'var(--rg-white)' : 'var(--rg-ink)') : 'transparent', color: active ? (onDark ? 'var(--rg-black)' : 'var(--rg-white)') : onDark ? 'var(--rg-white)' : 'var(--rg-ink)', border: '1px solid ' + (onDark ? 'var(--rg-dark-line)' : 'var(--border-default)') },
    accent: { background: active ? 'var(--rg-ink-2)' : 'var(--rg-accent)', color: active ? 'var(--rg-white)' : 'var(--rg-black)', border: '1px solid transparent' },
  };
  return (
    <button
      aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => { if (shouldHover()) setHover(true); }} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: box, height: box, borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transition: 'var(--transition-control)', ...fills[variant], ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
}
