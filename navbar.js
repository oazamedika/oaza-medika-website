/* ═══════════════════════════════════════════════════════
   OAZA MEDIKA — SHARED NAVBAR
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

    /* ── Nav ── */
    '.om-nav{position:fixed;top:0;left:0;right:0;z-index:500;',
    'background:rgba(255,255,255,0.97);',
    'backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
    'border-bottom:1px solid rgba(42,122,122,.12);',
    'padding:0 5%;display:flex;align-items:center;justify-content:space-between;',
    'height:64px;box-shadow:none;transition:box-shadow .3s;box-sizing:border-box;}',
    '.om-nav.scrolled{box-shadow:0 4px 24px rgba(26,92,42,.12);}',
    '.om-nav-spacer{height:64px;}',

    /* ── Logo ── */
    '.om-nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;}',
    '.om-nav-logo-img{height:44px;width:auto;display:block;}',
    '.om-nav-logo-fallback{display:flex;align-items:center;gap:10px;}',
    '.om-nav-logo-symbol{width:38px;height:38px;flex-shrink:0;}',
    '.om-nav-logo-text{display:flex;flex-direction:column;line-height:1.15;}',
    '.om-nav-logo-text .om-brand{font-family:"Playfair Display",serif;font-size:1.05rem;',
    'font-weight:700;color:var(--teal);}',
    '.om-nav-logo-text .om-sub{font-size:.65rem;color:var(--text-light);',
    'letter-spacing:.07em;text-transform:uppercase;}',

    /* ── Desktop nav links ── */
    '.om-nav-links{display:flex;gap:0;list-style:none;align-items:center;margin:0;padding:0;}',
    '.om-nav-links > li{display:flex;align-items:center;}',
    '.om-nav-links > li > a,.om-tools-btn{',
    'display:flex;align-items:center;text-decoration:none;',
    'color:var(--text-mid);font-size:.8rem;font-weight:600;',
    'letter-spacing:.04em;text-transform:uppercase;transition:color .2s;',
    'font-family:Lato,sans-serif;padding:.25rem .7rem;white-space:nowrap;',
    'background:none;border:none;cursor:pointer;line-height:inherit;}',
    '.om-nav-links > li > a:hover,.om-tools-btn:hover{color:var(--teal);}',
    '.om-nav-links > li > a.active{color:var(--teal);}',

    /* CTA */
    '.om-nav-cta{background:var(--teal)!important;color:var(--white)!important;',
    'padding:.38rem .9rem!important;border-radius:50px;margin-left:.3rem;}',
    '.om-nav-cta:hover{background:var(--teal-dark)!important;color:var(--white)!important;}',

    /* ── Tools dropdown ── */
    '.om-tools-wrap{position:relative;display:flex;align-items:center;}',
    '.om-tools-arrow{display:inline-flex;align-items:center;margin-left:2px;transition:transform .22s;flex-shrink:0;}',
    '.om-tools-wrap::after{content:"";position:absolute;top:100%;left:0;right:0;height:14px;}',

    '.om-dropdown{position:absolute;top:calc(100% + 6px);left:50%;',
    'transform:translateX(-50%) translateY(4px);',
    'background:var(--white);border:1px solid rgba(42,122,122,.13);border-radius:14px;',
    'box-shadow:0 12px 40px rgba(26,92,42,.14);min-width:210px;padding:.4rem;',
    'opacity:0;visibility:hidden;pointer-events:none;',
    'transition:opacity .18s,transform .18s,visibility .18s;}',

    '.om-dropdown a{display:flex;align-items:center;gap:8px;padding:.45rem .65rem;',
    'border-radius:9px;text-decoration:none;color:var(--text-mid);font-size:.82rem;',
    'font-weight:600;font-family:Lato,sans-serif;letter-spacing:0;text-transform:none;',
    'transition:background .15s,color .15s;white-space:nowrap;}',
    '.om-dropdown a:hover{background:var(--teal-light);color:var(--teal);}',
    '.om-dropdown .om-dd-main{background:var(--teal-light);color:var(--teal);margin-bottom:.25rem;}',
    '.om-dropdown .om-dd-main:hover{background:var(--teal);color:var(--white);}',
    '.om-dropdown-divider{height:1px;background:rgba(42,122,122,.1);margin:.2rem;}',
    '.om-dd-icon{width:24px;height:24px;border-radius:6px;background:var(--green-light);',
    'display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.om-dd-icon svg{width:13px;height:13px;}',
    '.om-dd-main .om-dd-icon{background:rgba(42,122,122,.15);}',

    /* ── Hamburger ── */
    '.om-hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;',
    'cursor:pointer;background:none;border:none;padding:6px;flex-shrink:0;}',
    '.om-hamburger span{display:block;width:22px;height:2px;background:var(--teal);',
    'border-radius:2px;transition:.3s;}',
    '.om-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '.om-hamburger.open span:nth-child(2){opacity:0;}',
    '.om-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',

    /* ════════ DESKTOP only: hover opens dropdown ════════ */
    '@media(min-width:901px){',
    '.om-tools-wrap:hover .om-dropdown{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0);}',
    '.om-tools-wrap:hover .om-tools-btn{color:var(--teal);}',
    '.om-tools-wrap:hover .om-tools-arrow{transform:rotate(180deg);}',
    '}',

    /* ════════ MOBILE ≤ 900px ════════ */
    '@media(max-width:900px){',

    '.om-hamburger{display:flex;}',

    '.om-nav-links{',
    'display:none;position:absolute;top:64px;left:0;right:0;',
    'flex-direction:column;align-items:stretch;',
    'background:var(--white);',
    'border-bottom:2px solid rgba(42,122,122,.12);',
    'box-shadow:0 8px 24px rgba(26,92,42,.10);',
    'padding:.25rem 0 .5rem;z-index:499;}',
    '.om-nav-links.open{display:flex;}',
    '.om-nav-links > li{width:100%;display:block;}',

    '.om-nav-links > li > a,.om-tools-btn{',
    'display:flex!important;align-items:center;justify-content:space-between;',
    'width:100%;box-sizing:border-box;',
    'font-size:.9rem!important;font-weight:600;letter-spacing:.03em;text-transform:uppercase;',
    'color:var(--text-mid)!important;padding:.62rem 5%!important;',
    'border-bottom:1px solid rgba(42,122,122,.07);',
    'background:none!important;border-left:none;border-right:none;border-top:none;',
    'cursor:pointer;font-family:Lato,sans-serif;text-decoration:none;',
    'transition:color .2s,background .2s;line-height:1.4;',
    'border-radius:0!important;margin:0!important;}',
    '.om-nav-links > li > a:hover,.om-tools-btn:hover{color:var(--teal)!important;background:rgba(42,122,122,.04)!important;}',
    '.om-nav-links > li:last-child > a{border-bottom:none;}',

    '.om-nav-cta{',
    'background:var(--teal)!important;color:var(--white)!important;',
    'justify-content:center;border-bottom:none!important;',
    'padding:.7rem 5%!important;margin-top:.25rem;}',
    '.om-nav-cta:hover{background:var(--teal-dark)!important;color:var(--white)!important;}',

    '.om-tools-wrap{width:100%;flex-direction:column;align-items:stretch;position:static;}',
    '.om-tools-wrap::after{display:none;}',

    /* dropdown hidden on mobile until .mobile-visible is added by JS */
    '.om-dropdown{',
    'display:none;',
    'position:static!important;transform:none!important;',
    'opacity:1!important;visibility:visible!important;pointer-events:auto!important;',
    'box-shadow:none!important;border:none!important;border-radius:0!important;',
    'background:var(--cream)!important;padding:.1rem 0!important;min-width:unset!important;}',

    '.om-dropdown.mobile-visible{display:block!important;}',

    '.om-tools-wrap.mobile-open .om-tools-btn{color:var(--teal)!important;background:rgba(42,122,122,.04)!important;}',
    '.om-tools-wrap.mobile-open .om-tools-arrow svg{transform:rotate(180deg);}',

    '.om-dropdown.mobile-visible a,.om-dropdown.mobile-visible .om-dd-main{',
    'display:flex!important;align-items:center;gap:8px;',
    'font-size:.85rem!important;font-weight:600;letter-spacing:.01em;text-transform:none!important;',
    'color:var(--text-mid)!important;',
    'padding:.55rem 5% .55rem calc(5% + 20px)!important;',
    'border-radius:0!important;border-bottom:1px solid rgba(42,122,122,.06)!important;',
    'white-space:normal!important;justify-content:flex-start!important;}',
    '.om-dropdown.mobile-visible a:last-child{border-bottom:none!important;}',
    '.om-dropdown.mobile-visible .om-dd-main{color:var(--teal)!important;background:none!important;}',
    '.om-dropdown.mobile-visible a:hover,.om-dropdown.mobile-visible .om-dd-main:hover{background:rgba(42,122,122,.06)!important;color:var(--teal)!important;}',
    '.om-dropdown.mobile-visible .om-dropdown-divider{display:none!important;}',
    '.om-dropdown.mobile-visible .om-dd-icon{display:none!important;}',

    '}', /* end @media mobile */

  ].join('');
  document.head.appendChild(style);

  /* ── SVG helper ───────────────────────────────────── */
  function svg(path) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
  }

  /* ── Fallback logo ────────────────────────────────── */
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
  var pathname   = window.location.pathname;
  var isAbout    = /about-us\.html/.test(pathname);
  var isServices = /services\.html/.test(pathname);
  var isIndex    = !isAbout && !isServices;
  function ac(cond) { return cond ? ' class="active"' : ''; }
  var indexHref  = ROOT + 'index.html';

  /* ── Build & inject nav ───────────────────────────── */
  var navHTML =
    '<nav class="om-nav" id="omNav">' +
      '<a href="' + indexHref + '" class="om-nav-logo">' +
        '<img src="' + ROOT + 'logo_header.png" alt="Оаза Медика" class="om-nav-logo-img"' +
        ' onerror="this.style.display=\'none\';document.getElementById(\'omNavLogoFb\').style.display=\'flex\';" />' +
        '<div class="om-nav-logo-fallback" id="omNavLogoFb" style="display:none;">' + LOGO_SVG + '</div>' +
      '</a>' +
      '<ul class="om-nav-links" id="omNavLinks">' +
        '<li><a href="https://oazamedika.github.io/oaza-medika-website/about-us.html"' + ac(isAbout) + '>За нас</a></li>' +
        '<li><a href="https://oazamedika.github.io/oaza-medika-website/services.html"' + ac(isServices) + '>Услуги</a></li>' +
        '<li class="om-tools-wrap" id="omToolsWrap">' +
          '<button class="om-tools-btn" id="omToolsBtn" aria-haspopup="true" aria-expanded="false">' +
            'Алатки' +
            '<span class="om-tools-arrow"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6,9 12,15 18,9"/></svg></span>' +
          '</button>' +
          '<div class="om-dropdown" id="omDropdown">' +
            '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/tools.html" class="om-dd-main">' +
              '<span class="om-dd-icon">' + svg('<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>') + '</span>' +
              'Сите алатки' +
            '</a>' +
            '<div class="om-dropdown-divider"></div>' +
            '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/bmi.html">' +
              '<span class="om-dd-icon">' + svg('<path d="M3 6h18M3 12h10"/><rect x="8" y="3" width="8" height="5" rx="1"/>') + '</span>' +
              'BMI Калкулатор' +
            '</a>' +
            '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/cardiac-dis.html">' +
              '<span class="om-dd-icon">' + svg('<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>') + '</span>' +
              'Кардиоваскуларен ризик' +
            '</a>' +
            '<a href="https://oazamedika.github.io/oaza-medika-website/tools-module/diabetes-risk.html">' +
              '<span class="om-dd-icon">' + svg('<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>') + '</span>' +
              'Ризик за дијабет' +
            '</a>' +
          '</div>' +
        '</li>' +
        '<li><a href="' + (isIndex ? '#fond'    : indexHref + '#fond')    + '">Фонд</a></li>' +
        '<li><a href="' + (isIndex ? '#novosti' : indexHref + '#novosti') + '">Новости</a></li>' +
        '<li><a href="' + (isIndex ? '#blog'    : indexHref + '#blog')    + '">Блог</a></li>' +
        '<li><a href="' + (isIndex ? '#faq'     : indexHref + '#faq')     + '">ЧПП</a></li>' +
        '<li><a href="' + (isIndex ? '#contact' : indexHref + '#contact') + '" class="om-nav-cta">Контакт</a></li>' +
      '</ul>' +
      '<button class="om-hamburger" id="omHamburger" aria-label="Мени"><span></span><span></span><span></span></button>' +
    '</nav>' +
    '<div class="om-nav-spacer"></div>';

  var tmp = document.createElement('div');
  tmp.innerHTML = navHTML;
  var body = document.body;
  /* insertBefore in reverse so order is preserved */
  while (tmp.lastChild) {
    body.insertBefore(tmp.lastChild, body.firstChild);
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
    });
  }

  /* ── Tools dropdown (mobile tap) ─────────────────── */
  var toolsWrap = document.getElementById('omToolsWrap');
  var toolsBtn  = document.getElementById('omToolsBtn');
  var dropdown  = document.getElementById('omDropdown');
  if (toolsBtn && toolsWrap && dropdown) {
    toolsBtn.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        e.stopPropagation();
        var open = toolsWrap.classList.toggle('mobile-open');
        toolsBtn.setAttribute('aria-expanded', String(open));
        dropdown.classList.toggle('mobile-visible', open);
      }
    });
  }

})();
