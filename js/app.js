// ══════════════════════════════
// DATA
// ══════════════════════════════
const CATEGORIES = [
  { id:"laptops",     label:"Laptops",      img:"img/chips/chip-laptops.png" },
  { id:"camera",      label:"Camera",        img:"img/chips/chip-camera.png" },
  { id:"accessories", label:"Accessories",   img:"img/chips/chip-acc.png" },
  { id:"tv",          label:"TV",            img:"img/chips/chip-tv.png" },
  { id:"headphones",  label:"Headphones",    img:"img/chips/chip-hp.png" },
  { id:"storage",     label:"Storage",       img:"img/chips/chip-storage.png" },
  { id:"hometheater", label:"Home Theater",  img:"img/chips/chip-ht.png" },
];

const PRODUCTS = [
  { id:"zeb-juke",    name:"Zebronics ZEB-JUKE BAR DOLBY ATMOS",        subtitle:"Home Theater With Subwoofer",               price:259, mrp:399, image:"img/products/p-soundbar.jpg",    thumbs:["img/products/p-soundbar.jpg","img/products/p-soundbar2.jpg"],                       category:"hometheater", featured:true, continueShopping:true },
  { id:"sony-alpha",  name:"Sony Alpha ILCE 6600M 24.2 MP Mirrorless",   subtitle:"Digital SLR Camera with 18-135 mm Zoom Lens", price:599, mrp:799, image:"img/products/p-camera.jpg",      thumbs:["img/products/p-camera.jpg","img/products/p-headset-gold.jpg","img/products/p-agaro.jpg"], category:"camera",      featured:true },
  { id:"oneplus-tv",  name:"OnePlus 80 cm (32\") Y Series HD Ready",     subtitle:"LED Smart Android TV 32Y1",                  price:399, mrp:499, image:"img/products/p-tv.jpg",          thumbs:["img/products/p-tv.jpg","img/products/p-tv-purple.jpg","img/products/p-soundbar2.jpg"],     category:"tv",          featured:true },
  { id:"legion-5",    name:"Lenovo Legion 5 11th Gen Intel Core i7",      subtitle:'15.6" FHD IPS Gaming Laptop',               price:599, mrp:799, image:"img/products/p-legion.jpg",      thumbs:["img/products/p-legion.jpg","img/products/p-laptop-rgb.jpg"],                       category:"laptops",     featured:true },
  { id:"rgb-laptop",  name:"MSI Katana RGB Gaming Laptop",                subtitle:"Core i7 · RTX Graphics · 16GB RAM",         price:749, mrp:899, image:"img/products/p-laptop-rgb.jpg",  category:"laptops" },
  { id:"headset-gold",name:"Corsair Gaming Headset",                      subtitle:"7.1 Surround · RGB · Detachable mic",       price:89,  mrp:129, image:"img/products/p-headset-gold.jpg",category:"headphones" },
  { id:"agaro-otg",   name:"AGARO USB-C OTG Adapter",                    subtitle:"Type-C to USB 3.0 · Fast transfer",         price:9,   mrp:15,  image:"img/products/p-agaro.jpg",       category:"accessories" },
  { id:"juke-2",      name:"Zebronics Dolby Atmos Soundbar",              subtitle:"Home Theater With Subwoofer",               price:229, mrp:349, image:"img/products/p-soundbar2.jpg",   category:"hometheater" },
  { id:"tv-autumn",   name:'4K UHD Smart LED TV 55"',                    subtitle:"HDR10+ · Dolby Audio · Android TV",         price:449, mrp:599, image:"img/products/p-tv-autumn.jpg",   category:"tv" },
  { id:"mi-tv",       name:"Mi LED TV 4C 43 (108cm)",                    subtitle:"Full HD · PatchWall · Android TV",          price:279, mrp:349, image:"img/products/p-mi-tv.jpg",       category:"tv" },
  { id:"tv-purple",   name:'QLED 4K Smart TV 50"',                       subtitle:"Quantum Color · Voice remote",              price:529, mrp:699, image:"img/products/p-tv-purple.jpg",   category:"tv" },
  { id:"matrix-tv",   name:'Ultra HD Entertainment TV 65"',              subtitle:"120Hz · HDMI 2.1 · Game Mode",              price:799, mrp:999, image:"img/products/p-matrix-tv.jpg",   category:"tv" },
  { id:"boat-lime",   name:"boAt Rockerz On-Ear",                        subtitle:"Wired · Mic · Foldable",                    price:19,  mrp:29,  image:"img/products/p-boat-green.jpg",  category:"headphones" },
  { id:"headset-pro", name:"Pro Gaming Headset RGB",                     subtitle:"Noise-cancelling mic · USB",                price:79,  mrp:119, image:"img/products/p-headset2.jpg",    category:"headphones" },
  { id:"neckband",    name:"boAt Rockerz 255",                           subtitle:"Bluetooth neckband · 15% off",              price:24,  mrp:39,  image:"img/products/p-neckband.jpg",    category:"headphones" },
  { id:"jbl-tour",    name:"JBL Tour One",                               subtitle:"ANC over-ear · New",                       price:199, mrp:249, image:"img/hero/side-jbl.jpg",      category:"headphones" },
  { id:"sony-wh",     name:"Wireless Over-Ear Headphones",               subtitle:"ANC · 30h playtime · Fast charge",         price:149, mrp:199, image:"img/products/p-sony-hp.jpg",     category:"headphones" },
  { id:"usb-gold",    name:"USB 3.0 Flash Drive 64GB",                   subtitle:"Metal body · High speed",                  price:12,  mrp:18,  image:"img/products/p-usb.jpg",         category:"storage" },
  { id:"hdmi-adp",    name:"HDMI Female to Female Coupler",              subtitle:"4K 60Hz · Gold plated",                    price:6,   mrp:10,  image:"img/products/p-hdmi.jpg",        category:"accessories" },
  { id:"dp-cable",    name:"DisplayPort to HDMI Adapter",               subtitle:"4K output · Plug and play",                price:11,  mrp:16,  image:"img/products/p-dp.jpg",          category:"accessories" },
  { id:"vga-adp",     name:"HDMI to VGA Converter",                      subtitle:"Audio out · 1080p",                        price:8,   mrp:14,  image:"img/products/p-vga.jpg",         category:"accessories" },
  { id:"lg-gram",     name:"LG gram 17",                                 subtitle:"12th Gen Core i7 / Win11 / Microsoft 365", price:499, mrp:699, image:"img/hero/lg-gram.jpg",       category:"laptops" },
  { id:"boat-900",    name:"boAt Bassheads 900",                         subtitle:"Wired On Ear Headphones with Mic",         price:39,  mrp:59,  image:"img/promo/promo-boat.jpg",    category:"headphones" },
  { id:"airpods-pro", name:"AirPods Pro",                                subtitle:"From ₹3095/mo. with EMI",                 price:239, mrp:249, image:"img/promo/promo-airpods.jpg", category:"headphones" },
];

const BRAND_PANELS = [
  { title:"Music",       brands:[
    { name:"JBL",        img:"img/brands/brand-jbl.png" },
    { name:"Bose",       img:"img/brands/brand-bose.png" },
    { name:"Sennheiser", img:"img/brands/brand-sennheiser.png" },
    { name:"Yamaha",     img:"img/brands/brand-yamaha.png" },
  ]},
  { title:"Storage",     brands:[
    { name:"Kingston",   img:"img/brands/brand-kingston.png" },
    { name:"Corsair",    img:"img/brands/brand-corsair.png" },
    { name:"Zebronics",  img:"img/brands/brand-zebronics.png" },
    { name:"SanDisk",    img:"img/brands/brand-sandisk.png" },
  ]},
  { title:"Laptops",     brands:[
    { name:"HP",         img:"img/brands/brand-hp.png" },
    { name:"Dell",       img:"img/brands/brand-dell.png" },
    { name:"Lenovo",     img:"img/brands/brand-lenovo.png" },
    { name:"Apple",      img:"img/brands/brand-apple.png" },
  ]},
  { title:"Televisions", brands:[
    { name:"Sony",       img:"img/brands/brand-sony.png" },
    { name:"LG",         img:"img/brands/brand-lg.png" },
    { name:"Samsung",    img:"img/brands/brand-samsung.png" },
    { name:"TCL",        img:"img/brands/brand-tcl.png" },
  ]},
];

// ══════════════════════════════
// STATE
// ══════════════════════════════
let cart = loadCart();
let activeCategory = "all";
let activeProduct  = null;

// ══════════════════════════════
// CART PERSISTENCE
// ══════════════════════════════
function loadCart() {
  try { return JSON.parse(localStorage.getItem("elecxo-cart") || "[]"); } catch { return []; }
}
function saveCart() {
  try { localStorage.setItem("elecxo-cart", JSON.stringify(cart)); } catch {}
}

// ══════════════════════════════
// CART OPERATIONS
// ══════════════════════════════
function cartAdd(product, qty = 1) {
  const found = cart.find(l => l.product.id === product.id);
  if (found) found.qty += qty;
  else cart.push({ product, qty });
  saveCart(); syncCart();
}
function cartRemove(id) {
  cart = cart.filter(l => l.product.id !== id);
  saveCart(); syncCart();
}
function cartSetQty(id, qty) {
  if (qty <= 0) { cartRemove(id); return; }
  const l = cart.find(l => l.product.id === id);
  if (l) l.qty = qty;
  saveCart(); syncCart();
}
function cartTotal() { return cart.reduce((n, l) => n + l.qty * l.product.price, 0); }
function cartCount() { return cart.reduce((n, l) => n + l.qty, 0); }

function fmt(n) { return n + " $"; }

// ══════════════════════════════
// SYNC UI
// ══════════════════════════════
function syncCart() { syncBadge(); syncDrawer(); }

function syncBadge() {
  document.getElementById("cart-badge").textContent = cartCount();
}

function syncDrawer() {
  const body = document.getElementById("cart-body");
  document.getElementById("cart-total").textContent = fmt(cartTotal());
  document.getElementById("btn-checkout").disabled = cart.length === 0;

  if (!cart.length) {
    body.innerHTML = `<p class="cart-empty-msg">Your cart is empty.</p>`;
    return;
  }
  body.innerHTML = `<ul class="cart-lines">${cart.map(l => `
    <li class="cart-line">
      <img class="cart-line-img" src="${l.product.image}" alt="" />
      <div class="cart-line-info">
        <p class="cart-line-name">${l.product.name}</p>
        <p class="cart-line-price">${fmt(l.product.price)}</p>
        <div class="cart-line-ctrls">
          <button class="qty-btn" onclick="cartSetQty('${l.product.id}',${l.qty-1})">−</button>
          <span class="qty-val">${l.qty}</span>
          <button class="qty-btn" onclick="cartSetQty('${l.product.id}',${l.qty+1})">+</button>
          <button class="rm-btn" onclick="cartRemove('${l.product.id}')">Remove</button>
        </div>
      </div>
    </li>`).join("")}</ul>`;
}

// ══════════════════════════════
// CART DRAWER OPEN / CLOSE
// ══════════════════════════════
function openCart()  { toggle("cart-backdrop","cart-drawer", true); }
function closeCart() { toggle("cart-backdrop","cart-drawer", false); }

// ══════════════════════════════
// PRODUCT MODAL
// ══════════════════════════════
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  activeProduct = p;
  document.getElementById("modal-img").src = p.image;
  document.getElementById("modal-img").alt = p.name;
  document.getElementById("modal-name").textContent = p.name;
  document.getElementById("modal-sub").textContent  = p.subtitle;
  document.getElementById("modal-price").textContent = fmt(p.price);
  document.getElementById("modal-mrp").textContent   = fmt(p.mrp);
  toggle("modal-backdrop","product-modal", true);
}
function closeModal() {
  activeProduct = null;
  toggle("modal-backdrop","product-modal", false);
}
function addActiveToCart() {
  if (!activeProduct) return;
  cartAdd(activeProduct);
  closeModal();
  openCart();
}

// ══════════════════════════════
// HELPER: toggle backdrop + panel
// ══════════════════════════════
function toggle(backdropId, panelId, open) {
  document.getElementById(backdropId).classList.toggle("active", open);
  document.getElementById(panelId).classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

// ══════════════════════════════
// CHECKOUT
// ══════════════════════════════
function checkout() {
  cart = []; saveCart(); syncCart(); closeCart();
  alert("Order placed! Thank you for shopping at ElecXO.");
}

// ══════════════════════════════
// CATEGORY NAV
// ══════════════════════════════
function renderCategoryNav() {
  const list = document.getElementById("cat-list");
  list.innerHTML = CATEGORIES.map(c => {
    const on = activeCategory === c.id;
    return `
      <li class="cat-chip">
        <button class="cat-chip-btn${on ? " active" : ""}" onclick="toggleCategory('${c.id}')">
          <span class="cat-chip-label">${c.label}</span>
          <img src="${c.img}" alt="${c.label}" class="cat-chip-img" />
        </button>
      </li>`;
  }).join("");
}

function toggleCategory(id) {
  activeCategory = activeCategory === id ? "all" : id;
  renderCategoryNav();
  applyFilters();
}

// ══════════════════════════════
// RENDER CARDS
// ══════════════════════════════
function featuredCardHTML(p) {
  const thumbs = p.thumbs?.length
    ? `<div class="card-thumbs">${p.thumbs.map(t=>`<img src="${t}" alt="" />`).join("")}</div>`
    : "";
  const cont = p.continueShopping ? `<span class="continue-badge">Continue shopping …</span>` : "";
  return `
    <article class="featured-card">
      <button class="featured-card-btn" onclick="openProduct('${p.id}')">
        ${cont}
        <img src="${p.image}" alt="${p.name}" />
      </button>
      <p class="card-name">${p.name}</p>
      <p class="card-sub">${p.subtitle}</p>
      <p class="card-price">
        <span class="card-price-val">${fmt(p.price)}</span>
        <span class="card-mrp-val">${fmt(p.mrp)}</span>
      </p>
      ${thumbs}
    </article>`;
}

function gridCardHTML(p, caption = false) {
  const cap = caption
    ? `<p class="grid-card-cap">${p.name}<br/>${p.subtitle}</p>`
    : "";
  return `
    <article class="grid-card">
      <button class="grid-card-btn" onclick="openProduct('${p.id}')">
        <img src="${p.image}" alt="${p.name}" />
      </button>
      ${cap}
    </article>`;
}

function brandPanelHTML(b) {
  const logos = b.brands.map(brand => `
    <div class="brand-logo-box">
      <img 
        src="${brand.img}" 
        alt="${brand.name}" 
        class="brand-logo-img"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        onload="this.nextElementSibling.style.display='none';"
      />
      <span class="brand-logo-fallback" style="display:flex;">${brand.name}</span>
    </div>`).join("");
  return `
    <div class="brand-panel">
      <p class="brand-panel-title">${b.title}</p>
      <div class="brand-logo-grid">
        ${logos}
      </div>
    </div>`;
}

// ══════════════════════════════
// RENDER HOME CONTENT
// ══════════════════════════════
function renderHome() {
  const featured = PRODUCTS.filter(p => p.featured);
  const rowA   = PRODUCTS.filter(p => ["rgb-laptop","headset-gold","agaro-otg","juke-2"].includes(p.id));
  const tvs    = PRODUCTS.filter(p => ["tv-autumn","mi-tv","tv-purple","matrix-tv"].includes(p.id));
  const phones = PRODUCTS.filter(p => ["boat-lime","headset-pro","neckband","sony-wh"].includes(p.id));
  const cables = PRODUCTS.filter(p => ["usb-gold","hdmi-adp","dp-cable","vga-adp"].includes(p.id));

  document.getElementById("featured-grid").innerHTML   = featured.map(featuredCardHTML).join("");
  document.getElementById("row-a-grid").innerHTML      = rowA.map(p => gridCardHTML(p, true)).join("");
  document.getElementById("row-tv-grid").innerHTML     = tvs.map(p => gridCardHTML(p, true)).join("");
  document.getElementById("brand-panels").innerHTML    = BRAND_PANELS.map(brandPanelHTML).join("");
  document.getElementById("row-phones-grid").innerHTML = phones.map(p => gridCardHTML(p, true)).join("");
  document.getElementById("row-cables-grid").innerHTML = cables.map(p => gridCardHTML(p, true)).join("");
}

// ══════════════════════════════
// SEARCH / FILTER
// ══════════════════════════════
function handleSearch(val) { applyFilters(val); }

function applyFilters(query) {
  if (query === undefined) query = document.getElementById("search-input").value;
  const q = query.trim().toLowerCase();
  const searching = q.length > 0 || activeCategory !== "all";

  const filtered = PRODUCTS.filter(p => {
    const catOk = activeCategory === "all" || p.category === activeCategory;
    const qOk   = !q || p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q);
    return catOk && qOk;
  });

  const heroEl  = document.getElementById("hero-section");
  const homeEl  = document.getElementById("home-content");
  const srchEl  = document.getElementById("search-results");

  if (searching) {
    heroEl.style.display = "none";
    homeEl.style.display = "none";
    srchEl.style.display = "block";
    document.getElementById("results-count").textContent =
      `${filtered.length} result${filtered.length === 1 ? "" : "s"}${activeCategory !== "all" ? " in " + activeCategory : ""}`;
    document.getElementById("search-grid").innerHTML = filtered.map(featuredCardHTML).join("");
  } else {
    heroEl.style.display = "";
    homeEl.style.display = "";
    srchEl.style.display = "none";
  }
}

// ══════════════════════════════
// RESET
// ══════════════════════════════
function resetHome() {
  document.getElementById("search-input").value = "";
  activeCategory = "all";
  renderCategoryNav();
  applyFilters("");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ══════════════════════════════
// INIT
// ══════════════════════════════
renderCategoryNav();
renderHome();
syncCart();
