import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = true, title, children, footer, onClose, width = 460, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,.6)', padding: 'var(--space-5)', zIndex: 40,
    }} onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: width, background: 'var(--surface-card)',
          border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-overlay)', ...style,
        }} {...rest}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
          padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--border-default)',
        }}>
          <h4 style={{ margin: 0, flex: 1, fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 'var(--weight-bold)' }}>{title}</h4>
          {onClose ? <IconButton icon="x" label="Close" size="sm" onClick={onClose} /> : null}
        </div>
        <div style={{ padding: 'var(--space-5)', fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', lineHeight: 'var(--leading-body)' }}>{children}</div>
        {footer ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', padding: 'var(--space-4) var(--space-5)', borderTop: '1px solid var(--border-default)' }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
