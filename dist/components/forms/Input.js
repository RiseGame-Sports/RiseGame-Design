function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
export function Input({
  icon,
  size = 'md',
  invalid = false,
  onDark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: h,
      padding: '0 var(--space-3)',
      background: onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (focus ? 'var(--rg-accent)' : invalid ? 'var(--rg-ink)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
      borderWidth: invalid && !focus ? 2 : 1,
      borderRadius: 'var(--radius-md)',
      transition: 'border-color var(--dur) var(--ease)',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    style: {
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, rest)));
}
