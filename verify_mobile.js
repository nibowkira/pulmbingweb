const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9222;
const USER_DATA = path.join(__dirname, '.temp-chrome');
const TARGET_URL = 'file:///' + path.join(__dirname, 'index.html').replace(/\\/g, '/');

const VIEWPORTS = [
  { name: 'Small smartphone (iPhone SE 1st gen)', width: 320, height: 568 },
  { name: 'Standard smartphone (Galaxy S20)', width: 360, height: 800 },
  { name: 'Standard smartphone (iPhone X/11/12 mini)', width: 375, height: 812 },
  { name: 'Standard smartphone (iPhone 12/13/14)', width: 390, height: 844 },
  { name: 'Large smartphone (iPhone Pro Max)', width: 430, height: 932 },
  { name: 'Tablet portrait (iPad)', width: 768, height: 1024 },
  { name: 'Tablet landscape / Small laptop', width: 1024, height: 768 },
  { name: 'Standard laptop', width: 1366, height: 768 },
  { name: 'Desktop Full HD', width: 1920, height: 1080 }
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('Starting headless Chrome...');
  if (!fs.existsSync(USER_DATA)) fs.mkdirSync(USER_DATA, { recursive: true });

  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA}`,
    '--no-first-run',
    '--disable-gpu',
    '--hide-scrollbars'
  ]);

  chromeProc.on('error', err => console.error('Chrome process error:', err));

  // Wait for debug port
  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await sleep(400);
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const data = await res.json();
      wsUrl = data.webSocketDebuggerUrl;
      if (wsUrl) break;
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('Failed to connect to Chrome debugging port.');
    chromeProc.kill();
    return;
  }
  console.log('Connected to Chrome DevTools Protocol.');

  const newTabRes = await fetch(`http://127.0.0.1:${PORT}/json/new`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const tabWs = new WebSocket(tabData.webSocketDebuggerUrl);

  let idCounter = 1;
  const callbacks = new Map();
  const eventListeners = new Map();

  tabWs.onmessage = event => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const cb = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      cb(msg);
    } else if (msg.method && eventListeners.has(msg.method)) {
      eventListeners.get(msg.method)(msg.params);
    }
  };

  await new Promise(resolve => (tabWs.onopen = resolve));

  function send(method, params = {}) {
    return new Promise(resolve => {
      const id = idCounter++;
      callbacks.set(id, resolve);
      tabWs.send(JSON.stringify({ id, method, params }));
    });
  }

  async function evaluate(expression) {
    const res = await send('Runtime.evaluate', { expression, returnByValue: true });
    return res.result?.result?.value;
  }

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');

  console.log('Navigating to:', TARGET_URL);
  const loadPromise = new Promise(resolve => {
    eventListeners.set('Page.loadEventFired', resolve);
  });
  await send('Page.navigate', { url: TARGET_URL });
  await loadPromise;
  await sleep(1000);

  console.log('\n======================================================');
  console.log('      ABAY RESPONSIVENESS AUDIT RESULTS              ');
  console.log('======================================================\n');

  for (const vp of VIEWPORTS) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 768
    });
    await sleep(400);

    const val = await evaluate(`(() => {
      const docWidth = document.documentElement.scrollWidth;
      const bodyWidth = document.body.scrollWidth;
      const winWidth = window.innerWidth;
      const hasHorizontalScroll = docWidth > winWidth || bodyWidth > winWidth;
      
      const nav = document.querySelector('.nav-links');
      const navLinksVisible = nav ? window.getComputedStyle(nav).display !== 'none' : false;
      
      const toggle = document.getElementById('mobile-toggle');
      const toggleVisible = toggle ? window.getComputedStyle(toggle).display !== 'none' : false;
      
      const stickyBar = document.getElementById('mobile-sticky-bar');
      const stickyBarVisible = stickyBar ? window.getComputedStyle(stickyBar).display !== 'none' : false;
      
      const servicesGrid = document.querySelector('.services-grid');
      const servicesCols = servicesGrid ? window.getComputedStyle(servicesGrid).gridTemplateColumns.split(' ').length : 0;

      const h1 = document.querySelector('.hero-content h1');
      const h1FontSize = h1 ? window.getComputedStyle(h1).fontSize : 'N/A';

      return {
        winWidth,
        docWidth,
        bodyWidth,
        hasHorizontalScroll,
        navLinksVisible,
        toggleVisible,
        stickyBarVisible,
        servicesCols,
        h1FontSize
      };
    })()`);

    if (!val) {
      console.log(`[ERROR] Could not evaluate metrics for ${vp.width}x${vp.height}`);
      continue;
    }

    const pass = !val.hasHorizontalScroll;
    console.log(`[${pass ? 'PASS' : 'FAIL'}] ${vp.width}x${vp.height} - ${vp.name}`);
    console.log(`       Window: ${val.winWidth}px | Doc: ${val.docWidth}px | Body: ${val.bodyWidth}px | Horizontal Scroll: ${val.hasHorizontalScroll ? 'YES' : 'NONE'}`);
    console.log(`       Nav: ${val.navLinksVisible ? 'Desktop Links' : 'Hamburger Toggle'} | Sticky Bottom Bar: ${val.stickyBarVisible ? 'Visible' : 'Hidden'} | Services Cols: ${val.servicesCols} | H1 Size: ${val.h1FontSize}`);

    if ([320, 375, 430, 768, 1024, 1366].includes(vp.width)) {
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      const imgData = shot.result?.data;
      if (imgData) {
        const shotPath = path.join(__dirname, `screenshot_${vp.width}.png`);
        fs.writeFileSync(shotPath, Buffer.from(imgData, 'base64'));
        console.log(`       Screenshot saved: screenshot_${vp.width}.png`);
      }
    }
  }

  // Test Mobile Navigation Drawer on 375px
  console.log('\n--- Testing Mobile Drawer on 375px ---');
  await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 1, mobile: true });
  await sleep(300);

  // Click hamburger
  await evaluate(`document.getElementById('mobile-toggle').click();`);
  await sleep(400);

  const drawerState = await evaluate(`(() => {
    const nav = document.getElementById('mobile-nav');
    const isOpen = nav.classList.contains('open');
    const isVisible = window.getComputedStyle(nav).display === 'flex';
    const bodyOverflow = document.body.style.overflow;
    return { isOpen, isVisible, bodyOverflow };
  })()`);
  console.log(`Mobile Drawer Open: ${drawerState.isOpen} (Display: ${drawerState.isVisible ? 'flex' : 'none'}, Body Overflow: ${drawerState.bodyOverflow})`);

  const drawerShot = await send('Page.captureScreenshot', { format: 'png' });
  if (drawerShot.result?.data) {
    fs.writeFileSync(path.join(__dirname, 'screenshot_drawer_open.png'), Buffer.from(drawerShot.result.data, 'base64'));
    console.log('Screenshot saved: screenshot_drawer_open.png');
  }

  // Switch to Amharic
  console.log('\n--- Testing Amharic Translation on Mobile ---');
  await evaluate(`(() => {
    const amBtn = document.querySelector('.mobile-nav [data-lang="am"]');
    if (amBtn) amBtn.click();
  })()`);
  await sleep(400);

  // Close mobile nav
  await evaluate(`window.closeMobileNav();`);
  await sleep(400);

  const amharicEval = await evaluate(`(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    const h1Text = document.querySelector('.hero-content h1').textContent;
    const stickyCallText = document.querySelector('.sticky-call span').textContent;
    const stickyRequestText = document.querySelector('.sticky-request span').textContent;
    return { docWidth, winWidth, hasOverflow: docWidth > winWidth, h1Text, stickyCallText, stickyRequestText };
  })()`);
  console.log(`Amharic Active: H1 = "${amharicEval.h1Text}"`);
  console.log(`Sticky Bar in Amharic: Call = "${amharicEval.stickyCallText}", Request = "${amharicEval.stickyRequestText}"`);
  console.log(`Amharic Horizontal Overflow: ${amharicEval.hasOverflow ? 'YES (OVERFLOW!)' : 'NONE (PERFECT)'}`);

  const amharicShot = await send('Page.captureScreenshot', { format: 'png' });
  if (amharicShot.result?.data) {
    fs.writeFileSync(path.join(__dirname, 'screenshot_amharic_mobile.png'), Buffer.from(amharicShot.result.data, 'base64'));
    console.log('Screenshot saved: screenshot_amharic_mobile.png');
  }

  // Switch back to English
  await evaluate(`(() => {
    const enBtn = document.querySelector('.lang-switch [data-lang="en"]');
    if (enBtn) enBtn.click();
  })()`);
  await sleep(300);

  // Test Booking Form validation on mobile
  console.log('\n--- Testing Booking Form Validation on Mobile (375px) ---');
  await evaluate(`document.getElementById('booking').scrollIntoView();`);
  await sleep(400);

  const formEval = await evaluate(`(() => {
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.click();
    const errorCount = document.querySelectorAll('.form-group.error').length;
    return { errorCount };
  })()`);
  console.log(`Validation errors on empty submit: ${formEval.errorCount} (Expected: 4 required fields)`);

  const formShot = await send('Page.captureScreenshot', { format: 'png' });
  if (formShot.result?.data) {
    fs.writeFileSync(path.join(__dirname, 'screenshot_form_mobile.png'), Buffer.from(formShot.result.data, 'base64'));
    console.log('Screenshot saved: screenshot_form_mobile.png');
  }

  // Close Chrome
  tabWs.close();
  chromeProc.kill();
  console.log('\nAll audit checks completed successfully!');
}

run().catch(console.error);
