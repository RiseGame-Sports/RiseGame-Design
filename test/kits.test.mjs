import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NON_COMPONENT_EXPORTS = ['registerIcons'];

function walk(dir, filter, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, filter, out);
    else if (filter(full)) out.push(full);
  }
  return out;
}

function exportNames() {
  const indexJs = fs.readFileSync(path.join(root, 'src/index.js'), 'utf8');
  const names = [];
  for (const m of indexJs.matchAll(/^export\s*\{([^}]*)\}/gm)) {
    for (const name of m[1].split(',')) if (name.trim()) names.push(name.trim());
  }
  return names.filter((n) => !NON_COMPONENT_EXPORTS.includes(n));
}

test('every local src/href in docs/ui-kits and docs/guidelines resolves', () => {
  const pages = [
    ...walk(path.join(root, 'docs/ui-kits'), (f) => f.endsWith('.html')),
    ...walk(path.join(root, 'docs/guidelines'), (f) => f.endsWith('.html')),
  ];
  assert.ok(pages.length > 0, 'no HTML pages found');
  const re = /\b(?:src|href)="([^"]+)"/g;
  let count = 0;
  const missing = [];
  for (const page of pages) {
    const html = fs.readFileSync(page, 'utf8');
    for (const m of html.matchAll(re)) {
      const ref = m[1];
      if (/^(https?:|mailto:|#|data:)/.test(ref)) continue;
      count += 1;
      const target = path.resolve(path.dirname(page), ref.split(/[?#]/)[0]);
      if (!fs.existsSync(target)) missing.push(`${path.relative(root, page)} -> ${ref}`);
    }
  }
  assert.ok(count > 0, 'no local references found');
  assert.deepEqual(missing, []);
});

test('kit bundle exposes every component', () => {
  const bundle = path.join(root, 'docs/ui-kits/ds-bundle.js');
  assert.ok(fs.existsSync(bundle), 'docs/ui-kits/ds-bundle.js is missing: run npm run build');
  const window = {
    React: {
      createElement: () => null,
      Fragment: 'f',
      useState: (v) => [v, () => {}],
      useEffect: () => {},
      useRef: () => ({}),
      forwardRef: (f) => f,
      createContext: (v) => ({ Provider: 'p', _value: v }),
      useContext: (c) => c._value,
    },
    ReactDOM: {},
  };
  const document = { currentScript: { src: pathToFileURL(bundle).href } };
  const context = vm.createContext({ window, document, URL });
  vm.runInContext(fs.readFileSync(bundle, 'utf8'), context, { filename: bundle });

  const ns = window.RiseGameDesignSystem_66bdc7;
  assert.ok(ns, 'window.RiseGameDesignSystem_66bdc7 is not set');
  const names = exportNames();
  assert.equal(names.length, 31);
  for (const name of names) assert.equal(typeof ns[name], 'function', `${name} is not a function`);
  for (const name of NON_COMPONENT_EXPORTS) assert.equal(typeof ns[name], 'function', `${name} is not a function`);
});
