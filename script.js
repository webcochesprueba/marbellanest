/* ==========================================================================
   MarbellaNext.com — Script
   - Renders property, "why us" and lifestyle content
   - Mobile menu toggle
   - Sticky header shadow on scroll
   - Favorite (heart) toggle on property cards
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const PLACEHOLDER = 'images/placeholder.png';

  /* ---------------- Data ---------------- */

  const properties = [
    {
      tag: 'Golden Mile',
      title: 'Elegant Villa in Lomas del Rey',
      beds: 5,
      baths: 6,
      size: '712 m²',
      price: '€5,950,000',
      image: PLACEHOLDER,
      alt: 'Elegant villa in Lomas del Rey, Golden Mile, Marbella'
    },
    {
      tag: 'Sierra Blanca',
      title: 'Contemporary Villa with Sea Views',
      beds: 6,
      baths: 7,
      size: '860 m²',
      price: '€8,750,000',
      image: PLACEHOLDER,
      alt: 'Contemporary villa with sea views in Sierra Blanca, Marbella'
    },
    {
      tag: 'Nueva Andalucía',
      title: 'Andalusian Charm in Nueva Andalucia',
      beds: 4,
      baths: 4,
      size: '477 m²',
      price: '€3,650,000',
      image: PLACEHOLDER,
      alt: 'Andalusian style villa in Nueva Andalucia, Marbella'
    }
  ];

  const whyUs = [
    {
      title: 'Curated Selection',
      text: 'We handpick only the most exceptional homes in Marbella.',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 11L14 3L22 11L14 25L6 11Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 11H22M10.5 11L14 3L17.5 11M10.5 11L14 25M17.5 11L14 25" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`
    },
    {
      title: 'Direct Opportunities',
      text: 'Direct connections with owners and developers. No intermediaries.',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M9 4H19V24L14 21.5L9 24V4Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M9 4C9 4 6 4 6 7V21C6 24 9 24 9 24" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
    },
    {
      title: 'Local Insight',
      text: 'In-depth knowledge of Marbella to help you make the right choice.',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C14 4 17 8 17 12C17 14.7614 15.7614 17 13 17C10.2386 17 9 14.7614 9 12C9 8 14 4 14 4Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M14 17V25" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M14 21C14 21 8 20 8 15" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M14 21C14 21 20 20 20 15" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
    },
    {
      title: 'Premium Experience',
      text: 'A discreet, personal and seamless experience from start to finish.',
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="5" stroke="currentColor" stroke-width="1.3"/><path d="M14 3V6M14 22V25M25 14H22M6 14H3M21.1 6.9L19 9M9 19L6.9 21.1M21.1 21.1L19 19M9 9L6.9 6.9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
    }
  ];

  const lifestyle = [
    { name: 'Beaches', image: PLACEHOLDER, alt: 'Marbella beach lifestyle' },
    { name: 'Gastronomy', image: PLACEHOLDER, alt: 'Marbella gastronomy and dining' },
    { name: 'Golf', image: PLACEHOLDER, alt: 'Golf courses in Marbella' },
    { name: 'Culture', image: PLACEHOLDER, alt: 'Marbella old town culture' }
  ];

  /* ---------------- Icons (shared) ---------------- */

  const iconBed = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v2M21 18v2M3 12V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M13 10h6a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconBath = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M7 12V6a2 2 0 0 1 3.2-1.6M4 12V9a2 2 0 0 1 2-2h1M6 20v1.5M16 20v1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;
  const iconSize = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconHeart = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20.5s-7.5-4.6-10-9.3C.5 7.8 2.3 4.5 5.7 4c2-.3 3.9.6 5 2.2C11.8 4.6 13.7 3.7 15.7 4c3.4.5 5.2 3.8 3.7 7.2C16.9 15.9 12 20.5 12 20.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
  const iconArrow = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  /* ---------------- Render: Properties ---------------- */

  const propertyGrid = document.getElementById('propertyGrid');

  propertyGrid.innerHTML = properties.map((p, i) => `
    <article class="property-card">
      <div class="property-media">
        <img src="${p.image}" alt="${p.alt}" loading="lazy">
        <button class="fav-btn" data-index="${i}" aria-label="Guardar propiedad en favoritos" aria-pressed="false">
          ${iconHeart}
        </button>
      </div>
      <div class="property-body">
        <span class="property-tag">${p.tag}</span>
        <h3 class="property-title">${p.title}</h3>
        <div class="property-meta">
          <div class="property-stats">
            <span>${iconBed} ${p.beds}</span>
            <span>${iconBath} ${p.baths}</span>
            <span>${iconSize} ${p.size}</span>
          </div>
          <span class="property-price">${p.price}</span>
        </div>
      </div>
    </article>
  `).join('');

  propertyGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-btn');
    if (!btn) return;
    const isActive = btn.classList.toggle('active');
    btn.setAttribute('aria-pressed', String(isActive));
  });

  /* ---------------- Render: Why MarbellaNext ---------------- */

  const whyGrid = document.getElementById('whyGrid');

  whyGrid.innerHTML = whyUs.map(item => `
    <div class="why-item">
      <div class="why-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `).join('');

  /* ---------------- Render: Lifestyle gallery ---------------- */

  const lifestyleGallery = document.getElementById('lifestyleGallery');

  lifestyleGallery.innerHTML = lifestyle.map(item => `
    <div class="lifestyle-item">
      <figure>
        <div class="lifestyle-media">
          <img src="${item.image}" alt="${item.alt}" loading="lazy">
        </div>
        <figcaption>${item.name}</figcaption>
      </figure>
    </div>
  `).join('');

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

  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ---------------- Footer year ---------------- */

  document.getElementById('year').textContent = new Date().getFullYear();

});
