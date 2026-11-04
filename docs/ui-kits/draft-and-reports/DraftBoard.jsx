const { Button, IconButton, Card, Badge, Tag, PlayerRow, ScoreScale, StatTile, Logo, Icon, Toast } = window.RiseGameDesignSystem_66bdc7;

function DraftBoard() {
  const d = window.DRAFT_DATA;
  const [pool, setPool] = React.useState(d.pool);
  const [rosters, setRosters] = React.useState(() => Object.fromEntries(d.teams.map((t) => [t, []])));
  const [pickIndex, setPickIndex] = React.useState(0);
  const [selected, setSelected] = React.useState(d.pool[0]);
  const [toast, setToast] = React.useState('');
  const onClock = d.teams[pickIndex % d.teams.length];

  const draft = (player) => {
    setRosters((r) => ({ ...r, [onClock]: [...r[onClock], player] }));
    setPool((p) => p.filter((x) => x.number !== player.number));
    setPickIndex((i) => i + 1);
    setSelected(null);
    setToast(onClock + ' selected #' + player.number + ' ' + player.name + '.');
  };

  return (
    <div style={{ minHeight: 720, background: 'var(--surface-chrome)' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3) var(--space-5)', background: 'var(--surface-dark)', color: 'var(--text-inverse)' }}>
        <Logo variant="wordmark" onDark height={22} assetBase="../../../assets/logos/" />
        <span style={{ paddingLeft: 'var(--space-4)', borderLeft: '1px solid var(--border-dark)', fontSize: 'var(--size-body-sm)', color: 'var(--rg-dark-mute)' }}>Draft · {d.league}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <span className="rg-eyebrow" style={{ color: 'var(--rg-dark-mute)' }}>Round {Math.floor(pickIndex / d.teams.length) + 1} · Pick {pickIndex + 1}</span>
          <Badge tone="accent" icon="clock">{onClock} on the clock</Badge>
        </div>
      </header>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'var(--space-5)', display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr) minmax(0,1.1fr)', gap: 'var(--space-4)', alignItems: 'start' }}>
        <Card padding="0" style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', borderBottom: '1px solid var(--border-default)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 700, flex: 1 }}>Available athletes</span>
            <Tag selected>By score</Tag>
            <Tag>By age</Tag>
          </div>
          {pool.length ? pool.map((p) => (
            <PlayerRow key={p.number} number={p.number} name={p.name} meta={'Age ' + p.age} score={p.avg}
              onClick={() => setSelected(p)} style={{ background: selected && selected.number === p.number ? 'var(--rg-paper)' : undefined }} />
          )) : (
            <div style={{ padding: 'var(--space-6)', textAlign: 'center', color: 'var(--text-muted)', fontSize: 'var(--size-body-sm)' }}>Every athlete has a team.</div>
          )}
        </Card>

        <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {selected ? (<>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h3)', fontWeight: 700 }}>#{selected.number} {selected.name}</div>
                <div style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>Age {selected.age} · composite {selected.avg}</div>
              </div>
              <IconButton icon="x" label="Clear selection" size="sm" onClick={() => setSelected(null)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {d.drills.map((drill, i) => <ScoreScale key={drill} label={drill} size="sm" value={selected.scores[i]} readOnly />)}
            </div>
            <div style={{ padding: 'var(--space-3)', background: 'var(--rg-paper)', borderRadius: 'var(--radius-md)', fontSize: 'var(--size-body-sm)', lineHeight: 'var(--leading-body)' }}>
              <span className="rg-eyebrow" style={{ display: 'block', color: 'var(--text-muted)', marginBottom: 4 }}>Coach note</span>{selected.note}
            </div>
            <Button size="lg" fullWidth iconLeft="check" onClick={() => draft(selected)}>Draft to {onClock}</Button>
          </>) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-5) 0', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Icon name="users" size={26} style={{ alignSelf: 'center' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 700, color: 'var(--rg-ink)' }}>Pick an athlete to compare</span>
              <span style={{ fontSize: 'var(--size-body-sm)' }}>Every score and note comes straight from tryouts.</span>
            </div>
          )}
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {toast ? <Toast onClose={() => setToast('')}>{toast}</Toast> : null}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
            <StatTile value={pool.length} label="Available" />
            <StatTile tone="dark" value={pickIndex} label="Picks made" />
          </div>
          {d.teams.map((t) => (
            <Card key={t} padding="var(--space-4)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', borderColor: t === onClock ? 'var(--rg-accent)' : undefined, borderWidth: t === onClock ? 2 : 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 700, flex: 1 }}>{t}</span>
                <Badge tone={t === onClock ? 'accent' : 'neutral'}>{rosters[t].length} picks</Badge>
              </div>
              {rosters[t].length ? rosters[t].map((p) => (
                <span key={p.number} style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-body)' }}>#{p.number} {p.name} <span style={{ color: 'var(--text-muted)' }}>· {p.avg}</span></span>
              )) : <span style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>No picks yet.</span>}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { DraftBoard });
