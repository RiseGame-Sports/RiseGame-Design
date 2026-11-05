import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = (p) => pathToFileURL(path.join(root, 'dist', p)).href;

const { AppTabBar } = await import(dist('components/navigation/AppTabBar.js'));

test('AppTabBar renders lines as two lines', () => {
  const html = renderToStaticMarkup(
    createElement(AppTabBar, { items: [{ value: 'p', label: 'Players and Teams', icon: 'users', lines: ['Players &', 'Teams'] }] })
  );
  assert.match(html, /Players &amp;<br\/>Teams/);
});

test('AppTabBar spreads buttonProps', () => {
  const html = renderToStaticMarkup(
    createElement(AppTabBar, { items: [{ value: 'home', label: 'Home', icon: 'house', buttonProps: { 'data-nav': 'home' } }] })
  );
  assert.match(html, /<button[^>]*data-nav="home"/);
});

test('compact AppTabBar lays tabs out in a row', () => {
  const html = renderToStaticMarkup(
    createElement(AppTabBar, { compact: true, items: [{ value: 'home', label: 'Home', icon: 'house' }] })
  );
  const button = html.match(/<button[^>]*>/)[0];
  assert.match(button, /flex-direction:row/);
  assert.match(button, /min-height:44px/);
  assert.match(button, /gap:6px/);
});

test('shouldHover follows the pointer', async () => {
  const { shouldHover } = await import(dist('components/core/hover.js'));
  const saved = globalThis.matchMedia;
  try {
    globalThis.matchMedia = () => ({ matches: false });
    assert.equal(shouldHover(), false);
    globalThis.matchMedia = (q) => {
      assert.equal(q, '(hover: hover)');
      return { matches: true };
    };
    assert.equal(shouldHover(), true);
    delete globalThis.matchMedia;
    assert.equal(shouldHover(), false);
  } finally {
    if (saved) globalThis.matchMedia = saved;
    else delete globalThis.matchMedia;
  }
});

test('Button and IconButton ask shouldHover', () => {
  for (const name of ['Button', 'IconButton']) {
    const src = fs.readFileSync(path.join(root, 'dist/components/core', name + '.js'), 'utf8');
    assert.match(src, /from ['"]\.\/hover\.js['"]/, `${name} does not import hover.js`);
    const m = src.match(/onMouseEnter:\s*\(\)\s*=>\s*\{?([^}]*?)\}?,\s*\n?\s*onMouseLeave/s) || src.match(/onMouseEnter:([^\n]*)/);
    assert.ok(m, `${name} has no onMouseEnter`);
    assert.match(m[1], /shouldHover\(\)/, `${name} onMouseEnter does not call shouldHover`);
  }
});
