function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
export function AppTabBar({
  items = [],
  value,
  onChange,
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + Math.max(items.length, 1) + ',1fr)',
      background: 'var(--rg-black)',
      borderTop: '1px solid var(--border-dark)',
      paddingBottom: 'var(--space-2)',
      ...style
    }
  }, rest), items.map(item => {
    const on = value === item.value;
    return /*#__PURE__*/React.createElement("button", _extends({
      key: item.value,
      "aria-label": item.lines ? item.label : undefined
    }, item.buttonProps, {
      type: "button",
      "aria-current": on ? 'page' : undefined,
      onClick: () => onChange && onChange(item.value),
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: compact ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: compact ? 'center' : undefined,
        gap: compact ? 6 : 4,
        minHeight: compact ? 44 : 56,
        padding: compact ? '0 var(--space-2)' : '10px 0 var(--space-2)',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        color: on ? 'var(--rg-white)' : 'var(--rg-dark-mute)',
        transition: 'var(--transition-control)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: -1,
        left: '20%',
        right: '20%',
        height: 2,
        background: on ? 'var(--rg-accent)' : 'transparent'
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase'
      }
    }, item.lines ? /*#__PURE__*/React.createElement(React.Fragment, null, item.lines[0], /*#__PURE__*/React.createElement("br", null), item.lines[1]) : item.label));
  }));
}
