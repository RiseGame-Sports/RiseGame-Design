function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Logo } from '../core/Logo.js';
import { Button } from '../core/Button.js';
export function SiteHeader({
  items = [],
  active,
  onNavigate,
  ctaLabel = 'Contact',
  ctaHref = 'mailto:info@risegame.com',
  assetBase,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--surface-dark)',
      color: 'var(--text-inverse)',
      borderBottom: '1px solid var(--border-dark)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    onDark: true,
    height: 26,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    }
  }, items.map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onNavigate) onNavigate(label);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active === label ? 'var(--rg-accent)' : 'var(--rg-white)',
      paddingBottom: 2,
      borderBottom: '2px solid ' + (active === label ? 'var(--rg-accent)' : 'transparent')
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onDark: true,
    href: ctaHref
  }, ctaLabel)));
}
