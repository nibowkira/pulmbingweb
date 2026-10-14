/**
 * ABAY Plumbing — Image Optimization Script
 * Uses sharp with buffer-based I/O to avoid path issues
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.resolve(__dirname, 'images');

const IMAGE_CONFIG = {
  'hero-plumber.jpg': { width: 1200, quality: 75 },
  'service-leak.jpg': { width: 800, quality: 72 },
  'service-pipes.jpg': { width: 800, quality: 72 },
  'service-tap.jpg': { width: 800, quality: 72 },
  'service-drain.jpg': { width: 800, quality: 72 },
  'service-toilet.jpg': { width: 800, quality: 72 },
  'service-heater.jpg': { width: 800, quality: 72 },
  'project-site-pipes.jpg': { width: 900, quality: 72 },
  'project-ceiling-drain.jpg': { width: 900, quality: 72 },
  'project-wall-ppr.jpg': { width: 900, quality: 72 },
  'plumbing-tools.jpg': { width: 800, quality: 72 },
  'supplies-overview.jpg': { width: 900, quality: 72 },
  'addis-skyline.jpg': { width: 1400, quality: 70 },
};

async function optimizeImages() {
  console.log('Starting image optimization...\n');
  
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const [filename, config] of Object.entries(IMAGE_CONFIG)) {
    const inputPath = path.join(IMAGES_DIR, filename);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`  SKIP (not found): ${filename}`);
      continue;
    }

    const inputBuffer = fs.readFileSync(inputPath);
    const originalSize = inputBuffer.length;
    totalOriginal += originalSize;

    try {
      const metadata = await sharp(inputBuffer).metadata();
      const resizeWidth = metadata.width > config.width ? config.width : undefined;

      const outputBuffer = await sharp(inputBuffer)
        .resize(resizeWidth, null, { withoutEnlargement: true })
        .jpeg({ quality: config.quality, progressive: true })
        .toBuffer();

      const optimizedSize = outputBuffer.length;

      if (optimizedSize < originalSize) {
        fs.writeFileSync(inputPath, outputBuffer);
        totalOptimized += optimizedSize;
        const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
        console.log(`  OK ${filename}: ${(originalSize / 1024).toFixed(0)}KB -> ${(optimizedSize / 1024).toFixed(0)}KB (-${savings}%)`);
      } else {
        totalOptimized += originalSize;
        console.log(`  KEEP ${filename}: already optimal (${(originalSize / 1024).toFixed(0)}KB)`);
      }
    } catch (err) {
      totalOptimized += originalSize;
      console.log(`  ERR ${filename}: ${err.message}`);
    }
  }

  console.log(`\nTotal original:  ${(totalOriginal / 1024).toFixed(0)}KB`);
  console.log(`Total optimized: ${(totalOptimized / 1024).toFixed(0)}KB`);
  if (totalOriginal > 0) {
    console.log(`Total savings:   ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  }
}

optimizeImages().catch(console.error);
