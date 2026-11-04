function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Card } from '../core/Card.js';
import { Icon } from '../core/Icon.js';
import { Button } from '../core/Button.js';
export function ProductTile({
  name,
  job,
  icon = 'rocket',
  href,
  ctaLabel = 'Learn more',
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(Card, _extends({
    tone: tone,
    interactive: true,
    padding: "var(--space-5)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    style: {
      color: 'var(--rg-accent)'
    }
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-bold)',
      color: dark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--leading-body)',
      color: dark ? 'var(--rg-dark-mute)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, job), href ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onDark: dark,
    href: href,
    iconRight: "chevron-right",
    style: {
      alignSelf: 'flex-start',
      padding: 0
    }
  }, ctaLabel) : null);
}
