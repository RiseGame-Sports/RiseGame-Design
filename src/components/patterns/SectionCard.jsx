import React from 'react';

// A labeled section: an uppercase section header (ink on light, white on dark) above one white card.
// Stack sections in a column with `gap: var(--section-gap)`; the header sits `--section-label-gap` above its card.
// No dashed boxes, no accent borders, no label set into the border line.
export function SectionCard({ label, children, onDark = false, padding = '0', style, cardStyle, ...rest }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-label-gap)', ...style }} {...rest}>
      {label ? (
        <span className="rg-section-label" style={{ color: onDark ? 'var(--text-inverse)' : 'var(--text-heading)' }}>{label}</span>
      ) : null}
      <div
        style={{
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          background: onDark ? 'var(--surface-dark-card)' : 'var(--surface-card)',
          border: '1px solid ' + (onDark ? 'var(--border-dark)' : 'var(--border-default)'),
          borderRadius: 'var(--radius-card)',
          padding,
          boxShadow: onDark ? 'none' : 'var(--shadow-card)',
          color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
          ...cardStyle,
        }}
      >
        {children}
      </div>
    </section>
  );
}
