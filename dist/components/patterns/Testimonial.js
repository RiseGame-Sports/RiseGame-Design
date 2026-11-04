function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Card } from '../core/Card.js';
import { Logo } from '../core/Logo.js';
export function Testimonial({
  quote,
  name,
  role,
  location,
  tone = 'light',
  assetBase,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(Card, _extends({
    tone: tone,
    padding: "var(--space-5)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)',
      color: dark ? 'var(--rg-white)' : 'var(--rg-ink)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "rocket",
    onDark: dark,
    height: 28,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: dark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, name, role ? ' (' + role + ')' : ''), location ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      color: dark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, location) : null)));
}
