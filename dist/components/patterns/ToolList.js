function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
import { Button } from '../core/Button.js';

// One row: icon tile, title, muted meta line, then either a labeled secondary
// button (actionLabel) or, with no button, the whole row as the tap target.
export function ToolRow({
  icon,
  title,
  meta,
  actionLabel,
  onAction,
  onClick,
  href,
  onDark = false,
  divider = false,
  alt = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const rowLink = !actionLabel && (onClick || href);
  const Tag = rowLink ? href ? 'a' : 'button' : 'div';
  const muted = onDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: rowLink && href ? href : undefined,
    type: Tag === 'button' ? 'button' : undefined,
    onClick: rowLink ? onClick : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: '100%',
      minHeight: 72,
      boxSizing: 'border-box',
      padding: 'var(--space-3) var(--space-4)',
      background: rowLink && hover ? onDark ? alt ? 'var(--rg-dark-line)' : 'var(--rg-dark-surface-3)' : alt ? 'var(--rg-line)' : 'var(--rg-paper)' : alt ? onDark ? 'var(--surface-dark-row-alt)' : 'var(--surface-row-alt)' : 'transparent',
      border: 0,
      borderBottom: divider ? '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)') : 0,
      color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
      textDecoration: 'none',
      textAlign: 'left',
      font: 'inherit',
      cursor: rowLink ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: onDark ? alt ? 'var(--surface-dark-card)' : 'var(--rg-dark-surface-3)' : alt ? 'var(--surface-card)' : 'var(--rg-paper)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flexGrow: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      fontWeight: 'var(--weight-medium)'
    }
  }, title), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: muted
    }
  }, meta) : null), actionLabel ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onDark: onDark,
    onClick: onAction,
    style: {
      flexShrink: 0
    }
  }, actionLabel) : rowLink ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: muted,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  })) : null);
}

// One card of ToolRows with hairline dividers between them. Every second row takes the row tint
// (`surface-row-alt` on light, `surface-dark-row-alt` on dark); `striped={false}` turns that off.
export function ToolList({
  children,
  onDark = false,
  striped = true,
  style,
  ...rest
}) {
  const rows = React.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card)',
      border: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-card)',
      boxShadow: onDark ? 'none' : 'var(--shadow-card)',
      ...style
    }
  }, rest), rows.map((row, i) => /*#__PURE__*/React.isValidElement(row) ? /*#__PURE__*/React.cloneElement(row, {
    key: row.key ?? i,
    onDark: row.props.onDark ?? onDark,
    divider: i < rows.length - 1,
    alt: striped && i % 2 === 1
  }) : row));
}
