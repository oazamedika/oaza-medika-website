/* ═══════════════════════════════════════════════════════
   OAZA MEDIKA - SHARED FOOTER
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

    '.om-footer-social{display:flex;flex-direction:column;gap:.6rem;margin-top:.4rem;}',
    '.om-footer-social-label{font-size:.78rem;color:rgba(255,255,255,.45);',
    'text-transform:uppercase;letter-spacing:.08em;font-weight:600;}',
    '.om-footer-social-buttons{display:flex;gap:.6rem;}',
    '.om-footer-social-btn{display:inline-flex;align-items:center;gap:.45rem;',
    'padding:.38rem .75rem;border-radius:6px;text-decoration:none;',
    'font-size:.78rem;font-weight:600;font-family:Lato,sans-serif;',
    'transition:opacity .2s,transform .15s;}',
    '.om-footer-social-btn:hover{opacity:.85;transform:translateY(-1px);}',
    '.om-footer-social-btn.fb{background:#1877f2;color:#fff;}',
    '.om-footer-social-btn.ig{background:linear-gradient(135deg,#f58529,#dd2a7b,#8134af);color:#fff;}',
    '.om-footer-social-btn svg{flex-shrink:0;}',

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

  /* ── SVG Icons ────────────────────────────────────── */
  var fbIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>' +
    '</svg>';

  var igIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.613.074-3.067.44-4.205 1.577C1.71 2.786 1.344 4.24 1.27 5.853 1.212 7.133 1.198 7.541 1.198 12c0 4.459.014 4.867.072 6.147.074 1.613.44 3.067 1.577 4.205 1.138 1.137 2.592 1.503 4.205 1.577 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c1.613-.074 3.067-.44 4.205-1.577 1.137-1.138 1.503-2.592 1.577-4.205.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.613-.44-3.067-1.577-4.205C19.214 1.71 17.76 1.344 16.147 1.27 14.867 1.212 14.459 1.198 12 1.198zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>' +
    '</svg>';

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

    /* Social media */
    '<div class="om-footer-social">' +
    '<span class="om-footer-social-label">Следете нÉ</span>' +
    '<div class="om-footer-social-buttons">' +
    '<a href="https://www.facebook.com/oazamedika" target="_blank" rel="noopener noreferrer" class="om-footer-social-btn fb" aria-label="Facebook">' +
    fbIcon + 'Facebook' +
    '</a>' +
    '<a href="https://www.instagram.com/oazamedika" target="_blank" rel="noopener noreferrer" class="om-footer-social-btn ig" aria-label="Instagram">' +
    igIcon + 'Instagram' +
    '</a>' +
    '</div>' +
    '</div>' +

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
    '<li><a href="tel:+38973860480">073 860 480</a></li>' +
    '<li><a href="mailto:pacienti@oazamedika.com">pacienti@oazamedika.com</a></li>' +
    '<li><a href="' + indexHref + '#contact">ул. 2 бр. 105, лок. 10</a></li>' +
    '<li><a href="' + indexHref + '#contact">Општина Илинден</a></li>' +
    '<li><a href="#">Пон–Пет 07:30–15:30</a></li>' +
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
