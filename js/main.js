// ═══════════════════════════════
// CART UI
// ═══════════════════════════════
function updateCartUI() {
  const count = cart.count;
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
  renderCartSidebar();
}

function renderCartSidebar() {
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('checkout-btn');
  if (!itemsEl) return;

  if (cart.items.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🧉</div>
        <p>Tu carrito está vacío</p>
        <a href="catalogo.html" class="btn btn-primary" style="font-size:0.82rem;padding:0.65rem 1.25rem;">Ver catálogo</a>
      </div>`;
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }
  if (checkoutBtn) checkoutBtn.disabled = false;

  itemsEl.innerHTML = cart.items.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${getImagePath(item.image)}" alt="${item.name}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="img-placeholder" style="display:none;width:72px;height:72px;border-radius:6px;font-size:1.5rem;">🧉</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="cart.updateQty(${item.id}, ${item.qty - 1}); updateCartUI()">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="cart.updateQty(${item.id}, ${item.qty + 1}); updateCartUI()">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="cart.remove(${item.id}); updateCartUI()" title="Eliminar">✕</button>
    </div>
  `).join('');

  if (totalEl) totalEl.textContent = formatPrice(cart.total);
}

function openCart() {
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ═══════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════
// Estado del carrusel de variantes del modal (un producto a la vez)
let galleryState = null;

function buildModalMedia(product) {
  const hasGallery = Array.isArray(product.gallery) && product.gallery.length > 1;
  if (!hasGallery) {
    return `
      <div class="modal-image">
        <img src="${getImagePath(product.image)}" alt="${product.name}"
          onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'img-placeholder\\' style=\\'height:100%;font-size:4rem;\\'>🧉</div>'">
      </div>`;
  }
  const slides = product.gallery.map(v => `
    <div class="mg-slide"><img src="${getImagePath(v.src)}" alt="${product.name} — ${v.label}"
      onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'img-placeholder\\' style=\\'height:100%;font-size:4rem;\\'>🧉</div>'"></div>`).join('');
  const dots = product.gallery.map((v, i) =>
    `<button class="mg-dot" onclick="galleryGo(${i})" aria-label="${v.label}"></button>`).join('');
  return `
    <div class="modal-image modal-gallery">
      <div class="mg-viewport" id="mg-viewport">
        <div class="mg-track" id="mg-track">${slides}</div>
      </div>
      <button class="mg-nav mg-prev" onclick="galleryStep(-1)" aria-label="Diseño anterior">‹</button>
      <button class="mg-nav mg-next" onclick="galleryStep(1)" aria-label="Diseño siguiente">›</button>
      <span class="mg-counter" id="mg-counter"></span>
      <div class="mg-dots">${dots}</div>
    </div>`;
}

function openProductModal(product) {
  const overlay = document.getElementById('product-modal');
  if (!overlay) return;
  const hasGallery = Array.isArray(product.gallery) && product.gallery.length > 1;
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="modal-close-btn" onclick="closeProductModal()">✕</button>
      <div class="modal-body">
        ${buildModalMedia(product)}
        <div class="modal-info">
          <div class="modal-category">${CATEGORIES.find(c => c.id === product.category)?.label || ''} ${CATEGORIES.find(c => c.id === product.category)?.icon || ''}</div>
          <h2 class="modal-title">${product.name}</h2>
          ${hasGallery ? `<div class="modal-variant">Diseño: <strong id="mg-label"></strong></div>` : ''}
          <div class="modal-price">${formatPrice(product.price)}</div>
          <p class="modal-desc">${product.description}</p>
          <div class="modal-actions">
            <button class="btn btn-primary" onclick="addToCartFromModal(${product.id}); updateCartUI(); closeProductModal()">
              🛒 Agregar al carrito
            </button>
            <button class="btn btn-secondary" onclick="closeProductModal()">
              Seguir viendo productos
            </button>
          </div>
        </div>
      </div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.onclick = (e) => { if (e.target === overlay) closeProductModal(); };

  if (hasGallery) {
    galleryState = {
      items: product.gallery,
      index: 0,
      track: document.getElementById('mg-track'),
      label: document.getElementById('mg-label'),
      counter: document.getElementById('mg-counter'),
      dots: overlay.querySelectorAll('.mg-dot')
    };
    galleryGo(0);
    initGallerySwipe();
  } else {
    galleryState = null;
  }
}

function galleryGo(i) {
  if (!galleryState) return;
  const n = galleryState.items.length;
  galleryState.index = (i + n) % n;
  const idx = galleryState.index;
  galleryState.track.style.transform = `translateX(${-idx * 100}%)`;
  if (galleryState.label) galleryState.label.textContent = galleryState.items[idx].label;
  if (galleryState.counter) galleryState.counter.textContent = `${idx + 1} / ${n}`;
  galleryState.dots.forEach((d, di) => d.classList.toggle('active', di === idx));
}

function galleryStep(dir) {
  if (galleryState) galleryGo(galleryState.index + dir);
}

function initGallerySwipe() {
  const vp = document.getElementById('mg-viewport');
  if (!vp) return;
  let startX = 0, dragging = false;
  vp.addEventListener('pointerdown', e => { dragging = true; startX = e.clientX; });
  vp.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 45) galleryStep(dx < 0 ? 1 : -1);
  });
  vp.addEventListener('pointercancel', () => { dragging = false; });
}

// Agrega el producto al carrito; si hay un diseño elegido en el carrusel,
// lo refleja en el nombre (para el carrito y el mensaje de WhatsApp).
function addToCartFromModal(productId) {
  const product = getProductById(productId);
  if (!product) return;
  if (galleryState && Array.isArray(product.gallery)) {
    const design = galleryState.items[galleryState.index].label;
    cart.add({ ...product, name: `${product.name} (${design})` });
  } else {
    cart.add(product);
  }
}

function closeProductModal() {
  const overlay = document.getElementById('product-modal');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
  galleryState = null;
}

// ═══════════════════════════════
// PRODUCT CARD
// ═══════════════════════════════
function createProductCard(product) {
  const catLabel = CATEGORIES.find(c => c.id === product.category)?.label || '';
  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.innerHTML = `
    <div class="product-card-image" onclick="openProductModal(getProductById(${product.id}))" style="cursor:pointer">
      ${product.featured ? '<div class="product-badge">Destacado</div>' : ''}
      <img src="${getImagePath(product.image)}" alt="${product.name}" loading="lazy"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="img-placeholder" style="display:none">🧉</div>
      <div class="product-card-overlay">
        <button class="btn btn-gold" onclick="event.stopPropagation();openProductModal(getProductById(${product.id}))">Ver producto</button>
      </div>
    </div>
    <div class="product-card-body" onclick="openProductModal(getProductById(${product.id}))" style="cursor:pointer">
      <div class="product-category-tag">${catLabel}</div>
      <h3>${product.name}</h3>
      <div class="product-price">${formatPrice(product.price)}</div>
    </div>
    <div class="product-card-footer">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="event.stopPropagation();cart.add(getProductById(${product.id})); updateCartUI()">🛒 Agregar al carrito</button>
    </div>`;
  return card;
}

// ═══════════════════════════════
// REVEAL ON SCROLL
// ═══════════════════════════════
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function observeNewCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ═══════════════════════════════
// HEADER SCROLL
// ═══════════════════════════════
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ═══════════════════════════════
// MOBILE MENU
// ═══════════════════════════════
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-mobile');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });
  closeBtn?.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileMenu?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ═══════════════════════════════
// FEATURED PRODUCTS (Home)
// ═══════════════════════════════
function loadFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = getFeaturedProducts();
  featured.forEach((p, i) => {
    const card = createProductCard(p);
    card.classList.add(`reveal-delay-${Math.min(i % 4 + 1, 4)}`);
    grid.appendChild(card);
  });
  observeNewCards();
}

// ═══════════════════════════════
// CATALOG PAGE
// ═══════════════════════════════
let currentCategory = 'todos';
let searchTerm = '';

function loadCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCat = currentCategory === 'todos' || p.category === currentCategory;
    const matchSearch = !searchTerm ||
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.tags.some(t => t.includes(searchTerm));
    return matchCat && matchSearch;
  });

  const countEl = document.getElementById('results-count');
  if (countEl) countEl.innerHTML = `<strong>${filtered.length}</strong> productos`;

  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="icon">🔍</div><p>No encontramos productos para tu búsqueda.</p></div>`;
    return;
  }
  filtered.forEach((p, i) => {
    const card = createProductCard(p);
    card.classList.add(`reveal-delay-${(i % 4) + 1}`);
    grid.appendChild(card);
  });
  observeNewCards();
}

function initCatalogFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn, .mobile-filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.cat;
      document.querySelectorAll('.filter-btn, .mobile-filter-pill').forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`[data-cat="${currentCategory}"]`).forEach(b => b.classList.add('active'));
      loadCatalog();
    });
  });

  const search = document.getElementById('catalog-search');
  search?.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    loadCatalog();
  });
}

function buildSidebarFilters() {
  const container = document.getElementById('sidebar-filters');
  if (!container) return;
  const counts = {};
  PRODUCTS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

  container.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'todos' ? PRODUCTS.length : (counts[cat.id] || 0);
    return `<button class="filter-btn ${cat.id === 'todos' ? 'active' : ''}" data-cat="${cat.id}">
      <span>${cat.icon} ${cat.label}</span>
      <span class="filter-count">${count}</span>
    </button>`;
  }).join('');

  const mobileBar = document.getElementById('mobile-filters');
  if (mobileBar) {
    mobileBar.innerHTML = CATEGORIES.map(cat => `
      <button class="mobile-filter-pill ${cat.id === 'todos' ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.icon} ${cat.label}
      </button>`).join('');
  }

  initCatalogFilters();
}

// ═══════════════════════════════
// INIT
// ═══════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  cart.onChange(updateCartUI);
  updateCartUI();

  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.querySelectorAll('.open-cart').forEach(b => b.addEventListener('click', openCart));
  document.getElementById('checkout-btn')?.addEventListener('click', () => cart.checkout());
  document.getElementById('clear-cart-btn')?.addEventListener('click', () => { cart.clear(); updateCartUI(); });

  loadFeaturedProducts();
  buildSidebarFilters();
  loadCatalog();
  initReveal();
  setTimeout(observeNewCards, 200);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCart(); closeProductModal(); }
    else if (galleryState && e.key === 'ArrowLeft') galleryStep(-1);
    else if (galleryState && e.key === 'ArrowRight') galleryStep(1);
  });
});
