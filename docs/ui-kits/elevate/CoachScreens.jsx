const { Button, IconButton, Badge, Tag, Icon, Field, Input, Select, Toast } = window.RiseGameDesignSystem_66bdc7;

function CoachTeams({ role, onRole, onBuild }) {
  const dark = useDark();
  return (
    <Screen>
      <TopBar title="My Teams" sub="Coach Warren" right={<RoleToggle value={role} onChange={onRole} />} />
      <Scroll>
        <GroupLabel>My teams</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-6) var(--space-5)', textAlign: 'center' }}>
            <Icon name="shield" size={30} style={{ color: 'var(--e-accent-fg)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, lineHeight: 1.05 }}>Create your first team</span>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: 'var(--e-mute)', maxWidth: 230 }}>Set up a team to manage athletes and assign workouts. No spreadsheets, no group texts.</p>
            <Button size="lg" style={{ marginTop: 4 }}>Get started</Button>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', minHeight: 46, background: 'transparent', border: 0, borderTop: '1px solid var(--e-line)', color: 'var(--e-accent-fg)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            <Icon name="plus" size={15} />Create another team
          </button>
        </Panel>

        <div style={{ padding: '0 var(--space-4) var(--space-5)' }}>
          <button onClick={onBuild} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%', minHeight: 62, padding: '0 var(--space-4)', background: 'var(--rg-accent)', color: 'var(--rg-black)', border: 0, borderRadius: 'var(--radius-lg)', cursor: 'pointer', textAlign: 'left' }}>
            <Icon name="layout-dashboard" size={22} />
            <span style={{ flex: 1 }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, textTransform: 'uppercase' }}>Whiteboards</span>
              <span style={{ display: 'block', fontSize: 11, fontWeight: 500 }}>Build a workout, assign it to athletes</span>
            </span>
            <Icon name="chevron-right" size={18} />
          </button>
        </div>

        <GroupLabel>Assistant coach access</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-6)' }}>
          <p style={{ margin: 0, padding: 'var(--space-4)', fontSize: 12, lineHeight: 1.5, color: 'var(--e-mute)', textWrap: 'pretty' }}>
            Already have a team managed by another coach? Enter their team code to join as an assistant coach and access team data.
          </p>
          <div style={{ padding: '0 var(--space-4) var(--space-4)' }}>
            <Button variant="secondary" onDark={dark} fullWidth iconLeft="key-round">Join as assistant coach</Button>
          </div>
        </Panel>
      </Scroll>
    </Screen>
  );
}

function WorkoutBuilder({ onBack, onNext }) {
  const dark = useDark();
  const [title, setTitle] = React.useState('');
  const [sport, setSport] = React.useState('Baseball');
  return (
    <Screen>
      <TopBar title="Name & sport" sub="Step 1 of 3" onBack={onBack} right={<IconButton icon="x" label="Cancel" onDark={dark} size="sm" onClick={onBack} />} />
      <div style={{ display: 'flex', gap: 4, padding: '0 var(--space-4) var(--space-4)' }}>
        {[0, 1, 2].map((i) => <span key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i === 0 ? 'var(--e-accent-fg)' : 'var(--e-line)' }} />)}
      </div>
      <Scroll>
        <div style={{ padding: '0 var(--space-4) var(--space-5)' }}>
          <Field onDark={dark} label="Workout title" htmlFor="wt" hint="Name it how you would say it out loud.">
            <Input id="wt" onDark={dark} size="lg" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Tuesday Agility Session" />
          </Field>
        </div>
        <GroupLabel>Sport</GroupLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 var(--space-4) var(--space-6)' }}>
          {window.ELEVATE.sports.map((s) => (
            <button key={s} onClick={() => setSport(s)} style={{
              height: 32, padding: '0 var(--space-3)', cursor: 'pointer', borderRadius: 'var(--radius-sm)',
              background: sport === s ? 'var(--rg-accent)' : 'transparent',
              color: sport === s ? 'var(--rg-black)' : 'var(--e-ink)',
              border: '1px solid ' + (sport === s ? 'var(--rg-accent)' : 'var(--e-line)'),
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, transition: 'var(--transition-control)',
            }}>{s}</button>
          ))}
        </div>
      </Scroll>
      <div style={{ padding: 'var(--space-4)', borderTop: '1px solid var(--e-line)' }}>
        <Button size="lg" fullWidth disabled={!title.trim()} iconRight="chevron-right" onClick={onNext}>Next: add drills</Button>
      </div>
    </Screen>
  );
}

function WorkoutDetail({ onBack }) {
  const dark = useDark();
  const w = window.ELEVATE.workout;
  const [assigned, setAssigned] = React.useState(false);
  const total = w.exercises.reduce((n, e) => n + e.pts, 0);
  return (
    <Screen>
      <TopBar title="Workout" onBack={onBack} right={<IconButton icon="pencil" label="Edit workout" onDark={dark} size="sm" />} />
      <Scroll>
        <div style={{ padding: 'var(--space-5) var(--space-4) var(--space-4)' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 38, lineHeight: 1.02, textTransform: 'uppercase', color: 'var(--e-ink)' }}>{w.title}</h2>
          <div style={{ display: 'flex', gap: 6, marginTop: 'var(--space-3)', flexWrap: 'wrap' }}>
            <Badge tone="accent">{w.sport}</Badge>
            {w.template ? <Badge tone="dark">Template</Badge> : null}
            <Badge tone="dark">{total} pts</Badge>
          </div>
        </div>
        <GroupLabel>Exercises</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}>
          {w.exercises.map((e, i) => (
            <div key={e.n} style={{ display: 'grid', gridTemplateColumns: '28px minmax(0,1fr) auto', gap: 'var(--space-3)', padding: 'var(--space-4)', borderTop: i ? '1px solid var(--e-line)' : 0 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--e-accent-fg)' }}>{e.n}</span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, lineHeight: 1.1 }}>{e.name}</span>
                <span style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)', margin: '2px 0 4px' }}>{e.spec}</span>
                <span style={{ display: 'block', fontSize: 12, lineHeight: 1.5, color: 'var(--e-mute)' }}>{e.note}</span>
              </span>
              <Badge tone="dark">{e.pts} pts</Badge>
            </div>
          ))}
        </Panel>
        <GroupLabel>Assigned athletes</GroupLabel>
        <div style={{ padding: '0 var(--space-4) var(--space-5)' }}>
          {assigned ? (
            <Panel flush>
              {window.ELEVATE.athletes.map((a, i) => (
                <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', minHeight: 52, padding: '0 var(--space-4)', borderTop: i ? '1px solid var(--e-line)' : 0 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, background: 'var(--rg-accent)', color: 'var(--rg-black)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>{a.initials}</span>
                  <span style={{ flex: 1, fontSize: 14 }}>{a.name}</span>
                  <Badge tone="accent" icon="check">Assigned</Badge>
                </div>
              ))}
            </Panel>
          ) : (
            <div style={{ padding: 'var(--space-5)', border: '1px dashed var(--e-line)', borderRadius: 'var(--radius-lg)', textAlign: 'center', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>No athletes assigned yet</div>
          )}
        </div>
        {assigned ? <div style={{ padding: '0 var(--space-4) var(--space-5)' }}><Toast>Assigned to 2 athletes.</Toast></div> : null}
      </Scroll>
      <div style={{ padding: 'var(--space-4)', borderTop: '1px solid var(--e-line)' }}>
        <Button size="lg" fullWidth iconLeft={assigned ? 'check' : 'user-plus'} onClick={() => setAssigned(true)} disabled={assigned}>{assigned ? 'Assigned' : 'Assign to athletes'}</Button>
      </div>
    </Screen>
  );
}

function NewCardSheet({ onClose }) {
  const dark = useDark();
  const [dec, setDec] = React.useState(0);
  const [name, setName] = React.useState('');
  const examples = [28, 28.5, 28.54, 28.543];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'rgba(0,0,0,.6)' }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--e-panel)', borderTop: '1px solid var(--e-line)', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxHeight: '82%', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, textTransform: 'uppercase', color: 'var(--e-ink)' }}>New baseball card</span>
          <Button variant="ghost" onDark={dark} size="sm" onClick={onClose} style={{ padding: 0 }}>Done</Button>
        </div>
        <Field onDark={dark} label="Name" htmlFor="cn"><Input id="cn" onDark={dark} value={name} onChange={(e) => setName(e.target.value)} placeholder="Capture card name" /></Field>
        <Field onDark={dark} label="Description" hint="Optional" htmlFor="cd"><Input id="cd" onDark={dark} placeholder="What is being measured?" /></Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
          <Field onDark={dark} label="Type" htmlFor="ct"><Select id="ct" onDark={dark} options={['speed', 'height', 'weight', 'distance', 'custom']} /></Field>
          <Field onDark={dark} label="Unit" hint="lbs, mph, s, %" htmlFor="cu"><Input id="cu" onDark={dark} placeholder="mph" /></Field>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--e-ink)' }}>Decimal places</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
            {[0, 1, 2, 3].map((n) => (
              <button key={n} onClick={() => setDec(n)} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: 'var(--space-2) 0',
                borderRadius: 'var(--radius-md)', cursor: 'pointer',
                background: dec === n ? 'var(--rg-accent)' : 'transparent',
                color: dec === n ? 'var(--rg-black)' : 'var(--e-ink)',
                border: '1px solid ' + (dec === n ? 'var(--rg-accent)' : 'var(--e-line)'),
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>{n}</span>
                <span style={{ fontSize: 9, opacity: .7 }}>e.g. {examples[n]}</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant="secondary" onDark={dark} size="lg" onClick={onClose}>Cancel</Button>
          <Button size="lg" fullWidth disabled={!name.trim()} onClick={onClose}>Create</Button>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CoachTeams, WorkoutBuilder, WorkoutDetail, NewCardSheet });
