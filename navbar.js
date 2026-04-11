/* ═══════════════════════════════════════════════════════
   OAZA MEDIKA — SHARED NAVBAR + TICKER
   Include this script in the <head> or before </body>.
   The script injects:
     1. Ticker strip (novosti headlines)
     2. Sticky nav with logo, links, tools dropdown, hamburger
   Usage:
     <script src="navbar.js"></script>          (root pages)
     <script src="../navbar.js"></script>       (sub-folder pages)
   The script auto-detects path depth via data-root attribute:
     <script src="navbar.js" data-root=""></script>
     <script src="../navbar.js" data-root="../"></script>
═══════════════════════════════════════════════════════ */

(function () {
  /* ── Resolve root path ────────────────────────────── */
  var scriptEl = document.currentScript ||
    (function () {
      var scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();
  var ROOT = (scriptEl && scriptEl.getAttribute('data-root') !== null)
    ? scriptEl.getAttribute('data-root')
    : '';

  /* ── Inject CSS ───────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    ':root{--teal:#2a7a7a;--teal-dark:#1d5e5e;--teal-light:#e4f2f2;',
    '--green:#1a5c2a;--green-light:#e8f5ec;--cream:#f9faf8;--white:#ffffff;',
    '--text:#1c2a22;--text-mid:#3d5046;--text-light:#6b8070;}',

    /* Ticker */
    '.om-ticker-wrap{background:var(--green);color:var(--white);height:36px;',
    'overflow:hidden;display:flex;align-items:center;}',
    '.om-ticker-label{background:var(--teal-dark);color:var(--white);padding:0 1rem;',
    'font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;',
    'height:100%;display:flex;align-items:center;white-space:nowrap;flex-shrink:0;}',
    '.om-ticker-track-wrap{flex:1;overflow:hidden;}',
    '.om-ticker-track{display:flex;white-space:nowrap;will-change:transform;}',
    '.om-ticker-item{display:inline-flex;align-items:center;gap:10px;padding:0 3rem;',
    'font-size:.8rem;font-weight:600;cursor:pointer;flex-shrink:0;transition:color .2s;',
    'font-family:Lato,sans-serif;}',
    '.om-ticker-item:hover{color:#b2f0b2;}',
    '.om-ticker-sep{color:rgba(255,255,255,.3);display:inline-flex;align-items:center;flex-shrink:0;}',

    /* Nav wrapper */
    '.om-nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,0.97);',
    'backdrop-filter:blur(10px);border-bottom:1px solid rgba(42,122,122,.12);',
    'padding:0 5%;display:flex;align-items:center;justify-content:space-between;',
    'height:72px;transition:box-shadow .3s;}',
    '.om-nav.scrolled{box-shadow:0 4px 24px rgba(26,92,42,.12);}',

    /* Logo */
    '.om-nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;}',
    '.om-nav-logo-img{height:64px;width:auto;display:block;}',
    '.om-nav-logo-fallback{display:flex;align-items:center;gap:12px;}',
    '.om-nav-logo-symbol{width:44px;height:44px;flex-shrink:0;}',
    '.om-nav-logo-text{display:flex;flex-direction:column;line-height:1.1;}',
    '.om-nav-logo-text .om-brand{font-family:"Playfair Display",serif;font-size:1.18rem;',
    'font-weight:700;color:var(--teal);}',
    '.om-nav-logo-text .om-sub{font-size:.72rem;color:var(--text-light);letter-spacing:.08em;text-transform:uppercase;}',

    /* Links */
    '.om-nav-links{display:flex;gap:1.6rem;list-style:none;align-items:center;}',
    '.om-nav-links a{text-decoration:none;color:var(--text-mid);font-size:.88rem;',
    'font-weight:600;letter-spacing:.04em;text-transform:uppercase;transition:color .2s;',
    'font-family:Lato,sans-serif;}',
    '.om-nav-links a:hover{color:var(--teal);}',
    '.om-nav-links a.active{color:var(--teal);}',
    '.om-nav-cta{background:var(--teal) !important;color:var(--white) !important;',
    'padding:.45rem 1.1rem !important;border-radius:50px;transition:background .2s !important;}',
    '.om-nav-cta:hover{background:var(--teal-dark) !important;}',

    /* Tools dropdown */
    '.om-tools-wrap{position:relative;}',
    '.om-tools-btn{background:none;border:none;cursor:pointer;display:flex;align-items:center;',
    'gap:5px;color:var(--text-mid);font-size:.88rem;font-weight:600;letter-spacing:.04em;',
    'text-transform:uppercase;font-family:Lato,sans-serif;transition:color .2s;padding:0;}',
    '.om-tools-btn:hover,.om-tools-wrap:hover .om-tools-btn{color:var(--teal);}',
    '.om-tools-arrow{display:inline-block;transition:transform .22s;font-style:normal;',
    'font-size:.7rem;}',
    '.om-tools-wrap:hover .om-tools-arrow{transform:rotate(180deg);}',
    '.om-dropdown{position:absolute;top:calc(100% + 12px);left:50%;transform:translateX(-50%);',
    'background:var(--white);border:1px solid rgba(42,122,122,.13);border-radius:16px;',
    'box-shadow:0 12px 40px rgba(26,92,42,.14);min-width:230px;padding:.6rem .5rem;',
    'opacity:0;visibility:hidden;pointer-events:none;',
    'transition:opacity .2s,transform .2s,visibility .2s;transform:translateX(-50%) translateY(6px);}',
    '.om-tools-wrap:hover .om-dropdown{opacity:1;visibility:visible;pointer-events:auto;',
    'transform:translateX(-50%) translateY(0);}',
    '.om-dropdown-header{font-size:.65rem;font-weight:700;letter-spacing:.1em;',
    'text-transform:uppercase;color:var(--text-light);padding:.3rem .7rem .5rem;',
    'font-family:Lato,sans-serif;}',
    '.om-dropdown a{display:flex;align-items:center;gap:9px;padding:.55rem .75rem;',
    'border-radius:10px;text-decoration:none;color:var(--text-mid);font-size:.85rem;',
    'font-weight:600;font-family:Lato,sans-serif;letter-spacing:0;text-transform:none;',
    'transition:background .15s,color .15s;}',
    '.om-dropdown a:hover{background:var(--teal-light);color:var(--teal);}',
    '.om-dropdown .om-dd-main{background:var(--teal-light);color:var(--teal);',
    'margin-bottom:.3rem;}',
    '.om-dropdown .om-dd-main:hover{background:var(--teal);color:var(--white);}',
    '.om-dropdown-divider{height:1px;background:rgba(42,122,122,.1);margin:.3rem .3rem;}',
    '.om-dd-icon{width:24px;height:24px;border-radius:7px;background:var(--green-light);',
    'display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.85rem;}',
    '.om-dd-main .om-dd-icon{background:rgba(42,122,122,.15);}',

    /* Hamburger */
    '.om-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;',
    'background:none;border:none;padding:4px;}',
    '.om-hamburger span{display:block;width:24px;height:2px;background:var(--teal);',
    'border-radius:2px;transition:.3s;}',

    /* Mobile */
    '@media(max-width:768px){',
    '.om-nav{padding:0 4%;}',
    '.om-nav-links{display:none;flex-direction:column;position:absolute;',
    'top:72px;left:0;right:0;background:var(--white);padding:1.5rem 4%;',
    'border-bottom:1px solid rgba(42,122,122,.1);gap:.8rem;z-index:99;}',
    '.om-nav-links.open{display:flex;}',
    '.om-hamburger{display:flex;}',
    '.om-tools-wrap{width:100%;}',
    '.om-tools-btn{width:100%;justify-content:space-between;}',
    '.om-dropdown{position:static;transform:none;opacity:1;visibility:visible;',
    'pointer-events:auto;box-shadow:none;border:none;background:var(--cream);',
    'border-radius:12px;margin-top:.4rem;display:none;padding:.4rem;}',
    '.om-tools-wrap.mobile-open .om-dropdown{display:block;}',
    '.om-tools-wrap:hover .om-dropdown{opacity:1;visibility:visible;',
    'pointer-events:auto;transform:none;}',
    '.om-ticker-item{padding:0 1.5rem;font-size:.75rem;}',
    '}'
  ].join('');
  document.head.appendChild(style);

  /* ── Build fallback SVG logo ──────────────────────── */
  var LOGO_SVG = '<svg class="om-nav-logo-symbol" viewBox="0 0 44 44" fill="none">' +
    '<rect x="20" y="4" width="4" height="36" rx="2" fill="#2a7a7a"/>' +
    '<path d="M22 8 C14 12 14 20 22 22 C30 24 30 32 22 36" stroke="#1a5c2a" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="15" cy="16" rx="5" ry="2.5" fill="#2e7d42" transform="rotate(-30 15 16)"/>' +
    '<ellipse cx="29" cy="22" rx="5" ry="2.5" fill="#2e7d42" transform="rotate(30 29 22)"/>' +
    '<ellipse cx="14" cy="28" rx="4.5" ry="2" fill="#2e7d42" transform="rotate(-25 14 28)"/>' +
    '</svg>' +
    '<div class="om-nav-logo-text">' +
    '<span class="om-brand">Оаза Медика</span>' +
    '<span class="om-sub">Ординација – Илинден</span>' +
    '</div>';

  /* ── Determine current page for active link ───────── */
  var pathname = window.location.pathname;
  var isAbout    = /about-us\.html/.test(pathname);
  var isServices = /services\.html/.test(pathname);
  var isTools    = /tools\.html/.test(pathname);
  var isIndex    = !isAbout && !isServices && !isTools;

  function activeClass(cond) { return cond ? ' class="active"' : ''; }

  /* ── Logo href: always points to index ───────────── */
  var indexHref = ROOT + 'index.html';

  /* ── Build ticker HTML ────────────────────────────── */
  var tickerHTML =
    '<div class="om-ticker-wrap" id="omTickerWrap">' +
    '<div class="om-ticker-label">📰 Новости</div>' +
    '<div class="om-ticker-track-wrap">' +
    '<div class="om-ticker-track" id="omTickerTrack"></div>' +
    '</div></div>';

  /* ── Build nav HTML ───────────────────────────────── */
  var navHTML =
    '<nav class="om-nav" id="omNav">' +
    '<a href="' + indexHref + '" class="om-nav-logo">' +
    '<img src="' + ROOT + 'logo_header.png" alt="Оаза Медика" class="om-nav-logo-img"' +
    ' onerror="this.style.display=\'none\';document.getElementById(\'omNavLogoFb\').style.display=\'flex\';" />' +
    '<div class="om-nav-logo-fallback" id="omNavLogoFb" style="display:none;">' + LOGO_SVG + '</div>' +
    '</a>' +
    '<ul class="om-nav-links" id="omNavLinks">' +

    /* За нас */
    '<li><a href="https://oazamedika.github.io/oaza-medika-website/about-us.html"' +
    activeClass(isAbout) + '>За нас</a></li>' +

    /* Услуги */
    '<li><a href="https://oazamedika.github.io/oaza-medika-website/services.html"' +
    activeClass(isServices) + '>Услуги</a></li>' +

    /* Алатки dropdown */
    '<li class="om-tools-wrap" id="omToolsWrap">' +
    '<button class="om-tools-btn" id="omToolsBtn" aria-haspopup="true" aria-expanded="false">' +
    'Алатки <i class="om-tools-arrow">▾</i>' +
    '</button>' +
    '<div class="om-dropdown">' +
    '<div class="om-dropdown-header">Брзи Алатки</div>' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/tools.html"' +
    ' class="om-dd-main"><span class="om-dd-icon">🔧</span>Сите алатки</a>' +
    '<div class="om-dropdown-divider"></div>' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/bmi.html">' +
    '<span class="om-dd-icon">⚖️</span>Калкулатор за ИТМ</a>' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/cardiac-dis.html">' +
    '<span class="om-dd-icon">❤️</span>Кардиоваскуларен ризик</a>' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/diabetes-risk.html">' +
    '<span class="om-dd-icon">🩸</span>Ризик за дијабет</a>' +
    '</div>' +
    '</li>' +

    /* Фонд */
    '<li><a href="' + (isIndex ? '' : indexHref) + '#fond">Фонд</a></li>' +

    /* Новости */
    '<li><a href="' + (isIndex ? '' : indexHref) + '#novosti">Новости</a></li>' +

    /* Блог */
    '<li><a href="' + (isIndex ? '' : indexHref) + '#blog">Блог</a></li>' +

    /* ЧПП */
    '<li><a href="' + (isIndex ? '' : indexHref) + '#faq">ЧПП</a></li>' +

    /* Контакт CTA */
    '<li><a href="' + (isIndex ? '' : indexHref) + '#contact" class="om-nav-cta">Контакт</a></li>' +

    '</ul>' +
    '<button class="om-hamburger" id="omHamburger" aria-label="Мени">' +
    '<span></span><span></span><span></span>' +
    '</button>' +
    '</nav>';

  /* ── Inject into page ─────────────────────────────── */
  var frag = document.createDocumentFragment();
  var tmp = document.createElement('div');
  tmp.innerHTML = tickerHTML + navHTML;
  while (tmp.firstChild) frag.appendChild(tmp.firstChild);

  /* Insert before body's first child (or at start of body) */
  var body = document.body;
  if (body.firstChild) {
    body.insertBefore(frag, body.firstChild);
  } else {
    body.appendChild(frag);
  }

  /* ── Sticky scroll shadow ─────────────────────────── */
  window.addEventListener('scroll', function () {
    var nav = document.getElementById('omNav');
    if (!nav) return;
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ── Hamburger toggle ─────────────────────────────── */
  var hamburger = document.getElementById('omHamburger');
  var navLinks  = document.getElementById('omNavLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  /* ── Tools dropdown mobile toggle ─────────────────── */
  var toolsWrap = document.getElementById('omToolsWrap');
  var toolsBtn  = document.getElementById('omToolsBtn');
  if (toolsBtn && toolsWrap) {
    toolsBtn.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toolsWrap.classList.toggle('mobile-open');
        this.setAttribute('aria-expanded',
          toolsWrap.classList.contains('mobile-open') ? 'true' : 'false');
      }
    });
  }

  /* ── Ticker builder (called after novosti.js loads) ── */
  window._omBuildTicker = function (NOVOSTI) {
    var wrap  = document.getElementById('omTickerWrap');
    var track = document.getElementById('omTickerTrack');
    if (!wrap || !track) return;
    if (!NOVOSTI || !NOVOSTI.length) { wrap.style.display = 'none'; return; }

    var items = NOVOSTI.concat(NOVOSTI);
    var html  = '';
    for (var i = 0; i < items.length; i++) {
      var idx = i % NOVOSTI.length;
      html +=
        '<span class="om-ticker-item" data-idx="' + idx + '">' +
        '<span style="opacity:.6">📰</span> ' + items[i].naslov +
        '<span style="opacity:.4;font-size:.7rem"> ' + items[i].datum + '</span>' +
        '</span><span class="om-ticker-sep">·</span>';
    }
    track.innerHTML = html;

    track.querySelectorAll('.om-ticker-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-idx'));
        var novostiEl = document.getElementById('novosti');
        if (novostiEl) {
          var top = novostiEl.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: top, behavior: 'smooth' });
          if (typeof openNovostModal === 'function') {
            setTimeout(function () { openNovostModal(idx); }, 400);
          }
        }
      });
    });

    var pos = 0;
    function tick() {
      pos += 0.5;
      if (pos >= track.scrollWidth / 2) pos = 0;
      track.style.transform = 'translateX(-' + pos + 'px)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

})();
