/* ═══════════════════════════════════════════════════════
   OAZA MEDIKA — SHARED NAVBAR + TICKER
   Usage:
     <script src="navbar.js" data-root=""></script>         (root pages)
     <script src="../navbar.js" data-root="../"></script>   (sub-folder pages)
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

    /* ── Ticker ── */
    '.om-ticker-wrap{background:var(--green);color:var(--white);height:36px;',
    'overflow:hidden;display:flex;align-items:center;}',
    '.om-ticker-label{background:var(--teal-dark);color:var(--white);padding:0 1rem;',
    'font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;',
    'height:100%;display:flex;align-items:center;white-space:nowrap;flex-shrink:0;}',
    '.om-ticker-track-wrap{flex:1;overflow:hidden;}',
    '.om-ticker-track{display:flex;white-space:nowrap;will-change:transform;}',
    '.om-ticker-item{display:inline-flex;align-items:center;gap:8px;padding:0 2.5rem;',
    'font-size:.78rem;font-weight:600;cursor:pointer;flex-shrink:0;transition:color .2s;',
    'font-family:Lato,sans-serif;color:rgba(255,255,255,.9);}',
    '.om-ticker-item:hover{color:#b2f0b2;}',
    '.om-ticker-sep{color:rgba(255,255,255,.25);display:inline-flex;align-items:center;',
    'flex-shrink:0;font-size:.6rem;}',

    /* ── Nav shell ── */
    '.om-nav{position:sticky;top:0;z-index:500;background:rgba(255,255,255,0.97);position:relative;',
    'backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
    'border-bottom:1px solid rgba(42,122,122,.12);',
    'padding:0 5%;display:flex;align-items:center;justify-content:space-between;',
    'height:72px;transition:box-shadow .3s;box-sizing:border-box;}',
    '.om-nav.scrolled{box-shadow:0 4px 24px rgba(26,92,42,.12);}',

    /* ── Logo ── */
    '.om-nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;}',
    '.om-nav-logo-img{height:48px;width:auto;display:block;}',
    '.om-nav-logo-fallback{display:flex;align-items:center;gap:10px;}',
    '.om-nav-logo-symbol{width:40px;height:40px;flex-shrink:0;}',
    '.om-nav-logo-text{display:flex;flex-direction:column;line-height:1.15;}',
    '.om-nav-logo-text .om-brand{font-family:"Playfair Display",serif;font-size:1.1rem;',
    'font-weight:700;color:var(--teal);}',
    '.om-nav-logo-text .om-sub{font-size:.68rem;color:var(--text-light);',
    'letter-spacing:.07em;text-transform:uppercase;}',

    /* ── Desktop links ── */
    '.om-nav-links{display:flex;gap:0;list-style:none;align-items:center;',
    'margin:0;padding:0;}',
    '.om-nav-links > li{display:flex;align-items:center;}',
    '.om-nav-links > li > a{display:flex;align-items:center;',
    'text-decoration:none;color:var(--text-mid);font-size:.82rem;',
    'font-weight:600;letter-spacing:.04em;text-transform:uppercase;transition:color .2s;',
    'font-family:Lato,sans-serif;padding:.25rem .75rem;white-space:nowrap;}',
    '.om-nav-links > li > a:hover{color:var(--teal);}',
    '.om-nav-links > li > a.active{color:var(--teal);}',
    '.om-nav-cta{background:var(--teal)!important;color:var(--white)!important;',
    'padding:.4rem 1rem!important;border-radius:50px;margin-left:.4rem;}',
    '.om-nav-cta:hover{background:var(--teal-dark)!important;}',

    /* ── Tools dropdown ── */
    '.om-tools-wrap{position:relative;display:flex;align-items:center;}',
    '.om-tools-btn{background:none;border:none;cursor:pointer;display:flex;align-items:center;',
    'gap:4px;color:var(--text-mid);font-size:.82rem;font-weight:600;letter-spacing:.04em;',
    'text-transform:uppercase;font-family:Lato,sans-serif;transition:color .2s;',
    'padding:.25rem .75rem;white-space:nowrap;line-height:1;}',
    '.om-tools-btn:hover{color:var(--teal);}',
    '.om-tools-arrow{display:inline-flex;align-items:center;transition:transform .22s;',
    'flex-shrink:0;}',

    /* Dropdown opens on hover — bridge gap prevents flicker */
    '.om-tools-wrap::after{content:"";position:absolute;top:100%;left:0;right:0;height:16px;}',
    '.om-dropdown{position:absolute;top:calc(100% + 8px);left:50%;',
    'transform:translateX(-50%) translateY(4px);',
    'background:var(--white);border:1px solid rgba(42,122,122,.13);border-radius:16px;',
    'box-shadow:0 12px 40px rgba(26,92,42,.14);min-width:220px;padding:.5rem .4rem;',
    'opacity:0;visibility:hidden;pointer-events:none;',
    'transition:opacity .18s,transform .18s,visibility .18s;}',
    '.om-tools-wrap:hover .om-dropdown{opacity:1;visibility:visible;pointer-events:auto;',
    'transform:translateX(-50%) translateY(0);}',
    '.om-tools-wrap:hover .om-tools-btn{color:var(--teal);}',
    '.om-tools-wrap:hover .om-tools-arrow{transform:rotate(180deg);}',
    '.om-dropdown a{display:flex;align-items:center;gap:9px;padding:.5rem .7rem;',
    'border-radius:10px;text-decoration:none;color:var(--text-mid);font-size:.84rem;',
    'font-weight:600;font-family:Lato,sans-serif;letter-spacing:0;text-transform:none;',
    'transition:background .15s,color .15s;white-space:nowrap;}',
    '.om-dropdown a:hover{background:var(--teal-light);color:var(--teal);}',
    '.om-dropdown .om-dd-main{background:var(--teal-light);color:var(--teal);margin-bottom:.3rem;}',
    '.om-dropdown .om-dd-main:hover{background:var(--teal);color:var(--white);}',
    '.om-dropdown-divider{height:1px;background:rgba(42,122,122,.1);margin:.25rem .25rem;}',
    '.om-dd-icon{width:26px;height:26px;border-radius:7px;background:var(--green-light);',
    'display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.om-dd-icon svg{width:14px;height:14px;}',
    '.om-dd-main .om-dd-icon{background:rgba(42,122,122,.15);}',

    /* ── Hamburger ── */
    '.om-hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;',
    'cursor:pointer;background:none;border:none;padding:6px;flex-shrink:0;}',
    '.om-hamburger span{display:block;width:22px;height:2px;background:var(--teal);',
    'border-radius:2px;transition:.3s;}',
    '.om-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '.om-hamburger.open span:nth-child(2){opacity:0;}',
    '.om-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',

    /* ── Mobile ── */
    '@media(max-width:900px){',

    /* nav stays 72px, links drop below it */
    '.om-nav{position:sticky;}',

    '.om-nav-links{',
    'display:none;',
    'flex-direction:column;',
    'position:absolute;',
    'top:72px;',
    'left:0;right:0;',
    'background:var(--white);',
    'border-bottom:2px solid rgba(42,122,122,.12);',
    'box-shadow:0 8px 32px rgba(26,92,42,.10);',
    'padding:.5rem 5% .75rem;',
    'gap:0;',
    'z-index:499;',
    'align-items:stretch;',
    '}',
    '.om-nav-links.open{display:flex;}',
    '.om-hamburger{display:flex;}',

    /* each link row */
    '.om-nav-links > li{width:100%;}',
    '.om-nav-links > li > a{',
    'font-size:.88rem;',
    'padding:.55rem .25rem;',
    'border-bottom:1px solid rgba(42,122,122,.07);',
    'width:100%;',
    'letter-spacing:.02em;',
    '}',
    '.om-nav-links > li:last-child > a{border-bottom:none;}',

    /* CTA button */
    '.om-nav-cta{',
    'background:var(--teal)!important;color:var(--white)!important;',
    'border-radius:8px!important;',
    'margin-left:0!important;',
    'margin-top:.4rem;',
    'padding:.55rem .25rem!important;',
    'justify-content:center;',
    'border-bottom:none!important;',
    '}',

    /* mobile tools */
    '.om-tools-wrap{width:100%;flex-direction:column;align-items:stretch;}',
    '.om-tools-wrap::after{display:none;}',
    '.om-tools-btn{',
    'width:100%;justify-content:space-between;',
    'font-size:.88rem;',
    'padding:.55rem .25rem;',
    'border-bottom:1px solid rgba(42,122,122,.07);',
    'letter-spacing:.02em;',
    '}',
    '.om-dropdown{',
    'position:static!important;',
    'transform:none!important;',
    'opacity:1!important;visibility:visible!important;pointer-events:auto!important;',
    'box-shadow:none!important;border:none!important;',
    'background:var(--cream);',
    'border-radius:8px;',
    'margin:.2rem 0 .2rem 1rem;',
    'padding:.2rem;',
    'display:none;',
    'min-width:unset;',
    '}',
    '.om-tools-wrap.mobile-open .om-dropdown{display:block;}',
    /* kill hover effects on mobile */
    '.om-tools-wrap:hover .om-dropdown{display:none;}',
    '.om-tools-wrap.mobile-open .om-dropdown{display:block!important;}',
    '.om-tools-wrap:hover .om-tools-btn{color:var(--text-mid);}',
    '.om-tools-wrap.mobile-open .om-tools-btn{color:var(--teal);}',
    '.om-tools-wrap:hover .om-tools-arrow{transform:none;}',
    '.om-tools-wrap.mobile-open .om-tools-arrow svg{transform:rotate(180deg);}',
    '.om-dropdown a{white-space:normal;font-size:.84rem;padding:.4rem .6rem;}',
    '}',

    /* ticker mobile */
    '@media(max-width:600px){',
    '.om-ticker-label{display:none;}',
    '.om-ticker-item{padding:0 1.2rem;font-size:.74rem;}',
    '}',
  ].join('');
  document.head.appendChild(style);

  /* ── SVG icon helpers ─────────────────────────────── */
  function svg(path, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' + (extra || '') + '>' + path + '</svg>';
  }
  var ICONS = {
    tools:    svg('<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>'),
    bmi:      svg('<path d="M3 6h18M3 12h18M3 18h18"/><rect x="9" y="4" width="6" height="4" rx="1"/>'),
    heart:    svg('<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>'),
    drop:     svg('<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>'),
    chevron:  svg('<polyline points="6,9 12,15 18,9"/>'),
    news:     svg('<path d="M4 6h16M4 10h16M4 14h10"/>'),
    menu:     '',
  };

  /* ── Fallback logo SVG ────────────────────────────── */
  var LOGO_SVG =
    '<svg class="om-nav-logo-symbol" viewBox="0 0 44 44" fill="none">' +
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

  /* ── Active page detection ────────────────────────── */
  var pathname = window.location.pathname;
  var isAbout    = /about-us\.html/.test(pathname);
  var isServices = /services\.html/.test(pathname);
  var isTools    = /tools\.html/.test(pathname);
  var isIndex    = !isAbout && !isServices && !isTools;

  function ac(cond) { return cond ? ' class="active"' : ''; }
  var indexHref = ROOT + 'index.html';

  /* ── Ticker HTML ──────────────────────────────────── */
  var tickerHTML =
    '<div class="om-ticker-wrap" id="omTickerWrap">' +
    '<div class="om-ticker-label">' +
    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-right:6px">' +
    '<path d="M4 6h16M4 10h16M4 14h10"/></svg>' +
    'Новости</div>' +
    '<div class="om-ticker-track-wrap">' +
    '<div class="om-ticker-track" id="omTickerTrack"></div>' +
    '</div></div>';

  /* ── Nav HTML ─────────────────────────────────────── */
  var navHTML =
    '<nav class="om-nav" id="omNav">' +

    /* Logo */
    '<a href="' + indexHref + '" class="om-nav-logo">' +
    '<img src="' + ROOT + 'logo_header.png" alt="Оаза Медика" class="om-nav-logo-img"' +
    ' onerror="this.style.display=\'none\';document.getElementById(\'omNavLogoFb\').style.display=\'flex\';" />' +
    '<div class="om-nav-logo-fallback" id="omNavLogoFb" style="display:none;">' + LOGO_SVG + '</div>' +
    '</a>' +

    /* Links */
    '<ul class="om-nav-links" id="omNavLinks">' +

    '<li><a href="https://oazamedika.github.io/oaza-medika-website/about-us.html"' + ac(isAbout) + '>За нас</a></li>' +
    '<li><a href="https://oazamedika.github.io/oaza-medika-website/services.html"' + ac(isServices) + '>Услуги</a></li>' +

    /* Tools dropdown */
    '<li class="om-tools-wrap" id="omToolsWrap">' +
    '<button class="om-tools-btn" id="omToolsBtn" aria-haspopup="true" aria-expanded="false">' +
    'Алатки' +
    '<span class="om-tools-arrow">' +
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6,9 12,15 18,9"/></svg>' +
    '</span>' +
    '</button>' +
    '<div class="om-dropdown" id="omDropdown">' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/tools.html" class="om-dd-main">' +
    '<span class="om-dd-icon">' + svg('<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>') + '</span>' +
    'Сите алатки</a>' +
    '<div class="om-dropdown-divider"></div>' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/bmi.html">' +
    '<span class="om-dd-icon">' + svg('<path d="M3 6h18M3 12h10"/><rect x="8" y="3" width="8" height="5" rx="1"/>') + '</span>' +
    'BMI Калкулатор</a>' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/cardiac-dis.html">' +
    '<span class="om-dd-icon">' + svg('<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>') + '</span>' +
    'Кардиоваскуларен ризик</a>' +
    '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/diabetes-risk.html">' +
    '<span class="om-dd-icon">' + svg('<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>') + '</span>' +
    'Ризик за дијабет</a>' +
    '</div>' +
    '</li>' +

    '<li><a href="' + (isIndex ? '' : indexHref) + '#fond">Фонд</a></li>' +
    '<li><a href="' + (isIndex ? '' : indexHref) + '#novosti">Новости</a></li>' +
    '<li><a href="' + (isIndex ? '' : indexHref) + '#blog">Блог</a></li>' +
    '<li><a href="' + (isIndex ? '' : indexHref) + '#faq">ЧПП</a></li>' +
    '<li><a href="' + (isIndex ? '' : indexHref) + '#contact" class="om-nav-cta">Контакт</a></li>' +

    '</ul>' +

    /* Hamburger */
    '<button class="om-hamburger" id="omHamburger" aria-label="Мени">' +
    '<span></span><span></span><span></span>' +
    '</button>' +

    '</nav>';

  /* ── Inject ───────────────────────────────────────── */
  var frag = document.createDocumentFragment();
  var tmp  = document.createElement('div');
  tmp.innerHTML = tickerHTML + navHTML;
  while (tmp.firstChild) frag.appendChild(tmp.firstChild);

  var body = document.body;
  if (body.firstChild) {
    body.insertBefore(frag, body.firstChild);
  } else {
    body.appendChild(frag);
  }

  /* ── Scroll shadow ────────────────────────────────── */
  window.addEventListener('scroll', function () {
    var nav = document.getElementById('omNav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ── Hamburger ────────────────────────────────────── */
  var hamburger = document.getElementById('omHamburger');
  var navLinks  = document.getElementById('omNavLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ── Tools: desktop hover is pure CSS.
        Mobile: tap to toggle ────────────────────────── */
  var toolsWrap = document.getElementById('omToolsWrap');
  var toolsBtn  = document.getElementById('omToolsBtn');
  if (toolsBtn && toolsWrap) {
    toolsBtn.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        var open = toolsWrap.classList.toggle('mobile-open');
        toolsBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  }

  /* ── Ticker ───────────────────────────────────────── */
  window._omBuildTicker = function (NOVOSTI) {
    var wrap  = document.getElementById('omTickerWrap');
    var track = document.getElementById('omTickerTrack');
    if (!wrap || !track || !NOVOSTI || !NOVOSTI.length) {
      if (wrap) wrap.style.display = 'none';
      return;
    }

    var items = NOVOSTI.concat(NOVOSTI);
    var html  = '';
    for (var i = 0; i < items.length; i++) {
      var idx = i % NOVOSTI.length;
      html +=
        '<span class="om-ticker-item" data-idx="' + idx + '">' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"><path d="M4 6h16M4 10h16M4 14h10"/></svg> ' +
        items[i].naslov +
        '<span style="opacity:.4;font-size:.7rem;margin-left:4px">' + items[i].datum + '</span>' +
        '</span><span class="om-ticker-sep"> · </span>';
    }
    track.innerHTML = html;

    track.querySelectorAll('.om-ticker-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-idx'));
        var section = document.getElementById('novosti');
        if (section) {
          var top = section.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: top, behavior: 'smooth' });
          if (typeof openNovostModal === 'function') {
            setTimeout(function () { openNovostModal(idx); }, 400);
          }
        }
        /* close mobile menu if open */
        if (navLinks) navLinks.classList.remove('open');
        if (hamburger) hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    var pos = 0;
    function tick() {
      pos += 0.45;
      if (pos >= track.scrollWidth / 2) pos = 0;
      track.style.transform = 'translateX(-' + pos + 'px)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

})();
