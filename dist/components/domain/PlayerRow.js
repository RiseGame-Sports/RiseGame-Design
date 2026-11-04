function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Icon } from '../core/Icon.js';
import { Badge } from '../core/Badge.js';
export function PlayerRow({
  number,
  name,
  meta,
  score,
  status,
  onClick,
  onDark = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      minHeight: 'var(--tap-min)',
      padding: 'var(--space-3) var(--space-4)',
      background: hover && onClick ? onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-paper)' : 'transparent',
      borderBottom: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background-color var(--dur-fast) var(--ease)',
      ...style
    }
  }, rest), number !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)',
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 'var(--weight-bold)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, number) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      fontWeight: 'var(--weight-medium)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, name), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, meta) : null), status ? /*#__PURE__*/React.createElement(Badge, {
    tone: status === 'Scored' ? 'accent' : onDark ? 'dark' : 'neutral'
  }, status) : null, score !== undefined && score !== null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 'var(--weight-bold)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, score) : null, onClick ? /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }) : null);
}
