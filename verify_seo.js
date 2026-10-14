const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

console.log('=== 1. HTML STRUCTURE & LANDMARKS ===');
const openHead = (html.match(/<head>/gi) || []).length;
const closeHead = (html.match(/<\/head>/gi) || []).length;
console.log('Head tags:', { openHead, closeHead });

const openMain = (html.match(/<main[^>]*>/gi) || []).length;
const closeMain = (html.match(/<\/main>/gi) || []).length;
console.log('Main tags:', { openMain, closeMain });

const openBody = (html.match(/<body[^>]*>/gi) || []).length;
const closeBody = (html.match(/<\/body>/gi) || []).length;
console.log('Body tags:', { openBody, closeBody });

const h1s = html.match(/<h1[^>]*>.*?<\/h1>/gis) || [];
console.log('H1 count:', h1s.length);
h1s.forEach(h => console.log('  H1:', h.replace(/\s+/g, ' ').trim()));

const h2s = html.match(/<h2[^>]*>.*?<\/h2>/gis) || [];
console.log('H2 count:', h2s.length);
h2s.forEach(h => console.log('  H2:', h.replace(/\s+/g, ' ').trim()));

// Duplicate IDs
const idRegex = /id="([^"]+)"/g;
let match;
const idCounts = {};
while ((match = idRegex.exec(html)) !== null) {
  const id = match[1];
  idCounts[id] = (idCounts[id] || 0) + 1;
}
const duplicateIds = Object.entries(idCounts).filter(([_, count]) => count > 1);
console.log('Duplicate IDs:', duplicateIds);

console.log('\n=== 2. IMAGE INTEGRITY ===');
const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
const missingImages = [];
const imageList = [];
while ((match = imgRegex.exec(html)) !== null) {
  const src = match[1];
  imageList.push(src);
  if (!src.startsWith('http') && !src.startsWith('data:')) {
    const fullPath = path.join(__dirname, src);
    if (!fs.existsSync(fullPath)) {
      missingImages.push(src);
    }
  }
}
console.log(`Total image tags: ${imageList.length}`);
console.log(`Missing images:`, missingImages);

console.log('\n=== 3. NAV LINKS & ANCHOR TARGETS ===');
const hrefRegex = /href="(#[a-zA-Z0-9_-]+)"/g;
const missingTargets = [];
while ((match = hrefRegex.exec(html)) !== null) {
  const targetId = match[1].slice(1);
  if (targetId && !idCounts[targetId]) {
    missingTargets.push(targetId);
  }
}
console.log('Broken internal anchor links:', [...new Set(missingTargets)]);

console.log('\n=== 4. HEAD METADATA & SEO TAGS ===');
const hasTitle = /<title>(.*?)<\/title>/i.exec(html);
console.log('Title tag:', hasTitle ? hasTitle[1] : 'MISSING');

const hasDesc = /<meta\s+name="description"\s+content="([^"]*)"/i.exec(html);
console.log('Meta description:', hasDesc ? hasDesc[1] : 'MISSING');

const hasCanonical = /<link\s+rel="canonical"\s+href="([^"]*)"/i.exec(html);
console.log('Canonical:', hasCanonical ? hasCanonical[1] : 'MISSING');

const hasRobots = /<meta\s+name="robots"\s+content="([^"]*)"/i.exec(html);
console.log('Robots meta:', hasRobots ? hasRobots[1] : 'MISSING');

const hasOgTitle = /<meta\s+property="og:title"\s+content="([^"]*)"/i.exec(html);
console.log('og:title:', hasOgTitle ? hasOgTitle[1] : 'MISSING');

const hasOgDesc = /<meta\s+property="og:description"\s+content="([^"]*)"/i.exec(html);
console.log('og:description:', hasOgDesc ? hasOgDesc[1] : 'MISSING');

const hasOgImage = /<meta\s+property="og:image"\s+content="([^"]*)"/i.exec(html);
console.log('og:image:', hasOgImage ? hasOgImage[1] : 'MISSING');

const hasJsonLd = html.includes('application/ld+json');
console.log('JSON-LD structured data present:', hasJsonLd);
if (hasJsonLd) {
  const jsonLdMatch = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i.exec(html);
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    if (parsed['@graph']) {
      console.log('JSON-LD valid @graph with ' + parsed['@graph'].length + ' entities:');
      parsed['@graph'].forEach((entity, idx) => {
        console.log(`  [Entity ${idx+1}] @type:`, entity['@type'], '| name:', entity.name, '| @id:', entity['@id']);
      });
    } else {
      console.log('JSON-LD is valid JSON! @type:', parsed['@type'], 'name:', parsed.name);
    }
  } catch (err) {
    console.error('JSON-LD parse ERROR:', err.message);
  }
}

console.log('\n=== 5. CHECK ROBOTS.TXT & SITEMAP.XML ===');
const robotsContent = fs.readFileSync(path.join(__dirname, 'robots.txt'), 'utf8');
console.log('robots.txt exists, length:', robotsContent.length);

const sitemapContent = fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf8');
console.log('sitemap.xml exists, length:', sitemapContent.length);
