function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
export function Card({
  children,
  tone = 'light',
  padding = 'var(--space-5)',
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: dark ? 'var(--surface-dark-card)' : tone === 'alt' ? 'var(--surface-card-alt)' : 'var(--surface-card)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)',
      border: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderColor: interactive && hover ? dark ? 'var(--rg-accent)' : 'var(--rg-ink)' : undefined,
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transition: 'box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
      ...style
    }
  }, rest), children);
}
