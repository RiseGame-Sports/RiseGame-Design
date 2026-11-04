const { Button, Card, Badge, ScoreScale, StatTile, SectionHeading, ProgressBar, Logo, Icon } = window.RiseGameDesignSystem_66bdc7;

function PlayerReport() {
  const d = window.DRAFT_DATA;
  const p = d.pool[1] || d.pool[0];
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: 720 }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3) var(--space-5)', background: 'var(--surface-dark)', color: 'var(--text-inverse)' }}>
        <Logo variant="wordmark" onDark height={22} assetBase="../../../assets/logos/" />
        <span style={{ paddingLeft: 'var(--space-4)', borderLeft: '1px solid var(--border-dark)', fontSize: 'var(--size-body-sm)', color: 'var(--rg-dark-mute)' }}>Reports</span>
        <Button variant="secondary" size="sm" onDark iconLeft="download" style={{ marginLeft: 'auto' }}>Download PDF</Button>
      </header>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: 'var(--space-7) var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <SectionHeading eyebrow="Evaluation report" title={p.name + ', ' + d.league.split(' · ')[1] + ' Tryouts'}
          body="Every score below came from a coach on the field. Here is where your athlete stands and what to work on next." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 'var(--space-3)' }}>
          <StatTile value={p.avg} label="Composite score" />
          <StatTile value={'#' + p.number} label="Tryout number" />
          <StatTile value={'Age ' + p.age} label="Division age" />
          <StatTile tone="dark" value="3 coaches" label="Evaluated by" />
        </div>

        <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h3)', fontWeight: 700, flex: 1 }}>Skill breakdown</span>
            <Badge>1 to 5 scale</Badge>
          </div>
          {d.drills.map((drill, i) => (
            <div key={drill} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 220px', gap: 'var(--space-4)', alignItems: 'center' }}>
              <ProgressBar label={drill} value={p.scores[i]} max={5} />
              <ScoreScale size="sm" value={p.scores[i]} readOnly />
            </div>
          ))}
        </Card>

        <Card tone="alt" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <span className="rg-eyebrow" style={{ color: 'var(--text-muted)' }}>What the coaches said</span>
          <p style={{ margin: 0, fontSize: 'var(--size-body-lg)', lineHeight: 'var(--leading-body)', textWrap: 'pretty' }}>{p.note}</p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--border-default)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-body-sm)' }}><Icon name="trending-up" size={16} style={{ color: 'var(--rg-accent)' }} />Work on: throwing mechanics</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-body-sm)' }}><Icon name="calendar-days" size={16} style={{ color: 'var(--rg-accent)' }} />Next check-in: week 3</span>
          </div>
        </Card>

        <Card tone="dark" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h3)', fontWeight: 700, color: 'var(--rg-white)' }}>Keep watching the whole season</div>
            <p style={{ margin: 0, fontSize: 'var(--size-body-sm)', color: 'var(--rg-dark-mute)' }}>Elevate tracks development, attendance and performance year-round.</p>
          </div>
          <Button size="lg">Open Elevate</Button>
        </Card>
      </div>
    </div>
  );
}
Object.assign(window, { PlayerReport });
