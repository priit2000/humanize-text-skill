#!/usr/bin/env node
// Dash cleanup for humanized text. Two passes:
//   Pass 1: "<space><dash><space>" -> ", "  (comma + space)
//   Pass 2: any remaining "<dash>" -> "-"   (keyboard hyphen, U+002D)
// Dashes covered: U+2010 hyphen, U+2011 non-breaking hyphen, U+2012 figure dash,
//                 U+2013 en dash, U+2014 em dash, U+2015 horizontal bar, U+2212 minus sign
// Usage: node fix-dashes.js <file> [<file> ...]   (edits files in place, prints counts)

const fs = require('fs');

const PASS1_DASHES = '‐‑‒–—―';   // typographic dashes only; U+2212 minus excluded so "5 − 3" keeps its meaning
const PASS2_DASHES = '‐‑‒–—―−';  // all seven, including U+2212 minus
const PASS1 = new RegExp(` [${PASS1_DASHES}] `, 'g');
const PASS2 = new RegExp(`[${PASS2_DASHES}]`, 'g');

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node fix-dashes.js <file> [<file> ...]');
  process.exit(1);
}

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  const n1 = (text.match(PASS1) || []).length;
  text = text.replace(PASS1, ', ');
  const n2 = (text.match(PASS2) || []).length;
  text = text.replace(PASS2, '-');
  fs.writeFileSync(file, text);
  console.log(`${file}: pass1 (spaced dash -> comma): ${n1}, pass2 (bare dash -> hyphen): ${n2}`);
  const left = (fs.readFileSync(file, 'utf8').match(PASS2) || []).length;
  if (left > 0) {
    console.error(`WARNING: ${left} dash characters remain in ${file}`);
    process.exitCode = 2;
  }
}
