function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
import { Badge } from '../core/Badge.js';
import { Button } from '../core/Button.js';
export function SlotCard({
  date,
  time,
  location,
  spotsLeft,
  capacity,
  selected = false,
  onSelect,
  style,
  ...rest
}) {
  const full = spotsLeft === 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (selected ? 'var(--rg-accent)' : 'var(--border-default)'),
      borderWidth: selected ? 2 : 1,
      borderRadius: 'var(--radius-card)',
      opacity: full ? 0.55 : 1,
      transition: 'border-color var(--dur) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-bold)'
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days",
    size: 13
  }), date, location ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), location) : null)), /*#__PURE__*/React.createElement(Badge, {
    tone: full ? 'neutral' : 'accent'
  }, full ? 'Full' : spotsLeft + ' of ' + capacity + ' left'), onSelect ? /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: selected ? 'dark' : 'secondary',
    disabled: full,
    onClick: onSelect
  }, selected ? 'Selected' : 'Pick this slot') : null);
}
