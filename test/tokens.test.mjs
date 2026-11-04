import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadTokens, resolveValue, flatVars, renderTokensCss } from '../scripts/tokens.mjs';

const norm = (s) => s.replace(/\s+/g, ' ').trim().toLowerCase();
function parseVars(css) {
  const map = new Map();
  for (const m of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) map.set(m[1], norm(m[2]));
  return map;
}

test('generated tokens.css matches the hand-written file', () => {
  const css = renderTokensCss(loadTokens());
  const before = readFileSync(new URL('./fixtures/tokens.before.css', import.meta.url), 'utf8');
  assert.deepEqual([...parseVars(css)].sort(), [...parseVars(before)].sort());
  assert.ok(css.includes(':root, [data-theme="light"] {'));
  const classes = (s) => [...s.matchAll(/^\.([\w-]+) \{([^}]*)\}/gm)].map((m) => [m[1], norm(m[2])]);
  assert.deepEqual(classes(css), classes(before));
});

test('alias renders as var()', () => {
  const css = renderTokensCss(loadTokens());
  assert.match(css, /--text-body: var\(--rg-ink\);/);
});

test('missing alias throws', () => {
  const tokens = loadTokens();
  tokens.color.tokens.push({ name: 'broken', value: '{nope}' });
  assert.throws(() => resolveValue(tokens, '{nope}'), /Unknown token alias: nope/);
  assert.throws(() => renderTokensCss(tokens), /Unknown token alias: nope/);
});

test('resolveValue follows alias chains', () => {
  const tokens = loadTokens();
  assert.equal(resolveValue(tokens, '{text-body}'), resolveValue(tokens, '{rg-ink}'));
  assert.equal(resolveValue(tokens, '{rg-ink}'), '#161616');
});

test('cssVars matches flatVars', async () => {
  const { cssVars } = await import('../dist/tokens.js');
  assert.deepEqual(Object.keys(cssVars), flatVars(loadTokens()).map((v) => '--' + v.name));
});
