import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Exports that are not components, so the README component list leaves them out.
const NON_COMPONENT_EXPORTS = ['registerIcons'];

function walk(dir, filter, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, filter, out);
    else if (filter(full)) out.push(full);
  }
  return out;
}

test('every new URL() asset in dist resolves', () => {
  const files = walk(path.join(root, 'dist'), (f) => f.endsWith('.js'));
  const re = /new URL\(\s*(['"])([^'"]+)\1\s*,\s*import\.meta\.url\s*\)/g;
  let count = 0;
  const missing = [];
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(re)) {
      count += 1;
      const target = path.resolve(path.dirname(file), m[2]);
      if (!fs.existsSync(target)) missing.push(`${path.relative(root, file)} -> ${m[2]}`);
    }
  }
  assert.ok(count >= 8, `expected 8+ new URL() assets, found ${count}`);
  assert.deepEqual(missing, []);
});

test('the barrel reaches no new URL()', () => {
  const seen = new Set();
  const stack = [path.join(root, 'dist/index.js')];
  while (stack.length) {
    const file = stack.pop();
    if (seen.has(file)) continue;
    seen.add(file);
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(/(?:^|\n)\s*(?:import|export)\s[^'"]*?from\s*['"](\.[^'"]+)['"]/g)) {
      stack.push(path.resolve(path.dirname(file), m[1]));
    }
    for (const m of src.matchAll(/(?:^|\n)\s*import\s*['"](\.[^'"]+)['"]/g)) {
      stack.push(path.resolve(path.dirname(file), m[1]));
    }
  }
  assert.ok(seen.size > 20, `expected to follow 20+ files, followed ${seen.size}`);
  const hits = [...seen].filter((f) => fs.readFileSync(f, 'utf8').includes('new URL('));
  assert.deepEqual(hits.map((f) => path.relative(root, f)), []);
});

test('logo and marketing subpaths resolve', async () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const want = { './logo': ['Logo'], './marketing': ['SiteHeader', 'Testimonial'] };
  for (const [key, names] of Object.entries(want)) {
    const entry = pkg.exports[key];
    assert.ok(entry, `exports[${key}] is missing`);
    assert.ok(entry.types && entry.import, `exports[${key}] needs types and import`);
    const file = path.resolve(root, entry.import);
    assert.ok(fs.existsSync(file), `${entry.import} does not exist`);
    assert.ok(fs.existsSync(path.resolve(root, entry.types)), `${entry.types} does not exist`);
    const mod = await import(pathToFileURL(file).href);
    for (const n of names) assert.equal(typeof mod[n], 'function', `${key} does not export ${n}`);
  }
});

test('index exports every component', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  const row = readme.split('\n').find((l) => l.startsWith('| `@risegame/design-system` |'));
  assert.ok(row, 'README import table row not found');
  const list = row.match(/next two rows\): (.*?)\. Types included/);
  assert.ok(list, 'README component list not found');
  const expected = list[1].split(',').map((s) => s.trim()).sort();
  assert.equal(expected.length, 28);

  const indexJs = fs.readFileSync(path.join(root, 'dist/index.js'), 'utf8');
  const exported = [];
  for (const m of indexJs.matchAll(/^export\s*\{([^}]*)\}/gm)) {
    for (const name of m[1].split(',')) if (name.trim()) exported.push(name.trim());
  }
  assert.deepEqual([...exported].sort(), [...expected, ...NON_COMPONENT_EXPORTS].sort());

  const dts = fs.readFileSync(path.join(root, 'dist/index.d.ts'), 'utf8');
  for (const name of [...expected, ...NON_COMPONENT_EXPORTS]) {
    const re = new RegExp(`export declare (function|const) ${name}\\b`);
    assert.match(dts, re, `${name} has no declare in dist/index.d.ts`);
  }
});

test('no British spellings in docs', () => {
  const docs = walk(path.join(root, 'docs'), (f) => {
    const rel = path.relative(path.join(root, 'docs'), f);
    return f.endsWith('.md') && !rel.startsWith('sources' + path.sep) && !rel.startsWith('superpowers' + path.sep);
  });
  const files = [path.join(root, 'README.md'), ...docs];
  const re = /(colour|organis|licence|programme|behaviour|centre|centred|grey)/i;
  const hits = [];
  for (const file of files) {
    fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      if (re.test(line)) hits.push(`${path.relative(root, file)}:${i + 1}: ${line.trim()}`);
    });
  }
  assert.deepEqual(hits, []);
});

test('no em or en dashes in docs', () => {
  const docs = walk(path.join(root, 'docs'), (f) => {
    const rel = path.relative(path.join(root, 'docs'), f);
    return /\.(md|html|jsx|js)$/.test(f) && !rel.startsWith('sources' + path.sep) && !rel.startsWith('superpowers' + path.sep) && rel !== path.join('ui-kits', 'ds-bundle.js');
  });
  const files = ['README.md', 'SKILL.md', 'CHANGELOG.md'].map((f) => path.join(root, f)).concat(docs);
  const re = /[\u2013\u2014]/;
  const hits = [];
  for (const file of files) {
    fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      if (re.test(line)) hits.push(`${path.relative(root, file)}:${i + 1}`);
    });
  }
  assert.deepEqual(hits, []);
});
