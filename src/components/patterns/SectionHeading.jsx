import React from 'react';

export function SectionHeading({ eyebrow, title, body, align = 'left', onDark = false, level = 2, style, ...rest }) {
  const Tag = 'h' + level;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
      textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: 'var(--container-narrow)', ...style,
    }} {...rest}>
      {eyebrow ? (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--size-eyebrow)', fontWeight: 'var(--weight-bold)',
          letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--rg-accent)',
        }}>{eyebrow}</span>
      ) : null}
      <Tag style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)',
        fontSize: level === 1 ? 'var(--size-h1)' : level === 2 ? 'var(--size-h2)' : 'var(--size-h3)',
        lineHeight: 'var(--leading-heading)', color: onDark ? 'var(--rg-white)' : 'var(--rg-ink)',
      }}>{title}</Tag>
      {body ? (
        <p style={{
          margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-lg)',
          lineHeight: 'var(--leading-body)', color: onDark ? 'var(--rg-dark-mute)' : 'var(--text-muted)',
          textWrap: 'pretty',
        }}>{body}</p>
      ) : null}
    </div>
  );
}
