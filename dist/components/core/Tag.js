function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from './Icon.js';
export function Tag({
  children,
  onRemove,
  selected = false,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 28,
      padding: '0 var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      background: selected ? 'var(--rg-ink)' : onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)',
      color: selected ? 'var(--rg-white)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      border: '1px solid ' + (selected ? 'var(--rg-ink)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  })) : null);
}
