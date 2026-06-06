import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'images', 'projects');

const shots = [
  { file: 'mirch.jpg', url: 'https://mirch.ai-workflows.cloud/' },
  { file: 'mirch-app.jpg', url: 'https://mirchapp.ai-workflows.cloud/' },
  { file: 'mirch-playstore.jpg', url: 'https://play.google.com/store/apps/details?id=com.mirchapp' },
  { file: 'formfiller.jpg', url: 'https://formfiller.ai-workflows.cloud/' },
  { file: 'bhuvan.jpg', url: 'https://bhuvanbhaskardham.ai-workflows.cloud/' },
  { file: 'mast-magan.jpg', url: 'https://mast-magan.onrender.com/' },
  { file: 'galaxy-decor.jpg', url: 'https://galaxy-decor.onrender.com/' },
  { file: 'radiant-classes.jpg', url: 'https://radiant-classes.onrender.com/' },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

for (const shot of shots) {
  const target = path.join(outDir, shot.file);
  try {
    console.log(`Capturing ${shot.file} ...`);
    await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 90000 });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: target,
      type: 'jpeg',
      quality: 82,
      fullPage: false,
    });
    console.log(`  saved ${target}`);
  } catch (error) {
    console.error(`  failed ${shot.file}: ${error.message}`);
  }
}

await browser.close();
console.log('DONE');
