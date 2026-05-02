#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat, readFile, writeFile, rename } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const ROOT = 'public/img';
const MIN_BYTES = 500 * 1024;
const MAX_WIDTH = 1920;
const JPG_QUALITY = 82;
const PNG_QUALITY = 85;

const DRY_RUN = process.argv.includes('--dry-run');
const ONLY = process.argv.find(a => a.startsWith('--only='))?.slice(7);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

function fmt(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

const results = [];
let totalBefore = 0;
let totalAfter = 0;

for await (const path of walk(ROOT)) {
  const ext = extname(path).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  if (ONLY && !path.includes(ONLY)) continue;

  const { size } = await stat(path);
  if (size < MIN_BYTES) continue;

  const buf = await readFile(path);
  const img = sharp(buf, { failOn: 'none' });
  const meta = await img.metadata();

  const pipeline = sharp(buf, { failOn: 'none' });
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  let outBuf;
  if (ext === '.png') {
    outBuf = await pipeline
      .png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
      .toBuffer();
  } else {
    outBuf = await pipeline
      .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
      .toBuffer();
  }

  const ratio = ((size - outBuf.length) / size) * 100;

  if (outBuf.length >= size) {
    results.push({ path, before: size, after: size, ratio: 0, skipped: 'no improvement' });
    continue;
  }

  if (!DRY_RUN) {
    await writeFile(path, outBuf);
  }

  results.push({ path, before: size, after: outBuf.length, ratio });
  totalBefore += size;
  totalAfter += outBuf.length;
}

results
  .sort((a, b) => (b.before - b.after) - (a.before - a.after))
  .forEach(r => {
    const tag = r.skipped ? `[skip: ${r.skipped}]` : `-${r.ratio.toFixed(0)}%`;
    console.log(`${r.path.padEnd(60)} ${fmt(r.before).padStart(8)} → ${fmt(r.after).padStart(8)}  ${tag}`);
  });

console.log('\nTotal:');
console.log(`  Before: ${fmt(totalBefore)}`);
console.log(`  After:  ${fmt(totalAfter)}`);
console.log(`  Saved:  ${fmt(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`);
console.log(DRY_RUN ? '\n[DRY RUN — no files written]' : '\n[Files updated in place]');
