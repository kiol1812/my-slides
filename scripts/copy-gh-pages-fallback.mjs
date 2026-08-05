import { copyFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexHtml = path.join(distDir, 'index.html');
const fallbackHtml = path.join(distDir, '404.html');

try {
  await access(indexHtml);
} catch {
  console.error('[postbuild] dist/index.html not found. Run `yarn build` first.');
  process.exit(1);
}

await mkdir(distDir, { recursive: true });
await copyFile(indexHtml, fallbackHtml);
console.log('[postbuild] Copied dist/index.html -> dist/404.html');
