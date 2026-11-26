function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';

// A labeled section: an uppercase section header (ink on light, white on dark) above one white card.
// Stack sections in a column with `gap: var(--section-gap)`; the header sits `--section-label-gap` above its card.
// No dashed boxes, no accent borders, no label set into the border line.
export function SectionCard({
  label,
  children,
  onDark = false,
  padding = '0',
  style,
  cardStyle,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--section-label-gap)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    className: "rg-section-label",
    style: {
      color: onDark ? 'var(--text-inverse)' : 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card)',
      border: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: onDark ? 'none' : 'var(--shadow-card)',
      color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
      ...cardStyle
    }
  }, children));
}
