/* ==========================================================================
   MarbellaNest — Legal documents (Privacy, Cookies, Terms)
   Opened in a popup from any element with data-legal="privacy|cookies|terms".
   Texts exist in English and Spanish; other languages show the English text.
   ========================================================================== */
(function () {
  'use strict';

  var COMPANY = 'MarbellaNest.com';
  var CIF = 'B24746927';
  var ADDRESS = 'Puebla Agata, Las Chapas, Marbella, Málaga, Spain';
  var EMAIL = 'contact@themarbellanest.com';
  var UPDATED = { en: 'Last updated: October 2026', es: 'Última actualización: octubre de 2026' };

  var LEGAL = {
    en: {
      close: 'Close',
      privacy: {
        title: 'Privacy Policy',
        html: [
          '<h4>1. Who is responsible for your data</h4>',
          '<p>' + COMPANY + ' (CIF ' + CIF + '), ' + ADDRESS + '. Contact for any privacy matter: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>',
          '<h4>2. What data we collect</h4>',
          '<ul><li><strong>Enquiry form:</strong> first and last name, email, phone number, country, budget range and the message you write.</li>',
          '<li><strong>Direct contact:</strong> the details you share when you contact us by WhatsApp, phone or email.</li>',
          '<li><strong>Browsing data:</strong> usage and advertising data collected by analytics and advertising tools, only if you accept them in the cookie banner (see the Cookie Policy).</li></ul>',
          '<h4>3. Why we use it and on what legal basis</h4>',
          '<ul><li>To answer your enquiry and arrange viewings or services you ask for: your consent (Art. 6.1.a GDPR) and steps taken at your request before a contract (Art. 6.1.b).</li>',
          '<li>To measure and improve our website and advertising campaigns: your consent (Art. 6.1.a), which you can withdraw at any time.</li>',
          '<li>To meet legal obligations, such as accounting or anti-money-laundering rules that apply to real estate: Art. 6.1.c.</li></ul>',
          '<h4>4. How the enquiry form works</h4>',
          '<p>When you submit the form, your email application opens with a pre-filled message addressed to us. Nothing reaches us until you send that email, so it travels through your own email provider and ours.</p>',
          '<h4>5. Who receives your data</h4>',
          '<p>We do not sell your data. It may be handled by providers that help us operate: email and hosting services, and WhatsApp (Meta) if you contact us there. If you accept analytics and advertising cookies, Google, Meta and TikTok also receive browsing data. Our pages load fonts from Google Fonts, so Google receives your IP address when the page loads.</p>',
          '<h4>6. International transfers</h4>',
          '<p>Some of these providers are based outside the European Economic Area, mainly in the United States. Transfers rely on safeguards such as the EU–US Data Privacy Framework or standard contractual clauses.</p>',
          '<h4>7. How long we keep it</h4>',
          '<p>Enquiry data is kept while we handle your request and, afterwards, only for the period in which legal claims or obligations may arise. Analytics data follows the cookie durations described in the Cookie Policy.</p>',
          '<h4>8. Your rights</h4>',
          '<p>You can request access, rectification, erasure, restriction, portability and object to processing, and withdraw consent at any time, by writing to <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>. You may also lodge a complaint with the Spanish data protection authority (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>',
          '<h4>9. Changes</h4>',
          '<p>We may update this policy. The date of the latest version appears at the top of this page.</p>'
        ].join('')
      },
      cookies: {
        title: 'Cookie Policy',
        html: [
          '<h4>1. What this covers</h4>',
          '<p>This policy explains what is stored on your device when you use ' + COMPANY + ' and how you can control it.</p>',
          '<h4>2. Stored in your browser, always</h4>',
          '<p>These items are needed for the site to remember your choices. They are not used for tracking.</p>',
          '<ul><li><strong>mn_consent</strong> — remembers whether you accepted or declined analytics and advertising.</li>',
          '<li><strong>mn_lang</strong> — remembers your chosen language.</li></ul>',
          '<h4>3. Analytics and advertising, only if you accept</h4>',
          '<p>These tools load only after you press Accept in the cookie banner. They help us measure visits and run campaigns on Instagram, YouTube and TikTok.</p>',
          '<ul><li><strong>Google Analytics 4</strong> (Google) — counts visits and shows which countries and pages perform best. Typical cookies: _ga, _ga_*.</li>',
          '<li><strong>Meta Pixel</strong> (Meta) — measures ad results and lets us show our ads to people who visited the site. Typical cookie: _fbp.</li>',
          '<li><strong>TikTok Pixel</strong> (TikTok) — the same purpose for TikTok campaigns. Typical cookie: _ttp.</li></ul>',
          '<p>If you decline, none of these tools are loaded. Please note that fonts are loaded from Google Fonts in any case, which does not use cookies but does share your IP address with Google (see the Privacy Policy).</p>',
          '<h4>4. Change your choice</h4>',
          '<p>You can withdraw or change your decision at any time. The button below clears your choice and shows the cookie banner again. You can also delete cookies in your browser settings.</p>',
          '<p><button type="button" class="btn btn-outline btn-small" data-action="reset-consent">Change my cookie choice</button></p>',
          '<h4>5. More information</h4>',
          '<p>See our Privacy Policy, or write to <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>'
        ].join('')
      },
      terms: {
        title: 'Terms of Use',
        html: [
          '<h4>1. Owner of the website</h4>',
          '<p>This website is operated by ' + COMPANY + ' (CIF ' + CIF + '), ' + ADDRESS + ', <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>',
          '<h4>2. Use of the website</h4>',
          '<p>By using this website you agree to these terms. You agree to use it lawfully and not to interfere with its operation.</p>',
          '<h4>3. Property information</h4>',
          '<p>Listings, prices, descriptions, measurements and photographs are for guidance only and do not form an offer or a contract. Properties may be sold, withdrawn or changed without notice, and details may contain errors despite our care. Please confirm everything with us before making a decision.</p>',
          '<h4>4. No professional advice</h4>',
          '<p>Content on this website, including about the area and markets, is general information. It is not legal, tax or financial advice.</p>',
          '<h4>5. Intellectual property</h4>',
          '<p>Texts, images, design and logos belong to ' + COMPANY + ' or their respective owners. You may not copy, reproduce or distribute them without written permission.</p>',
          '<h4>6. Links to other sites</h4>',
          '<p>We link to third-party sites, such as social networks, and we are not responsible for their content or privacy practices.</p>',
          '<h4>7. Liability</h4>',
          '<p>We do not guarantee that the website will be free of interruptions or errors. To the extent permitted by law, we are not liable for losses arising from its use, without affecting any rights you have as a consumer.</p>',
          '<h4>8. Personal data</h4>',
          '<p>How we handle your data is explained in the Privacy Policy and the Cookie Policy.</p>',
          '<h4>9. Applicable law</h4>',
          '<p>These terms are governed by Spanish law. Disputes are submitted to the courts of Málaga, without prejudice to the rights of consumers to use the courts of their place of residence where the law grants them.</p>'
        ].join('')
      }
    },
    es: {
      close: 'Cerrar',
      privacy: {
        title: 'Política de Privacidad',
        html: [
          '<h4>1. Responsable del tratamiento</h4>',
          '<p>' + COMPANY + ' (CIF ' + CIF + '), ' + ADDRESS + '. Contacto para cualquier cuestión de privacidad: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>',
          '<h4>2. Qué datos recogemos</h4>',
          '<ul><li><strong>Formulario de consulta:</strong> nombre y apellidos, correo electrónico, teléfono, país, rango de presupuesto y el mensaje que escribas.</li>',
          '<li><strong>Contacto directo:</strong> los datos que nos facilites por WhatsApp, teléfono o correo electrónico.</li>',
          '<li><strong>Datos de navegación:</strong> datos de uso y publicidad recogidos por herramientas de analítica y publicidad, solo si los aceptas en el banner de cookies (ver Política de Cookies).</li></ul>',
          '<h4>3. Para qué los usamos y base legal</h4>',
          '<ul><li>Atender tu consulta y organizar las visitas o servicios que solicites: tu consentimiento (art. 6.1.a RGPD) y la aplicación de medidas precontractuales a petición tuya (art. 6.1.b).</li>',
          '<li>Medir y mejorar nuestra web y nuestras campañas publicitarias: tu consentimiento (art. 6.1.a), que puedes retirar en cualquier momento.</li>',
          '<li>Cumplir obligaciones legales, como las normas contables o de prevención del blanqueo de capitales aplicables al sector inmobiliario: art. 6.1.c.</li></ul>',
          '<h4>4. Cómo funciona el formulario</h4>',
          '<p>Al enviar el formulario se abre tu aplicación de correo con un mensaje ya redactado y dirigido a nosotros. No recibimos nada hasta que envíes ese correo, por lo que los datos pasan por tu proveedor de correo y por el nuestro.</p>',
          '<h4>5. Destinatarios</h4>',
          '<p>No vendemos tus datos. Pueden tratarlos proveedores que nos ayudan a operar: servicios de correo y alojamiento, y WhatsApp (Meta) si nos contactas por ahí. Si aceptas las cookies de analítica y publicidad, Google, Meta y TikTok también reciben datos de navegación. Nuestras páginas cargan tipografías de Google Fonts, por lo que Google recibe tu dirección IP al cargar la página.</p>',
          '<h4>6. Transferencias internacionales</h4>',
          '<p>Algunos de estos proveedores están fuera del Espacio Económico Europeo, principalmente en Estados Unidos. Las transferencias se amparan en garantías como el Marco de Privacidad de Datos UE–EE. UU. o las cláusulas contractuales tipo.</p>',
          '<h4>7. Plazo de conservación</h4>',
          '<p>Los datos de las consultas se conservan mientras gestionamos tu solicitud y, después, solo durante el plazo en que puedan surgir reclamaciones u obligaciones legales. Los datos de analítica siguen los plazos de las cookies descritos en la Política de Cookies.</p>',
          '<h4>8. Tus derechos</h4>',
          '<p>Puedes solicitar el acceso, la rectificación, la supresión, la limitación y la portabilidad, oponerte al tratamiento y retirar tu consentimiento en cualquier momento escribiendo a <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>',
          '<h4>9. Cambios</h4>',
          '<p>Podemos actualizar esta política. La fecha de la última versión aparece al inicio de esta página.</p>'
        ].join('')
      },
      cookies: {
        title: 'Política de Cookies',
        html: [
          '<h4>1. Qué cubre esta política</h4>',
          '<p>Explica qué se almacena en tu dispositivo cuando usas ' + COMPANY + ' y cómo puedes controlarlo.</p>',
          '<h4>2. Almacenado en tu navegador, siempre</h4>',
          '<p>Estos elementos son necesarios para que la web recuerde tus decisiones. No se usan para rastrearte.</p>',
          '<ul><li><strong>mn_consent</strong> — recuerda si has aceptado o rechazado la analítica y la publicidad.</li>',
          '<li><strong>mn_lang</strong> — recuerda el idioma elegido.</li></ul>',
          '<h4>3. Analítica y publicidad, solo si aceptas</h4>',
          '<p>Estas herramientas se cargan únicamente después de pulsar Aceptar en el banner de cookies. Nos ayudan a medir las visitas y a gestionar campañas en Instagram, YouTube y TikTok.</p>',
          '<ul><li><strong>Google Analytics 4</strong> (Google) — cuenta las visitas y muestra qué países y páginas funcionan mejor. Cookies habituales: _ga, _ga_*.</li>',
          '<li><strong>Meta Pixel</strong> (Meta) — mide los resultados de los anuncios y nos permite mostrarlos a quienes visitaron la web. Cookie habitual: _fbp.</li>',
          '<li><strong>TikTok Pixel</strong> (TikTok) — la misma finalidad para las campañas de TikTok. Cookie habitual: _ttp.</li></ul>',
          '<p>Si las rechazas, ninguna de estas herramientas se carga. Ten en cuenta que las tipografías se cargan en todo caso desde Google Fonts, que no usa cookies pero sí comparte tu dirección IP con Google (ver Política de Privacidad).</p>',
          '<h4>4. Cambiar tu decisión</h4>',
          '<p>Puedes retirar o modificar tu decisión en cualquier momento. El botón siguiente borra tu elección y vuelve a mostrar el banner de cookies. También puedes eliminar las cookies desde la configuración de tu navegador.</p>',
          '<p><button type="button" class="btn btn-outline btn-small" data-action="reset-consent">Cambiar mi elección de cookies</button></p>',
          '<h4>5. Más información</h4>',
          '<p>Consulta nuestra Política de Privacidad o escribe a <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>'
        ].join('')
      },
      terms: {
        title: 'Términos de Uso',
        html: [
          '<h4>1. Titular del sitio web</h4>',
          '<p>Este sitio web es operado por ' + COMPANY + ' (CIF ' + CIF + '), ' + ADDRESS + ', <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>',
          '<h4>2. Uso del sitio web</h4>',
          '<p>Al usar este sitio web aceptas estos términos. Te comprometes a usarlo de forma lícita y a no interferir en su funcionamiento.</p>',
          '<h4>3. Información de las propiedades</h4>',
          '<p>Los anuncios, precios, descripciones, medidas y fotografías son orientativos y no constituyen una oferta ni un contrato. Las propiedades pueden venderse, retirarse o modificarse sin previo aviso y, pese a nuestro cuidado, los datos pueden contener errores. Confírmalo todo con nosotros antes de tomar una decisión.</p>',
          '<h4>4. Sin asesoramiento profesional</h4>',
          '<p>El contenido de este sitio, incluido el relativo a la zona y a los mercados, es información general. No constituye asesoramiento legal, fiscal ni financiero.</p>',
          '<h4>5. Propiedad intelectual</h4>',
          '<p>Los textos, imágenes, diseño y logotipos pertenecen a ' + COMPANY + ' o a sus respectivos titulares. No pueden copiarse, reproducirse ni distribuirse sin autorización escrita.</p>',
          '<h4>6. Enlaces a otros sitios</h4>',
          '<p>Enlazamos a sitios de terceros, como redes sociales, y no somos responsables de su contenido ni de sus prácticas de privacidad.</p>',
          '<h4>7. Responsabilidad</h4>',
          '<p>No garantizamos que el sitio web esté libre de interrupciones o errores. En la medida permitida por la ley, no respondemos de las pérdidas derivadas de su uso, sin perjuicio de los derechos que te correspondan como consumidor.</p>',
          '<h4>8. Datos personales</h4>',
          '<p>El tratamiento de tus datos se explica en la Política de Privacidad y en la Política de Cookies.</p>',
          '<h4>9. Legislación aplicable</h4>',
          '<p>Estos términos se rigen por la ley española. Las controversias se someten a los juzgados y tribunales de Málaga, sin perjuicio del derecho de los consumidores a acudir a los de su lugar de residencia cuando la ley se lo reconozca.</p>'
        ].join('')
      }
    }
  };

  var overlay = document.getElementById('legalModalOverlay');
  var titleEl = document.getElementById('legalModalTitle');
  var dateEl = document.getElementById('legalModalDate');
  var bodyEl = document.getElementById('legalModalBody');
  var closeBtn = document.getElementById('legalModalClose');
  if (!overlay) return;

  function currentLang() {
    return document.documentElement.getAttribute('data-lang') || localStorage.getItem('mn_lang') || 'en';
  }

  function openLegal(kind) {
    var lang = LEGAL[currentLang()] ? currentLang() : 'en';
    var doc = LEGAL[lang][kind];
    if (!doc) return;
    titleEl.textContent = doc.title;
    dateEl.textContent = UPDATED[lang];
    bodyEl.innerHTML = doc.html;
    closeBtn.setAttribute('aria-label', LEGAL[lang].close);
    overlay.classList.add('open');
    bodyEl.scrollTop = 0;
    overlay.querySelector('.legal-modal').scrollTop = 0;
  }

  function closeLegal() {
    overlay.classList.remove('open');
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-legal]');
    if (trigger) {
      e.preventDefault();
      openLegal(trigger.getAttribute('data-legal'));
      return;
    }
    var action = e.target.closest('[data-action="reset-consent"]');
    if (action) {
      try { localStorage.removeItem('mn_consent'); } catch (err) { /* ignore */ }
      window.location.reload();
    }
  });

  closeBtn.addEventListener('click', closeLegal);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeLegal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeLegal();
  });
})();
