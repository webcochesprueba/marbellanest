/* ==========================================================================
   MarbellaNest.com — Script
   - i18n rendering (see i18n.js for translation data)
   - Marketing pixel / analytics scaffolding (GA4, Meta, TikTok)
   - Lead tracking on WhatsApp, phone, form, partner-referral clicks
   - Renders property, funnel, why-us, lifestyle and partner content
   - Mobile menu, language switcher, sticky header, cookie consent
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const PLACEHOLDER = 'images/placeholder.png';
  const STORAGE_LANG_KEY = 'mn_lang';
  const STORAGE_CONSENT_KEY = 'mn_consent';

  /* ======================================================================
     MARKETING / TRACKING LAYER
     ------------------------------------------------------------------
     This is intentionally a thin, isolated layer. Swap the placeholder
     IDs in index.html's <head> with real ones, and this fires:
       - PageView on load (once consent is given)
       - Lead events on WhatsApp / phone / partner-WhatsApp clicks
       - Lead event on form submit, tagged with the buyer's country
         (so you can see which of the 9 target markets converts best)
     Nothing here calls out to real ad networks yet — the fetch/gtag/fbq
     calls are guarded so this runs cleanly with placeholder IDs and just
     logs to console until real IDs + consent are wired in.
     ====================================================================== */

  const Tracking = {
    consentGiven: localStorage.getItem(STORAGE_CONSENT_KEY) === 'granted',

    init() {
      if (!this.consentGiven) return;
      this.loadPixels();
      this.trackPageView();
    },

    loadPixels() {
      // GA4
      if (window.GA4_MEASUREMENT_ID && !window.GA4_MEASUREMENT_ID.startsWith('G-XXXX')) {
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA4_MEASUREMENT_ID}`;
        document.head.appendChild(s1);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', window.GA4_MEASUREMENT_ID);
      }
      // Meta Pixel (Instagram/Facebook)
      if (window.META_PIXEL_ID && window.META_PIXEL_ID !== '000000000000000') {
        /* eslint-disable */
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        window.fbq('init', window.META_PIXEL_ID);
        window.fbq('track', 'PageView');
        /* eslint-enable */
      }
      // TikTok Pixel
      if (window.TIKTOK_PIXEL_ID && !window.TIKTOK_PIXEL_ID.startsWith('XXXX')) {
        /* eslint-disable */
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
          ttq.load(w.TIKTOK_PIXEL_ID);
          ttq.page();
        }(window, document, 'ttq');
        /* eslint-enable */
      }
    },

    trackPageView() {
      console.info('[Tracking] PageView', { path: window.location.pathname, lang: document.documentElement.getAttribute('data-lang') });
    },

    trackLead(type, meta = {}) {
      const payload = { event: 'lead', lead_type: type, ...meta, timestamp: new Date().toISOString() };
      console.info('[Tracking] Lead event', payload);
      if (!this.consentGiven) return;
      if (window.gtag) window.gtag('event', 'generate_lead', { lead_type: type, ...meta });
      if (window.fbq) window.fbq('track', 'Lead', { content_name: type, ...meta });
      if (window.ttq) window.ttq.track('SubmitForm', { content_type: type, ...meta });
    },

    trackSocialClick(platform) {
      console.info('[Tracking] Social click', platform);
      if (window.gtag) window.gtag('event', 'social_click', { platform });
    }
  };

  Tracking.init();

  // Attach lead tracking to any element with data-track="lead"
  document.querySelectorAll('[data-track="lead"]').forEach(el => {
    el.addEventListener('click', () => {
      Tracking.trackLead(el.getAttribute('data-lead-type') || 'unknown');
    });
  });

  document.querySelectorAll('[data-track="social_click"]').forEach(el => {
    el.addEventListener('click', () => {
      Tracking.trackSocialClick(el.getAttribute('data-platform') || 'unknown');
    });
  });

  /* ======================================================================
     COOKIE / TRACKING CONSENT BANNER
     Required before firing retargeting pixels for EU visitors (GDPR).
     ====================================================================== */

  const consentBanner = document.getElementById('consentBanner');
  const consentAccept = document.getElementById('consentAccept');
  const consentDecline = document.getElementById('consentDecline');
  const storedConsent = localStorage.getItem(STORAGE_CONSENT_KEY);

  if (!storedConsent) {
    setTimeout(() => consentBanner.classList.add('visible'), 600);
  }

  consentAccept.addEventListener('click', () => {
    localStorage.setItem(STORAGE_CONSENT_KEY, 'granted');
    consentBanner.classList.remove('visible');
    Tracking.consentGiven = true;
    Tracking.init();
  });

  consentDecline.addEventListener('click', () => {
    localStorage.setItem(STORAGE_CONSENT_KEY, 'denied');
    consentBanner.classList.remove('visible');
  });

  /* ======================================================================
     i18n — LANGUAGE SWITCHING
     ====================================================================== */

  const I18n = {
    current: localStorage.getItem(STORAGE_LANG_KEY) || 'en',

    t(key) {
      const dict = TRANSLATIONS[this.current] || TRANSLATIONS.en;
      return dict[key] ?? TRANSLATIONS.en[key] ?? key;
    },

    apply() {
      document.documentElement.setAttribute('lang', this.current);
      document.documentElement.setAttribute('data-lang', this.current);

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = this.t(key);
        // allow simple inline HTML (e.g. <strong>, <a>) in a few known strings
        if (/<[a-z][\s\S]*>/i.test(val)) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', this.t(el.getAttribute('data-i18n-placeholder')));
      });

      const currentLabel = LANGUAGES.find(l => l.code === this.current);
      document.getElementById('langCurrent').textContent = this.current.toUpperCase();

      renderContent();
    },

    setLang(code) {
      if (!TRANSLATIONS[code]) return;
      this.current = code;
      localStorage.setItem(STORAGE_LANG_KEY, code);
      this.apply();
    }
  };

  // Build language menu (desktop dropdown + mobile row)
  const langMenu = document.getElementById('langMenu');
  const mobileLangRow = document.getElementById('mobileLangRow');

  LANGUAGES.forEach(lang => {
    const btn = document.createElement('button');
    btn.textContent = lang.label;
    btn.setAttribute('data-lang-code', lang.code);
    btn.addEventListener('click', () => {
      I18n.setLang(lang.code);
      langMenu.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
      updateLangActiveStates();
    });
    langMenu.appendChild(btn);

    const mBtn = document.createElement('button');
    mBtn.textContent = lang.code.toUpperCase();
    mBtn.setAttribute('data-lang-code', lang.code);
    mBtn.addEventListener('click', () => {
      I18n.setLang(lang.code);
      updateLangActiveStates();
    });
    mobileLangRow.appendChild(mBtn);
  });

  function updateLangActiveStates() {
    document.querySelectorAll('[data-lang-code]').forEach(el => {
      el.setAttribute('aria-current', el.getAttribute('data-lang-code') === I18n.current ? 'true' : 'false');
    });
  }

  const langBtn = document.getElementById('langBtn');
  langBtn.addEventListener('click', () => {
    const open = langMenu.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#langSwitch')) {
      langMenu.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------------- Icons (shared) ---------------- */

  const iconBed = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v2M21 18v2M3 12V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M13 10h6a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconBath = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M7 12V6a2 2 0 0 1 3.2-1.6M4 12V9a2 2 0 0 1 2-2h1M6 20v1.5M16 20v1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;
  const iconSize = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconHeart = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20.5s-7.5-4.6-10-9.3C.5 7.8 2.3 4.5 5.7 4c2-.3 3.9.6 5 2.2C11.8 4.6 13.7 3.7 15.7 4c3.4.5 5.2 3.8 3.7 7.2C16.9 15.9 12 20.5 12 20.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

  const whyIcons = [
    `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M8 11L15 4L22 11L15 26L8 11Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M8 11H22" stroke="currentColor" stroke-width="1.2"/><path d="M11.5 11L15 4L18.5 11" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M11.5 11L15 26M18.5 11L15 26" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
    `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M9 25V6.5C9 5.7 9.6 5.1 10.4 5L18.4 3.6C19.2 3.5 20 4.1 20 5V25" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M6 25H24" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M20 25V8L24 9V25" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><circle cx="17" cy="15" r="0.9" fill="currentColor"/></svg>`,
    `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 27V16" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M15 16C15 16 5 15 5 6C13 6 15 12 15 16Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M15 16C15 16 25 15 25 6C17 6 15 12 15 16Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M15 13C15 13 10 11 8.5 5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><path d="M15 13C15 13 20 11 21.5 5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>`,
    `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="4.5" stroke="currentColor" stroke-width="1.2"/><path d="M15 2.5V6.5M15 23.5V27.5M27.5 15H23.5M6.5 15H2.5M23.9 6.1L21.1 8.9M8.9 21.1L6.1 23.9M23.9 23.9L21.1 21.1M8.9 8.9L6.1 6.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`
  ];

  const lifestyleImages = [
    { image: 'images/lifestyle-1.png', alt: 'Marbella beach lifestyle' },
    { image: 'images/lifestyle-2.png', alt: 'Marbella gastronomy and dining' },
    { image: 'images/lifestyle-3.png', alt: 'Golf courses in Marbella' },
    { image: 'images/lifestyle-4.png', alt: 'Marbella old town culture' }
  ];

  const propertyImages = [PLACEHOLDER, 'images/placeholder-2.png', 'images/placeholder-3.png'];
  const propertyStats = [
    { beds: 5, baths: 6, size: '712 m²' },
    { beds: 6, baths: 7, size: '860 m²' },
    { beds: 4, baths: 4, size: '477 m²' }
  ];

  /* ---------------- Render: everything driven by i18n data ---------------- */

  function renderContent() {
    renderProperties();
    renderFunnel();
    renderWhy();
    renderPackages();
    renderLifestyle();
    renderPartnerServices();
    initLifestyleCarousel();
    updateLangActiveStates();
  }

  function renderProperties() {
    const properties = I18n.t('properties');
    const propertyGrid = document.getElementById('propertyGrid');
    const enquireLabel = I18n.t('cta.enquire');
    const waLabel = I18n.t('cta.whatsapp');

    propertyGrid.innerHTML = properties.map((p, i) => `
      <article class="property-card is-unavailable" data-index="${i}">
        <div class="property-media">
          <img src="${propertyImages[i] || PLACEHOLDER}" alt="${p.title}" loading="lazy">
          <span class="property-sold-badge">${I18n.t('status.unavailable')}</span>
          <button class="fav-btn" data-index="${i}" aria-label="Save property" aria-pressed="false">
            ${iconHeart}
          </button>
        </div>
        <div class="property-body">
          <h3 class="property-title">${p.title}</h3>
          <div class="property-meta">
            <div class="property-stats">
              <span>${iconBed} ${propertyStats[i].beds}</span>
              <span>${iconBath} ${propertyStats[i].baths}</span>
              <span>${iconSize} ${propertyStats[i].size}</span>
            </div>
            <span class="property-price">${p.price}</span>
          </div>
          <div class="property-card-cta">
            <a href="#contact" class="btn btn-outline" onclick="event.stopPropagation()">${enquireLabel}</a>
            <a href="https://wa.me/34711095254?text=${encodeURIComponent('Hi, I\'m interested in: ' + p.title)}" target="_blank" rel="noopener" class="btn btn-whatsapp" data-track="lead" data-lead-type="whatsapp_property" onclick="event.stopPropagation()">${waLabel}</a>
          </div>
        </div>
      </article>
    `).join('');

    // re-attach lead tracking for newly injected WhatsApp buttons
    propertyGrid.querySelectorAll('[data-track="lead"]').forEach(el => {
      el.addEventListener('click', () => Tracking.trackLead(el.getAttribute('data-lead-type') || 'unknown'));
    });

    propertyGrid.addEventListener('click', (e) => {
      const favBtn = e.target.closest('.fav-btn');
      if (favBtn) {
        e.stopPropagation();
        const isActive = favBtn.classList.toggle('active');
        favBtn.setAttribute('aria-pressed', String(isActive));
        return;
      }
      const card = e.target.closest('.property-card');
      if (card) {
        const idx = Number(card.getAttribute('data-index'));
        openPropertyModal(idx);
      }
    });
  }

  /* ---------------- Property detail modal ---------------- */

  const propertyModalOverlay = document.getElementById('propertyModalOverlay');
  const propertyModalClose = document.getElementById('propertyModalClose');

  function openPropertyModal(i) {
    const properties = I18n.t('properties');
    const p = properties[i];
    if (!p) return;

    document.getElementById('propertyModalImg').src = propertyImages[i] || PLACEHOLDER;
    document.getElementById('propertyModalImg').alt = p.title;
    document.getElementById('propertyModalStatus').textContent = I18n.t('status.unavailable');
    document.getElementById('propertyModalTitle').textContent = p.title;
    document.getElementById('propertyModalMeta').innerHTML = `
      <span>${iconBed} ${propertyStats[i].beds}</span>
      <span>${iconBath} ${propertyStats[i].baths}</span>
      <span>${iconSize} ${propertyStats[i].size}</span>
    `;
    document.getElementById('propertyModalPrice').textContent = p.price;
    document.getElementById('propertyModalNote').textContent = I18n.t('properties.soldNote');

    propertyModalOverlay.classList.add('open');
  }

  function closePropertyModal() {
    propertyModalOverlay.classList.remove('open');
  }

  if (propertyModalClose) propertyModalClose.addEventListener('click', closePropertyModal);
  if (propertyModalOverlay) {
    propertyModalOverlay.addEventListener('click', (e) => {
      if (e.target === propertyModalOverlay) closePropertyModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePropertyModal();
  });

  function renderFunnel() {
    const steps = I18n.t('funnelSteps');
    document.getElementById('funnelSteps').innerHTML = steps.map((s, i) => `
      <div class="funnel-step">
        <div class="funnel-num">0${i + 1}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>
    `).join('');
  }

  function renderWhy() {
    const items = I18n.t('whyItems');
    document.getElementById('whyGrid').innerHTML = items.map((item, i) => `
      <div class="why-item">
        <div class="why-icon">${whyIcons[i] || whyIcons[0]}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `).join('');
  }

  const iconCheck = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function renderPackages() {
    const packages = I18n.t('packages.items');
    const el = document.getElementById('packageGrid');
    if (!el || !Array.isArray(packages)) return;

    el.innerHTML = packages.map(pkg => `
      <div class="package-card${pkg.featured ? ' featured' : ''}">
        ${pkg.featured ? `<span class="package-featured-badge">${I18n.t('packages.featuredBadge')}</span>` : ''}
        <div class="package-name">${pkg.name}</div>
        <h3>${pkg.title}</h3>
        <p class="package-tagline">${pkg.tagline}</p>
        <div class="package-price">
          <span class="package-price-amount">${pkg.price}</span>
        </div>
        <p class="package-price-note">${pkg.priceNote}</p>
        <ul class="package-features">
          ${pkg.features.map(f => `<li>${iconCheck}<span>${f}</span></li>`).join('')}
        </ul>
        <a href="#contact" class="btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}" data-track="lead" data-lead-type="package_enquiry" data-package="${pkg.name}">${pkg.cta}</a>
      </div>
    `).join('');

    el.querySelectorAll('[data-track="lead"]').forEach(elm => {
      elm.addEventListener('click', () => Tracking.trackLead(elm.getAttribute('data-lead-type') || 'unknown', { package: elm.getAttribute('data-package') }));
    });
  }

  function renderLifestyle() {
    const gallery = document.getElementById('lifestyleGallery');
    if (!gallery) return;
    gallery.innerHTML = lifestyleImages.map(item => `
      <div class="lifestyle-item">
        <figure>
          <div class="lifestyle-media">
            <img src="${item.image}" alt="${item.alt}" loading="lazy">
          </div>
          <figcaption>${item.alt}</figcaption>
        </figure>
      </div>
    `).join('');
  }

  function renderPartnerServices() {
    const services = I18n.t('partner.services');
    const el = document.getElementById('partnerServices');
    if (!el || !Array.isArray(services)) return;
    el.innerHTML = services.map(s => `<span>${s}</span>`).join('');
  }

  function initLifestyleCarousel() {
    const track = document.getElementById('lifestyleTrack');
    const prev = document.getElementById('lifestylePrev');
    const next = document.getElementById('lifestyleNext');
    const pagination = document.getElementById('lifestylePagination');
    if (!track || !pagination) return;

    const slides = Array.from(track.querySelectorAll('.lifestyle-slide'));
    const total = slides.length;
    let index = 0;

    pagination.innerHTML = slides.map((_, i) =>
      `<button type="button" class="lifestyle-dot${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}" aria-pressed="${i === 0}"></button>`
    ).join('');
    const dots = Array.from(pagination.querySelectorAll('.lifestyle-dot'));

    function show(i) {
      index = (i + total) % total;
      slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
      dots.forEach((d, n) => {
        d.classList.toggle('is-active', n === index);
        d.setAttribute('aria-pressed', String(n === index));
      });
    }

    if (prev) prev.addEventListener('click', () => show(index - 1));
    if (next) next.addEventListener('click', () => show(index + 1));
    dots.forEach((d) => d.addEventListener('click', () => show(Number(d.getAttribute('data-index')))));
    show(0);
  }

  /* ---------------- Enquiry form ---------------- */

  const enquiryForm = document.getElementById('enquiryForm');
  const formSuccess = document.getElementById('formSuccess');

  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(enquiryForm);
    const country = formData.get('country');
    const budget = formData.get('budget');

    // TODO: replace with a real submission endpoint (e.g. your CRM's
    // form API, a serverless function, or a service like Formspree).
    // The event fires regardless so ad platforms can attribute the lead.
    console.info('[Form] Enquiry submitted', Object.fromEntries(formData.entries()));

    Tracking.trackLead('enquiry_form', { country, budget });

    enquiryForm.classList.add('submitted');
    formSuccess.classList.add('visible');
  });

  /* ---------------- Mobile menu ---------------- */

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------------- Sticky header shadow ---------------- */

  const header = document.getElementById('siteHeader');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ---------------- Footer year ---------------- */

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------- Boot ---------------- */

  I18n.apply();
});
