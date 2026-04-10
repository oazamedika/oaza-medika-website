/* ═══════════════════════════════════════════════════════════
   HERO.JS  —  Оаза Медика
   Edit this file to change hero slides, images, text and timing.
   Located at: /hero/hero.js
════════════════════════════════════════════════════════════ */

/* ── CONFIGURATION ──────────────────────────────────────────
   SLIDE_DURATION : ms each hero panel stays on screen
   BG_DURATION    : ms each background photo stays before cycling
─────────────────────────────────────────────────────────── */
var HERO_CONFIG = {
  SLIDE_DURATION: 7020,
  BG_DURATION:    2340
};

/* ── CTA BUTTON ICON TYPES ──────────────────────────────────
   Set icon: on any cta1 / cta2 / cta3 to one of:
     'person'  — choose / register a doctor
     'phone'   — call / contact
     'house'   — external home / building link
     'email'   — email
     'submit'  — send / submit
     'none'    — no icon, plain text only
   cta2 and cta3 are optional — omit them and no button renders.
─────────────────────────────────────────────────────────── */

/* ── SLIDES DATA ────────────────────────────────────────────
   Each slide has:
     navLabel  — short label shown in the side nav tab
     eyebrow   — small uppercase line above the headline
     headline  — main h1 (use \n for <br/>, <em>…</em> for teal)
     desc      — paragraph text below headline
     images    — array of image paths (1–3 recommended)
     cta1      — primary button   { text, href, icon }
     cta2      — secondary button { text, href, icon }  (optional)
     cta3      — tertiary button  { text, href, icon }  (optional)
─────────────────────────────────────────────────────────── */
var HERO_SLIDES = [

  /* ── SLIDE 1 — Наскоро отвораме ─────────────────────── */
  {
    navLabel : 'Наскоро',
    eyebrow  : 'Оаза Медика · Општина Илинден',
    headline : 'Наскоро ги отвораме\n<em>нашите врати за вас!</em>',
    desc     : 'Вашето здравје заслужува стручно внимание. Наскоро во ПЗУ Оаза Медика, во општина Илинден, ќе можете да ги извршите вашите прегледи кај матичен лекар — со посветеност која ја заслужувате.',
    images   : [
      'hero/hero1/1.jpg',
      'hero/hero1/2.jpg',
      'hero/hero1/3.jpg'
    ],
    cta1: { text: 'Избери матичен лекар', href: 'CTA-module/cta.html', icon: 'person' },
    cta2: { text: 'Контактирај не',       href: '#contact',            icon: 'phone'  }
  },

  /* ── SLIDE 2 — Вашата оаза ───────────────────────────── */
  {
    navLabel : 'За нас',
    eyebrow  : 'Општа медицина · Матичен Лекар',
    headline : 'Вашето здравје е\n<em>вашата оаза</em>',
    desc     : 'Топла, стручна и достапна лекарска грижа за секој пациент, во склоп на Домот Оаза во општина Илинден.',
    images   : [
      'hero/hero2/1.jpg',
      'hero/hero2/2.jpg',
      'hero/hero2/3.jpg'
    ],
    cta1: { text: 'Избери матичен лекар', href: 'CTA-module/cta.html',      icon: 'person' },
    cta3: { text: 'Повеќе за домот',      href: 'https://www.dom-oaza.mk/', icon: 'house'  target: '_blank',  rel: 'noopener noreferrer'}
  },

  /* ── SLIDE 3 — ФЗОМ + приватни ──────────────────────── */
  {
    navLabel : 'Фонд',
    eyebrow  : 'ФЗОМ · прегледи',
    headline : 'Здравствена заштита\n<em>достапна за секого</em>',
    desc     : 'Склучен договор со ФЗОМ - без доплата за осигурените. Доколку не сакате промена на матичен лекар, нудиме и приватни прегледи по достапни цени, за сите граѓани.',
    images   : [
      'hero/hero3/1.jpg',
      'hero/hero3/2.jpg',
      'hero/hero3/3.jpg'
    ],
    cta1: { text: 'Избери матичен лекар', href: 'CTA-module/cta.html', icon: 'person' },
    cta2: { text: 'За Нас',              href: '#about',               icon: 'none'   }
  }

];

/* ── CTA ICON LIBRARY ───────────────────────────────────────
   Six clean inline SVG icons for hero buttons.
─────────────────────────────────────────────────────────── */
var HERO_ICONS = {
  person: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  phone:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
  house:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5L12 3l9 8.5"/><path d="M5 10V20a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V10"/></svg>',
  email:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>',
  submit: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  none:   ''
};

/* ── HERO CSS ────────────────────────────────────────────────
   Injected into <head> at runtime so all hero styles live here.
─────────────────────────────────────────────────────────── */
(function injectHeroStyles() {
  var css = '\
    .hero {\
      position:relative;\
      height:92vh;\
      min-height:560px;\
      overflow:hidden;\
      display:flex;\
      align-items:flex-end;\
    }\
    .hero-bg { position:absolute; inset:0; z-index:0; }\
    .hero-bg-slide { position:absolute; inset:0; opacity:0; transition:opacity 1.2s ease; }\
    .hero-bg-slide.active { opacity:1; }\
    .hero-bg-slide img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity 1s ease; }\
    .hero-bg-slide img.active { opacity:1; }\
    .hero-overlay {\
      position:absolute; inset:0; z-index:1;\
      background:linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.12) 100%);\
    }\
    .hero-overlay::after {\
      content:""; position:absolute; bottom:0; left:0; right:0; height:45%;\
      background:linear-gradient(to top, rgba(0,0,0,0.45), transparent);\
    }\
    .hero-body { position:relative; z-index:2; width:100%; padding:0 6% 5rem; display:flex; flex-direction:column; }\
    .hero-slide-content { display:none; flex-direction:column; gap:1.2rem; max-width:640px; animation:heroFadeUp .6s ease both; }\
    .hero-slide-content.active { display:flex; }\
    @keyframes heroFadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }\
    .hero-eyebrow { display:inline-flex; align-items:center; gap:8px; font-size:.75rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.75); }\
    .hero-eyebrow::before { content:""; display:block; width:28px; height:2px; background:#2a7a7a; border-radius:2px; }\
    .hero h1 { font-size:clamp(2.2rem,4.2vw,3.6rem); color:#fff; line-height:1.13; font-weight:700; }\
    .hero h1 em { font-style:normal; color:#7dd8c8; }\
    .hero-desc { font-size:clamp(.95rem,1.4vw,1.1rem); color:rgba(255,255,255,.82); font-weight:300; max-width:520px; line-height:1.75; }\
    .hero-actions { display:flex; gap:.75rem; flex-wrap:wrap; margin-top:.4rem; align-items:center; }\
    .btn-outline-white { background:transparent; color:#fff; border:2px solid rgba(255,255,255,.6); }\
    .btn-outline-white:hover { background:rgba(255,255,255,.12); border-color:#fff; transform:translateY(-2px); }\
    .hero-nav {\
      position:absolute; bottom:2rem; right:6%; z-index:3;\
      display:flex; flex-direction:column; gap:.6rem; align-items:flex-end;\
    }\
    .hero-nav-item { display:flex; align-items:center; gap:10px; cursor:pointer; padding:.4rem .7rem; border-radius:50px; background:transparent; border:none; transition:background .25s; }\
    .hero-nav-item:hover { background:rgba(255,255,255,.1); }\
    .hero-nav-item.active { background:rgba(255,255,255,.15); }\
    .hero-nav-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.4); transition:all .3s; flex-shrink:0; }\
    .hero-nav-item.active .hero-nav-dot { background:#fff; width:10px; height:10px; }\
    .hero-nav-label { font-size:.72rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:rgba(255,255,255,.55); transition:color .3s; }\
    .hero-nav-item.active .hero-nav-label { color:rgba(255,255,255,.9); }\
    .hero-progress { position:absolute; bottom:0; left:0; right:0; z-index:3; height:3px; background:rgba(255,255,255,.15); }\
    .hero-progress-bar { height:100%; background:#2a7a7a; width:0%; }\
    @media(max-width:768px){\
      .hero { height:88vh; min-height:500px; }\
      .hero-overlay { background:linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.1) 100%); }\
      .hero-body { padding:0 5% 4.5rem; }\
      .hero h1 { font-size:clamp(1.8rem,7vw,2.6rem); }\
      .hero-desc { font-size:.9rem; }\
      .hero-actions { flex-direction:column; align-items:flex-start; }\
      .hero-nav { bottom:auto; top:1.5rem; right:1rem; flex-direction:row; gap:.4rem; align-items:center; }\
      .hero-nav-label { display:none; }\
      .hero-nav-item { padding:.3rem .4rem; }\
    }\
    @media(max-width:480px){\
      .hero-actions .btn { font-size:.82rem; padding:.65rem 1.2rem; }\
    }\
  ';
  var el = document.createElement('style');
  el.id = 'hero-styles';
  el.textContent = css;
  document.head.appendChild(el);
})();

/* ── HERO HTML BUILDER ───────────────────────────────────────
   Reads HERO_SLIDES and builds + injects the full hero section.
   cta1 is primary (teal filled). cta2/cta3 are secondary
   (outline white). Missing cta keys are simply skipped.
─────────────────────────────────────────────────────────── */
function buildHeroHTML() {

  function makeBtn(cta, isPrimary) {
    if (!cta || !cta.text || !cta.href) return '';
    var iconKey = cta.icon || 'none';
    var iconHtml = (HERO_ICONS[iconKey]) ? HERO_ICONS[iconKey] + ' ' : '';
    var cls = isPrimary ? 'btn btn-primary' : 'btn btn-outline-white';
    return '<a href="' + cta.href + '" class="' + cls + '">' + iconHtml + cta.text + '</a>';
  }

  var bgHtml = '';
  var contentHtml = '';
  var navHtml = '';

  for (var i = 0; i < HERO_SLIDES.length; i++) {
    var s = HERO_SLIDES[i];
    var isFirst = i === 0;

    // Background images
    var imgHtml = '';
    for (var j = 0; j < s.images.length; j++) {
      imgHtml += '<img src="' + s.images[j] + '" alt=""' + (j === 0 ? ' class="active"' : '') + '/>';
    }
    bgHtml += '<div class="hero-bg-slide' + (isFirst ? ' active' : '') + '" data-slide="' + i + '">' + imgHtml + '</div>';

    // Headline — convert \n to <br/>
    var headlineHtml = s.headline.replace(/\n/g, '<br/>');

    // Buttons — render only what the slide defines
    var btns = makeBtn(s.cta1, true) + makeBtn(s.cta2, false) + makeBtn(s.cta3, false);

    contentHtml +=
      '<div class="hero-slide-content' + (isFirst ? ' active' : '') + '" data-slide="' + i + '">' +
        '<span class="hero-eyebrow">' + s.eyebrow + '</span>' +
        '<h1>' + headlineHtml + '</h1>' +
        '<p class="hero-desc">' + s.desc + '</p>' +
        '<div class="hero-actions">' + btns + '</div>' +
      '</div>';

    navHtml +=
      '<button class="hero-nav-item' + (isFirst ? ' active' : '') + '" data-slide="' + i + '" aria-label="Слајд ' + (i + 1) + '">' +
        '<span class="hero-nav-dot"></span>' +
        '<span class="hero-nav-label">' + s.navLabel + '</span>' +
      '</button>';
  }

  var heroHTML =
    '<section class="hero" id="home">' +
      '<div class="hero-bg" id="heroBg">' + bgHtml + '</div>' +
      '<div class="hero-overlay"></div>' +
      '<div class="hero-body">' + contentHtml + '</div>' +
      '<div class="hero-nav" id="heroNav">' + navHtml + '</div>' +
      '<div class="hero-progress"><div class="hero-progress-bar" id="heroProgressBar"></div></div>' +
    '</section>';

  var mount = document.getElementById('hero-mount');
  if (mount) {
    mount.outerHTML = heroHTML;
  }
}

/* ── HERO INIT ───────────────────────────────────────────────
   Called after DOM is ready and buildHeroHTML() has run.
─────────────────────────────────────────────────────────── */
function initHero() {
  buildHeroHTML();

  var SLIDE_DURATION = HERO_CONFIG.SLIDE_DURATION;
  var BG_DURATION    = HERO_CONFIG.BG_DURATION;
  var totalSlides    = HERO_SLIDES.length;
  var curSlide       = 0;

  var bgSlides    = document.querySelectorAll('.hero-bg-slide');
  var contents    = document.querySelectorAll('.hero-slide-content');
  var navItems    = document.querySelectorAll('.hero-nav-item');
  var progressBar = document.getElementById('heroProgressBar');
  var bgTimers    = [];

  function startBgCycler(idx) {
    if (bgTimers[idx]) clearInterval(bgTimers[idx]);
    var imgs = bgSlides[idx].querySelectorAll('img');
    if (imgs.length <= 1) return;
    var cur = 0;
    imgs.forEach(function(img, k) { img.classList.toggle('active', k === 0); });
    bgTimers[idx] = setInterval(function() {
      imgs[cur].classList.remove('active');
      cur = (cur + 1) % imgs.length;
      imgs[cur].classList.add('active');
    }, BG_DURATION);
  }

  function goToSlide(idx) {
    bgSlides[curSlide].classList.remove('active');
    contents[curSlide].classList.remove('active');
    navItems[curSlide].classList.remove('active');
    if (bgTimers[curSlide]) { clearInterval(bgTimers[curSlide]); bgTimers[curSlide] = null; }

    curSlide = (idx + totalSlides) % totalSlides;

    bgSlides[curSlide].classList.add('active');
    contents[curSlide].classList.add('active');
    navItems[curSlide].classList.add('active');
    startBgCycler(curSlide);

    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        progressBar.style.transition = 'width ' + SLIDE_DURATION + 'ms linear';
        progressBar.style.width = '100%';
      });
    });
  }

  navItems.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-slide'));
      clearInterval(slideTimer);
      goToSlide(idx);
      slideTimer = setInterval(function() { goToSlide(curSlide + 1); }, SLIDE_DURATION);
    });
  });

  var slideTimer = setInterval(function() { goToSlide(curSlide + 1); }, SLIDE_DURATION);
  goToSlide(0);
}
