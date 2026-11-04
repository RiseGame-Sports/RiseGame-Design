import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';

export function PlayerRow({ number, name, meta, score, status, onClick, onDark = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
        minHeight: 'var(--tap-min)', padding: 'var(--space-3) var(--space-4)',
        background: hover && onClick ? (onDark ? 'var(--rg-dark-surface-2)' : 'var(--rg-paper)') : 'transparent',
        borderBottom: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background-color var(--dur-fast) var(--ease)', ...style,
      }} {...rest}>
      {number !== undefined ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 34, height: 34, flex: '0 0 auto', borderRadius: 'var(--radius-md)',
          background: onDark ? 'var(--rg-dark-surface-3)' : 'var(--rg-paper)',
          fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 'var(--weight-bold)',
          color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
        }}>{number}</span>
      ) : null}
      <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--size-body)', fontWeight: 'var(--weight-medium)', color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)' }}>{name}</span>
        {meta ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--size-caption)', color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }}>{meta}</span> : null}
      </span>
      {status ? <Badge tone={status === 'Scored' ? 'accent' : onDark ? 'dark' : 'neutral'}>{status}</Badge> : null}
      {score !== undefined && score !== null ? (
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 'var(--weight-bold)', color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)' }}>{score}</span>
      ) : null}
      {onClick ? <Icon name="chevron-right" size={18} style={{ color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }} /> : null}
    </div>
  );
}
