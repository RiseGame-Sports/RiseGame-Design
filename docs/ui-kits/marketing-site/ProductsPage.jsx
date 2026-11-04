const { Button, Card, Badge, SectionHeading, Logo, Icon } = window.RiseGameDesignSystem_66bdc7;

const ROWS = [
  { name: 'Tryout Scheduler', job: 'Parents sign up for tryout slots', access: 'signups.risegame.com', icon: 'calendar-days' },
  { name: 'Tryouts By RiseGame', job: 'Coaches score athletes on the field', access: 'App Store / Play', icon: 'clipboard-list' },
  { name: 'Draft', job: 'Teams from evaluation scores', access: 'League Draft app', icon: 'users' },
  { name: 'Reports', job: 'Parent-readable evaluation breakdown', access: 'After tryouts', icon: 'file-text' },
  { name: 'Elevate', job: 'Year-round athlete tracking', access: 'App Store / Play', icon: 'chart-no-axes-column' },
];

function ProductsPage() {
  return (
    <div>
      <Section dark tight>
        <SectionHeading onDark level={1} eyebrow="Products" title="One connected flow for league admins" body="Scheduler to Tryouts to Draft — then Reports and Elevate as relevant." />
      </Section>

      <Section tight>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
          {['Tryout Scheduler', 'Tryouts', 'Draft'].map((step, i) => (
            <React.Fragment key={step}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', height: 40, padding: '0 var(--space-4)', border: '1px solid var(--rg-ink)', borderRadius: 'var(--radius-sm)', fontWeight: 'var(--weight-medium)' }}>{step}</span>
              {i < 2 ? <Icon name="arrow-right" size={18} style={{ color: 'var(--rg-accent)' }} /> : null}
            </React.Fragment>
          ))}
        </div>
        <Card padding="0" style={{ overflow: 'hidden' }}>
          {ROWS.map((r, i) => (
            <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '44px minmax(0,1.1fr) minmax(0,1.4fr) minmax(0,1fr)', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', borderTop: i ? '1px solid var(--border-default)' : 0 }}>
              <Icon name={r.icon} size={22} style={{ color: 'var(--rg-accent)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 'var(--weight-bold)' }}>{r.name}</span>
              <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-muted)' }}>{r.job}</span>
              <span style={{ justifySelf: 'start' }}><Badge>{r.access}</Badge></span>
            </div>
          ))}
        </Card>
        <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>Product names and jobs are the locked list. GroundsPal is a separate mark and is not shown in RiseGame chrome.</p>
      </Section>

      <Section dark tight>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <Logo variant="r" onDark height={56} assetBase="../../../assets/logos/" />
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--size-h2)', color: 'var(--rg-white)' }}>Book a walkthrough with our team</h2>
          </div>
          <Button size="lg" href="mailto:info@risegame.com">Lets Chat</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { ProductsPage });
