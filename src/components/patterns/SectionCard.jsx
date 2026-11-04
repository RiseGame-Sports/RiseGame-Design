import React from 'react';

// A labelled section: a muted uppercase eyebrow above one plain card.
// No dashed boxes, no accent borders, no label set into the border line.
export function SectionCard({ label, children, onDark = false, padding = '0', style, cardStyle, ...rest }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label ? (
        <span className="rg-eyebrow" style={{ color: onDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)' }}>{label}</span>
      ) : null}
      <div
        style={{
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card)',
          border: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
          borderRadius: 'var(--radius-card)',
          padding,
          color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
          ...cardStyle,
        }}
      >
        {children}
      </div>
    </section>
  );
}
