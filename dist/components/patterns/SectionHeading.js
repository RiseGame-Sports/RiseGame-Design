function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  onDark = false,
  level = 2,
  style,
  ...rest
}) {
  const Tag = 'h' + level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: 'var(--container-narrow)',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--rg-accent)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: level === 1 ? 'var(--size-h1)' : level === 2 ? 'var(--size-h2)' : 'var(--size-h3)',
      lineHeight: 'var(--leading-heading)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, body) : null);
}
