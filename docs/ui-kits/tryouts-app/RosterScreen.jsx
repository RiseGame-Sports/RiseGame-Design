const { PlayerRow, Badge, Input, ProgressBar, Icon, Logo } = window.RiseGameDesignSystem_66bdc7;

function avg(s) {
  const v = Object.values(s);
  if (!v.length) return null;
  return (v.reduce((a, b) => a + b, 0) / v.length).toFixed(1);
}

function RosterScreen({ players, onPick }) {
  const scored = players.filter((p) => Object.keys(p.scores).length).length;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--rg-black)', color: 'var(--rg-white)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: '52px var(--space-4) var(--space-4)', borderBottom: '1px solid var(--border-dark)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Logo variant="rocket" onDark height={26} assetBase="../../../assets/logos/" />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 700 }}>Roster</div>
            <div style={{ fontSize: 11, color: 'var(--rg-dark-mute)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{window.TRYOUTS_DATA.event}</div>
          </div>
          <Badge tone="dark" style={{ marginLeft: 'auto' }}>{players.length} players</Badge>
        </div>
        <Input onDark size="sm" icon="search" placeholder="Find a player or number" />
        <ProgressBar onDark label="Players scored" value={scored} max={players.length} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {players.map((p) => {
          const a = avg(p.scores);
          return <PlayerRow key={p.number} onDark number={p.number} name={p.name}
            meta={'Age ' + p.age} score={a || undefined} status={a ? 'Scored' : 'Not scored'} onClick={() => onPick(p)} />;
        })}
      </div>
    </div>
  );
}
Object.assign(window, { RosterScreen, avg });
