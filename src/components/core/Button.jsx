import React from 'react';
import { Icon } from './Icon.jsx';
import { shouldHover } from './hover.js';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 var(--space-3)', font: 'var(--size-body-sm)', icon: 16 },
  md: { height: 'var(--control-h)', padding: '0 var(--space-4)', font: 'var(--size-body)', icon: 18 },
  lg: { height: 'var(--control-h-lg)', padding: '0 var(--space-5)', font: 'var(--size-body-lg)', icon: 20 },
};

function palette(variant, onDark, hover) {
  switch (variant) {
    case 'primary':
      return hover
        ? { background: 'var(--rg-ink-2)', color: 'var(--rg-white)', border: '1px solid var(--rg-ink-2)' }
        : { background: 'var(--rg-accent)', color: 'var(--text-on-accent)', border: '1px solid var(--rg-accent)' };
    case 'secondary':
      if (onDark) {
        return hover
          ? { background: 'var(--rg-white)', color: 'var(--rg-black)', border: '1px solid var(--rg-white)' }
          : { background: 'transparent', color: 'var(--rg-white)', border: '1px solid var(--rg-white)' };
      }
      return hover
        ? { background: 'var(--rg-ink)', color: 'var(--rg-white)', border: '1px solid var(--rg-ink)' }
        : { background: 'transparent', color: 'var(--rg-ink)', border: '1px solid var(--rg-ink)' };
    case 'ghost':
      return { background: 'transparent', color: hover ? 'var(--rg-accent)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)', border: '1px solid transparent' };
    default:
      return hover
        ? { background: 'var(--rg-accent)', color: 'var(--rg-black)', border: '1px solid var(--rg-accent)' }
        : { background: 'var(--rg-ink)', color: 'var(--rg-white)', border: '1px solid var(--rg-ink)' };
  }
}

export function Button({ children, variant = 'primary', size = 'md', iconLeft, iconRight, disabled = false, fullWidth = false, onDark = false, href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const p = palette(variant, onDark, hover && !disabled);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => { if (shouldHover()) setHover(true); }}
      onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
        height: s.height, padding: s.padding,
        fontFamily: 'var(--font-body)', fontSize: s.font, fontWeight: 'var(--weight-medium)', lineHeight: 1,
        textDecoration: 'none', borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transform: down && !disabled ? 'translateY(1px)' : 'none',
        transition: 'var(--transition-control), transform var(--dur-fast) var(--ease)',
        ...p, ...style,
      }}
      {...rest}
    >
      {iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </Tag>
  );
}
