import React from 'react';

// The primary and secondary action for a screen, laid out by the hierarchy rules:
// stacked full width on a phone, equal halves side by side when there is room.
export function ActionGroup({ children, layout = 'auto', style, ...rest }) {
  const items = React.Children.toArray(children).filter(Boolean);
  const stack = layout === 'stack';
  const wrap = layout === 'auto';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: stack ? 'column' : 'row',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: stack ? 'var(--space-2)' : 'var(--space-4)',
        ...style,
      }}
      {...rest}
    >
      {items.map((child, i) => (
        <div key={i} style={{ flex: stack ? 'none' : wrap ? '1 1 240px' : '1 1 0', minWidth: 0, display: 'flex' }}>
          {React.isValidElement(child) ? React.cloneElement(child, { fullWidth: true }) : child}
        </div>
      ))}
    </div>
  );
}
