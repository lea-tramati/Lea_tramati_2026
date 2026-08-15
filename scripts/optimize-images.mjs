import sharp from 'sharp';
import { readdir, rename, stat } from 'fs/promises';
import { join } from 'path';

const imgDir = './public/img';
const MAX_WIDTH = 2400;
const QUALITY = 90;
// Kept at full source quality: The Stranger cover + The Passers-by hero background.
const EXCLUDE = new Set(['050.jpg', '051.jpg']);

const files = await readdir(imgDir);
let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
  if (EXCLUDE.has(file)) continue;

  const inputPath = join(imgDir, file);
  const tmpPath = inputPath + '.tmp';

  const { size: before } = await stat(inputPath);
  totalBefore += before;

  const isPng = /\.png$/i.test(file);
  const pipeline = sharp(inputPath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

  if (isPng) {
    await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toFile(tmpPath);
  } else {
    await pipeline.jpeg({ quality: QUALITY, progressive: true, mozjpeg: true }).toFile(tmpPath);
  }

  const { size: after } = await stat(tmpPath);
  totalAfter += after;

  await rename(tmpPath, inputPath);

  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(`${file.padEnd(50)} ${(before/1024).toFixed(0).padStart(6)} KB → ${(after/1024).toFixed(0).padStart(5)} KB  (-${saved}%)`);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)} MB → ${(totalAfter/1024/1024).toFixed(1)} MB  (-${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(0)}%)`);
