import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir, filter, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, filter, out);
    else if (filter(full)) out.push(full);
  }
  return out;
}

const distUrl = (rel) => pathToFileURL(path.join(root, 'dist', rel)).href;

async function loadIcons() {
  const icons = await import(distUrl('components/core/icons.js'));
  const { Icon } = await import(distUrl('components/core/Icon.js'));
  const { createElement } = await import('react');
  const { renderToString } = await import('react-dom/server');
  return { ...icons, Icon, createElement, renderToString };
}

// String literals inside a JSX expression such as {done ? 'check' : 'x'}.
const literals = (expr) => [...expr.matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);

function iconNamesInUse() {
  const files = [
    ...walk(path.join(root, 'src'), (f) => /\.jsx?$/.test(f)),
    ...walk(path.join(root, 'docs/components'), (f) => f.endsWith('.md')),
    ...walk(path.join(root, 'docs/ui-kits'), (f) => /\.(jsx?|html|md)$/.test(f) && !f.endsWith('ds-bundle.js')),
  ];
  const found = new Map();
  const add = (name, file) => {
    if (!found.has(name)) found.set(name, path.relative(root, file));
  };
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    // <Icon name="x"> and <Icon name={cond ? 'a' : 'b'}>
    for (const m of text.matchAll(/<Icon\b([^>]*)>/g)) {
      const lit = m[1].match(/\bname=["']([^"']+)["']/);
      if (lit) add(lit[1], file);
      const expr = m[1].match(/\bname=\{([^}]*)\}/);
      if (expr) for (const name of literals(expr[1])) add(name, file);
    }
    // icon="x", iconLeft="x", icon: 'x', icon = 'x' (default props)
    for (const m of text.matchAll(/\bicon(?:Left|Right)?\s*[=:]\s*["']([^"']+)["']/g)) add(m[1], file);
    // icon={cond ? 'a' : 'b'}
    for (const m of text.matchAll(/\bicon(?:Left|Right)?=\{([^}]*)\}/g)) {
      for (const name of literals(m[1])) add(name, file);
    }
  }
  return found;
}

test('no remote URLs in dist', () => {
  const files = [
    ...walk(path.join(root, 'dist/styles'), () => true),
    ...walk(path.join(root, 'dist/components'), () => true),
  ];
  const hits = [];
  for (const file of files) {
    if (/\.woff2?$/.test(file)) continue;
    fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      if (/https?:\/\//.test(line)) hits.push(`${path.relative(root, file)}:${i + 1}`);
    });
  }
  assert.deepEqual(hits, []);
});

test('every css url() resolves', () => {
  const dir = path.join(root, 'dist/styles');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.css'));
  let count = 0;
  const missing = [];
  for (const name of files) {
    const css = fs.readFileSync(path.join(dir, name), 'utf8');
    const refs = [
      ...[...css.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g)].map((m) => m[2]),
      ...[...css.matchAll(/@import\s+(['"])([^'"]+)\1/g)].map((m) => m[2]),
    ];
    for (const ref of refs) {
      if (ref.startsWith('data:')) continue;
      count += 1;
      if (!fs.existsSync(path.resolve(dir, ref.split(/[?#]/)[0]))) missing.push(`${name} -> ${ref}`);
    }
  }
  assert.ok(count >= 8, `expected 8+ url() and @import references, found ${count}`);
  assert.deepEqual(missing, []);
});

test('fonts cover the weights in use', () => {
  const file = path.join(root, 'dist/styles/fonts.css');
  assert.ok(fs.existsSync(file), 'dist/styles/fonts.css is missing');
  const css = fs.readFileSync(file, 'utf8');
  const faces = [...css.matchAll(/@font-face\s*\{([^}]*)\}/g)].map((m) => m[1]);
  const want = [
    ['Barlow Condensed', 'barlow-condensed', [400, 500, 600, 700]],
    ['Roboto', 'roboto', [400, 500, 700, 900]],
  ];
  for (const [family, slug, weights] of want) {
    for (const weight of weights) {
      const face = faces.find(
        (f) => new RegExp(`font-family:\\s*['"]${family}['"]`).test(f) && new RegExp(`font-weight:\\s*${weight}\\b`).test(f)
      );
      assert.ok(face, `no @font-face for ${family} ${weight}`);
      assert.match(face, /font-style:\s*normal/);
      assert.match(face, /font-display:\s*swap/);
      assert.match(face, new RegExp(`url\\(['"]?\\.\\./fonts/${slug}-latin-${weight}-normal\\.woff2['"]?\\)`));
    }
  }
  const index = fs.readFileSync(path.join(root, 'dist/styles/index.css'), 'utf8');
  const imports = [...index.matchAll(/@import\s+['"]([^'"]+)['"]/g)].map((m) => m[1]);
  assert.deepEqual(imports, ['./fonts.css', './tokens.css', './base.css']);
});

test('icon names used in src are registered', async () => {
  const { ICONS } = await loadIcons();
  const used = iconNamesInUse();
  assert.ok(used.size >= 30, `expected 30+ icon names in use, found ${used.size}`);
  const missing = [...used].filter(([name]) => !(name in ICONS)).map(([name, file]) => `${name} (${file})`);
  assert.deepEqual(missing, []);
});

test('brand book slugs are registered', async () => {
  const { ICONS } = await loadIcons();
  const book = fs.readFileSync(path.join(root, 'docs/brand-book.md'), 'utf8');
  const start = book.indexOf('Common slugs in use:');
  assert.ok(start >= 0, 'brand book has no "Common slugs in use" list');
  const list = book.slice(start, book.indexOf('\n\n', start));
  const slugs = [...list.matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]);
  assert.ok(slugs.length >= 20, `expected 20+ slugs, found ${slugs.length}`);
  assert.deepEqual(slugs.filter((s) => !(s in ICONS)), []);
});

test('icons are named imports from lucide-react', () => {
  const src = fs.readFileSync(path.join(root, 'dist/components/core/icons.js'), 'utf8');
  assert.match(src, /import\s*\{[^}]+\}\s*from\s*['"]lucide-react['"]/);
  assert.doesNotMatch(src, /lucide-react\/dynamic/);
  assert.doesNotMatch(src, /import\s*\*/);
});

test('registerIcons adds names', async () => {
  const { registerIcons, Icon, createElement, renderToString } = await loadIcons();
  const GoalPost = (props) => createElement('svg', { width: props.size, height: props.size });
  registerIcons({ 'goal-post': GoalPost });
  assert.match(renderToString(createElement(Icon, { name: 'goal-post' })), /<svg/);
});

test('Icon renders an accessible box', async () => {
  const { Icon, createElement, renderToString } = await loadIcons();
  const labeled = renderToString(createElement(Icon, { name: 'check', size: 24, title: 'Done' }));
  assert.match(labeled, /role="img"/);
  assert.match(labeled, /aria-label="Done"/);
  assert.match(labeled, /width:24px/);
  assert.match(labeled, /<svg/);
  const decorative = renderToString(createElement(Icon, { name: 'check' }));
  assert.match(decorative, /aria-hidden="true"/);
  assert.doesNotMatch(decorative, /role=/);
});

test('unknown icon does not throw', async () => {
  const { Icon, createElement, renderToString } = await loadIcons();
  const html = renderToString(createElement(Icon, { name: 'not-an-icon' }));
  assert.equal(typeof html, 'string');
  assert.match(html, /width:20px/);
  assert.match(html, /height:20px/);
  assert.doesNotMatch(html, /<svg/);
});
