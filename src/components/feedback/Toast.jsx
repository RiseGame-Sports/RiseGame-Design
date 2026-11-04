import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

export function Toast({ children, icon = 'check', accent = true, onClose, style, ...rest }) {
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
      padding: 'var(--space-3) var(--space-4)',
      background: 'var(--rg-ink)', color: 'var(--rg-white)',
      borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', ...style,
    }} {...rest}>
      <Icon name={icon} size={18} style={{ color: accent ? 'var(--rg-accent)' : 'var(--rg-white)' }} />
      <span style={{ flex: 1 }}>{children}</span>
      {onClose ? <IconButton icon="x" label="Dismiss" size="sm" onDark onClick={onClose} /> : null}
    </div>
  );
}
