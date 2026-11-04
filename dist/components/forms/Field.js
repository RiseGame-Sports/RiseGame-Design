function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
export function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  onDark = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rg-mute)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-medium)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, hint) : null);
}
