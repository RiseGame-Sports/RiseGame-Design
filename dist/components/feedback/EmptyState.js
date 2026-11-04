function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
export function EmptyState({
  icon = 'clipboard-list',
  title,
  body,
  action,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-7) var(--space-5)',
      border: '1px dashed ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-card)',
      background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card-alt)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28,
    style: {
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-bold)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 380,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, body) : null, action);
}
