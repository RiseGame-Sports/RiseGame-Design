// Neutral photo placeholder. RiseGame photography is real youth-sports imagery;
// no licensed photos shipped with the brand pack, so kits show labelled slots.
function Photo({ label, height = 320, ratio, style }) {
  return (
    <div style={{
      position: 'relative', height, aspectRatio: ratio, background: '#d8d8d8',
      border: '1px solid var(--border-default)', borderRadius: 'var(--radius-card)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', ...style,
    }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em',
        textTransform: 'uppercase', color: '#8a8a8a', textAlign: 'center', padding: '0 16px',
      }}>{label}</span>
    </div>
  );
}
Object.assign(window, { Photo });
