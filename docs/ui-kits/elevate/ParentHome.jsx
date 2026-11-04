const { Button, IconButton, Badge, Icon, ProgressBar } = window.RiseGameDesignSystem_66bdc7;

function AthleteRow({ a, onOpen }) {
  return (
    <button onClick={() => onOpen(a)} style={{
      display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 18px', alignItems: 'center', gap: 'var(--space-3)',
      width: '100%', padding: 'var(--space-3) var(--space-4)', background: 'transparent', border: 0,
      borderBottom: '1px solid var(--e-line)', cursor: 'pointer', textAlign: 'left', color: 'var(--e-ink)',
    }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44,
        background: 'var(--rg-accent)', color: 'var(--rg-black)', borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700,
      }}>{a.initials}</span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, lineHeight: 1.05 }}>{a.name}</span>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.sports.join(' · ')}</span>
        <span style={{ display: 'flex', gap: 'var(--space-3)', fontSize: 11, color: 'var(--e-ink)' }}>
          <span><b style={{ fontFamily: 'var(--font-display)', fontSize: 14 }}>{a.week.workouts}/{a.week.assigned}</b> <span style={{ color: 'var(--e-mute)' }}>workouts</span></span>
          <span><b style={{ fontFamily: 'var(--font-display)', fontSize: 14 }}>{a.week.attendance}%</b> <span style={{ color: 'var(--e-mute)' }}>attendance</span></span>
        </span>
      </span>
      <Icon name="chevron-right" size={18} style={{ color: 'var(--e-mute)' }} />
    </button>
  );
}

function ParentHome({ role, onRole, onOpen }) {
  const dark = useDark();
  const d = window.ELEVATE;
  const totalDue = d.athletes.reduce((n, a) => n + a.assignments.filter((x) => !x.done).length, 0);
  return (
    <Screen>
      <TopBar title="Elevate" sub="Warren family" right={<RoleToggle value={role} onChange={onRole} />} />
      <Scroll>
        <div style={{ padding: 'var(--space-5) var(--space-4) var(--space-4)' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--e-accent-fg)' }}>This week</div>
          <h2 style={{ margin: '6px 0 0', fontFamily: 'var(--font-display)', fontSize: 34, lineHeight: 1.02, color: 'var(--e-ink)', textWrap: 'balance' }}>
            {totalDue} workout{totalDue === 1 ? '' : 's'} still open across 2 athletes.
          </h2>
        </div>

        <GroupLabel onAdd={() => {}}>Your athletes</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}>
          {d.athletes.map((a) => <AthleteRow key={a.id} a={a} onOpen={onOpen} />)}
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', minHeight: 46, background: 'transparent', border: 0, color: 'var(--e-accent-fg)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            <Icon name="plus" size={15} />Add another athlete
          </button>
        </Panel>

      </Scroll>
    </Screen>
  );
}
Object.assign(window, { ParentHome });
