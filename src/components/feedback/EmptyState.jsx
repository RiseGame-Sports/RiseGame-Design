import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'clipboard-list', title, body, action, onDark = false, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      gap: 'var(--space-3)', padding: 'var(--space-7) var(--space-5)',
      border: '1px dashed ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-card)',
      background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card-alt)',
      color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)', ...style,
    }} {...rest}>
      <Icon name={icon} size={28} style={{ color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }} />
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 'var(--weight-bold)' }}>{title}</div>
      {body ? <p style={{ margin: 0, maxWidth: 380, fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)' }}>{body}</p> : null}
      {action}
    </div>
  );
}
