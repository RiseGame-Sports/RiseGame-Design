const { Icon, Logo, IconButton } = window.RiseGameDesignSystem_66bdc7;

// Theme: the design is authored dark; light chrome is the same design inverted.
const ThemeCtx = React.createContext(true);
const useDark = () => React.useContext(ThemeCtx);

const DARK = { '--e-bg': '#000000', '--e-panel': '#161616', '--e-panel-2': '#242424', '--e-line': '#2e2e2e', '--e-mute': '#9a9a9a', '--e-ink': '#ffffff', '--e-accent-fg': '#1dfe1b' };
const LIGHT = { '--e-bg': '#ffffff', '--e-panel': '#ffffff', '--e-panel-2': '#f2f2f2', '--e-line': '#e2e2e2', '--e-mute': '#666666', '--e-ink': '#161616', '--e-accent-fg': '#161616' };

function Themed({ dark, children, style }) {
  return (
    <ThemeCtx.Provider value={dark}>
      <div style={{ height: '100%', ...(dark ? DARK : LIGHT), ...style }}>{children}</div>
    </ThemeCtx.Provider>
  );
}

// --- shared dark-chrome bits for the Elevate redesign ---

function Screen({ children }) {
  return <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--e-bg)', color: 'var(--e-ink)', fontFamily: 'var(--font-body)' }}>{children}</div>;
}

function Scroll({ children, style }) {
  return <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', ...style }}>{children}</div>;
}

function TopBar({ title, onBack, right, sub }) {
  const dark = useDark();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: '52px var(--space-3) var(--space-3)', borderBottom: '1px solid var(--e-line)' }}>
      {onBack ? <IconButton icon="chevron-left" label="Back" onDark={dark} size="sm" onClick={onBack} /> : <Logo variant="r" onDark={dark} height={26} assetBase="../../../assets/logos/" style={{ marginLeft: 8, marginRight: 4 }} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '.01em' }}>{title}</div>
        {sub ? <div style={{ fontSize: 11, color: 'var(--e-mute)' }}>{sub}</div> : null}
      </div>
      {right}
    </div>
  );
}

function RoleToggle({ value, onChange }) {
  return (
    <div style={{ display: 'flex', padding: 2, background: 'var(--e-panel)', border: '1px solid var(--e-line)', borderRadius: 'var(--radius-md)' }}>
      {['Parent', 'Coach'].map((r) => (
        <button key={r} onClick={() => onChange(r)} style={{
          minWidth: 74, height: 30, border: 0, cursor: 'pointer', borderRadius: 2,
          background: value === r ? 'var(--rg-accent)' : 'transparent',
          color: value === r ? 'var(--rg-black)' : 'var(--e-mute)',
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
          letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
          transition: 'var(--transition-control)',
        }}>{r}</button>
      ))}
    </div>
  );
}

function GroupLabel({ children, onAdd }) {
  const dark = useDark();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: '0 var(--space-4)', marginBottom: 'var(--space-2)' }}>
      <span style={{ flex: 1, fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--e-mute)' }}>{children}</span>
      {onAdd ? <IconButton icon="plus" label="Add" size="sm" onDark={dark} onClick={onAdd} /> : null}
    </div>
  );
}

function Panel({ children, style, flush }) {
  return <div style={{ background: 'var(--e-panel)', border: '1px solid var(--e-line)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: flush ? 0 : '0 var(--space-4)', ...style }}>{children}</div>;
}

function Spark({ points, width = 70, height = 24 }) {
  if (!points || points.length < 2) return <div style={{ width, height, borderBottom: '1px dashed var(--e-line)' }} />;
  const min = Math.min(...points), max = Math.max(...points), span = max - min || 1;
  const d = points.map((p, i) => (i / (points.length - 1)) * width + ',' + (height - ((p - min) / span) * (height - 4) - 2)).join(' ');
  return (
    <svg width={width} height={height} aria-hidden="true" style={{ display: 'block', overflow: 'visible' }}>
      <polyline points={d} fill="none" stroke="var(--e-accent-fg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendChart({ entries, height = 150 }) {
  const vals = entries.map((e) => e.v);
  const min = Math.min(...vals), max = Math.max(...vals), span = max - min || 1;
  const w = 100, h = height;
  const pt = (v, i) => [(i / Math.max(vals.length - 1, 1)) * w, h - 16 - ((v - min) / span) * (h - 44)];
  const pts = vals.map(pt);
  const line = pts.map((p) => p[0] + ',' + p[1]).join(' ');
  const area = line + ' ' + w + ',' + (h - 16) + ' 0,' + (h - 16);
  return (
    <div style={{ position: 'relative', padding: 'var(--space-4)' }}>
      <svg viewBox={'0 0 ' + w + ' ' + h} preserveAspectRatio="none" style={{ width: '100%', height, display: 'block' }}>
        <polygon points={area} fill="var(--rg-accent)" opacity=".12" />
        <polyline points={line} fill="none" stroke="var(--e-accent-fg)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      </svg>
      {pts.map((p, i) => (
        <span key={i} style={{ position: 'absolute', left: 'calc(var(--space-4) + ' + (p[0] / w * 100) + '% - ' + (p[0] / w * 32) + 'px)', top: 'calc(var(--space-4) + ' + p[1] + 'px)', width: 6, height: 6, marginLeft: -3, marginTop: -3, borderRadius: 999, background: 'var(--e-accent-fg)' }} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--e-mute)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
        <span>{entries[0].date}</span><span>{entries[entries.length - 1].date}</span>
      </div>
    </div>
  );
}

Object.assign(window, { Screen, Scroll, TopBar, RoleToggle, GroupLabel, Panel, Spark, TrendChart, Themed, useDark });
