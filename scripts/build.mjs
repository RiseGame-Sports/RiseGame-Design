// Builds dist/ from src/: JSX components to plain ESM, plus CSS, types and tokens.
// Run with `npm run build`.
import { transformAsync } from '@babel/core';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

await fs.rm(dist, { recursive: true, force: true });

for (const file of await walk(src)) {
  const rel = path.relative(src, file);
  let target = path.join(dist, rel);
  await fs.mkdir(path.dirname(target), { recursive: true });
  if (file.endsWith('.jsx') || (file.endsWith('.js') && !rel.startsWith('styles'))) {
    const code = (await fs.readFile(file, 'utf8')).replace(/(from\s+['"][^'"]+)\.jsx(['"])/g, '$1.js$2');
    const out = await transformAsync(code, {
      filename: file,
      babelrc: false,
      configFile: false,
      presets: [['@babel/preset-react', { runtime: 'classic' }]],
    });
    target = target.replace(/\.jsx$/, '.js');
    await fs.writeFile(target, out.code + '\n');
  } else {
    await fs.copyFile(file, target);
  }
}

// tokens as JS: the raw tokens.json plus a flat map of CSS custom property -> value
const tokens = JSON.parse(await fs.readFile(path.join(root, 'tokens', 'tokens.json'), 'utf8'));
const vars = {};
const first = tokens.color.themes[0].id;
for (const t of tokens.color.tokens) {
  const v = typeof t.value === 'string' ? t.value : t.value[first];
  vars['--' + t.name] = v.replace(/^\{(.+)\}$/, 'var(--$1)');
}
for (const [fam, val] of Object.entries(tokens)) {
  if (val && Array.isArray(val.tokens) && fam !== 'color') for (const t of val.tokens) vars['--' + t.name] = t.value;
}
for (const [k, v] of Object.entries(tokens.type.families)) vars['--font-' + k] = v;
await fs.writeFile(
  path.join(dist, 'tokens.js'),
  `// Generated from tokens/tokens.json by scripts/build.mjs\nexport const tokens = ${JSON.stringify(tokens, null, 1)};\nexport const cssVars = ${JSON.stringify(vars, null, 1)};\nexport default tokens;\n`
);
await fs.writeFile(
  path.join(dist, 'tokens.d.ts'),
  'export declare const tokens: Record<string, any>;\nexport declare const cssVars: Record<string, string>;\nexport default tokens;\n'
);
console.log('built dist/');

await import('./build-kits.mjs');
