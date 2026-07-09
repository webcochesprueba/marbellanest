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
      icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M8 11L15 4L22 11L15 26L8 11Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M8 11H22" stroke="currentColor" stroke-width="1.2"/><path d="M11.5 11L15 4L18.5 11" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M11.5 11L15 26M18.5 11L15 26" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`
    },
    {
      title: 'Direct Opportunities',
      text: 'Direct connections with owners and developers. No intermediaries.',
      icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M9 25V6.5C9 5.7 9.6 5.1 10.4 5L18.4 3.6C19.2 3.5 20 4.1 20 5V25" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M6 25H24" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M20 25V8L24 9V25" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><circle cx="17" cy="15" r="0.9" fill="currentColor"/></svg>`
    },
    {
      title: 'Local Insight',
      text: 'In-depth knowledge of Marbella to help you make the right choice.',
      icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 27V16" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M15 16C15 16 5 15 5 6C13 6 15 12 15 16Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M15 16C15 16 25 15 25 6C17 6 15 12 15 16Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M15 13C15 13 10 11 8.5 5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><path d="M15 13C15 13 20 11 21.5 5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>`
    },
    {
      title: 'Premium Experience',
      text: 'A discreet, personal and seamless experience from start to finish.',
      icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="4.5" stroke="currentColor" stroke-width="1.2"/><path d="M15 2.5V6.5M15 23.5V27.5M27.5 15H23.5M6.5 15H2.5M23.9 6.1L21.1 8.9M8.9 21.1L6.1 23.9M23.9 23.9L21.1 21.1M8.9 8.9L6.1 6.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`
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
