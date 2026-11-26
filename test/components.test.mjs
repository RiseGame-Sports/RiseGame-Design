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
const { SectionCard } = await import(dist('components/patterns/SectionCard.js'));
const { ToolList, ToolRow } = await import(dist('components/patterns/ToolList.js'));

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

test('AppTabBar is light by default and dark with onDark', () => {
  const items = [{ value: 'h', label: 'Home', icon: 'house' }];
  const light = renderToStaticMarkup(createElement(AppTabBar, { items, value: 'h' }));
  assert.match(light, /background:var\(--surface-card\)/);
  assert.match(light, /border-top:1px solid var\(--border-default\)/);
  assert.match(light, /color:var\(--rg-ink\)/);
  const dark = renderToStaticMarkup(createElement(AppTabBar, { items, value: 'h', onDark: true }));
  assert.match(dark, /background:var\(--rg-black\)/);
  assert.match(dark, /color:var\(--rg-white\)/);
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

test('AppTabBar gives a lines item its label as the accessible name', () => {
  const html = renderToStaticMarkup(
    createElement(AppTabBar, { items: [{ value: 'p', label: 'Players and Teams', icon: 'users', lines: ['Players &', 'Teams'] }] })
  );
  assert.match(html, /<button[^>]*aria-label="Players and Teams"/);
});

test('AppTabBar buttonProps lose to type, onClick and aria-current', async () => {
  const theirs = () => {};
  const html = renderToStaticMarkup(
    createElement(AppTabBar, {
      value: 'a',
      items: [{ value: 'a', label: 'A', icon: 'house', buttonProps: { type: 'submit', onClick: theirs, 'aria-current': 'x' } }],
    })
  );
  const button = html.match(/<button[^>]*>/)[0];
  assert.match(button, /type="button"/);
  assert.doesNotMatch(button, /type="submit"/);
  assert.match(button, /aria-current="page"/);
  assert.doesNotMatch(button, /aria-current="x"/);
  // onClick is not in markup; check the handler on a rendered tree.
  const TestRenderer = (await import('react-test-renderer')).default;
  let value;
  let r;
  TestRenderer.act(() => {
    r = TestRenderer.create(
      createElement(AppTabBar, { onChange: (v) => { value = v; }, items: [{ value: 'a', label: 'A', icon: 'house', buttonProps: { onClick: theirs } }] })
    );
  });
  r.root.findByType('button').props.onClick();
  assert.equal(value, 'a');
});

test('Button and IconButton show hover colors only where hover exists', async () => {
  const TestRenderer = (await import('react-test-renderer')).default;
  const { Button } = await import(dist('components/core/Button.js'));
  const { IconButton } = await import(dist('components/core/IconButton.js'));
  const saved = globalThis.matchMedia;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  try {
    const cases = [
      ['Button', () => createElement(Button, { variant: 'primary' }, 'Go'), 'background'],
      ['IconButton', () => createElement(IconButton, { icon: 'plus', label: 'Add', variant: 'accent' }), 'background'],
    ];
    for (const [name, make, prop] of cases) {
      const bg = (matches) => {
        globalThis.matchMedia = () => ({ matches });
        let r;
        TestRenderer.act(() => { r = TestRenderer.create(make()); });
        const rest = r.root.findByType(name === 'Button' ? 'button' : 'button').props.style[prop];
        TestRenderer.act(() => { r.root.findByType('button').props.onMouseEnter(); });
        const after = r.root.findByType('button').props.style[prop];
        return [rest, after];
      };
      const [restA, afterA] = bg(false);
      assert.equal(afterA, restA, `${name} changed on mouseenter without hover`);
      const [restB, afterB] = bg(true);
      assert.notEqual(afterB, restB, `${name} did not change on mouseenter with hover`);
    }
  } finally {
    if (saved) globalThis.matchMedia = saved;
    else delete globalThis.matchMedia;
  }
});

test('SectionCard header is ink on light, white on dark, in section-label', () => {
  const light = renderToStaticMarkup(createElement(SectionCard, { label: 'Tools' }, 'x'));
  assert.match(light, /class="rg-section-label" style="color:var\(--text-heading\)"/);
  assert.match(light, /gap:var\(--section-label-gap\)/);
  assert.match(light, /box-shadow:var\(--shadow-card\)/);
  const dark = renderToStaticMarkup(createElement(SectionCard, { label: 'Tools', onDark: true }, 'x'));
  assert.match(dark, /class="rg-section-label" style="color:var\(--text-inverse\)"/);
  assert.match(dark, /box-shadow:none/);
});

test('ToolList tints every second row', () => {
  const rows = [1, 2, 3].map((n) => createElement(ToolRow, { key: n, title: 'Row ' + n }));
  const light = renderToStaticMarkup(createElement(ToolList, null, ...rows));
  assert.equal(light.split('background:var(--surface-row-alt)').length - 1, 1);
  const dark = renderToStaticMarkup(createElement(ToolList, { onDark: true }, ...rows));
  assert.equal(dark.split('background:var(--surface-dark-row-alt)').length - 1, 1);
});
