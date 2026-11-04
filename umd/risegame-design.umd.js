/* @ds-bundle: {"format":4,"namespace":"RiseGameDesignSystem_66bdc7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"PlayerRow","sourcePath":"components/domain/PlayerRow.jsx"},{"name":"ScoreScale","sourcePath":"components/domain/ScoreScale.jsx"},{"name":"SlotCard","sourcePath":"components/domain/SlotCard.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AppTabBar","sourcePath":"components/navigation/AppTabBar.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ProductTile","sourcePath":"components/patterns/ProductTile.jsx"},{"name":"SectionHeading","sourcePath":"components/patterns/SectionHeading.jsx"},{"name":"StatTile","sourcePath":"components/patterns/StatTile.jsx"},{"name":"Testimonial","sourcePath":"components/patterns/Testimonial.jsx"},{"name":"ActionGroup","sourcePath":"components/patterns/ActionGroup.jsx"},{"name":"SectionCard","sourcePath":"components/patterns/SectionCard.jsx"},{"name":"ToolList","sourcePath":"components/patterns/ToolList.jsx"},{"name":"ToolRow","sourcePath":"components/patterns/ToolList.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"528cf9300de2","components/core/Button.jsx":"ea237e3d5368","components/core/Card.jsx":"7ef5659d0d29","components/core/Icon.jsx":"1f5f136cf5e2","components/core/IconButton.jsx":"8293e62e78dc","components/core/Logo.jsx":"0fb6cca4f6bb","components/core/Tag.jsx":"08e5627afde6","components/domain/PlayerRow.jsx":"35e9b1c7d9c1","components/domain/ScoreScale.jsx":"f9e46e4faf5a","components/domain/SlotCard.jsx":"355ee6387013","components/feedback/Dialog.jsx":"8e1d8b5f546d","components/feedback/EmptyState.jsx":"7cb28ca01785","components/feedback/ProgressBar.jsx":"bb09cf5a2e38","components/feedback/Toast.jsx":"227115a466b7","components/forms/Checkbox.jsx":"f20326454d11","components/forms/Field.jsx":"479daede3a34","components/forms/Input.jsx":"5978d13b8901","components/forms/Radio.jsx":"2d05a4bdb60d","components/forms/Select.jsx":"c8359205f0cd","components/forms/Switch.jsx":"7f0e2b66340b","components/navigation/AppTabBar.jsx":"61584ae82ee1","components/navigation/SiteHeader.jsx":"f4f9eddd3045","components/navigation/Tabs.jsx":"2d0a3562fca6","components/patterns/ProductTile.jsx":"9aa0b7706663","components/patterns/SectionHeading.jsx":"0da100b0faee","components/patterns/StatTile.jsx":"23d83e5c900a","components/patterns/Testimonial.jsx":"ed3a5f04bd50","ui_kits/draft-and-reports/DraftBoard.jsx":"b420ac765a27","ui_kits/draft-and-reports/PlayerReport.jsx":"3c067ec39dda","ui_kits/draft-and-reports/data.js":"270e925e44e5","ui_kits/elevate/AthleteScreens.jsx":"1a5781abd539","ui_kits/elevate/CoachScreens.jsx":"6b6b3c2bf2de","ui_kits/elevate/FamilyScreens.jsx":"e82c1b4d5988","ui_kits/elevate/ParentHome.jsx":"f64b91eaf3c2","ui_kits/elevate/data.js":"db254fddad27","ui_kits/elevate/ios-frame.jsx":"24642b887be3","ui_kits/elevate/shell.jsx":"287913a416af","ui_kits/marketing-site/HomePage.jsx":"4d277908464f","ui_kits/marketing-site/Photo.jsx":"27e10c544736","ui_kits/marketing-site/ProductsPage.jsx":"1eb837561d8f","ui_kits/tryout-scheduler/AdminSlots.jsx":"b65902e40e90","ui_kits/tryout-scheduler/ParentSignup.jsx":"1834ca345c9b","ui_kits/tryout-scheduler/data.js":"7c8a45bf8ea1","ui_kits/tryouts-app/RosterScreen.jsx":"a0e81312ef84","ui_kits/tryouts-app/ScoreScreen.jsx":"628dd21ea6f4","ui_kits/tryouts-app/data.js":"64f78b7f203a","ui_kits/tryouts-app/ios-frame.jsx":"24642b887be3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RiseGameDesignSystem_66bdc7 = window.RiseGameDesignSystem_66bdc7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'light',
  padding = 'var(--space-5)',
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: dark ? 'var(--surface-dark-card)' : tone === 'alt' ? 'var(--surface-card-alt)' : 'var(--surface-card)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)',
      border: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderColor: interactive && hover ? dark ? 'var(--rg-accent)' : 'var(--rg-ink)' : undefined,
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transition: 'box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide (via lucide-static on unpkg) is the substituted icon set — the RiseGame
// brand pack ships no icon library. Glyphs are masked so they inherit currentColor.
const BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 20,
  style,
  title,
  ...rest
}) {
  const url = 'url("' + BASE + name + '.svg")';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? 'img' : 'presentation',
    "aria-label": title,
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      width: size,
      height: size,
      backgroundColor: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--rg-paper)',
    color: 'var(--rg-ink)',
    border: '1px solid var(--border-default)'
  },
  accent: {
    background: 'var(--rg-accent)',
    color: 'var(--rg-black)',
    border: '1px solid var(--rg-accent)'
  },
  ink: {
    background: 'var(--rg-ink)',
    color: 'var(--rg-white)',
    border: '1px solid var(--rg-ink)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--rg-ink)',
    border: '1px solid var(--rg-ink)'
  },
  dark: {
    background: 'var(--rg-dark-surface-3)',
    color: 'var(--rg-white)',
    border: '1px solid var(--rg-dark-line)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      height: 22,
      padding: '0 var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      ...TONES[tone],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--space-3)',
    font: 'var(--size-body-sm)',
    icon: 16
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 var(--space-4)',
    font: 'var(--size-body)',
    icon: 18
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--space-5)',
    font: 'var(--size-body-lg)',
    icon: 20
  }
};
function palette(variant, onDark, hover) {
  switch (variant) {
    case 'primary':
      return hover ? {
        background: 'var(--rg-ink-2)',
        color: 'var(--rg-white)',
        border: '1px solid var(--rg-ink-2)'
      } : {
        background: 'var(--rg-accent)',
        color: 'var(--text-on-accent)',
        border: '1px solid var(--rg-accent)'
      };
    case 'secondary':
      if (onDark) {
        return hover ? {
          background: 'var(--rg-white)',
          color: 'var(--rg-black)',
          border: '1px solid var(--rg-white)'
        } : {
          background: 'transparent',
          color: 'var(--rg-white)',
          border: '1px solid var(--rg-white)'
        };
      }
      return hover ? {
        background: 'var(--rg-ink)',
        color: 'var(--rg-white)',
        border: '1px solid var(--rg-ink)'
      } : {
        background: 'transparent',
        color: 'var(--rg-ink)',
        border: '1px solid var(--rg-ink)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: hover ? 'var(--rg-accent)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
        border: '1px solid transparent'
      };
    default:
      return hover ? {
        background: 'var(--rg-accent)',
        color: 'var(--rg-black)',
        border: '1px solid var(--rg-accent)'
      } : {
        background: 'var(--rg-ink)',
        color: 'var(--rg-white)',
        border: '1px solid var(--rg-ink)'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  onDark = false,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const p = palette(variant, onDark, hover && !disabled);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.font,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: down && !disabled ? 'translateY(1px)' : 'none',
      transition: 'var(--transition-control), transform var(--dur-fast) var(--ease)',
      ...p,
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  onDark = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const active = hover && !disabled;
  const fills = {
    ghost: {
      background: active ? onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)' : 'transparent',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      border: '1px solid transparent'
    },
    outline: {
      background: active ? onDark ? 'var(--rg-white)' : 'var(--rg-ink)' : 'transparent',
      color: active ? onDark ? 'var(--rg-black)' : 'var(--rg-white)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      border: '1px solid ' + (onDark ? 'var(--rg-dark-line)' : 'var(--border-default)')
    },
    accent: {
      background: active ? 'var(--rg-ink-2)' : 'var(--rg-accent)',
      color: active ? 'var(--rg-white)' : 'var(--rg-black)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-control)',
      ...fills[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  wordmark: {
    light: 'risegame-wordmark-black.png',
    dark: 'risegame-wordmark-white.png',
    ratio: 2000 / 277
  },
  stacked: {
    light: 'risegame-lockup-stacked-black.png',
    dark: 'risegame-lockup-stacked-white.png',
    ratio: 1600 / 1227
  },
  r: {
    light: 'risegame-r-black.png',
    dark: 'risegame-r-white.png',
    ratio: 661 / 821
  },
  rocket: {
    light: 'rocket-black.png',
    dark: 'rocket-white.png',
    ratio: 343 / 762
  }
};
function Logo({
  variant = 'wordmark',
  onDark = false,
  height = 32,
  assetBase = '../../assets/',
  style,
  ...rest
}) {
  const spec = FILES[variant] || FILES.wordmark;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: (function (f) { var m = window.RiseGameAssetMap; return (m && m[f]) || assetBase + f; })(onDark ? spec.dark : spec.light),
    alt: "RiseGame",
    style: {
      height,
      width: height * spec.ratio,
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected = false,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 28,
      padding: '0 var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      background: selected ? 'var(--rg-ink)' : onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)',
      color: selected ? 'var(--rg-white)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      border: '1px solid ' + (selected ? 'var(--rg-ink)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/domain/PlayerRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PlayerRow({
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
  }, meta) : null), status ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status === 'Scored' ? 'accent' : onDark ? 'dark' : 'neutral'
  }, status) : null, score !== undefined && score !== null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 'var(--weight-bold)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, score) : null, onClick ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }) : null);
}
Object.assign(__ds_scope, { PlayerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/PlayerRow.jsx", error: String((e && e.message) || e) }); }

// components/domain/ScoreScale.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScoreScale({
  max = 5,
  value,
  onChange,
  size = 'md',
  readOnly = false,
  label,
  onDark = false,
  style,
  ...rest
}) {
  const box = size === 'sm' ? 28 : size === 'lg' ? 52 : 40;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, Array.from({
    length: max
  }, (_, i) => i + 1).map(n => {
    const on = value === n;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      disabled: readOnly,
      onClick: () => onChange && onChange(n),
      "aria-pressed": on,
      style: {
        width: box,
        height: box,
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-display)',
        fontSize: size === 'sm' ? 15 : 20,
        fontWeight: 'var(--weight-bold)',
        background: on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
        color: on ? 'var(--rg-black)' : onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
        border: '1px solid ' + (on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
        cursor: readOnly ? 'default' : 'pointer',
        transition: 'var(--transition-control)'
      }
    }, n);
  })));
}
Object.assign(__ds_scope, { ScoreScale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/ScoreScale.jsx", error: String((e && e.message) || e) }); }

// components/domain/SlotCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SlotCard({
  date,
  time,
  location,
  spotsLeft,
  capacity,
  selected = false,
  onSelect,
  style,
  ...rest
}) {
  const full = spotsLeft === 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (selected ? 'var(--rg-accent)' : 'var(--border-default)'),
      borderWidth: selected ? 2 : 1,
      borderRadius: 'var(--radius-card)',
      opacity: full ? 0.55 : 1,
      transition: 'border-color var(--dur) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-bold)'
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar-days",
    size: 13
  }), date, location ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 13
  }), location) : null)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: full ? 'neutral' : 'accent'
  }, full ? 'Full' : spotsLeft + ' of ' + capacity + ' left'), onSelect ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: selected ? 'dark' : 'secondary',
    disabled: full,
    onClick: onSelect
  }, selected ? 'Selected' : 'Pick this slot') : null);
}
Object.assign(__ds_scope, { SlotCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/SlotCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 460,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,.6)',
      padding: 'var(--space-5)',
      zIndex: 40
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-overlay)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-bold)'
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--leading-body)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-default)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = 'clipboard-list',
  title,
  body,
  action,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-7) var(--space-5)',
      border: '1px dashed ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-card)',
      background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card-alt)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    style: {
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-bold)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 380,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, body) : null, action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  label,
  onDark = false,
  height = 6,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / (max || 1) * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, value, " / ", max)) : null, /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      borderRadius: 'var(--radius-sm)',
      background: onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-line)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: 'var(--rg-accent)',
      transition: 'width var(--dur-slow) var(--ease)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  children,
  icon = 'check',
  accent = true,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) var(--space-4)',
      background: 'var(--rg-ink)',
      color: 'var(--rg-white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: accent ? 'var(--rg-accent)' : 'var(--rg-white)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onDark: true,
    onClick: onClose
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      if (onChange) onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      background: on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--rg-mute)'),
      color: 'var(--rg-black)',
      transition: 'var(--transition-control)'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  }) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
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
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  size = 'md',
  invalid = false,
  onDark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: h,
      padding: '0 var(--space-3)',
      background: onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (focus ? 'var(--rg-accent)' : invalid ? 'var(--rg-ink)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
      borderWidth: invalid && !focus ? 2 : 1,
      borderRadius: 'var(--radius-md)',
      transition: 'border-color var(--dur) var(--ease)',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-full)',
      background: onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (checked ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--rg-mute)'),
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--rg-accent)' : 'transparent'
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  size = 'md',
  onDark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: h,
      background: onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-white)',
      border: '1px solid ' + (focus ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-line)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      transition: 'border-color var(--dur) var(--ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: '0 var(--space-6) 0 var(--space-3)',
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 10,
      pointerEvents: 'none',
      color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      if (onChange) onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--rg-accent)' : onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-line)',
      transition: 'background-color var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--rg-black)' : 'var(--rg-white)',
      boxShadow: 'var(--shadow-card)',
      transition: 'left var(--dur) var(--ease)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppTabBar.jsx
try { (() => {
const { Icon } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AppTabBar({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + Math.max(items.length, 1) + ',1fr)',
      background: 'var(--rg-black)',
      borderTop: '1px solid var(--border-dark)',
      paddingBottom: 'var(--space-2)',
      ...style
    }
  }, rest), items.map(item => {
    const on = value === item.value;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      type: "button",
      "aria-current": on ? 'page' : undefined,
      onClick: () => onChange && onChange(item.value),
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        minHeight: 56,
        padding: '10px 0 var(--space-2)',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        color: on ? 'var(--rg-white)' : 'var(--rg-dark-mute)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: -1,
        left: '20%',
        right: '20%',
        height: 2,
        background: on ? 'var(--rg-accent)' : 'transparent'
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase'
      }
    }, item.label));
  }));
}
Object.assign(__ds_scope, { AppTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = [],
  active,
  onNavigate,
  ctaLabel = 'Contact',
  ctaHref = 'mailto:info@risegame.com',
  assetBase = '../../assets/',
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
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
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
  }, label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onDark: true,
    href: ctaHref
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
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
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProductTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductTile({
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
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    interactive: true,
    padding: "var(--space-5)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
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
  }, job), href ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
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
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
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
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  value,
  label,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      padding: 'var(--space-4)',
      background: dark ? 'var(--surface-dark-card)' : 'var(--surface-card-alt)',
      border: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1,
      color: dark ? 'var(--rg-white)' : 'var(--rg-ink)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--rg-dark-mute)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  role,
  location,
  tone = 'light',
  assetBase = '../../assets/',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
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
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
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
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/draft-and-reports/DraftBoard.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  PlayerRow,
  ScoreScale,
  StatTile,
  Logo,
  Icon,
  Toast
} = window.RiseGameDesignSystem_66bdc7;
function DraftBoard() {
  const d = window.DRAFT_DATA;
  const [pool, setPool] = React.useState(d.pool);
  const [rosters, setRosters] = React.useState(() => Object.fromEntries(d.teams.map(t => [t, []])));
  const [pickIndex, setPickIndex] = React.useState(0);
  const [selected, setSelected] = React.useState(d.pool[0]);
  const [toast, setToast] = React.useState('');
  const onClock = d.teams[pickIndex % d.teams.length];
  const draft = player => {
    setRosters(r => ({
      ...r,
      [onClock]: [...r[onClock], player]
    }));
    setPool(p => p.filter(x => x.number !== player.number));
    setPickIndex(i => i + 1);
    setSelected(null);
    setToast(onClock + ' selected #' + player.number + ' ' + player.name + '.');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 720,
      background: 'var(--surface-chrome)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) var(--space-5)',
      background: 'var(--surface-dark)',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    onDark: true,
    height: 22,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid var(--border-dark)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--rg-dark-mute)'
    }
  }, "Draft \xB7 ", d.league), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rg-eyebrow",
    style: {
      color: 'var(--rg-dark-mute)'
    }
  }, "Round ", Math.floor(pickIndex / d.teams.length) + 1, " \xB7 Pick ", pickIndex + 1), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "clock"
  }, onClock, " on the clock"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1220,
      margin: '0 auto',
      padding: 'var(--space-5)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'var(--space-4)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 700,
      flex: 1
    }
  }, "Available athletes"), /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "By score"), /*#__PURE__*/React.createElement(Tag, null, "By age")), pool.length ? pool.map(p => /*#__PURE__*/React.createElement(PlayerRow, {
    key: p.number,
    number: p.number,
    name: p.name,
    meta: 'Age ' + p.age,
    score: p.avg,
    onClick: () => setSelected(p),
    style: {
      background: selected && selected.number === p.number ? 'var(--rg-paper)' : undefined
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-body-sm)'
    }
  }, "Every athlete has a team.")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, selected ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 700
    }
  }, "#", selected.number, " ", selected.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Age ", selected.age, " \xB7 composite ", selected.avg)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Clear selection",
    size: "sm",
    onClick: () => setSelected(null)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, d.drills.map((drill, i) => /*#__PURE__*/React.createElement(ScoreScale, {
    key: drill,
    label: drill,
    size: "sm",
    value: selected.scores[i],
    readOnly: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3)',
      background: 'var(--rg-paper)',
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--leading-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rg-eyebrow",
    style: {
      display: 'block',
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, "Coach note"), selected.note), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    iconLeft: "check",
    onClick: () => draft(selected)
  }, "Draft to ", onClock)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-5) 0',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 26,
    style: {
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 700,
      color: 'var(--rg-ink)'
    }
  }, "Pick an athlete to compare"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)'
    }
  }, "Every score and note comes straight from tryouts."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, toast ? /*#__PURE__*/React.createElement(Toast, {
    onClose: () => setToast('')
  }, toast) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: pool.length,
    label: "Available"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "dark",
    value: pickIndex,
    label: "Picks made"
  })), d.teams.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-4)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      borderColor: t === onClock ? 'var(--rg-accent)' : undefined,
      borderWidth: t === onClock ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 700,
      flex: 1
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: t === onClock ? 'accent' : 'neutral'
  }, rosters[t].length, " picks")), rosters[t].length ? rosters[t].map(p => /*#__PURE__*/React.createElement("span", {
    key: p.number,
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)'
    }
  }, "#", p.number, " ", p.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\xB7 ", p.avg))) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, "No picks yet."))))));
}
Object.assign(window, {
  DraftBoard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/draft-and-reports/DraftBoard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/draft-and-reports/PlayerReport.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  ScoreScale,
  StatTile,
  SectionHeading,
  ProgressBar,
  Logo,
  Icon
} = window.RiseGameDesignSystem_66bdc7;
function PlayerReport() {
  const d = window.DRAFT_DATA;
  const p = d.pool[1] || d.pool[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: 720
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) var(--space-5)',
      background: 'var(--surface-dark)',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    onDark: true,
    height: 22,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid var(--border-dark)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--rg-dark-mute)'
    }
  }, "Reports"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onDark: true,
    iconLeft: "download",
    style: {
      marginLeft: 'auto'
    }
  }, "Download PDF")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Evaluation report",
    title: p.name + ' — ' + d.league.split(' · ')[1] + ' Tryouts',
    body: "Every score below came from a coach on the field. Here is where your athlete stands and what to work on next."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: p.avg,
    label: "Composite score"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: '#' + p.number,
    label: "Tryout number"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: 'Age ' + p.age,
    label: "Division age"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "dark",
    value: "3 coaches",
    label: "Evaluated by"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 700,
      flex: 1
    }
  }, "Skill breakdown"), /*#__PURE__*/React.createElement(Badge, null, "1 \u2013 5 scale")), d.drills.map((drill, i) => /*#__PURE__*/React.createElement("div", {
    key: drill,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 220px',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: drill,
    value: p.scores[i],
    max: 5
  }), /*#__PURE__*/React.createElement(ScoreScale, {
    size: "sm",
    value: p.scores[i],
    readOnly: true
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "alt",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rg-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, "What the coaches said"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--leading-body)',
      textWrap: 'pretty'
    }
  }, p.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--size-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 16,
    style: {
      color: 'var(--rg-accent)'
    }
  }), "Work on: throwing mechanics"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--size-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days",
    size: 16,
    style: {
      color: 'var(--rg-accent)'
    }
  }), "Next check-in: week 3"))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 700,
      color: 'var(--rg-white)'
    }
  }, "Keep watching the whole season"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body-sm)',
      color: 'var(--rg-dark-mute)'
    }
  }, "Elevate tracks development, attendance and performance year-round.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Open Elevate"))));
}
Object.assign(window, {
  PlayerReport
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/draft-and-reports/PlayerReport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/draft-and-reports/data.js
try { (() => {
window.DRAFT_DATA = {
  league: 'Cypress Youth Baseball · 10U Majors',
  drills: ['Fielding', 'Throwing', 'Hitting', 'Speed', 'Pitching'],
  teams: ['Rockets', 'Bandits', 'Sluggers', 'Outlaws'],
  pool: [{
    number: 41,
    name: 'Cameron Diaz',
    age: 11,
    scores: [5, 4, 4, 5, 3],
    note: 'Reads the ball off the bat early. Strong arm from the outfield.'
  }, {
    number: 14,
    name: 'Jordan Reyes',
    age: 11,
    scores: [4, 4, 5, 4, 4],
    note: 'Best bat in the group. Confident at the plate.'
  }, {
    number: 22,
    name: 'Alex Whitfield',
    age: 11,
    scores: [3, 3, 3, 4, 2],
    note: 'Quick feet. Needs reps on throwing mechanics.'
  }, {
    number: 7,
    name: 'Sam Ortiz',
    age: 10,
    scores: [4, 3, 3, 3, 4],
    note: 'Coachable. Good instincts on the mound.'
  }, {
    number: 3,
    name: 'Micah Bell',
    age: 10,
    scores: [3, 4, 2, 3, 3],
    note: 'Steady glove. Contact is coming along.'
  }, {
    number: 9,
    name: 'Riley Nakamura',
    age: 10,
    scores: [2, 3, 3, 4, 2],
    note: 'Fastest in the division. Raw at the plate.'
  }]
};
window.DRAFT_DATA.pool.forEach(p => {
  p.avg = (p.scores.reduce((a, b) => a + b, 0) / p.scores.length).toFixed(1);
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/draft-and-reports/data.js", error: String((e && e.message) || e) }); }

// ui_kits/elevate/AthleteScreens.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Tabs,
  Field,
  Input,
  Select,
  Icon,
  ProgressBar
} = window.RiseGameDesignSystem_66bdc7;
function CaptureTile({
  card,
  onOpen
}) {
  const last = card.entries[card.entries.length - 1];
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(card),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 'var(--space-3)',
      background: 'var(--e-panel)',
      border: '1px solid var(--e-line)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left',
      color: 'var(--e-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, card.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1
    }
  }, last.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--e-mute)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, card.entries.length, " ", card.entries.length === 1 ? 'entry' : 'entries'), /*#__PURE__*/React.createElement(Spark, {
    points: card.entries.map(e => e.v),
    width: 54,
    height: 20
  })));
}
function EmptyGroup({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      border: '1px dashed var(--e-line)',
      borderRadius: 'var(--radius-md)',
      textAlign: 'center',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, "No capture cards yet \xB7 ", label);
}
function MetricsTab({
  athlete,
  onOpen,
  onNew
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(GroupLabel, {
    onAdd: onNew
  }, "General"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2)',
      padding: '0 var(--space-4) var(--space-5)'
    }
  }, athlete.general.map(c => /*#__PURE__*/React.createElement(CaptureTile, {
    key: c.name,
    card: c,
    onOpen: onOpen
  }))), /*#__PURE__*/React.createElement(GroupLabel, {
    onAdd: onNew
  }, "Baseball"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-5)'
    }
  }, athlete.baseball.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2)'
    }
  }, athlete.baseball.map(c => /*#__PURE__*/React.createElement(CaptureTile, {
    key: c.name,
    card: c,
    onOpen: onOpen
  }))) : /*#__PURE__*/React.createElement(EmptyGroup, {
    label: "Baseball"
  })), /*#__PURE__*/React.createElement(GroupLabel, {
    onAdd: onNew
  }, "Basketball"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(EmptyGroup, {
    label: "Basketball"
  })), /*#__PURE__*/React.createElement(GroupLabel, {
    onAdd: onNew
  }, "Football"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(EmptyGroup, {
    label: "Football"
  })));
}
function AssignmentsTab({
  athlete,
  onOpenWorkout
}) {
  const dark = useDark();
  const done = athlete.assignments.filter(a => a.done).length;
  const pts = athlete.assignments.filter(a => a.done).reduce((n, a) => n + a.pts, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    onDark: dark,
    label: "Assignments complete",
    value: done,
    max: athlete.assignments.length
  })), /*#__PURE__*/React.createElement(GroupLabel, null, "This week"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, athlete.assignments.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: a.title,
    onClick: onOpenWorkout,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: '100%',
      minHeight: 62,
      padding: 'var(--space-3) var(--space-4)',
      background: 'transparent',
      border: 0,
      borderTop: i ? '1px solid var(--e-line)' : 0,
      cursor: 'pointer',
      textAlign: 'left',
      color: 'var(--e-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 26,
      height: 26,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-sm)',
      background: a.done ? 'var(--rg-accent)' : 'transparent',
      border: '1px solid ' + (a.done ? 'var(--rg-accent)' : 'var(--e-line)'),
      color: 'var(--rg-black)'
    }
  }, a.done ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.1
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, a.sport, " \xB7 ", a.status)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.done ? 'accent' : 'dark'
  }, a.pts, " pts")))), /*#__PURE__*/React.createElement(GroupLabel, null, "Season points"), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 1
    }
  }, pts), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, "points earned"))));
}
function ProfileTab({
  athlete
}) {
  const dark = useDark();
  const rows = [['Gender', athlete.gender], ['Birthdate', athlete.birthdate], ['Hometown', athlete.hometown], ['Shoe size', '6.5'], ['Height', athlete.general[0].entries[athlete.general[0].entries.length - 1].label], ['Weight', athlete.general[1].entries[athlete.general[1].entries.length - 1].label]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: 'var(--space-5) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 68,
      height: 68,
      background: 'var(--rg-accent)',
      color: 'var(--rg-black)',
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 700
    }
  }, athlete.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.05
    }
  }, athlete.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, athlete.hometown)), /*#__PURE__*/React.createElement(GroupLabel, null, "Details"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 46,
      padding: '0 var(--space-4)',
      borderTop: i ? '1px solid var(--e-line)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      padding: 'var(--space-4)',
      borderTop: '1px solid var(--e-line)'
    }
  }, athlete.sports.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    onDark: dark
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 46,
      padding: '0 var(--space-4)',
      borderTop: '1px solid var(--e-line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, "Parents"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, athlete.parents.join(', ')))), /*#__PURE__*/React.createElement(GroupLabel, null, "Athlete code"), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: '.08em'
    }
  }, athlete.code), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: dark,
    size: "sm",
    iconLeft: "copy"
  }, "Copy")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-4)',
      fontSize: 11,
      color: 'var(--e-mute)'
    }
  }, "Used to sign in on the athlete app.")));
}
function AthleteDetail({
  athlete,
  tab,
  onTab,
  onBack,
  onOpenCard,
  onOpenWorkout,
  onNew
}) {
  const dark = useDark();
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: athlete.name,
    sub: athlete.sports[0] + ' · Age 11',
    onBack: onBack,
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: dark,
      size: "sm",
      iconRight: "chevron-down"
    }, "Switch")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    onDark: dark,
    value: tab,
    onChange: onTab,
    items: [{
      value: 'assignments',
      label: 'Assignments'
    }, {
      value: 'metrics',
      label: 'Metrics'
    }, {
      value: 'profile',
      label: 'Profile'
    }],
    style: {
      borderColor: 'var(--e-line)'
    }
  })), /*#__PURE__*/React.createElement(Scroll, null, tab === 'metrics' ? /*#__PURE__*/React.createElement(MetricsTab, {
    athlete: athlete,
    onOpen: onOpenCard,
    onNew: onNew
  }) : null, tab === 'assignments' ? /*#__PURE__*/React.createElement(AssignmentsTab, {
    athlete: athlete,
    onOpenWorkout: onOpenWorkout
  }) : null, tab === 'profile' ? /*#__PURE__*/React.createElement(ProfileTab, {
    athlete: athlete
  }) : null));
}
function CaptureCardScreen({
  card,
  onBack
}) {
  const dark = useDark();
  const [val, setVal] = React.useState('');
  const last = card.entries[card.entries.length - 1];
  const first = card.entries[0];
  const delta = (last.v - first.v).toFixed(card.name === 'Shoe Size' ? 1 : 0);
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: card.name,
    sub: 'Unit: ' + card.unit,
    onBack: onBack,
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "ellipsis",
      label: "More",
      onDark: dark,
      size: "sm"
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-5) var(--space-4) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      fontWeight: 700,
      lineHeight: .9
    }
  }, last.label), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "trending-up"
  }, "+", delta, " since ", first.date.split(',')[0])), /*#__PURE__*/React.createElement(GroupLabel, null, "Trend"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(TrendChart, {
    entries: card.entries
  })), /*#__PURE__*/React.createElement(GroupLabel, null, "Record entry"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: card.name + ' (' + card.unit + ')',
    htmlFor: "v"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "v",
    onDark: dark,
    value: val,
    onChange: e => setVal(e.target.value),
    placeholder: "0"
  })), /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Date",
    htmlFor: "dt"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "dt",
    onDark: dark,
    icon: "calendar-days",
    defaultValue: "Sep 5, 2026"
  }))), /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Notes",
    hint: "Optional \u2014 what changed?",
    htmlFor: "nt"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "nt",
    onDark: dark,
    placeholder: "Measured after practice"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !val.trim()
  }, "Record entry"))), /*#__PURE__*/React.createElement(GroupLabel, null, "Entry history"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, [...card.entries].reverse().map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.date,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 52,
      padding: '0 var(--space-4)',
      borderTop: i ? '1px solid var(--e-line)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700
    }
  }, e.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, e.date)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "trash-2",
    label: "Delete entry",
    size: "sm",
    onDark: dark
  }))))));
}
Object.assign(window, {
  AthleteDetail,
  CaptureCardScreen,
  CaptureTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elevate/AthleteScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elevate/CoachScreens.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Icon,
  Field,
  Input,
  Select,
  Toast
} = window.RiseGameDesignSystem_66bdc7;
function CoachTeams({
  role,
  onRole,
  onBuild
}) {
  const dark = useDark();
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "My Teams",
    sub: "Coach Warren",
    right: /*#__PURE__*/React.createElement(RoleToggle, {
      value: role,
      onChange: onRole
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement(GroupLabel, null, "My teams"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-6) var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 30,
    style: {
      color: 'var(--e-accent-fg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.05
    }
  }, "Create your first team"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--e-mute)',
      maxWidth: 230
    }
  }, "Set up a team to manage athletes and assign workouts. No spreadsheets, no group texts."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      marginTop: 4
    }
  }, "Get started")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: '100%',
      minHeight: 46,
      background: 'transparent',
      border: 0,
      borderTop: '1px solid var(--e-line)',
      color: 'var(--e-accent-fg)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  }), "Create another team")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBuild,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: '100%',
      minHeight: 62,
      padding: '0 var(--space-4)',
      background: 'var(--rg-accent)',
      color: 'var(--rg-black)',
      border: 0,
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layout-dashboard",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }, "Whiteboards"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 500
    }
  }, "Build a workout, assign it to athletes")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  }))), /*#__PURE__*/React.createElement(GroupLabel, null, "Assistant coach access"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: 'var(--space-4)',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--e-mute)',
      textWrap: 'pretty'
    }
  }, "Already have a team managed by another coach? Enter their team code to join as an assistant coach and access team data."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: dark,
    fullWidth: true,
    iconLeft: "key-round"
  }, "Join as assistant coach")))));
}
function WorkoutBuilder({
  onBack,
  onNext
}) {
  const dark = useDark();
  const [title, setTitle] = React.useState('');
  const [sport, setSport] = React.useState('Baseball');
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Name & sport",
    sub: "Step 1 of 3",
    onBack: onBack,
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Cancel",
      onDark: dark,
      size: "sm",
      onClick: onBack
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: '0 var(--space-4) var(--space-4)'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i === 0 ? 'var(--e-accent-fg)' : 'var(--e-line)'
    }
  }))), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Workout title",
    htmlFor: "wt",
    hint: "Name it how you would say it out loud."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "wt",
    onDark: dark,
    size: "lg",
    value: title,
    onChange: e => setTitle(e.target.value),
    placeholder: "e.g. Tuesday Agility Session"
  }))), /*#__PURE__*/React.createElement(GroupLabel, null, "Sport"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      padding: '0 var(--space-4) var(--space-6)'
    }
  }, window.ELEVATE.sports.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSport(s),
    style: {
      height: 32,
      padding: '0 var(--space-3)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      background: sport === s ? 'var(--rg-accent)' : 'transparent',
      color: sport === s ? 'var(--rg-black)' : 'var(--e-ink)',
      border: '1px solid ' + (sport === s ? 'var(--rg-accent)' : 'var(--e-line)'),
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      transition: 'var(--transition-control)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      borderTop: '1px solid var(--e-line)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !title.trim(),
    iconRight: "chevron-right",
    onClick: onNext
  }, "Next: add drills")));
}
function WorkoutDetail({
  onBack
}) {
  const dark = useDark();
  const w = window.ELEVATE.workout;
  const [assigned, setAssigned] = React.useState(false);
  const total = w.exercises.reduce((n, e) => n + e.pts, 0);
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Workout",
    onBack: onBack,
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "pencil",
      label: "Edit workout",
      onDark: dark,
      size: "sm"
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-4) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      lineHeight: 1.02,
      textTransform: 'uppercase',
      color: 'var(--e-ink)'
    }
  }, w.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, w.sport), w.template ? /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, "Template") : null, /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, total, " pts"))), /*#__PURE__*/React.createElement(GroupLabel, null, "Exercises"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, w.exercises.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.n,
    style: {
      display: 'grid',
      gridTemplateColumns: '28px minmax(0,1fr) auto',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      borderTop: i ? '1px solid var(--e-line)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--e-accent-fg)'
    }
  }, e.n), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 700,
      lineHeight: 1.1
    }
  }, e.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)',
      margin: '2px 0 4px'
    }
  }, e.spec), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--e-mute)'
    }
  }, e.note)), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, e.pts, " pts")))), /*#__PURE__*/React.createElement(GroupLabel, null, "Assigned athletes"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-5)'
    }
  }, assigned ? /*#__PURE__*/React.createElement(Panel, {
    flush: true
  }, window.ELEVATE.athletes.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 52,
      padding: '0 var(--space-4)',
      borderTop: i ? '1px solid var(--e-line)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      background: 'var(--rg-accent)',
      color: 'var(--rg-black)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 700
    }
  }, a.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14
    }
  }, a.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "check"
  }, "Assigned")))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      border: '1px dashed var(--e-line)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, "No athletes assigned yet")), assigned ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Toast, null, "Assigned to 2 athletes.")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      borderTop: '1px solid var(--e-line)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    iconLeft: assigned ? 'check' : 'user-plus',
    onClick: () => setAssigned(true),
    disabled: assigned
  }, assigned ? 'Assigned' : 'Assign to athletes')));
}
function NewCardSheet({
  onClose
}) {
  const dark = useDark();
  const [dec, setDec] = React.useState(0);
  const [name, setName] = React.useState('');
  const examples = [28, 28.5, 28.54, 28.543];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      background: 'rgba(0,0,0,.6)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--e-panel)',
      borderTop: '1px solid var(--e-line)',
      borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxHeight: '82%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--e-ink)'
    }
  }, "New baseball card"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onDark: dark,
    size: "sm",
    onClick: onClose,
    style: {
      padding: 0
    }
  }, "Done")), /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Name",
    htmlFor: "cn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cn",
    onDark: dark,
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Capture card name"
  })), /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Description",
    hint: "Optional",
    htmlFor: "cd"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cd",
    onDark: dark,
    placeholder: "What is being measured?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Type",
    htmlFor: "ct"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "ct",
    onDark: dark,
    options: ['speed', 'height', 'weight', 'distance', 'custom']
  })), /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Unit",
    hint: "lbs, mph, s, %",
    htmlFor: "cu"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cu",
    onDark: dark,
    placeholder: "mph"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--e-ink)'
    }
  }, "Decimal places"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 6
    }
  }, [0, 1, 2, 3].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setDec(n),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      padding: 'var(--space-2) 0',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: dec === n ? 'var(--rg-accent)' : 'transparent',
      color: dec === n ? 'var(--rg-black)' : 'var(--e-ink)',
      border: '1px solid ' + (dec === n ? 'var(--rg-accent)' : 'var(--e-line)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      opacity: .7
    }
  }, "e.g. ", examples[n]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: dark,
    size: "lg",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !name.trim(),
    onClick: onClose
  }, "Create"))));
}
Object.assign(window, {
  CoachTeams,
  WorkoutBuilder,
  WorkoutDetail,
  NewCardSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elevate/CoachScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elevate/FamilyScreens.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Card,
  Field,
  Input,
  Switch,
  Icon,
  Logo
} = window.RiseGameDesignSystem_66bdc7;

// Family-level screens. These live on the bottom bar; anything scoped to a single
// athlete stays on the athlete's own top tabs (Assignments / Metrics / Profile).

function ReportsScreen({
  role,
  onRole
}) {
  const dark = useDark();
  const d = window.ELEVATE;
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Reports",
    sub: "Tryout evaluations",
    right: /*#__PURE__*/React.createElement(RoleToggle, {
      value: role,
      onChange: onRole
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    style: {
      color: 'var(--e-mute)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--e-mute)',
      textWrap: 'pretty'
    }
  }, "If your athlete completed a tryout with a coach that used the ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--e-ink)'
    }
  }, "RiseGame Tryouts App"), ", you can request their performance report here.")), /*#__PURE__*/React.createElement(GroupLabel, null, "Available to request"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, d.athletes.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 66,
      padding: '0 var(--space-4)',
      borderTop: i ? '1px solid var(--e-line)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      background: 'var(--rg-accent)',
      color: 'var(--rg-black)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 700
    }
  }, a.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.1,
      color: 'var(--e-ink)'
    }
  }, a.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, a.sports[0], " \xB7 Spring 2026 tryouts")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onDark: dark
  }, "Request")))), /*#__PURE__*/React.createElement(GroupLabel, null, "Delivered"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      border: '1px dashed var(--e-line)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, "Nothing delivered yet"))));
}
function AccountScreen({
  role,
  onRole
}) {
  const dark = useDark();
  const d = window.ELEVATE;
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Account",
    sub: "Aaron Warren",
    right: /*#__PURE__*/React.createElement(RoleToggle, {
      value: role,
      onChange: onRole
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement(GroupLabel, null, "You"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Name",
    htmlFor: "an"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "an",
    onDark: dark,
    defaultValue: "Aaron Warren"
  })), /*#__PURE__*/React.createElement(Field, {
    onDark: dark,
    label: "Email",
    hint: "Where confirmations and reports arrive",
    htmlFor: "ae"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ae",
    onDark: dark,
    icon: "mail",
    defaultValue: "aaron@example.com"
  })))), /*#__PURE__*/React.createElement(GroupLabel, null, "Co-parent access"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, d.coParents.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.athlete,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 56,
      padding: '0 var(--space-4)',
      borderTop: i ? '1px solid var(--e-line)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--e-ink)'
    }
  }, c.athlete), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11,
      color: 'var(--e-mute)'
    }
  }, "Shared with ", c.who)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onDark: dark,
    iconRight: "chevron-right",
    style: {
      padding: 0
    }
  }, "Manage"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3) var(--space-4)',
      borderTop: '1px solid var(--e-line)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: dark,
    size: "sm",
    fullWidth: true,
    iconLeft: "key-round"
  }, "Join as co-parent"))), /*#__PURE__*/React.createElement(GroupLabel, null, "Notifications"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    onDark: dark,
    label: "New assignment posted",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    onDark: dark,
    label: "Coach records a measurement",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    onDark: dark,
    label: "Weekly recap on Sunday",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    onDark: dark,
    label: "Report is ready"
  })))));
}
Object.assign(window, {
  ReportsScreen,
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elevate/FamilyScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elevate/ParentHome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Icon,
  ProgressBar
} = window.RiseGameDesignSystem_66bdc7;
function AthleteRow({
  a,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(a),
    style: {
      display: 'grid',
      gridTemplateColumns: '44px minmax(0,1fr) 18px',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: '100%',
      padding: 'var(--space-3) var(--space-4)',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid var(--e-line)',
      cursor: 'pointer',
      textAlign: 'left',
      color: 'var(--e-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      background: 'var(--rg-accent)',
      color: 'var(--rg-black)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700
    }
  }, a.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 700,
      lineHeight: 1.05
    }
  }, a.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, a.sports.join(' · ')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      fontSize: 11,
      color: 'var(--e-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14
    }
  }, a.week.workouts, "/", a.week.assigned), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--e-mute)'
    }
  }, "workouts")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14
    }
  }, a.week.attendance, "%"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--e-mute)'
    }
  }, "attendance")))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: 'var(--e-mute)'
    }
  }));
}
function ParentHome({
  role,
  onRole,
  onOpen
}) {
  const dark = useDark();
  const d = window.ELEVATE;
  const totalDue = d.athletes.reduce((n, a) => n + a.assignments.filter(x => !x.done).length, 0);
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Elevate",
    sub: "Warren family",
    right: /*#__PURE__*/React.createElement(RoleToggle, {
      value: role,
      onChange: onRole
    })
  }), /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-4) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--e-accent-fg)'
    }
  }, "This week"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      lineHeight: 1.02,
      color: 'var(--e-ink)',
      textWrap: 'balance'
    }
  }, totalDue, " workout", totalDue === 1 ? '' : 's', " still open across 2 athletes.")), /*#__PURE__*/React.createElement(GroupLabel, {
    onAdd: () => {}
  }, "Your athletes"), /*#__PURE__*/React.createElement(Panel, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, d.athletes.map(a => /*#__PURE__*/React.createElement(AthleteRow, {
    key: a.id,
    a: a,
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: '100%',
      minHeight: 46,
      background: 'transparent',
      border: 0,
      color: 'var(--e-accent-fg)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  }), "Add another athlete"))));
}
Object.assign(window, {
  ParentHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elevate/ParentHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elevate/data.js
try { (() => {
window.ELEVATE = {
  athletes: [{
    id: 'jw',
    initials: 'JW',
    name: 'Jameson Warren',
    hometown: 'Houston, TX',
    birthdate: 'Dec 11, 2014',
    gender: 'Male',
    sports: ['Baseball', 'Basketball', 'Football', 'Strength & Conditioning'],
    parents: ['Aaron Warren', 'Jamie Warren'],
    code: 'JW-4821',
    week: {
      workouts: 3,
      assigned: 4,
      attendance: 92
    },
    general: [{
      name: 'Height',
      unit: 'inches',
      type: 'Height',
      entries: [{
        v: 57,
        label: "4'9\"",
        date: 'Jun 23, 2026'
      }, {
        v: 59,
        label: "4'11\"",
        date: 'Aug 4, 2026'
      }, {
        v: 62,
        label: "5'2\"",
        date: 'Sep 5, 2026'
      }]
    }, {
      name: 'Weight',
      unit: 'lbs',
      type: 'Weight',
      entries: [{
        v: 91,
        label: '91 lbs',
        date: 'May 2, 2026'
      }, {
        v: 94,
        label: '94 lbs',
        date: 'Jun 23, 2026'
      }, {
        v: 97,
        label: '97 lbs',
        date: 'Aug 4, 2026'
      }, {
        v: 99,
        label: '99 lbs',
        date: 'Sep 5, 2026'
      }]
    }, {
      name: 'Shoe Size',
      unit: 'size',
      type: 'Custom',
      entries: [{
        v: 6.5,
        label: '6.5 size',
        date: 'Aug 4, 2026'
      }]
    }],
    baseball: [{
      name: 'Exit Velo',
      unit: 'mph',
      type: 'Speed',
      entries: [{
        v: 48,
        label: '48 mph',
        date: 'Jul 12, 2026'
      }, {
        v: 51,
        label: '51 mph',
        date: 'Aug 9, 2026'
      }, {
        v: 54,
        label: '54 mph',
        date: 'Sep 1, 2026'
      }]
    }, {
      name: '60 Yard Dash',
      unit: 's',
      type: 'Speed',
      entries: [{
        v: 9.4,
        label: '9.40 s',
        date: 'Jul 12, 2026'
      }, {
        v: 9.1,
        label: '9.10 s',
        date: 'Sep 1, 2026'
      }]
    }],
    assignments: [{
      title: 'Thursday Legs',
      sport: 'Strength & Conditioning',
      pts: 20,
      status: 'Due today',
      done: false
    }, {
      title: 'Tuesday Agility Session',
      sport: 'Baseball',
      pts: 30,
      status: 'Complete',
      done: true
    }, {
      title: 'Arm Care — Band Series',
      sport: 'Baseball',
      pts: 15,
      status: 'Complete',
      done: true
    }]
  }, {
    id: 'hw',
    initials: 'HW',
    name: 'Hannah Warren',
    hometown: 'Houston, TX',
    birthdate: 'Mar 2, 2012',
    gender: 'Female',
    sports: ['Strength & Conditioning', 'Volleyball'],
    parents: ['Aaron Warren', 'Jamie Warren'],
    code: 'HW-7730',
    week: {
      workouts: 2,
      assigned: 3,
      attendance: 100
    },
    general: [{
      name: 'Height',
      unit: 'inches',
      type: 'Height',
      entries: [{
        v: 64,
        label: "5'4\"",
        date: 'Jun 23, 2026'
      }, {
        v: 65,
        label: "5'5\"",
        date: 'Sep 5, 2026'
      }]
    }, {
      name: 'Weight',
      unit: 'lbs',
      type: 'Weight',
      entries: [{
        v: 118,
        label: '118 lbs',
        date: 'Jun 23, 2026'
      }, {
        v: 121,
        label: '121 lbs',
        date: 'Sep 5, 2026'
      }]
    }],
    baseball: [],
    assignments: [{
      title: 'Vertical Jump Block',
      sport: 'Volleyball',
      pts: 25,
      status: 'Due Fri',
      done: false
    }]
  }],
  coParents: [{
    athlete: 'Jameson Warren',
    who: 'Jamie Warren'
  }, {
    athlete: 'Hannah Warren',
    who: 'Jamie Warren'
  }],
  workout: {
    title: 'Thursday Legs',
    sport: 'Strength & Conditioning',
    template: true,
    exercises: [{
      n: 1,
      name: 'Jumping Jacks',
      spec: '60s',
      pts: 10,
      note: 'Standard jumping jacks at a steady pace.'
    }, {
      n: 2,
      name: 'Burpees',
      spec: '3 sets × 10 reps',
      pts: 10,
      note: 'Full burpees with push-up and jump.'
    }]
  },
  sports: ['Baseball', 'Basketball', 'Cheerleading', 'Cricket', 'Cross Country', 'Dance', 'Field Hockey', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Lacrosse', 'Martial Arts/Karate', 'Soccer', 'Softball', 'Strength & Conditioning', 'Swimming', 'Tennis', 'Track & Field', 'Volleyball', 'Wrestling']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elevate/data.js", error: String((e && e.message) || e) }); }

// ui_kits/elevate/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elevate/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elevate/shell.jsx
try { (() => {
const {
  Icon,
  Logo,
  IconButton
} = window.RiseGameDesignSystem_66bdc7;

// Theme: the design is authored dark; light chrome is the same design inverted.
const ThemeCtx = React.createContext(true);
const useDark = () => React.useContext(ThemeCtx);
const DARK = {
  '--e-bg': '#000000',
  '--e-panel': '#161616',
  '--e-panel-2': '#242424',
  '--e-line': '#2e2e2e',
  '--e-mute': '#9a9a9a',
  '--e-ink': '#ffffff',
  '--e-accent-fg': '#1dfe1b'
};
const LIGHT = {
  '--e-bg': '#ffffff',
  '--e-panel': '#ffffff',
  '--e-panel-2': '#f2f2f2',
  '--e-line': '#e2e2e2',
  '--e-mute': '#666666',
  '--e-ink': '#161616',
  '--e-accent-fg': '#161616'
};
function Themed({
  dark,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(ThemeCtx.Provider, {
    value: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      ...(dark ? DARK : LIGHT),
      ...style
    }
  }, children));
}

// --- shared dark-chrome bits for the Elevate redesign ---

function Screen({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--e-bg)',
      color: 'var(--e-ink)',
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
function Scroll({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      ...style
    }
  }, children);
}
function TopBar({
  title,
  onBack,
  right,
  sub
}) {
  const dark = useDark();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '52px var(--space-3) var(--space-3)',
      borderBottom: '1px solid var(--e-line)'
    }
  }, onBack ? /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Back",
    onDark: dark,
    size: "sm",
    onClick: onBack
  }) : /*#__PURE__*/React.createElement(Logo, {
    variant: "r",
    onDark: dark,
    height: 26,
    assetBase: "../../assets/",
    style: {
      marginLeft: 8,
      marginRight: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.05,
      textTransform: 'uppercase',
      letterSpacing: '.01em'
    }
  }, title), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--e-mute)'
    }
  }, sub) : null), right);
}
function RoleToggle({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      padding: 2,
      background: 'var(--e-panel)',
      border: '1px solid var(--e-line)',
      borderRadius: 'var(--radius-md)'
    }
  }, ['Parent', 'Coach'].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => onChange(r),
    style: {
      minWidth: 74,
      height: 30,
      border: 0,
      cursor: 'pointer',
      borderRadius: 2,
      background: value === r ? 'var(--rg-accent)' : 'transparent',
      color: value === r ? 'var(--rg-black)' : 'var(--e-mute)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      transition: 'var(--transition-control)'
    }
  }, r)));
}
function GroupLabel({
  children,
  onAdd
}) {
  const dark = useDark();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '0 var(--space-4)',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--e-mute)'
    }
  }, children), onAdd ? /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: "Add",
    size: "sm",
    onDark: dark,
    onClick: onAdd
  }) : null);
}
function Panel({
  children,
  style,
  flush
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--e-panel)',
      border: '1px solid var(--e-line)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      margin: flush ? 0 : '0 var(--space-4)',
      ...style
    }
  }, children);
}
function Spark({
  points,
  width = 70,
  height = 24
}) {
  if (!points || points.length < 2) return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderBottom: '1px dashed var(--e-line)'
    }
  });
  const min = Math.min(...points),
    max = Math.max(...points),
    span = max - min || 1;
  const d = points.map((p, i) => i / (points.length - 1) * width + ',' + (height - (p - min) / span * (height - 4) - 2)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: "var(--e-accent-fg)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function TrendChart({
  entries,
  height = 150
}) {
  const vals = entries.map(e => e.v);
  const min = Math.min(...vals),
    max = Math.max(...vals),
    span = max - min || 1;
  const w = 100,
    h = height;
  const pt = (v, i) => [i / Math.max(vals.length - 1, 1) * w, h - 16 - (v - min) / span * (h - 44)];
  const pts = vals.map(pt);
  const line = pts.map(p => p[0] + ',' + p[1]).join(' ');
  const area = line + ' ' + w + ',' + (h - 16) + ' 0,' + (h - 16);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + h,
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: "var(--rg-accent)",
    opacity: ".12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: "var(--e-accent-fg)",
    strokeWidth: "1.4",
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round"
  })), pts.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: 'calc(var(--space-4) + ' + p[0] / w * 100 + '% - ' + p[0] / w * 32 + 'px)',
      top: 'calc(var(--space-4) + ' + p[1] + 'px)',
      width: 6,
      height: 6,
      marginLeft: -3,
      marginTop: -3,
      borderRadius: 999,
      background: 'var(--e-accent-fg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 10,
      color: 'var(--e-mute)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, entries[0].date), /*#__PURE__*/React.createElement("span", null, entries[entries.length - 1].date)));
}
Object.assign(window, {
  Screen,
  Scroll,
  TopBar,
  RoleToggle,
  GroupLabel,
  Panel,
  Spark,
  TrendChart,
  Themed,
  useDark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elevate/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  SectionHeading,
  ProductTile,
  Testimonial,
  Logo
} = window.RiseGameDesignSystem_66bdc7;
const PRODUCTS = [{
  icon: 'calendar-days',
  name: 'Tryout Scheduler',
  job: 'The easiest way for leagues to manage tryout signups online. Create time slots, share a link with parents, and let the system handle the rest — no phone calls, no spreadsheets, no chaos.',
  href: 'https://signups.risegame.com',
  cta: 'Open Scheduler'
}, {
  icon: 'clipboard-list',
  name: 'Tryout App',
  job: 'The fastest way for leagues to run organized, fair player evaluations. Set up drills, upload your player list, and invite coaches — all before the first kid steps on the field.',
  href: 'https://www.risegame.com/products',
  cta: 'Learn more'
}, {
  icon: 'users',
  name: 'Draft Platform',
  job: 'A streamlined draft experience that feels like fantasy sports — backed by real tryout data. Coaches compare athletes side-by-side and make confident picks in real time.',
  href: 'https://www.risegame.com/products',
  cta: 'Learn more'
}, {
  icon: 'file-text',
  name: 'Player Reports',
  job: 'Give parents the clarity they have always wanted. RiseGame Reports turn tryout scores into a detailed, readable breakdown — so every family knows exactly where their athlete stands and what to work on next.',
  href: 'https://www.risegame.com/products',
  cta: 'Learn more'
}, {
  icon: 'chart-no-axes-column',
  name: 'Elevate Tracking App',
  job: 'Stay connected to every athlete journey from the sideline. The RiseGame Tracking App gives coaches and parents real-time visibility into player development, attendance, and performance throughout the season.',
  href: 'https://www.risegame.com/products',
  cta: 'Learn more'
}];
const QUOTES = [{
  quote: 'We all try our best to give 100% to prep for tryouts and drafts for our league. Our board members also all work and have 100 other things to take care of in life. This was a HUGE help making our tryouts and drafts easier for not just the coaches but our league admins who set it up every year.',
  name: 'Jeremy P.',
  role: 'League President',
  location: 'Dallas, TX'
}, {
  quote: 'Being a first time head coach, this app made it extremely easy to keep track of players and rating them for our draft. I like the grading scale and it was nice to be able to easily keep track of everything. Our league also used the draft platform and it was really cool having all of my scores and notes automatically show up.',
  name: 'Stephen S.',
  role: 'Coach',
  location: 'Houston, TX'
}, {
  quote: 'After many years of evaluating players while flipping paper tryout lists outside in the wind, it was wonderful to use nothing but the phone to quickly rank players on skills. Our league set the drills up beforehand, so I just showed up and started scoring.',
  name: 'George L.',
  role: 'Coach',
  location: 'Lakeland, FL'
}];
const POSTS = [{
  title: 'Podcast #5: Bear Mayer – Bruce Bolt CEO',
  date: 'August 22, 2025'
}, {
  title: 'Podcast #4: Vincent Blue – Houston Astros Organization',
  date: 'August 4, 2025'
}, {
  title: 'Podcast #3: Todd Whitting – University of Houston Head Baseball Coach',
  date: 'July 24, 2025'
}];
function Section({
  children,
  dark,
  tight,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: (tight ? 'var(--section-y-tight)' : 'var(--section-y)') + ' var(--space-6)',
      background: dark ? 'var(--surface-dark)' : 'var(--surface-page)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function HomePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    dark: true,
    style: {
      paddingTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-display-2)',
      lineHeight: 'var(--leading-display)',
      color: 'var(--rg-white)'
    }
  }, "Empower Youth Sports with RiseGame"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--rg-dark-mute)',
      textWrap: 'pretty'
    }
  }, "Transform your organization\u2019s management and your athlete\u2019s journey with RiseGame\u2019s comprehensive products: RiseGame Tryouts for leagues, RiseGame Draft for seamless team selections, and the RiseGame Reports for tracking player development that parents will love."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "mailto:info@risegame.com"
  }, "Request a Demo"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onDark: true,
    onClick: () => onNavigate('Products')
  }, "See the products"))), /*#__PURE__*/React.createElement(Photo, {
    label: "Hero video \u2014 risegame.com/tutorials",
    height: 300
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Photo \u2014 dad and kid on the field",
    height: 280
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Insiders, not vendors",
    title: "RiseGame Gets It"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, "At RiseGame, we recognize the evolving landscape of youth sports and the unique challenges faced by leagues, parents, and athletes alike. Our team comprises parents, coaches, and board members who have traveled the complex journey of youth athletics."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, "For parents, our comprehensive RiseGame app and Reports provide essential visibility into their child\u2019s development, celebrating each achievement along the way.")))), /*#__PURE__*/React.createElement(Section, {
    style: {
      background: 'var(--surface-chrome)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Products",
    title: "Explore Our Solutions for Leagues and Parents",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-4)'
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductTile, {
    key: p.name,
    icon: p.icon,
    name: p.name,
    job: p.job,
    href: p.href,
    ctaLabel: p.cta
  })))), /*#__PURE__*/React.createElement(Section, {
    dark: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "Testimonials",
    title: "Inspiring Success Stories From RiseGame Users",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 'var(--space-4)'
    }
  }, QUOTES.map(q => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: q.name,
    tone: "dark",
    assetBase: "../../assets/"
  }, q))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Blog",
    title: "Our Latest Blog Articles",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-4)'
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    interactive: true,
    padding: "0",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Post image",
    height: 150,
    style: {
      border: 0,
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, p.date)))))), /*#__PURE__*/React.createElement(Section, {
    dark: true,
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "rocket",
    onDark: true,
    height: 44,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      color: 'var(--rg-white)'
    }
  }, "Already checked us out? Request a demo.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "mailto:info@risegame.com"
  }, "Lets Chat"))));
}
Object.assign(window, {
  HomePage,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Photo.jsx
try { (() => {
// Neutral photo placeholder. RiseGame photography is real youth-sports imagery;
// no licensed photos shipped with the brand pack, so kits show labelled slots.
function Photo({
  label,
  height = 320,
  ratio,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      aspectRatio: ratio,
      background: '#d8d8d8',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: '#8a8a8a',
      textAlign: 'center',
      padding: '0 16px'
    }
  }, label));
}
Object.assign(window, {
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Photo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductsPage.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  SectionHeading,
  Logo,
  Icon
} = window.RiseGameDesignSystem_66bdc7;
const ROWS = [{
  name: 'Tryout Scheduler',
  job: 'Parents sign up for tryout slots',
  access: 'signups.risegame.com',
  icon: 'calendar-days'
}, {
  name: 'Tryouts By RiseGame',
  job: 'Coaches score athletes on the field',
  access: 'App Store / Play',
  icon: 'clipboard-list'
}, {
  name: 'Draft',
  job: 'Teams from evaluation scores',
  access: 'League Draft app',
  icon: 'users'
}, {
  name: 'Reports',
  job: 'Parent-readable evaluation breakdown',
  access: 'After tryouts',
  icon: 'file-text'
}, {
  name: 'Elevate',
  job: 'Year-round athlete tracking',
  access: 'App Store / Play',
  icon: 'chart-no-axes-column'
}];
function ProductsPage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    dark: true,
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    level: 1,
    eyebrow: "Products",
    title: "One connected flow for league admins",
    body: "Scheduler to Tryouts to Draft \u2014 then Reports and Elevate as relevant."
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-6)'
    }
  }, ['Tryout Scheduler', 'Tryouts', 'Draft'].map((step, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: step
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 40,
      padding: '0 var(--space-4)',
      border: '1px solid var(--rg-ink)',
      borderRadius: 'var(--radius-sm)',
      fontWeight: 'var(--weight-medium)'
    }
  }, step), i < 2 ? /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    style: {
      color: 'var(--rg-accent)'
    }
  }) : null))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '44px minmax(0,1.1fr) minmax(0,1.4fr) minmax(0,1fr)',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)',
      borderTop: i ? '1px solid var(--border-default)' : 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22,
    style: {
      color: 'var(--rg-accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-bold)'
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, r.job), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, r.access))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Product names and jobs are the locked list. GroundsPal is a separate mark and is not shown in RiseGame chrome.")), /*#__PURE__*/React.createElement(Section, {
    dark: true,
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "r",
    onDark: true,
    height: 56,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      color: 'var(--rg-white)'
    }
  }, "Book a walkthrough with our team")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "mailto:info@risegame.com"
  }, "Lets Chat"))));
}
Object.assign(window, {
  ProductsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tryout-scheduler/AdminSlots.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tabs,
  Switch,
  StatTile,
  SectionHeading,
  EmptyState,
  Dialog,
  Logo,
  Icon
} = window.RiseGameDesignSystem_66bdc7;
function AdminSlots() {
  const data = window.SCHEDULER_DATA;
  const [tab, setTab] = React.useState('slots');
  const [open, setOpen] = React.useState(true);
  const [confirm, setConfirm] = React.useState(false);
  const total = data.slots.reduce((n, s) => n + s.capacity, 0);
  const taken = data.slots.reduce((n, s) => n + s.taken, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 700,
      background: 'var(--surface-chrome)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) var(--space-5)',
      background: 'var(--surface-dark)',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    onDark: true,
    height: 22,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid var(--border-dark)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--rg-dark-mute)'
    }
  }, data.league), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    onDark: true,
    label: "Signups open",
    checked: open,
    onChange: e => setOpen(e.target.checked)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    label: "Settings",
    onDark: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Tryout Scheduler",
    title: "Spring 2026 Tryouts",
    body: "Share one link. Parents pick their own slot."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "link"
  }, "Copy signup link"), /*#__PURE__*/React.createElement(Button, {
    iconLeft: "plus"
  }, "Add time slot"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: taken + '/' + total,
    label: "Spots filled"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: data.slots.length,
    label: "Time slots"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: data.divisions.length,
    label: "Divisions"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "dark",
    value: open ? 'Open' : 'Closed',
    label: "Signup status"
  })), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'slots',
      label: 'Time slots'
    }, {
      value: 'players',
      label: 'Registered players'
    }, {
      value: 'settings',
      label: 'Settings'
    }],
    value: tab,
    onChange: setTab
  }), tab === 'slots' ? /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, data.slots.map((s, i) => {
    const left = s.capacity - s.taken;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 120px 150px 88px',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-4)',
        borderTop: i ? '1px solid var(--border-default)' : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--size-h4)',
        fontWeight: 700
      }
    }, s.time), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--size-caption)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 13
    }), s.date, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 13
    }), s.location)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        fontWeight: 700
      }
    }, s.taken, " / ", s.capacity), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
      tone: left === 0 ? 'neutral' : 'accent'
    }, left === 0 ? 'Full' : left + ' spots left')), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 4,
        justifySelf: 'end'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "pencil",
      label: "Edit slot",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "trash-2",
      label: "Delete slot",
      size: "sm",
      onClick: () => setConfirm(true)
    })));
  })) : null, tab === 'players' ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "users",
    title: "Registered players land here",
    body: "As parents reserve slots, every athlete shows up on this list \u2014 ready to push into the Tryouts app.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "upload"
    }, "Import a player list")
  }) : null, tab === 'settings' ? /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Email parents a confirmation",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Text a reminder the morning of tryouts",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Let parents change their slot"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Show remaining spots publicly",
    defaultChecked: true
  })) : null), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: "Delete this time slot?",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setConfirm(false)
    }, "Delete slot"))
  }, "Families already booked into this slot will need to pick a new one. We will email them the link."));
}
Object.assign(window, {
  AdminSlots
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tryout-scheduler/AdminSlots.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tryout-scheduler/ParentSignup.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Field,
  Input,
  Select,
  Checkbox,
  SlotCard,
  SectionHeading,
  Logo,
  Icon,
  Toast,
  ProgressBar
} = window.RiseGameDesignSystem_66bdc7;
function StepDots({
  step
}) {
  const labels = ['Division', 'Time slot', 'Player', 'Done'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: i <= step ? 'var(--rg-ink)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      fontSize: 11,
      background: i < step ? 'var(--rg-accent)' : i === step ? 'var(--rg-ink)' : 'var(--rg-line)',
      color: i === step ? 'var(--rg-white)' : 'var(--rg-black)'
    }
  }, i < step ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }) : i + 1), l)));
}
function ParentSignup() {
  const data = window.SCHEDULER_DATA;
  const [step, setStep] = React.useState(0);
  const [division, setDivision] = React.useState(data.divisions[1]);
  const [slotId, setSlotId] = React.useState(null);
  const [player, setPlayer] = React.useState('');
  const slot = data.slots.find(s => s.id === slotId);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "r",
    height: 44,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 700
    }
  }, data.league, " Tryouts"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Pick a time slot. It takes about a minute."))), /*#__PURE__*/React.createElement(StepDots, {
    step: step
  }), step === 0 ? /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    title: "Which division is your athlete trying out for?"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Division",
    htmlFor: "div",
    hint: "Not sure? Ask your league board."
  }, /*#__PURE__*/React.createElement(Select, {
    id: "div",
    options: data.divisions,
    value: division,
    onChange: e => setDivision(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    style: {
      alignSelf: 'flex-start'
    },
    iconRight: "chevron-right",
    onClick: () => setStep(1)
  }, "Choose a time slot")) : null, step === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    title: "Available time slots"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, division)), data.slots.map(s => /*#__PURE__*/React.createElement(SlotCard, {
    key: s.id,
    date: s.date,
    time: s.time,
    location: s.location,
    capacity: s.capacity,
    spotsLeft: s.capacity - s.taken,
    selected: slotId === s.id,
    onSelect: () => setSlotId(s.id)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "chevron-left",
    onClick: () => setStep(0)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    disabled: !slotId,
    iconRight: "chevron-right",
    onClick: () => setStep(2)
  }, "Continue"))) : null, step === 2 ? /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    title: "Who is trying out?",
    body: slot.date + ' · ' + slot.time + ' · ' + slot.location
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Player name",
    required: true,
    htmlFor: "pn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pn",
    value: player,
    onChange: e => setPlayer(e.target.value),
    placeholder: "Jordan Reyes"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Date of birth",
    htmlFor: "db"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "db",
    icon: "calendar-days",
    placeholder: "MM / DD / YYYY"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Parent email",
    required: true,
    htmlFor: "pe",
    hint: "Confirmation and reports go here"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pe",
    icon: "mail",
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Mobile",
    htmlFor: "pm"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pm",
    icon: "phone",
    placeholder: "(555) 555-5555"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me a reminder the morning of tryouts",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "chevron-left",
    onClick: () => setStep(1)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    disabled: !player.trim(),
    onClick: () => setStep(3)
  }, "Reserve this slot"))) : null, step === 3 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Toast, null, "Slot reserved \u2014 check your email for the confirmation."), /*#__PURE__*/React.createElement(Card, {
    tone: "alt",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "You are on the list",
    title: player + ' — ' + division,
    body: slot.date + ' · ' + slot.time + ' · ' + slot.location
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "calendar-plus"
  }, "Add to calendar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setStep(0);
      setSlotId(null);
      setPlayer('');
    }
  }, "Sign up another player"))), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Slots filled for this division",
    value: 27,
    max: 60
  })) : null);
}
Object.assign(window, {
  ParentSignup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tryout-scheduler/ParentSignup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tryout-scheduler/data.js
try { (() => {
window.SCHEDULER_DATA = {
  league: 'Cypress Youth Baseball',
  divisions: ['8U Coach Pitch', '10U Majors', '12U Majors', '14U'],
  slots: [{
    id: 's1',
    date: 'Sat, Feb 21',
    time: '9:00 – 9:45 AM',
    location: 'Field 3',
    capacity: 12,
    taken: 8
  }, {
    id: 's2',
    date: 'Sat, Feb 21',
    time: '10:00 – 10:45 AM',
    location: 'Field 3',
    capacity: 12,
    taken: 12
  }, {
    id: 's3',
    date: 'Sat, Feb 21',
    time: '11:00 – 11:45 AM',
    location: 'Field 3',
    capacity: 12,
    taken: 5
  }, {
    id: 's4',
    date: 'Sun, Feb 22',
    time: '9:00 – 9:45 AM',
    location: 'Field 1',
    capacity: 12,
    taken: 2
  }, {
    id: 's5',
    date: 'Sun, Feb 22',
    time: '10:00 – 10:45 AM',
    location: 'Field 1',
    capacity: 12,
    taken: 0
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tryout-scheduler/data.js", error: String((e && e.message) || e) }); }

// ui_kits/tryouts-app/RosterScreen.jsx
try { (() => {
const {
  PlayerRow,
  Badge,
  Input,
  ProgressBar,
  Icon,
  Logo
} = window.RiseGameDesignSystem_66bdc7;
function avg(s) {
  const v = Object.values(s);
  if (!v.length) return null;
  return (v.reduce((a, b) => a + b, 0) / v.length).toFixed(1);
}
function RosterScreen({
  players,
  onPick
}) {
  const scored = players.filter(p => Object.keys(p.scores).length).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--rg-black)',
      color: 'var(--rg-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: '52px var(--space-4) var(--space-4)',
      borderBottom: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "rocket",
    onDark: true,
    height: 26,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 700
    }
  }, "Roster"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--rg-dark-mute)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, window.TRYOUTS_DATA.event)), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark",
    style: {
      marginLeft: 'auto'
    }
  }, players.length, " players")), /*#__PURE__*/React.createElement(Input, {
    onDark: true,
    size: "sm",
    icon: "search",
    placeholder: "Find a player or number"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    onDark: true,
    label: "Players scored",
    value: scored,
    max: players.length
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, players.map(p => {
    const a = avg(p.scores);
    return /*#__PURE__*/React.createElement(PlayerRow, {
      key: p.number,
      onDark: true,
      number: p.number,
      name: p.name,
      meta: 'Age ' + p.age,
      score: a || undefined,
      status: a ? 'Scored' : 'Not scored',
      onClick: () => onPick(p)
    });
  })));
}
Object.assign(window, {
  RosterScreen,
  avg
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tryouts-app/RosterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tryouts-app/ScoreScreen.jsx
try { (() => {
const {
  ScoreScale,
  Button,
  IconButton,
  Badge,
  Toast,
  Icon
} = window.RiseGameDesignSystem_66bdc7;
function ScoreScreen({
  player,
  onBack,
  onSave
}) {
  const drills = window.TRYOUTS_DATA.drills;
  const [scores, setScores] = React.useState(player.scores);
  const [note, setNote] = React.useState('');
  const [saved, setSaved] = React.useState(false);
  const done = drills.filter(d => scores[d]).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--rg-black)',
      color: 'var(--rg-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '52px var(--space-4) var(--space-3)',
      borderBottom: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Back to roster",
    onDark: true,
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h4)',
      fontWeight: 700
    }
  }, "#", player.number, " ", player.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--rg-dark-mute)'
    }
  }, "Age ", player.age, " \xB7 ", done, " of ", drills.length, " drills scored")), /*#__PURE__*/React.createElement(Badge, {
    tone: done === drills.length ? 'accent' : 'dark'
  }, done === drills.length ? 'Complete' : done + '/' + drills.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, drills.map(d => /*#__PURE__*/React.createElement(ScoreScale, {
    key: d,
    onDark: true,
    label: d,
    size: "lg",
    value: scores[d],
    onChange: n => setScores({
      ...scores,
      [d]: n
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rg-eyebrow",
    style: {
      color: 'var(--rg-dark-mute)'
    }
  }, "Coach note"), /*#__PURE__*/React.createElement("textarea", {
    value: note,
    onChange: e => setNote(e.target.value),
    rows: 3,
    placeholder: "Quick, specific, parent-readable.",
    style: {
      background: 'var(--rg-dark-surface-2)',
      color: 'var(--rg-white)',
      border: '1px solid var(--rg-dark-line)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      resize: 'none'
    }
  })), saved ? /*#__PURE__*/React.createElement(Toast, null, "Evaluation scores saved.") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      padding: 'var(--space-4)',
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: true,
    size: "lg",
    onClick: onBack
  }, "Roster"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !done,
    onClick: () => {
      setSaved(true);
      onSave(player.number, scores);
    }
  }, "Save and next player")));
}
Object.assign(window, {
  ScoreScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tryouts-app/ScoreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tryouts-app/data.js
try { (() => {
window.TRYOUTS_DATA = {
  event: 'Cypress Youth Baseball · 10U Majors',
  drills: ['Fielding', 'Throwing', 'Hitting', 'Speed', 'Pitching'],
  players: [{
    number: 14,
    name: 'Jordan Reyes',
    age: 11,
    scores: {
      Fielding: 4,
      Throwing: 4,
      Hitting: 5,
      Speed: 4,
      Pitching: 4
    }
  }, {
    number: 7,
    name: 'Sam Ortiz',
    age: 10,
    scores: {}
  }, {
    number: 22,
    name: 'Alex Whitfield',
    age: 11,
    scores: {
      Fielding: 3,
      Throwing: 3,
      Hitting: 3,
      Speed: 4,
      Pitching: 2
    }
  }, {
    number: 3,
    name: 'Micah Bell',
    age: 10,
    scores: {}
  }, {
    number: 41,
    name: 'Cameron Diaz',
    age: 11,
    scores: {
      Fielding: 5,
      Throwing: 4,
      Hitting: 4,
      Speed: 5,
      Pitching: 3
    }
  }, {
    number: 9,
    name: 'Riley Nakamura',
    age: 10,
    scores: {}
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tryouts-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/tryouts-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tryouts-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ActionGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The primary and secondary action for a screen, laid out by the hierarchy rules:
// stacked full width on a phone, equal halves side by side when there is room.
function ActionGroup({
  children,
  layout = 'auto',
  style,
  ...rest
}) {
  const items = React.Children.toArray(children).filter(Boolean);
  const stack = layout === 'stack';
  const wrap = layout === 'auto';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: stack ? 'column' : 'row',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      gap: stack ? 'var(--space-2)' : 'var(--space-4)',
      ...style
    }
  }, rest), items.map((child, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: stack ? 'none' : wrap ? '1 1 240px' : '1 1 0',
      minWidth: 0,
      display: 'flex'
    }
  }, React.isValidElement(child) ? React.cloneElement(child, {
    fullWidth: true
  }) : child)));
}
Object.assign(__ds_scope, { ActionGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ActionGroup.jsx", error: String((e && e.message) || e) }); }
// components/patterns/SectionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// A labelled section: a muted uppercase eyebrow above one plain card.
// No dashed boxes, no accent borders, no label set into the border line.
function SectionCard({
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
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    className: "rg-eyebrow",
    style: {
      color: onDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
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
      color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
      ...cardStyle
    }
  }, children));
}
Object.assign(__ds_scope, { SectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SectionCard.jsx", error: String((e && e.message) || e) }); }
// components/patterns/ToolList.jsx
try { (() => {
const { Icon, Button } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// One row: icon tile, title, muted meta line, then either a labelled secondary
// button (actionLabel) or, with no button, the whole row as the tap target.
function ToolRow({
  icon,
  title,
  meta,
  actionLabel,
  onAction,
  onClick,
  href,
  onDark = false,
  divider = false,
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
      background: rowLink && hover ? onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)' : 'transparent',
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
      background: onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)',
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

// One card of ToolRows with hairline dividers between them.
function ToolList({
  children,
  onDark = false,
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
      ...style
    }
  }, rest), rows.map((row, i) => React.isValidElement(row) ? React.cloneElement(row, {
    key: row.key ?? i,
    onDark: row.props.onDark ?? onDark,
    divider: i < rows.length - 1
  }) : row));
}
Object.assign(__ds_scope, { ToolRow, ToolList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ToolList.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.PlayerRow = __ds_scope.PlayerRow;

__ds_ns.ScoreScale = __ds_scope.ScoreScale;

__ds_ns.SlotCard = __ds_scope.SlotCard;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AppTabBar = __ds_scope.AppTabBar;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.ActionGroup = __ds_scope.ActionGroup;

__ds_ns.SectionCard = __ds_scope.SectionCard;

__ds_ns.ToolList = __ds_scope.ToolList;

__ds_ns.ToolRow = __ds_scope.ToolRow;

})();
