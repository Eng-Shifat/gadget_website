// ══════════════════════════════════════════════════════
// ElecXO Premium Animations — animations.js
// ══════════════════════════════════════════════════════

// ── 1. HEADER: Sticky glass-morphism on scroll ─────────
(function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    header.style.transform = 'translateY(0)';
    lastY = y;
  }, { passive: true });
})();


// ── 2. HERO SECTION: Entrance animation ────────────────
(function initHeroAnimation() {
  const hero = document.querySelector('.hero-banner');
  const sidebar = document.querySelector('.hero-sidebar');
  if (!hero) return;

  hero.style.opacity = '0';
  hero.style.transform = 'translateX(40px)';
  hero.style.transition = 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)';

  if (sidebar) {
    const cards = sidebar.querySelectorAll('.sidebar-card');
    cards.forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = 'translateX(-30px)';
      c.style.transition = `opacity 0.7s ${0.2 + i * 0.15}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${0.2 + i * 0.15}s cubic-bezier(0.22,1,0.36,1)`;
    });
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      hero.style.opacity = '1';
      hero.style.transform = 'translateX(0)';
      if (sidebar) {
        sidebar.querySelectorAll('.sidebar-card').forEach(c => {
          c.style.opacity = '1';
          c.style.transform = 'translateX(0)';
        });
      }
    }, 100);
  });

  const content = hero.querySelector('.hero-content');
  if (content) {
    [...content.children].forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.6s ${0.4 + i * 0.12}s ease, transform 0.6s ${0.4 + i * 0.12}s ease`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    });
  }

  const heroImg = hero.querySelector('.hero-laptop-img');
  if (heroImg) heroImg.style.animation = 'elecxo-float 4s ease-in-out infinite';
})();


// ── 3. CATEGORY CHIPS: Staggered bounce-in ─────────────
(function initCatChips() {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.cat-chip-btn').forEach((chip, i) => {
      if (chip.dataset.animated) return;
      chip.dataset.animated = '1';
      chip.style.opacity = '0';
      chip.style.transform = 'translateY(12px) scale(0.92)';
      chip.style.transition = `opacity 0.45s ${i * 0.06}s ease, transform 0.45s ${i * 0.06}s cubic-bezier(0.34,1.56,0.64,1)`;
      setTimeout(() => {
        chip.style.opacity = '1';
        chip.style.transform = 'translateY(0) scale(1)';
      }, 50);
    });
  });
  const catList = document.getElementById('cat-list');
  if (catList) observer.observe(catList, { childList: true });
})();


// ── 4. SCROLL REVEAL: Cards fade-up on scroll ──────────
(function initScrollReveal() {
  const style = document.createElement('style');
  style.textContent = `
    .elecxo-reveal {
      opacity: 0;
      transform: translateY(32px);
      transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
    }
    .elecxo-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  function revealCards() {
    const selectors = ['.featured-card', '.grid-card', '.promo-btn', '.section-header'];
    const allCards = document.querySelectorAll(selectors.join(','));
    allCards.forEach(card => {
      if (!card.classList.contains('elecxo-reveal')) card.classList.add('elecxo-reveal');
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          const siblings = [...parent.children].filter(c => c.classList.contains('elecxo-reveal'));
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('visible'), idx * 80);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    allCards.forEach(card => io.observe(card));
  }

  setTimeout(revealCards, 300);

  const mainContent = document.getElementById('featured-section');
  if (mainContent) {
    const mo = new MutationObserver(() => setTimeout(revealCards, 50));
    mo.observe(mainContent, { childList: true, subtree: true });
  }
})();


// ── 5. PRODUCT CARD HOVER: 3D tilt ─────────────────────
(function initCardTilt() {
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.featured-card, .grid-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px) scale(1.02)`;
    card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
    card.style.boxShadow = `${x * -10}px ${y * -10}px 30px rgba(0,0,0,0.12)`;
  });
  document.addEventListener('mouseleave', (e) => {
    const card = e.target.closest('.featured-card, .grid-card');
    if (!card) return;
    card.style.transform = '';
    card.style.transition = 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease';
    card.style.boxShadow = '';
  }, true);
})();


// ── 6. BUTTON RIPPLE EFFECT ─────────────────────────────
(function initRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-to-cart, .hero-cta, .cat-chip-btn, .btn-checkout, .view-all-btn');
    if (!btn) return;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size/2}px;
      top:${e.clientY - rect.top - size/2}px;
      background:rgba(255,255,255,0.35);
      transform:scale(0);
      animation:elecxo-ripple 0.55s ease-out forwards;
      pointer-events:none;
    `;
    const pos = getComputedStyle(btn).position;
    if (pos === 'static') btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
})();


// ── 7. CART DRAWER: Item slide-in ──────────────────────
(function initCartAnimations() {
  const cartBody = document.getElementById('cart-body');
  if (cartBody) {
    const mo = new MutationObserver(() => {
      cartBody.querySelectorAll('.cart-line').forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(20px)';
        line.style.transition = `opacity 0.35s ${i * 0.07}s ease, transform 0.35s ${i * 0.07}s ease`;
        requestAnimationFrame(() => {
          line.style.opacity = '1';
          line.style.transform = 'translateX(0)';
        });
      });
    });
    mo.observe(cartBody, { childList: true });
  }
})();


// ── 8. PRODUCT MODAL: Scale + fade ─────────────────────
(function initModalAnimation() {
  const _openProduct = window.openProduct;
  const _closeModal  = window.closeModal;
  const modal = document.getElementById('product-modal');

  if (_openProduct && modal) {
    window.openProduct = function(id) {
      _openProduct(id);
      document.body.style.overflow = 'hidden';
      modal.style.transition = 'none';
      modal.style.transform = 'translateX(-50%) translateY(-50%) scale(0.88)';
      modal.style.opacity = '0';
      requestAnimationFrame(() => {
        modal.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease';
        modal.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
        modal.style.opacity = '1';
      });
    };
  }
  if (_closeModal && modal) {
    window.closeModal = function() {
      document.body.style.overflow = '';
      modal.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
      modal.style.transform = 'translateX(-50%) translateY(-50%) scale(0.92)';
      modal.style.opacity = '0';
      setTimeout(_closeModal, 230);
    };
  }
})();


// ── 9. BRAND LOGOS: Hover lift effect (no layout break) ─
(function initBrandLogos() {
  setTimeout(() => {
    document.querySelectorAll('.brand-logo-box').forEach((box, i) => {
      box.style.transition = 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease';
      box.style.cursor = 'pointer';
      box.style.borderRadius = '8px';
      box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-4px) scale(1.08)';
        box.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
      });
      box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0) scale(1)';
        box.style.boxShadow = 'none';
      });
    });

    // Force show images if already cached/loaded
    document.querySelectorAll('.brand-logo-img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        img.style.display = 'block';
        const fallback = img.nextElementSibling;
        if (fallback) fallback.style.display = 'none';
      }
    });
  }, 500);
})();


// ── 10. CURSOR GLOW (desktop only) ─────────────────────
(function initCursorGlow() {
  if (window.matchMedia('(hover: none)').matches) return;
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed; width:280px; height:280px; border-radius:50%;
    background:radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%);
    pointer-events:none; z-index:9999; transform:translate(-50%,-50%);
    transition:opacity 0.3s ease; opacity:0;
  `;
  document.body.appendChild(glow);
  let tx=0, ty=0, cx=0, cy=0;
  document.addEventListener('mousemove', (e) => { tx=e.clientX; ty=e.clientY; glow.style.opacity='1'; }, { passive:true });
  document.addEventListener('mouseleave', () => { glow.style.opacity='0'; });
  (function loop() {
    cx += (tx-cx)*0.12; cy += (ty-cy)*0.12;
    glow.style.left=cx+'px'; glow.style.top=cy+'px';
    requestAnimationFrame(loop);
  })();
})();


// ── 11. PROMO BANNERS: Parallax hover ──────────────────
(function initPromoParallax() {
  document.querySelectorAll('.promo-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const img = btn.querySelector('.promo-img');
      if (img) {
        img.style.transform = `translate(${x * 12}px, ${y * 8}px) scale(1.05)`;
        img.style.transition = 'transform 0.15s ease';
      }
    });
    btn.addEventListener('mouseleave', () => {
      const img = btn.querySelector('.promo-img');
      if (img) {
        img.style.transform = 'translate(0,0) scale(1)';
        img.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
      }
    });
  });
})();


// ── 12. SEARCH INPUT: Glow on focus ────────────────────
(function initSearchExpand() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('focus', () => {
    input.style.transition = 'box-shadow 0.35s ease';
    input.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.18)';
  });
  input.addEventListener('blur', () => { input.style.boxShadow = ''; });
})();


// ── 13. CART BADGE PULSE on add ────────────────────────
(function initBadgePulse() {
  const _cartAdd = window.cartAdd;
  if (!_cartAdd) return;
  window.cartAdd = function(product, qty) {
    _cartAdd(product, qty);
    const badge = document.getElementById('cart-badge');
    if (badge) {
      badge.classList.remove('cart-badge-pop');
      void badge.offsetWidth;
      badge.classList.add('cart-badge-pop');
      setTimeout(() => badge.classList.remove('cart-badge-pop'), 450);
    }
  };
})();


// ── 14. PAGE LOAD PROGRESS BAR ──────────────────────────
(function initLoadBar() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position:fixed; top:0; left:0; height:3px; width:0%;
    background:linear-gradient(90deg,#6366f1,#8b5cf6,#a78bfa);
    z-index:99999; transition:width 0.4s ease, opacity 0.5s ease;
    box-shadow:0 0 8px rgba(99,102,241,0.6);
  `;
  document.body.appendChild(bar);
  let prog = 0;
  const t = setInterval(() => { prog += Math.random()*20; if(prog>85) prog=85; bar.style.width=prog+'%'; }, 120);
  window.addEventListener('load', () => {
    clearInterval(t); bar.style.width='100%';
    setTimeout(() => bar.style.opacity='0', 400);
    setTimeout(() => bar.remove(), 900);
  });
})();


// ── 15. GLOBAL KEYFRAMES + CSS ──────────────────────────
(function injectKeyframes() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elecxo-float {
      0%,100% { transform: translateY(0px) rotate(-1deg); }
      50%      { transform: translateY(-12px) rotate(1deg); }
    }
    @keyframes elecxo-ripple {
      to { transform: scale(1); opacity: 0; }
    }
    @keyframes elecxo-fade-up {
      from { opacity:0; transform:translateY(24px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes elecxo-pulse-badge {
      0%,100% { transform: scale(1); }
      50%     { transform: scale(1.3); }
    }

    #site-header {
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), background 0.35s ease, box-shadow 0.35s ease;
      will-change: transform;
    }
    #site-header.scrolled {
      background: rgba(255, 255, 255, 0.15) !important;
      backdrop-filter: blur(24px) saturate(200%) !important;
      -webkit-backdrop-filter: blur(24px) saturate(200%) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25) !important;
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08) !important;
    }
    .cart-badge-pop { animation: elecxo-pulse-badge 0.4s ease; }

    .sidebar-card {
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease !important;
    }
    .sidebar-card:hover {
      transform: translateY(-6px) scale(1.03) !important;
      box-shadow: 0 16px 40px rgba(0,0,0,0.16) !important;
    }
    .hero-cta {
      transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    }
    .hero-cta:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(0,0,0,0.22) !important; }
    .hero-cta:active { transform: translateY(0) !important; }
    .view-all-btn { transition: transform 0.2s ease !important; }
    .view-all-btn:hover { transform: translateY(-1px) !important; }
    .social-icon { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1) !important; }
    .social-icon:hover { transform: translateY(-4px) scale(1.15) !important; }
  `;
  document.head.appendChild(style);
})();

console.log('%cElecXO Animations Loaded ✨', 'color:#6366f1;font-weight:bold;font-size:14px;');


// ── 16. CATEGORIES BUTTON: click → resetHome, no chip trigger ──
(function initCategoriesBtn() {
  const btn = document.getElementById('cat-stripe-btn');
  if (!btn) return;
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    resetHome();
  });
})();
