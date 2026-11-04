function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { ICONS } from './icons.js';

// Lucide outline glyph in a fixed box that inherits currentColor. The glyphs are
// bundled (see icons.js); an unknown name renders the empty box at the same size.
export function Icon({
  name,
  size = 20,
  style,
  title,
  ...rest
}) {
  const Glyph = Object.hasOwn(ICONS, name) ? ICONS[name] : null;
  const a11y = title ? {
    role: 'img',
    'aria-label': title
  } : {
    'aria-hidden': 'true'
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, a11y, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: size,
      height: size,
      ...style
    }
  }, rest), Glyph ? /*#__PURE__*/React.createElement(Glyph, {
    size: size,
    color: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }) : null);
}
