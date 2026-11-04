function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
import { IconButton } from '../core/IconButton.js';
export function Toast({
  children,
  icon = 'check',
  accent = true,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) var(--space-4)',
      background: 'var(--rg-ink)',
      color: 'var(--rg-white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    style: {
      color: accent ? 'var(--rg-accent)' : 'var(--rg-white)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose ? /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onDark: true,
    onClick: onClose
  }) : null);
}
