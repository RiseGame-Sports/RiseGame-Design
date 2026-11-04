const { Button, IconButton, Card, Badge, Tabs, Switch, StatTile, SectionHeading, EmptyState, Dialog, Logo, Icon } = window.RiseGameDesignSystem_66bdc7;

function AdminSlots() {
  const data = window.SCHEDULER_DATA;
  const [tab, setTab] = React.useState('slots');
  const [open, setOpen] = React.useState(true);
  const [confirm, setConfirm] = React.useState(false);
  const total = data.slots.reduce((n, s) => n + s.capacity, 0);
  const taken = data.slots.reduce((n, s) => n + s.taken, 0);

  return (
    <div style={{ position: 'relative', minHeight: 700, background: 'var(--surface-chrome)' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3) var(--space-5)', background: 'var(--surface-dark)', color: 'var(--text-inverse)' }}>
        <Logo variant="wordmark" onDark height={22} assetBase="../../../assets/logos/" />
        <span style={{ paddingLeft: 'var(--space-4)', borderLeft: '1px solid var(--border-dark)', fontSize: 'var(--size-body-sm)', color: 'var(--rg-dark-mute)' }}>{data.league}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <Switch onDark label="Signups open" checked={open} onChange={(e) => setOpen(e.target.checked)} />
          <IconButton icon="settings" label="Settings" onDark />
        </div>
      </header>

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-6) var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
          <SectionHeading eyebrow="Tryout Scheduler" title="Spring 2026 Tryouts" body="Share one link. Parents pick their own slot." />
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button variant="secondary" iconLeft="link">Copy signup link</Button>
            <Button iconLeft="plus">Add time slot</Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 'var(--space-3)' }}>
          <StatTile value={taken + '/' + total} label="Spots filled" />
          <StatTile value={data.slots.length} label="Time slots" />
          <StatTile value={data.divisions.length} label="Divisions" />
          <StatTile tone="dark" value={open ? 'Open' : 'Closed'} label="Signup status" />
        </div>

        <Tabs items={[{ value: 'slots', label: 'Time slots' }, { value: 'players', label: 'Registered players' }, { value: 'settings', label: 'Settings' }]} value={tab} onChange={setTab} />

        {tab === 'slots' ? (
          <Card padding="0" style={{ overflow: 'hidden' }}>
            {data.slots.map((s, i) => {
              const left = s.capacity - s.taken;
              return (
                <div key={s.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 120px 150px 88px', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', borderTop: i ? '1px solid var(--border-default)' : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 700 }}>{s.time}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>
                      <Icon name="calendar-days" size={13} />{s.date}<Icon name="map-pin" size={13} />{s.location}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>{s.taken} / {s.capacity}</span>
                  <span><Badge tone={left === 0 ? 'neutral' : 'accent'}>{left === 0 ? 'Full' : left + ' spots left'}</Badge></span>
                  <span style={{ display: 'flex', gap: 4, justifySelf: 'end' }}>
                    <IconButton icon="pencil" label="Edit slot" size="sm" />
                    <IconButton icon="trash-2" label="Delete slot" size="sm" onClick={() => setConfirm(true)} />
                  </span>
                </div>
              );
            })}
          </Card>
        ) : null}

        {tab === 'players' ? (
          <EmptyState icon="users" title="Registered players land here"
            body="As parents reserve slots, every athlete shows up on this list — ready to push into the Tryouts app."
            action={<Button variant="secondary" iconLeft="upload">Import a player list</Button>} />
        ) : null}

        {tab === 'settings' ? (
          <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 520 }}>
            <Switch label="Email parents a confirmation" defaultChecked />
            <Switch label="Text a reminder the morning of tryouts" defaultChecked />
            <Switch label="Let parents change their slot" />
            <Switch label="Show remaining spots publicly" defaultChecked />
          </Card>
        ) : null}
      </div>

      <Dialog open={confirm} title="Delete this time slot?" onClose={() => setConfirm(false)}
        footer={<><Button variant="ghost" size="sm" onClick={() => setConfirm(false)}>Cancel</Button><Button size="sm" onClick={() => setConfirm(false)}>Delete slot</Button></>}>
        Families already booked into this slot will need to pick a new one. We will email them the link.
      </Dialog>
    </div>
  );
}
Object.assign(window, { AdminSlots });
