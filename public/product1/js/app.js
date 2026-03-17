'use strict';

// ─── Config ───────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 121;
const FRAME_EXT    = 'jpg';
const FRAME_SPEED  = 2.0;   // product animation completes at ~50% scroll
const IMAGE_SCALE  = 0.88;  // portrait mug scaled to screen height
const BATCH_SIZE   = 20;

// ─── Canvas ───────────────────────────────────────────────────────────────────
const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');
let dpr      = window.devicePixelRatio || 1;

function resizeCanvas() {
  dpr = window.devicePixelRatio || 1;
  canvas.width  = window.innerWidth  * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width  = window.innerWidth  + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
  if (frames[currentFrame]) drawFrame(currentFrame);
}

function drawFrame(index) {
  const img = frames[index];
  if (!img) return;
  const cw = window.innerWidth;
  const ch = window.innerHeight;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  // Scale portrait video to fit screen height — mug stays centred with side room for text
  const scale = (ch / ih) * IMAGE_SCALE;
  const dw = iw * scale;
  const dh = ih * scale;
  const dx = (cw - dw) / 2;
  const dy = (ch - dh) / 2;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, cw, ch);
  ctx.drawImage(img, dx, dy, dw, dh);
}

// ─── Frame Loading ────────────────────────────────────────────────────────────
const frames = new Array(TOTAL_FRAMES);
let currentFrame = 0;
let drawnFrame   = -1;

function loadFrame(index) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload  = () => { frames[index] = img; resolve(); };
    img.onerror = () => resolve();
    img.src = `/product1/frames/frame_${String(index + 1).padStart(4, '0')}.${FRAME_EXT}`;
  });
}

function updateProgress(loaded, total) {
  const pct = Math.round((loaded / total) * 100);
  document.getElementById('loader-bar').style.width = pct + '%';
  document.getElementById('loader-percent').textContent = pct + '%';
}

function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
  setTimeout(() => { loader.style.display = 'none'; }, 800);
}

async function preloadFrames() {
  // Phase 1: first 10 frames → fast first paint
  await Promise.all(
    Array.from({ length: Math.min(10, TOTAL_FRAMES) }, (_, i) => loadFrame(i))
  );
  updateProgress(10, TOTAL_FRAMES);
  resizeCanvas();
  drawFrame(0);

  // Phase 2: remaining frames in batches
  for (let i = 10; i < TOTAL_FRAMES; i += BATCH_SIZE) {
    const end = Math.min(i + BATCH_SIZE, TOTAL_FRAMES);
    await Promise.all(Array.from({ length: end - i }, (_, j) => loadFrame(i + j)));
    updateProgress(end, TOTAL_FRAMES);
  }

  hideLoader();
  init();
}

// ─── rAF render loop (never draws the same frame twice) ───────────────────────
function tick() {
  if (currentFrame !== drawnFrame) {
    drawFrame(currentFrame);
    drawnFrame = currentFrame;
  }
  requestAnimationFrame(tick);
}
tick();

// ─── Init (runs after all frames are ready) ───────────────────────────────────
function init() {
  // Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Bind frames to scroll progress
  ScrollTrigger.create({
    trigger: '#scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const acc = Math.min(self.progress * FRAME_SPEED, 1);
      currentFrame = Math.min(Math.floor(acc * TOTAL_FRAMES), TOTAL_FRAMES - 1);
    },
  });

  initHeroAnimation();
  initHeroTransition();
  initDarkOverlay(0.43, 0.57);
  initMarquee();
  initCounters();
  document.querySelectorAll('.scroll-section').forEach(setupSectionAnimation);
}

// ─── Hero word entrance ───────────────────────────────────────────────────────
function initHeroAnimation() {
  const label     = document.querySelector('.hero-label');
  const words     = document.querySelectorAll('.hero-heading span');
  const tagline   = document.querySelector('.hero-tagline');
  const indicator = document.querySelector('.scroll-indicator');

  gsap.from(label,     { y: 24, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
  gsap.from(words,     { y: '110%', opacity: 0, duration: 1.1, delay: 0.5, stagger: 0.09, ease: 'power4.out' });
  gsap.from(tagline,   { y: 20, opacity: 0, duration: 0.9, delay: 1.0, ease: 'power3.out' });
  gsap.from(indicator, { opacity: 0, duration: 0.6, delay: 1.4, ease: 'power2.out' });

  // Fade hero as it scrolls away
  ScrollTrigger.create({
    trigger: '.hero-standalone',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      document.getElementById('hero').style.opacity = Math.max(0, 1 - self.progress * 1.6);
    },
  });
}

// ─── Circle-wipe canvas reveal ────────────────────────────────────────────────
function initHeroTransition() {
  const canvasWrap = document.querySelector('.canvas-wrap');
  ScrollTrigger.create({
    trigger: '#scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const radius = Math.min(1, self.progress / 0.07) * 80;
      canvasWrap.style.clipPath = `circle(${radius}% at 50% 50%)`;
    },
  });
}

// ─── Dark overlay (for stats section) ────────────────────────────────────────
function initDarkOverlay(enter, leave) {
  const overlay   = document.getElementById('dark-overlay');
  const fadeRange = 0.04;
  ScrollTrigger.create({
    trigger: '#scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      let opacity = 0;
      if (p >= enter - fadeRange && p < enter)     opacity = (p - (enter - fadeRange)) / fadeRange;
      else if (p >= enter && p <= leave)            opacity = 0.91;
      else if (p > leave && p <= leave + fadeRange) opacity = 0.91 * (1 - (p - leave) / fadeRange);
      overlay.style.opacity = opacity;
    },
  });
}

// ─── Horizontal marquee ───────────────────────────────────────────────────────
function initMarquee() {
  const wrap        = document.querySelector('.marquee-wrap');
  const text        = wrap.querySelector('.marquee-text');
  const ENTER       = 0.25;
  const LEAVE       = 0.75;
  const fadeRange   = 0.05;

  gsap.to(text, {
    xPercent: -28,
    ease: 'none',
    scrollTrigger: { trigger: '#scroll-container', start: 'top top', end: 'bottom bottom', scrub: true },
  });

  ScrollTrigger.create({
    trigger: '#scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      let opacity = 0;
      if (p >= ENTER && p < ENTER + fadeRange)           opacity = (p - ENTER) / fadeRange;
      else if (p >= ENTER + fadeRange && p <= LEAVE - fadeRange) opacity = 1;
      else if (p > LEAVE - fadeRange && p <= LEAVE)       opacity = (LEAVE - p) / fadeRange;
      wrap.style.opacity = opacity;
    },
  });
}

// ─── Section animation system ─────────────────────────────────────────────────
function setupSectionAnimation(section) {
  const type    = section.dataset.animation;
  const persist = section.dataset.persist === 'true';
  const enter   = parseFloat(section.dataset.enter) / 100;
  const leave   = parseFloat(section.dataset.leave) / 100;
  const children = section.querySelectorAll(
    '.section-label, .section-heading, .section-body, .section-price, .cta-button, .stat'
  );

  const tl = gsap.timeline({ paused: true });

  switch (type) {
    case 'fade-up':
      tl.from(children, { y: 50, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out' });
      break;
    case 'slide-left':
      tl.from(children, { x: -80, opacity: 0, stagger: 0.14, duration: 0.9, ease: 'power3.out' });
      break;
    case 'slide-right':
      tl.from(children, { x: 80, opacity: 0, stagger: 0.14, duration: 0.9, ease: 'power3.out' });
      break;
    case 'scale-up':
      tl.from(children, { scale: 0.85, opacity: 0, stagger: 0.12, duration: 1.0, ease: 'power2.out' });
      break;
    case 'rotate-in':
      tl.from(children, { y: 40, rotation: 3, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out' });
      break;
    case 'stagger-up':
      tl.from(children, { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' });
      break;
    case 'clip-reveal':
      tl.from(children, { clipPath: 'inset(100% 0 0 0)', opacity: 0, stagger: 0.15, duration: 1.2, ease: 'power4.inOut' });
      break;
  }

  ScrollTrigger.create({
    trigger: '#scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      if (p >= enter && p <= leave) {
        tl.play();
        section.style.opacity = '1';
        section.style.pointerEvents = 'auto';
      } else if (!persist) {
        tl.reverse();
        if (p < enter - 0.02 || p > leave + 0.02) {
          section.style.opacity = '0';
          section.style.pointerEvents = 'none';
        }
      }
    },
  });
}

// ─── Scrub-based counter animations ──────────────────────────────────────────
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const ENTER = 0.43, LEAVE = 0.57;

  ScrollTrigger.create({
    trigger: '#scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      let progress = 0;
      if (p >= ENTER && p <= LEAVE)    progress = (p - ENTER) / (LEAVE - ENTER);
      else if (p > LEAVE)              progress = 1;

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - Math.min(progress, 1), 3);

      statNumbers.forEach((el) => {
        const target   = parseFloat(el.dataset.value);
        const decimals = parseInt(el.dataset.decimals || '0');
        el.textContent = (target * eased).toFixed(decimals);
      });
    },
  });
}

// ─── Start ────────────────────────────────────────────────────────────────────
preloadFrames();
