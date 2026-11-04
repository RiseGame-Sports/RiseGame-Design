import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

// One row: icon tile, title, muted meta line, then either a labeled secondary
// button (actionLabel) or, with no button, the whole row as the tap target.
export function ToolRow({ icon, title, meta, actionLabel, onAction, onClick, href, onDark = false, divider = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const rowLink = !actionLabel && (onClick || href);
  const Tag = rowLink ? (href ? 'a' : 'button') : 'div';
  const muted = onDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)';
  return (
    <Tag
      href={rowLink && href ? href : undefined}
      type={Tag === 'button' ? 'button' : undefined}
      onClick={rowLink ? onClick : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%',
        minHeight: 72, boxSizing: 'border-box', padding: 'var(--space-3) var(--space-4)',
        background: rowLink && hover ? (onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)') : 'transparent',
        border: 0, borderBottom: divider ? '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)') : 0,
        color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
        textDecoration: 'none', textAlign: 'left', font: 'inherit',
        cursor: rowLink ? 'pointer' : 'default',
        transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    >
      {icon ? (
        <span style={{
          width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--radius-md)', background: onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)',
          color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
        }}>
          <Icon name={icon} size={22} />
        </span>
      ) : null}
      <span style={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--size-body)', fontWeight: 'var(--weight-medium)' }}>{title}</span>
        {meta ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', color: muted }}>{meta}</span> : null}
      </span>
      {actionLabel ? (
        <Button variant="secondary" size="sm" onDark={onDark} onClick={onAction} style={{ flexShrink: 0 }}>{actionLabel}</Button>
      ) : rowLink ? (
        <span style={{ color: muted, display: 'flex' }}><Icon name="chevron-right" size={18} /></span>
      ) : null}
    </Tag>
  );
}

// One card of ToolRows with hairline dividers between them.
export function ToolList({ children, onDark = false, style, ...rest }) {
  const rows = React.Children.toArray(children).filter(Boolean);
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card)',
        border: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-card)',
        ...style,
      }}
      {...rest}
    >
      {rows.map((row, i) => (React.isValidElement(row)
        ? React.cloneElement(row, { key: row.key ?? i, onDark: row.props.onDark ?? onDark, divider: i < rows.length - 1 })
        : row))}
    </div>
  );
}
