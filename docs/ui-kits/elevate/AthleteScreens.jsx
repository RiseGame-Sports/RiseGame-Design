const { Button, IconButton, Badge, Tag, Tabs, Field, Input, Select, Icon, ProgressBar } = window.RiseGameDesignSystem_66bdc7;

function CaptureTile({ card, onOpen }) {
  const last = card.entries[card.entries.length - 1];
  return (
    <button onClick={() => onOpen(card)} style={{
      display: 'flex', flexDirection: 'column', gap: 6, padding: 'var(--space-3)',
      background: 'var(--e-panel)', border: '1px solid var(--e-line)',
      borderRadius: 'var(--radius-md)', cursor: 'pointer', textAlign: 'left', color: 'var(--e-ink)',
    }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>{card.name}</span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, lineHeight: 1 }}>{last.label}</span>
      <span style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ fontSize: 10, color: 'var(--e-mute)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{card.entries.length} {card.entries.length === 1 ? 'entry' : 'entries'}</span>
        <Spark points={card.entries.map((e) => e.v)} width={54} height={20} />
      </span>
    </button>
  );
}

function EmptyGroup({ label }) {
  return <div style={{ padding: 'var(--space-4)', border: '1px dashed var(--e-line)', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>No capture cards yet · {label}</div>;
}

function MetricsTab({ athlete, onOpen, onNew }) {
  return (
    <div style={{ padding: '0 0 var(--space-6)' }}>
      <GroupLabel onAdd={onNew}>General</GroupLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', padding: '0 var(--space-4) var(--space-5)' }}>
        {athlete.general.map((c) => <CaptureTile key={c.name} card={c} onOpen={onOpen} />)}
      </div>
      <GroupLabel onAdd={onNew}>Baseball</GroupLabel>
      <div style={{ padding: '0 var(--space-4) var(--space-5)' }}>
        {athlete.baseball.length ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)' }}>
            {athlete.baseball.map((c) => <CaptureTile key={c.name} card={c} onOpen={onOpen} />)}
          </div>
        ) : <EmptyGroup label="Baseball" />}
      </div>
      <GroupLabel onAdd={onNew}>Basketball</GroupLabel>
      <div style={{ padding: '0 var(--space-4) var(--space-5)' }}><EmptyGroup label="Basketball" /></div>
      <GroupLabel onAdd={onNew}>Football</GroupLabel>
      <div style={{ padding: '0 var(--space-4)' }}><EmptyGroup label="Football" /></div>
    </div>
  );
}

function AssignmentsTab({ athlete, onOpenWorkout }) {
  const dark = useDark();
  const done = athlete.assignments.filter((a) => a.done).length;
  const pts = athlete.assignments.filter((a) => a.done).reduce((n, a) => n + a.pts, 0);
  return (
    <div style={{ padding: '0 0 var(--space-6)' }}>
      <div style={{ padding: 'var(--space-4)' }}>
        <ProgressBar onDark={dark} label="Assignments complete" value={done} max={athlete.assignments.length} />
      </div>
      <GroupLabel>This week</GroupLabel>
      <Panel style={{ marginBottom: 'var(--space-5)' }}>
        {athlete.assignments.map((a, i) => (
          <button key={a.title} onClick={onOpenWorkout} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%', minHeight: 62,
            padding: 'var(--space-3) var(--space-4)', background: 'transparent', border: 0,
            borderTop: i ? '1px solid var(--e-line)' : 0, cursor: 'pointer', textAlign: 'left', color: 'var(--e-ink)',
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, flex: '0 0 auto',
              borderRadius: 'var(--radius-sm)', background: a.done ? 'var(--rg-accent)' : 'transparent',
              border: '1px solid ' + (a.done ? 'var(--rg-accent)' : 'var(--e-line)'), color: 'var(--rg-black)',
            }}>{a.done ? <Icon name="check" size={15} /> : null}</span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, lineHeight: 1.1 }}>{a.title}</span>
              <span style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>{a.sport} · {a.status}</span>
            </span>
            <Badge tone={a.done ? 'accent' : 'dark'}>{a.pts} pts</Badge>
          </button>
        ))}
      </Panel>
      <GroupLabel>Season points</GroupLabel>
      <Panel>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', padding: 'var(--space-4)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, lineHeight: 1 }}>{pts}</span>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>points earned</span>
        </div>
      </Panel>
    </div>
  );
}

function ProfileTab({ athlete }) {
  const dark = useDark();
  const rows = [['Gender', athlete.gender], ['Birthdate', athlete.birthdate], ['Hometown', athlete.hometown],
    ['Shoe size', '6.5'], ['Height', athlete.general[0].entries[athlete.general[0].entries.length - 1].label],
    ['Weight', athlete.general[1].entries[athlete.general[1].entries.length - 1].label]];
  return (
    <div style={{ padding: '0 0 var(--space-6)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-5) var(--space-4)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 68, height: 68, background: 'var(--rg-accent)', color: 'var(--rg-black)', borderRadius: 'var(--radius-lg)', fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700 }}>{athlete.initials}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, lineHeight: 1.05 }}>{athlete.name}</span>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>{athlete.hometown}</span>
      </div>
      <GroupLabel>Details</GroupLabel>
      <Panel style={{ marginBottom: 'var(--space-5)' }}>
        {rows.map(([k, v], i) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', minHeight: 46, padding: '0 var(--space-4)', borderTop: i ? '1px solid var(--e-line)' : 0 }}>
            <span style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>{k}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700 }}>{v}</span>
          </div>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: 'var(--space-4)', borderTop: '1px solid var(--e-line)' }}>
          {athlete.sports.map((s) => <Tag key={s} onDark={dark}>{s}</Tag>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', minHeight: 46, padding: '0 var(--space-4)', borderTop: '1px solid var(--e-line)' }}>
          <span style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>Parents</span>
          <span style={{ fontSize: 13 }}>{athlete.parents.join(', ')}</span>
        </div>
      </Panel>
      <GroupLabel>Athlete code</GroupLabel>
      <Panel>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)' }}>
          <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, letterSpacing: '.08em' }}>{athlete.code}</span>
          <Button variant="secondary" onDark={dark} size="sm" iconLeft="copy">Copy</Button>
        </div>
        <div style={{ padding: '0 var(--space-4) var(--space-4)', fontSize: 11, color: 'var(--e-mute)' }}>Used to sign in on the athlete app.</div>
      </Panel>
    </div>
  );
}

function AthleteDetail({ athlete, tab, onTab, onBack, onOpenCard, onOpenWorkout, onNew }) {
  const dark = useDark();
  return (
    <Screen>
      <TopBar title={athlete.name} sub={athlete.sports[0] + ' · Age 11'} onBack={onBack}
        right={<Button variant="secondary" onDark={dark} size="sm" iconRight="chevron-down">Switch</Button>} />
      <div style={{ padding: '0 var(--space-4)' }}>
        <Tabs onDark={dark} value={tab} onChange={onTab} items={[{ value: 'assignments', label: 'Assignments' }, { value: 'metrics', label: 'Metrics' }, { value: 'profile', label: 'Profile' }]} style={{ borderColor: 'var(--e-line)' }} />
      </div>
      <Scroll>
        {tab === 'metrics' ? <MetricsTab athlete={athlete} onOpen={onOpenCard} onNew={onNew} /> : null}
        {tab === 'assignments' ? <AssignmentsTab athlete={athlete} onOpenWorkout={onOpenWorkout} /> : null}
        {tab === 'profile' ? <ProfileTab athlete={athlete} /> : null}
      </Scroll>
    </Screen>
  );
}

function CaptureCardScreen({ card, onBack }) {
  const dark = useDark();
  const [val, setVal] = React.useState('');
  const last = card.entries[card.entries.length - 1];
  const first = card.entries[0];
  const delta = (last.v - first.v).toFixed(card.name === 'Shoe Size' ? 1 : 0);
  return (
    <Screen>
      <TopBar title={card.name} sub={'Unit: ' + card.unit} onBack={onBack} right={<IconButton icon="ellipsis" label="More" onDark={dark} size="sm" />} />
      <Scroll>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-3)', padding: 'var(--space-5) var(--space-4) var(--space-3)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 700, lineHeight: .9 }}>{last.label}</span>
          <Badge tone="accent" icon="trending-up">+{delta} since {first.date.split(',')[0]}</Badge>
        </div>
        <GroupLabel>Trend</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}><TrendChart entries={card.entries} /></Panel>
        <GroupLabel>Record entry</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-4)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <Field onDark={dark} label={card.name + ' (' + card.unit + ')'} htmlFor="v"><Input id="v" onDark={dark} value={val} onChange={(e) => setVal(e.target.value)} placeholder="0" /></Field>
              <Field onDark={dark} label="Date" htmlFor="dt"><Input id="dt" onDark={dark} icon="calendar-days" defaultValue="Sep 5, 2026" /></Field>
            </div>
            <Field onDark={dark} label="Notes" hint="Optional — what changed?" htmlFor="nt"><Input id="nt" onDark={dark} placeholder="Measured after practice" /></Field>
            <Button size="lg" fullWidth disabled={!val.trim()}>Record entry</Button>
          </div>
        </Panel>
        <GroupLabel>Entry history</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-6)' }}>
          {[...card.entries].reverse().map((e, i) => (
            <div key={e.date} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', minHeight: 52, padding: '0 var(--space-4)', borderTop: i ? '1px solid var(--e-line)' : 0 }}>
              <span style={{ flex: 1 }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>{e.label}</span>
                <span style={{ display: 'block', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>{e.date}</span>
              </span>
              <IconButton icon="trash-2" label="Delete entry" size="sm" onDark={dark} />
            </div>
          ))}
        </Panel>
      </Scroll>
    </Screen>
  );
}
Object.assign(window, { AthleteDetail, CaptureCardScreen, CaptureTile });
