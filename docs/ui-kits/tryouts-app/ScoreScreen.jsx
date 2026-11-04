const { ScoreScale, Button, IconButton, Badge, Toast, Icon } = window.RiseGameDesignSystem_66bdc7;

function ScoreScreen({ player, onBack, onSave }) {
  const drills = window.TRYOUTS_DATA.drills;
  const [scores, setScores] = React.useState(player.scores);
  const [note, setNote] = React.useState('');
  const [saved, setSaved] = React.useState(false);
  const done = drills.filter((d) => scores[d]).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--rg-black)', color: 'var(--rg-white)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: '52px var(--space-4) var(--space-3)', borderBottom: '1px solid var(--border-dark)' }}>
        <IconButton icon="chevron-left" label="Back to roster" onDark onClick={onBack} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)', fontWeight: 700 }}>#{player.number} {player.name}</div>
          <div style={{ fontSize: 11, color: 'var(--rg-dark-mute)' }}>Age {player.age} · {done} of {drills.length} drills scored</div>
        </div>
        <Badge tone={done === drills.length ? 'accent' : 'dark'}>{done === drills.length ? 'Complete' : done + '/' + drills.length}</Badge>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        {drills.map((d) => (
          <ScoreScale key={d} onDark label={d} size="lg" value={scores[d]} onChange={(n) => setScores({ ...scores, [d]: n })} />
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <span className="rg-eyebrow" style={{ color: 'var(--rg-dark-mute)' }}>Coach note</span>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3}
            placeholder="Quick, specific, parent-readable."
            style={{ background: 'var(--rg-dark-surface-2)', color: 'var(--rg-white)', border: '1px solid var(--rg-dark-line)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', fontFamily: 'var(--font-body)', fontSize: 'var(--size-body-sm)', resize: 'none' }} />
        </div>
        {saved ? <Toast>Evaluation scores saved.</Toast> : null}
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-2)', padding: 'var(--space-4)', borderTop: '1px solid var(--border-dark)' }}>
        <Button variant="secondary" onDark size="lg" onClick={onBack}>Roster</Button>
        <Button size="lg" fullWidth disabled={!done} onClick={() => { setSaved(true); onSave(player.number, scores); }}>Save and next player</Button>
      </div>
    </div>
  );
}
Object.assign(window, { ScoreScreen });
