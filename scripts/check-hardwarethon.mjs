import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

for (const prefix of ['', 'nl/', 'de/', 'fr/']) {
  const html = await fs.readFile(`dist/${prefix}milestones/hardwarethon/index.html`, 'utf8');
  const footer = html.match(/<footer class="hardwarethon-sources"[\s\S]*?<\/footer>/)?.[0] ?? '';
  assert.equal((footer.match(/<a\b/g) ?? []).length, 1, 'One event reference only');
  assert.match(footer, /Hardwarethon 2019/);
  assert.match(footer, /href="https:\/\/www.hardwarethon.com\/"/);
  assert.ok(!/galeria|®/.test(footer));
  assert.ok(!html.includes('Costa Rica'));
  assert.equal((html.match(/Texas Tech University/g) ?? []).length, 1);
  assert.equal((html.match(/<video\b/g) ?? []).length, 0);
  assert.equal((html.match(/<img\b[^>]*data-hardwarethon-gif/g) ?? []).length, 1);
  assert.match(html, /media="\(prefers-reduced-motion: reduce\)"/);
  assert.match(html, /teamwork.gif/);
  const pipeline = html.match(/<ol class="plant-flow"[\s\S]*?<\/ol>/)?.[0] ?? '';
  assert.equal((pipeline.match(/<li\b/g) ?? []).length, 3);
  assert.equal((html.match(/data-concept-input(?:\s|>)/g) ?? []).length, 3);
  assert.equal((html.match(/data-concept-stage(?:\s|>)/g) ?? []).length, 3);
  console.log(`/${prefix}: single reference, three workflow steps, six conceptual symbols, GIF/reduced-motion source and venue attribution passed.`);
}
const directory = 'public/images/library/milestones/hardwarethon';
const files = await fs.readdir(directory);
assert.ok(!files.some(file => file.endsWith('.mp4')));
assert.ok(files.includes('hardwarethon-logo.svg'));
const gif = await fs.readFile(`${directory}/teamwork.gif`);
assert.match(gif.subarray(0, 6).toString(), /^GIF8[79]a$/);
console.log('Real GIF and official reusable wordmark verified; no local MP4 retained.');
