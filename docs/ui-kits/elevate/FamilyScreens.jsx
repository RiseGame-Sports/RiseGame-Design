const { Button, IconButton, Badge, Card, Field, Input, Switch, Icon, Logo } = window.RiseGameDesignSystem_66bdc7;

// Family-level screens. These live on the bottom bar; anything scoped to a single
// athlete stays on the athlete's own top tabs (Assignments / Metrics / Profile).

function ReportsScreen({ role, onRole }) {
  const dark = useDark();
  const d = window.ELEVATE;
  return (
    <Screen>
      <TopBar title="Reports" sub="Tryout evaluations" right={<RoleToggle value={role} onChange={onRole} />} />
      <Scroll>
        <div style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-4)' }}>
          <Icon name="info" size={16} style={{ color: 'var(--e-mute)', marginTop: 2 }} />
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: 'var(--e-mute)', textWrap: 'pretty' }}>
            If your athlete completed a tryout with a coach that used the <b style={{ color: 'var(--e-ink)' }}>RiseGame Tryouts App</b>, you can request their performance report here.
          </p>
        </div>
        <GroupLabel>Available to request</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}>
          {d.athletes.map((a, i) => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', minHeight: 66, padding: '0 var(--space-4)', borderTop: i ? '1px solid var(--e-line)' : 0 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, background: 'var(--rg-accent)', color: 'var(--rg-black)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700 }}>{a.initials}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, lineHeight: 1.1, color: 'var(--e-ink)' }}>{a.name}</span>
                <span style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>{a.sports[0]} · Spring 2026 tryouts</span>
              </span>
              <Button size="sm" onDark={dark}>Request</Button>
            </div>
          ))}
        </Panel>
        <GroupLabel>Delivered</GroupLabel>
        <div style={{ padding: '0 var(--space-4) var(--space-6)' }}>
          <div style={{ padding: 'var(--space-5)', border: '1px dashed var(--e-line)', borderRadius: 'var(--radius-lg)', textAlign: 'center', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>Nothing delivered yet</div>
        </div>
      </Scroll>
    </Screen>
  );
}

function AccountScreen({ role, onRole }) {
  const dark = useDark();
  const d = window.ELEVATE;
  return (
    <Screen>
      <TopBar title="Account" sub="Aaron Warren" right={<RoleToggle value={role} onChange={onRole} />} />
      <Scroll>
        <GroupLabel>You</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-4)' }}>
            <Field onDark={dark} label="Name" htmlFor="an"><Input id="an" onDark={dark} defaultValue="Aaron Warren" /></Field>
            <Field onDark={dark} label="Email" hint="Where confirmations and reports arrive" htmlFor="ae"><Input id="ae" onDark={dark} icon="mail" defaultValue="aaron@example.com" /></Field>
          </div>
        </Panel>

        <GroupLabel>Co-parent access</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-5)' }}>
          {d.coParents.map((c, i) => (
            <div key={c.athlete} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', minHeight: 56, padding: '0 var(--space-4)', borderTop: i ? '1px solid var(--e-line)' : 0 }}>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: 14, fontWeight: 500, color: 'var(--e-ink)' }}>{c.athlete}</span>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--e-mute)' }}>Shared with {c.who}</span>
              </span>
              <Button variant="ghost" size="sm" onDark={dark} iconRight="chevron-right" style={{ padding: 0 }}>Manage</Button>
            </div>
          ))}
          <div style={{ padding: 'var(--space-3) var(--space-4)', borderTop: '1px solid var(--e-line)' }}>
            <Button variant="secondary" onDark={dark} size="sm" fullWidth iconLeft="key-round">Join as co-parent</Button>
          </div>
        </Panel>

        <GroupLabel>Notifications</GroupLabel>
        <Panel style={{ marginBottom: 'var(--space-6)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-4)' }}>
            <Switch onDark={dark} label="New assignment posted" defaultChecked />
            <Switch onDark={dark} label="Coach records a measurement" defaultChecked />
            <Switch onDark={dark} label="Weekly recap on Sunday" defaultChecked />
            <Switch onDark={dark} label="Report is ready" />
          </div>
        </Panel>
      </Scroll>
    </Screen>
  );
}
Object.assign(window, { ReportsScreen, AccountScreen });
