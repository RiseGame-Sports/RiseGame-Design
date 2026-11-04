// Reads tokens/tokens.json and turns it into CSS custom properties.
// Shared by the CSS, Tailwind and Flutter outputs.
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function loadTokens(file = path.join(root, 'tokens', 'tokens.json')) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

const ALIAS = /^\{(.+)\}$/;

function findToken(tokens, name) {
  for (const [fam, val] of Object.entries(tokens)) {
    if (val && Array.isArray(val.tokens)) {
      const t = val.tokens.find((x) => x.name === name);
      if (t) return fam === 'color' ? colorValue(tokens, t) : t.value;
    }
  }
  return undefined;
}

function colorValue(tokens, t) {
  return typeof t.value === 'string' ? t.value : t.value[tokens.color.themes[0].id];
}

// Returns the literal value, following {alias} chains.
export function resolveValue(tokens, value, seen = new Set()) {
  const m = ALIAS.exec(value);
  if (!m) return value;
  const name = m[1];
  if (seen.has(name)) throw new Error(`Circular token alias: ${name}`);
  const target = findToken(tokens, name);
  if (target === undefined) throw new Error(`Unknown token alias: ${name}`);
  return resolveValue(tokens, target, new Set([...seen, name]));
}

// Every CSS custom property in source order. `ref` is set when the token is an alias.
export function flatVars(tokens) {
  const out = [];
  const push = (name, raw) => {
    const value = resolveValue(tokens, raw);
    const m = ALIAS.exec(raw);
    out.push(m ? { name, value, ref: m[1] } : { name, value });
  };
  for (const t of tokens.color.tokens) push(t.name, colorValue(tokens, t));
  for (const [fam, val] of Object.entries(tokens)) {
    if (fam !== 'color' && val && Array.isArray(val.tokens)) for (const t of val.tokens) push(t.name, t.value);
  }
  for (const [k, v] of Object.entries(tokens.type.families)) push('font-' + k, v);
  return out;
}

const decl = (v) => `  --${v.name}: ${v.ref ? `var(--${v.ref})` : v.value};`;

export function renderTokensCss(tokens) {
  const vars = flatVars(tokens);
  const themed = new Set([...tokens.color.tokens, ...(tokens.shadow?.tokens ?? [])].map((t) => t.name));
  const lines = [
    '/* Generated from tokens/tokens.json. Do not edit. */',
    ':root, [data-theme="light"] {',
    ...vars.filter((v) => themed.has(v.name)).map(decl),
    '}',
    ':root {',
    ...vars.filter((v) => !themed.has(v.name)).map(decl),
    '}',
  ];
  for (const g of tokens.type.groups) {
    for (const s of g.styles) {
      const props = [
        `font-family: var(--font-${g.family})`,
        `font-size: ${s.fontSize}`,
        `line-height: ${s.lineHeight}`,
        `font-weight: ${s.fontWeight}`,
      ];
      if (s.letterSpacing) props.push(`letter-spacing: ${s.letterSpacing}`);
      lines.push(`.${s.name} { ${props.join('; ')}; }`);
    }
  }
  return lines.join('\n') + '\n';
}
