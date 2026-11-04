function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
export function Tabs({
  items = [],
  value,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
      ...style
    }
  }, rest), items.map(item => {
    const label = typeof item === 'string' ? item : item.label;
    const id = typeof item === 'string' ? item : item.value;
    const on = value === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        background: 'none',
        border: 0,
        padding: '0 0 var(--space-3)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body-sm)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: on ? onDark ? 'var(--rg-white)' : 'var(--rg-ink)' : onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--rg-accent)' : 'transparent'),
        marginBottom: -1,
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
