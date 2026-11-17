import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const root = new URL('../', import.meta.url);
const path = name => new URL(name, root);
const read = name => readFileSync(path(name), 'utf8');

function checkJson() {
  for (const file of ['package.json', 'locale/zh.json', 'locale/en.json']) {
    try {
      JSON.parse(read(file));
    } catch (error) {
      throw new Error(file + ': ' + error.message);
    }
    console.log(file + ': valid JSON');
  }
  assert(statSync(path('cordis.patch.yml')).isFile(), 'cordis.patch.yml must be a file');
  console.log('cordis.patch.yml: present (YAML syntax not checked)');
}

function checkCss() {
  // Accept a single quoted JS literal. The matcher excludes unescaped quotes
  // and expressions, so V8 receives only the literal and decodes its escapes.
  const pattern = /^[ \t]*const[ \t]+css[ \t]*=[ \t]*("(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*');[ \t]*$/gm;
  const declarations = [...read('client.js').matchAll(pattern)];
  assert.equal(declarations.length, 1, 'client.js must contain exactly one const css = <quoted string>; declaration');
  const embedded = Buffer.from(runInNewContext(declarations[0][1], {}, { filename: 'client.js (CSS literal)' }));
  const standalone = readFileSync(path('styles.css'));
  if (!embedded.equals(standalone)) {
    const sharedLength = Math.min(embedded.length, standalone.length);
    let offset = 0;
    while (offset < sharedLength && embedded[offset] === standalone[offset]) offset++;
    throw new Error('client.js embedded CSS differs from styles.css at byte offset ' + offset
      + ' (embedded: ' + embedded.length + ' bytes, standalone: ' + standalone.length + ' bytes)');
  }
  console.log('client.js embedded CSS matches styles.css (' + standalone.length + ' bytes)');
}

function checkPack() {
  const output = readFileSync(0, 'utf8');
  assert(output.trim(), 'npm pack --dry-run produced no JSON output');
  const pack = JSON.parse(output);
  // npm 10 returns an array, while npm 12 keys the results by package name.
  const packages = Object.values(pack);
  assert.equal(packages.length, 1, 'Expected a dry run for exactly one package');
  const [{ files, bundled }] = packages;
  assert(Array.isArray(files), 'npm pack --dry-run did not return a file list');
  const expected = [
    'LICENSE', 'README.md', 'client.js', 'cordis.patch.yml', 'icon.svg', 'index.js',
    'locale/en.json', 'locale/zh.json', 'package.json', 'styles.css',
  ];
  const actual = files.map(file => file.path).sort();
  const missing = expected.filter(file => !actual.includes(file));
  const unexpected = actual.filter(file => !expected.includes(file));
  assert(!missing.length && !unexpected.length,
    'npm pack contents differ. Missing: ' + (missing.join(', ') || 'none')
    + '. Unexpected: ' + (unexpected.join(', ') || 'none'));
  assert.deepEqual(bundled, [], 'npm pack must not bundle dependencies');
  console.log('npm pack --dry-run: ' + actual.join(', '));
}

const checks = { json: checkJson, css: checkCss, pack: checkPack };
const check = process.argv[2];
try {
  assert(Object.hasOwn(checks, check), 'Usage: node scripts/check.js <json|css|pack>');
  checks[check]();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
