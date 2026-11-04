function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from './Icon.js';
const TONES = {
  neutral: {
    background: 'var(--rg-paper)',
    color: 'var(--rg-ink)',
    border: '1px solid var(--border-default)'
  },
  accent: {
    background: 'var(--rg-accent)',
    color: 'var(--rg-black)',
    border: '1px solid var(--rg-accent)'
  },
  ink: {
    background: 'var(--rg-ink)',
    color: 'var(--rg-white)',
    border: '1px solid var(--rg-ink)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--rg-ink)',
    border: '1px solid var(--rg-ink)'
  },
  dark: {
    background: 'var(--rg-dark-surface-3)',
    color: 'var(--rg-white)',
    border: '1px solid var(--rg-dark-line)'
  }
};
export function Badge({
  children,
  tone = 'neutral',
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      height: 22,
      padding: '0 var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      ...TONES[tone],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
