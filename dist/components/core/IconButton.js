function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from './Icon.js';
import { shouldHover } from './hover.js';
const BOX = {
  sm: 32,
  md: 40,
  lg: 48
};
export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  onDark = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const active = hover && !disabled;
  const fills = {
    ghost: {
      background: active ? onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)' : 'transparent',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      border: '1px solid transparent'
    },
    outline: {
      background: active ? onDark ? 'var(--rg-white)' : 'var(--rg-ink)' : 'transparent',
      color: active ? onDark ? 'var(--rg-black)' : 'var(--rg-white)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      border: '1px solid ' + (onDark ? 'var(--rg-dark-line)' : 'var(--border-default)')
    },
    accent: {
      background: active ? 'var(--rg-ink-2)' : 'var(--rg-accent)',
      color: active ? 'var(--rg-white)' : 'var(--rg-black)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => {
      if (shouldHover()) setHover(true);
    },
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-control)',
      ...fills[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 18
  }));
}
