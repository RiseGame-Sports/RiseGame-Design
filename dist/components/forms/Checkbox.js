function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      if (onChange) onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      background: on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--rg-mute)'),
      color: 'var(--rg-black)',
      transition: 'var(--transition-control)'
    }
  }, on ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  }) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
