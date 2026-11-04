import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';

export function SlotCard({ date, time, location, spotsLeft, capacity, selected = false, onSelect, style, ...rest }) {
  const full = spotsLeft === 0;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
      padding: 'var(--space-4)', background: 'var(--surface-card)',
      border: '1px solid ' + (selected ? 'var(--rg-accent)' : 'var(--border-default)'),
      borderWidth: selected ? 2 : 1,
      borderRadius: 'var(--radius-card)', opacity: full ? 0.55 : 1,
      transition: 'border-color var(--dur) var(--ease)', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 'var(--weight-bold)' }}>{time}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontFamily: 'var(--font-body)', fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>
          <Icon name="calendar-days" size={13} />{date}
          {location ? <><Icon name="map-pin" size={13} />{location}</> : null}
        </span>
      </div>
      <Badge tone={full ? 'neutral' : 'accent'}>{full ? 'Full' : spotsLeft + ' of ' + capacity + ' left'}</Badge>
      {onSelect ? (
        <Button size="sm" variant={selected ? 'dark' : 'secondary'} disabled={full} onClick={onSelect}>
          {selected ? 'Selected' : 'Pick this slot'}
        </Button>
      ) : null}
    </div>
  );
}
