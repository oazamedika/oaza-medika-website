/* ═══════════════════════════════════════════════════════
   OAZA MEDIKA — SHARED FOOTER
   Usage:
     <script src="footer.js" data-root=""></script>        (root)
     <script src="../footer.js" data-root="../"></script>  (sub-folder)
═══════════════════════════════════════════════════════ */

(function () {
  var scriptEl = document.currentScript ||
    (function () {
      var scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();
  var ROOT = (scriptEl && scriptEl.getAttribute('data-root') !== null)
    ? scriptEl.getAttribute('data-root')
    : '';

  /* ── CSS ──────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    '.om-footer{background:#1c2a22;color:rgba(255,255,255,.7);padding:3.5rem 5% 2rem;',
    'display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:3rem;font-family:Lato,sans-serif;}',

    '.om-footer-brand{display:flex;flex-direction:column;gap:1rem;}',
    '.om-footer-logo-wrap{display:flex;align-items:center;gap:10px;}',
    '.om-footer-logo-img{height:104px;width:auto;filter:brightness(0) invert(1);opacity:.88;}',
    '.om-footer-logo-fallback{font-family:"Playfair Display",serif;font-size:1.1rem;color:#fff;',
    'display:none;align-items:center;gap:8px;}',
    '.om-footer-slogan-main{font-family:"Playfair Display",serif;font-size:1rem;',
    'color:rgba(255,255,255,.92);margin-top:.2rem;font-style:italic;}',
    '.om-footer-slogan-sub{font-size:.83rem;color:rgba(255,255,255,.55);font-weight:300;',
    'line-height:1.6;margin-top:.2rem;}',

    '.om-footer h4{color:#fff;font-family:"Playfair Display",serif;font-size:.95rem;',
    'margin-bottom:1rem;}',
    '.om-footer ul{list-style:none;display:flex;flex-direction:column;gap:.5rem;}',
    '.om-footer ul a{color:rgba(255,255,255,.62);text-decoration:none;font-size:.85rem;',
    'transition:color .2s;}',
    '.om-footer ul a:hover{color:#fff;}',

    '.om-footer-bottom{background:rgba(0,0,0,.22);text-align:center;padding:1.2rem 5%;',
    'font-size:.78rem;color:rgba(255,255,255,.38);font-family:Lato,sans-serif;}',

    '@media(max-width:768px){',
    '.om-footer{grid-template-columns:1fr;gap:2rem;padding:2.5rem 4% 1.5rem;}',
    '.om-footer-logo-img{height:69px;}',
    '}'
  ].join('');
  document.head.appendChild(style);

  /* ── HTML ─────────────────────────────────────────── */
  var indexHref = ROOT + 'index.html';

  var html =
    '<footer class="om-footer">' +
    /* Brand */
    '<div class="om-footer-brand">' +
    '<div class="om-footer-logo-wrap">' +
    '<img src="' + ROOT + 'logo_firma_dolgnaziv.png" alt="Оаза Медика" class="om-footer-logo-img"' +
    ' onerror="this.style.display=\'none\';document.getElementById(\'omFtLogoFb\').style.display=\'flex\';" />' +
    '<span class="om-footer-logo-fallback" id="omFtLogoFb">Оаза Медика</span>' +
    '</div>' +
    '<div class="om-footer-slogan-main">Вашето здравје е вашата оаза</div>' +
    '<div class="om-footer-slogan-sub">Топла, стручна и достапна лекарска грижа за секој пациент.</div>' +
    '</div>' +

    /* Quick links */
    '<div>' +
    '<h4>Брзи линкови</h4>' +
    '<ul>' +
    '<li><a href="https://oazamedika.github.io/oaza-medika-website/about-us.html">За нас</a></li>' +
    '<li><a href="https://oazamedika.github.io/oaza-medika-website/services.html">Услуги</a></li>' +
    '<li><a href="https://oazamedika.github.io/oaza-medika-website/tools-module/tools.html">Алатки</a></li>' +
    '<li><a href="' + indexHref + '#fond">Фонд</a></li>' +
    '<li><a href="' + indexHref + '#novosti">Новости</a></li>' +
    '<li><a href="' + indexHref + '#blog">Едукативен блог</a></li>' +
    '<li><a href="' + indexHref + '#faq">Прашања</a></li>' +
    '<li><a href="' + indexHref + '#contact">Контакт</a></li>' +
    '<li><a href="https://oazamedika.github.io/internal-portal/">Портал за вработени</a></li>' +
    '</ul>' +
    '</div>' +

    /* Contact */
    '<div>' +
    '<h4>Контакт</h4>' +
    '<ul>' +
    '<li><a href="tel:+38970123123">070 123 123</a></li>' +
    '<li><a href="mailto:pacienti@oazamedika.com">pacienti@oazamedika.com</a></li>' +
    '<li><a href="' + indexHref + '#contact">ул. 2 бр. 105, лок. 10</a></li>' +
    '<li><a href="' + indexHref + '#contact">Општина Илинден</a></li>' +
    '<li><a href="#">Пон–Пет 07:30–15:00</a></li>' +
    '</ul>' +
    '</div>' +

    '</footer>' +
    '<div class="om-footer-bottom">© 2026 Приватна здравствена установа - Ординација по општа медицина ОАЗА МЕДИКА Илинден. Сите права задржани.</div>';

  /* ── Inject before </body> ────────────────────────── */
  var tmp = document.createElement('div');
  tmp.innerHTML = html;
  var body = document.body;
  while (tmp.firstChild) {
    body.appendChild(tmp.firstChild);
  }
})();
