/* ===== RAYS FOOTWEAR — STORE.JS ===== */
/* Product Database, Cart, Wishlist, Search, Filters, Promo Codes */

const PRODUCTS = [
  // ===== SNEAKERS =====
  { id:1,  name:"Nike Air Force 1 Low '07", brand:"Nike", category:"sneakers", subcat:"Casual", gender:"Unisex", price:8500,  originalPrice:10000, sizes:[40,41,42,43,44,45], colors:["White","Black"], rating:4.9, reviews:312, badge:"new",  emoji:"👟", inStock:true,  isNew:true,  onSale:false },
  { id:2,  name:"Nike Air Max 270",         brand:"Nike", category:"sneakers", subcat:"Running", gender:"Men",   price:9500,  originalPrice:12000, sizes:[40,41,42,43,44,45,46], colors:["Black","Grey","Red"], rating:4.8, reviews:254, badge:"sale", emoji:"👟", inStock:true,  isNew:false, onSale:true  },
  { id:3,  name:"Nike React Infinity Run",  brand:"Nike", category:"sneakers", subcat:"Running", gender:"Men",   price:11500, originalPrice:11500, sizes:[40,41,42,43,44,45], colors:["Blue","White"], rating:4.7, reviews:189, badge:"",     emoji:"👟", inStock:true,  isNew:false, onSale:false },
  { id:4,  name:"Nike Air Jordan 1 Retro",  brand:"Jordan", category:"sneakers", subcat:"Basketball", gender:"Men", price:14500, originalPrice:16000, sizes:[40,41,42,43,44,45,46], colors:["Red","Black","White"], rating:5.0, reviews:421, badge:"hot", emoji:"👟", inStock:true, isNew:false, onSale:true },
  { id:5,  name:"Air Jordan 4 Retro",       brand:"Jordan", category:"sneakers", subcat:"Basketball", gender:"Men", price:15000, originalPrice:18000, sizes:[41,42,43,44,45], colors:["Black","Grey","Fire Red"], rating:4.9, reviews:367, badge:"sale", emoji:"👟", inStock:true, isNew:false, onSale:true },
  { id:6,  name:"Adidas Ultraboost 22",     brand:"Adidas", category:"sneakers", subcat:"Running", gender:"Men",  price:12000, originalPrice:14500, sizes:[40,41,42,43,44,45,46], colors:["White","Black","Blue"], rating:4.8, reviews:278, badge:"new", emoji:"👟", inStock:true, isNew:true, onSale:false },
  { id:7,  name:"Adidas Stan Smith",        brand:"Adidas", category:"sneakers", subcat:"Lifestyle", gender:"Unisex", price:6500, originalPrice:7500, sizes:[38,39,40,41,42,43,44,45], colors:["White","Green"], rating:4.7, reviews:445, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:8,  name:"Adidas NMD_R1",           brand:"Adidas", category:"sneakers", subcat:"Lifestyle", gender:"Men", price:9000, originalPrice:11000, sizes:[40,41,42,43,44,45], colors:["Black","White","Red"], rating:4.6, reviews:203, badge:"sale", emoji:"👟", inStock:true, isNew:false, onSale:true },
  { id:9,  name:"Puma RS-X³ Puzzle",       brand:"Puma",   category:"sneakers", subcat:"Lifestyle", gender:"Unisex", price:7000, originalPrice:8500, sizes:[38,39,40,41,42,43,44], colors:["White","Multi"], rating:4.5, reviews:156, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:10, name:"Puma Suede Classic",       brand:"Puma",   category:"sneakers", subcat:"Casual",   gender:"Unisex", price:5500, originalPrice:6000, sizes:[38,39,40,41,42,43,44,45], colors:["Black","Blue","Red"], rating:4.6, reviews:298, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:11, name:"New Balance 574 Classic", brand:"New Balance", category:"sneakers", subcat:"Lifestyle", gender:"Unisex", price:8000, originalPrice:9500, sizes:[38,39,40,41,42,43,44,45,46], colors:["Grey","Navy","Green"], rating:4.7, reviews:321, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:12, name:"New Balance Fresh Foam X 1080", brand:"New Balance", category:"sneakers", subcat:"Running", gender:"Men", price:13500, originalPrice:15000, sizes:[40,41,42,43,44,45,46], colors:["White","Black"], rating:4.8, reviews:187, badge:"new", emoji:"👟", inStock:true, isNew:true, onSale:false },
  { id:13, name:"Converse Chuck Taylor All Star", brand:"Converse", category:"sneakers", subcat:"Casual", gender:"Unisex", price:4500, originalPrice:5500, sizes:[38,39,40,41,42,43,44,45], colors:["White","Black","Red","Navy"], rating:4.8, reviews:534, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:14, name:"Vans Old Skool",          brand:"Vans",   category:"sneakers", subcat:"Casual",   gender:"Unisex", price:5000, originalPrice:6000, sizes:[38,39,40,41,42,43,44,45], colors:["Black","White","Checkerboard"], rating:4.7, reviews:412, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:15, name:"ASICS Gel-Nimbus 25",     brand:"ASICS",  category:"sneakers", subcat:"Running",  gender:"Men",   price:14000, originalPrice:16000, sizes:[40,41,42,43,44,45,46], colors:["Blue","Black","White"], rating:4.9, reviews:143, badge:"new", emoji:"👟", inStock:true, isNew:true, onSale:false },
  { id:16, name:"Reebok Classic Leather",  brand:"Reebok", category:"sneakers", subcat:"Lifestyle", gender:"Unisex", price:5800, originalPrice:7000, sizes:[38,39,40,41,42,43,44,45], colors:["White","Black","Grey"], rating:4.5, reviews:267, badge:"sale", emoji:"👟", inStock:true, isNew:false, onSale:true },
  { id:17, name:"Nike Dunk Low Retro",     brand:"Nike",   category:"sneakers", subcat:"Lifestyle", gender:"Unisex", price:10500, originalPrice:12000, sizes:[38,39,40,41,42,43,44,45], colors:["White","Black","Green"], rating:4.9, reviews:389, badge:"hot", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:18, name:"Adidas Yeezy Boost 350",  brand:"Adidas", category:"sneakers", subcat:"Lifestyle", gender:"Unisex", price:18000, originalPrice:20000, sizes:[40,41,42,43,44,45], colors:["Beige","Black","Zebra"], rating:5.0, reviews:501, badge:"hot", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:19, name:"Nike Blazer Mid '77",     brand:"Nike",   category:"sneakers", subcat:"Casual",   gender:"Unisex", price:7500, originalPrice:8500, sizes:[38,39,40,41,42,43,44,45], colors:["White","Black"], rating:4.7, reviews:231, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false },
  { id:20, name:"Skechers D'Lites",        brand:"Skechers", category:"sneakers", subcat:"Casual", gender:"Women", price:4500, originalPrice:5500, sizes:[36,37,38,39,40,41], colors:["White","Pink","Black"], rating:4.4, reviews:178, badge:"sale", emoji:"👟", inStock:true, isNew:false, onSale:true },

  // ===== JERSEYS =====
  { id:21, name:"Man United Home Jersey 2024/25",   brand:"Adidas", category:"jerseys", subcat:"Football", gender:"Men", price:3500, originalPrice:4200, sizes:["XS","S","M","L","XL","XXL"], colors:["Red"], rating:4.8, reviews:312, badge:"new",  emoji:"⚽", inStock:true,  isNew:true,  onSale:false, league:"Premier League", kit:"Home" },
  { id:22, name:"Arsenal Away Jersey 2024/25",       brand:"Adidas", category:"jerseys", subcat:"Football", gender:"Men", price:3200, originalPrice:3800, sizes:["S","M","L","XL","XXL"],       colors:["Yellow"], rating:4.7, reviews:289, badge:"",     emoji:"⚽", inStock:true,  isNew:true,  onSale:false, league:"Premier League", kit:"Away" },
  { id:23, name:"Chelsea Home Jersey 2024/25",       brand:"Nike",   category:"jerseys", subcat:"Football", gender:"Men", price:3500, originalPrice:4000, sizes:["S","M","L","XL","XXL"],       colors:["Blue"],   rating:4.7, reviews:251, badge:"new",  emoji:"⚽", inStock:true,  isNew:true,  onSale:false, league:"Premier League", kit:"Home" },
  { id:24, name:"Liverpool Home Jersey 2024/25",     brand:"Nike",   category:"jerseys", subcat:"Football", gender:"Men", price:3500, originalPrice:4200, sizes:["S","M","L","XL","XXL"],       colors:["Red"],    rating:4.9, reviews:401, badge:"hot",  emoji:"⚽", inStock:true,  isNew:false, onSale:false, league:"Premier League", kit:"Home" },
  { id:25, name:"Man City Home Jersey 2024/25",      brand:"Puma",   category:"jerseys", subcat:"Football", gender:"Men", price:3500, originalPrice:4200, sizes:["S","M","L","XL","XXL"],       colors:["Sky Blue"], rating:4.8, reviews:334, badge:"",   emoji:"⚽", inStock:true,  isNew:false, onSale:false, league:"Premier League", kit:"Home" },
  { id:26, name:"Real Madrid Home Jersey 2024/25",   brand:"Adidas", category:"jerseys", subcat:"Football", gender:"Men", price:3800, originalPrice:4500, sizes:["S","M","L","XL","XXL"],       colors:["White"],  rating:5.0, reviews:521, badge:"hot",  emoji:"⚽", inStock:true,  isNew:true,  onSale:false, league:"La Liga", kit:"Home" },
  { id:27, name:"Barcelona Away Jersey 2024/25",     brand:"Nike",   category:"jerseys", subcat:"Football", gender:"Men", price:3600, originalPrice:4200, sizes:["S","M","L","XL","XXL"],       colors:["Black","Gold"], rating:4.8, reviews:378, badge:"new", emoji:"⚽", inStock:true, isNew:true,  onSale:false, league:"La Liga", kit:"Away" },
  { id:28, name:"Bayern Munich Home Jersey 2024/25", brand:"Adidas", category:"jerseys", subcat:"Football", gender:"Men", price:3500, originalPrice:4200, sizes:["S","M","L","XL","XXL"],       colors:["Red"],    rating:4.7, reviews:267, badge:"",     emoji:"⚽", inStock:true,  isNew:false, onSale:false, league:"Bundesliga", kit:"Home" },
  { id:29, name:"PSG Third Jersey 2024/25",          brand:"Nike",   category:"jerseys", subcat:"Football", gender:"Men", price:3600, originalPrice:4000, sizes:["S","M","L","XL","XXL"],       colors:["Black"],  rating:4.6, reviews:198, badge:"sale",  emoji:"⚽", inStock:true,  isNew:false, onSale:true,  league:"Ligue 1", kit:"Third" },
  { id:30, name:"Juventus Home Jersey 2024/25",      brand:"Adidas", category:"jerseys", subcat:"Football", gender:"Men", price:3200, originalPrice:3800, sizes:["S","M","L","XL","XXL"],       colors:["Black","White"], rating:4.6, reviews:211, badge:"",  emoji:"⚽", inStock:true, isNew:false, onSale:false, league:"Serie A", kit:"Home" },
  { id:31, name:"Kenya National Team Home Jersey",   brand:"Nike",   category:"jerseys", subcat:"Football", gender:"Men", price:2500, originalPrice:2500, sizes:["XS","S","M","L","XL","XXL","XXXL"], colors:["Red","White","Green"], rating:4.9, reviews:445, badge:"hot", emoji:"🇰🇪", inStock:true, isNew:false, onSale:false, league:"National", kit:"Home" },
  { id:32, name:"Gor Mahia Home Jersey 2024",        brand:"Jako",   category:"jerseys", subcat:"Football", gender:"Men", price:1800, originalPrice:2200, sizes:["S","M","L","XL","XXL"],       colors:["Green"],  rating:4.7, reviews:189, badge:"",     emoji:"⚽", inStock:true,  isNew:false, onSale:true,  league:"KPL", kit:"Home" },
  { id:33, name:"AFC Leopards Home Jersey 2024",     brand:"Jako",   category:"jerseys", subcat:"Football", gender:"Men", price:1800, originalPrice:2200, sizes:["S","M","L","XL","XXL"],       colors:["Blue","Black"], rating:4.6, reviews:167, badge:"sale", emoji:"⚽", inStock:true, isNew:false, onSale:true, league:"KPL", kit:"Home" },
  { id:34, name:"Brazil Home Jersey 2024",           brand:"Nike",   category:"jerseys", subcat:"Football", gender:"Men", price:3200, originalPrice:3800, sizes:["S","M","L","XL","XXL"],       colors:["Yellow","Green"], rating:4.8, reviews:356, badge:"",  emoji:"⚽", inStock:true, isNew:false, onSale:false, league:"National", kit:"Home" },
  { id:35, name:"Argentina Home Jersey 2024",        brand:"Adidas", category:"jerseys", subcat:"Football", gender:"Men", price:3200, originalPrice:3800, sizes:["S","M","L","XL","XXL"],       colors:["Light Blue","White"], rating:4.9, reviews:412, badge:"hot", emoji:"⚽", inStock:true, isNew:false, onSale:false, league:"National", kit:"Home" },
  { id:36, name:"France Away Jersey 2024",           brand:"Nike",   category:"jerseys", subcat:"Football", gender:"Men", price:3000, originalPrice:3500, sizes:["S","M","L","XL","XXL"],       colors:["White"],  rating:4.7, reviews:234, badge:"",     emoji:"⚽", inStock:true,  isNew:false, onSale:false, league:"National", kit:"Away" },

  // ===== KIDS =====
  { id:37, name:"Nike Air Max Kids",           brand:"Nike",     category:"kids", subcat:"Sports",   gender:"Kids", price:3500, originalPrice:4200, sizes:[28,29,30,31,32,33], colors:["Black","Red"], rating:4.8, reviews:134, badge:"new",  emoji:"👟", inStock:true, isNew:true,  onSale:false, ageGroup:"Kids 4-8yrs" },
  { id:38, name:"Adidas Duramo SL Kids",       brand:"Adidas",   category:"kids", subcat:"Sports",   gender:"Kids", price:2800, originalPrice:3200, sizes:[28,29,30,31,32,33,34], colors:["Blue","White"], rating:4.7, reviews:98, badge:"",   emoji:"👟", inStock:true, isNew:false, onSale:false, ageGroup:"Kids 4-8yrs" },
  { id:39, name:"Converse Chuck Kids",         brand:"Converse", category:"kids", subcat:"Casual",   gender:"Kids", price:2500, originalPrice:3000, sizes:[25,26,27,28,29,30], colors:["White","Black","Red"], rating:4.7, reviews:167, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false, ageGroup:"Toddler 1-3yrs" },
  { id:40, name:"Puma Smash v2 Youth",         brand:"Puma",     category:"kids", subcat:"Casual",   gender:"Kids", price:2200, originalPrice:2800, sizes:[31,32,33,34,35,36], colors:["White","Black"], rating:4.5, reviews:89, badge:"sale", emoji:"👟", inStock:true, isNew:false, onSale:true, ageGroup:"Kids 4-8yrs" },
  { id:41, name:"Nike Star Runner 4 Youth",    brand:"Nike",     category:"kids", subcat:"Sports",   gender:"Kids", price:3200, originalPrice:3800, sizes:[35,36,37,38], colors:["Black","Blue"], rating:4.8, reviews:112, badge:"",    emoji:"👟", inStock:true, isNew:true,  onSale:false, ageGroup:"Teens 9-16yrs" },
  { id:42, name:"Adidas Tensaur Run Kids",     brand:"Adidas",   category:"kids", subcat:"Sports",   gender:"Kids", price:2400, originalPrice:2800, sizes:[28,29,30,31,32,33,34], colors:["Pink","White"], rating:4.6, reviews:76, badge:"",  emoji:"👟", inStock:true, isNew:false, onSale:false, ageGroup:"Kids 4-8yrs" },
  { id:43, name:"Vans Old Skool Kids",         brand:"Vans",     category:"kids", subcat:"Casual",   gender:"Kids", price:2800, originalPrice:3200, sizes:[28,29,30,31,32,33,34], colors:["Black","White"], rating:4.7, reviews:143, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false, ageGroup:"Kids 4-8yrs" },
  { id:44, name:"New Balance 574 Kids",        brand:"New Balance", category:"kids", subcat:"Casual", gender:"Kids", price:3000, originalPrice:3500, sizes:[30,31,32,33,34,35,36], colors:["Grey","Navy"], rating:4.6, reviews:91, badge:"", emoji:"👟", inStock:true, isNew:false, onSale:false, ageGroup:"Kids 4-8yrs" },
  { id:45, name:"Jordan 1 Mid Youth",          brand:"Jordan",   category:"kids", subcat:"Basketball", gender:"Kids", price:4500, originalPrice:5500, sizes:[35,36,37,38], colors:["Red","Black","White"], rating:4.9, reviews:156, badge:"hot", emoji:"👟", inStock:true, isNew:false, onSale:false, ageGroup:"Teens 9-16yrs" },
  { id:46, name:"Nike Flex Runner 2 Toddler",  brand:"Nike",     category:"kids", subcat:"Sports",   gender:"Kids", price:1800, originalPrice:2200, sizes:[20,21,22,23,24,25], colors:["Blue","Green"], rating:4.5, reviews:67, badge:"",    emoji:"👟", inStock:true, isNew:false, onSale:true, ageGroup:"Toddler 1-3yrs" },
  { id:47, name:"Skechers Flex Advantage Kids",brand:"Skechers", category:"kids", subcat:"Sports",   gender:"Kids", price:2000, originalPrice:2500, sizes:[28,29,30,31,32,33], colors:["Blue","Black"], rating:4.4, reviews:54, badge:"sale", emoji:"👟", inStock:true, isNew:false, onSale:true, ageGroup:"Kids 4-8yrs" },
  { id:48, name:"Puma Anzarun Lite Youth",     brand:"Puma",     category:"kids", subcat:"Sports",   gender:"Kids", price:2100, originalPrice:2600, sizes:[33,34,35,36,37,38], colors:["White","Green"], rating:4.5, reviews:81, badge:"",  emoji:"👟", inStock:true, isNew:false, onSale:false, ageGroup:"Teens 9-16yrs" }
];

// ===== CART SYSTEM =====
let cart = JSON.parse(localStorage.getItem('raysCart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('raysWishlist') || '[]');
let loyaltyPoints = parseInt(localStorage.getItem('raysPoints') || '0');

function saveCart() { localStorage.setItem('raysCart', JSON.stringify(cart)); updateCartUI(); }
function saveWishlist() { localStorage.setItem('raysWishlist', JSON.stringify(wishlist)); }
function savePoints() { localStorage.setItem('raysPoints', loyaltyPoints); }

function addToCart(productId, size, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const key = `${productId}-${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, productId, size, qty, name: product.name, brand: product.brand, price: product.price, emoji: product.emoji });
  }
  saveCart();
  showToast('success', '🛒 Added to Cart', `${product.name} (Size ${size})`);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
}

function updateCartQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
}

function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (idx === -1) {
    wishlist.push(productId);
    showToast('success', '❤️ Wishlisted', `${product ? product.name : 'Item'} added to wishlist`);
  } else {
    wishlist.splice(idx, 1);
    showToast('', '🤍 Removed', 'Removed from wishlist');
  }
  saveWishlist();
  updateWishlistIcons();
}

function isWishlisted(productId) { return wishlist.includes(productId); }

function updateWishlistIcons() {
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = parseInt(btn.dataset.wishlistId);
    btn.classList.toggle('wishlisted', isWishlisted(id));
  });
}

// ===== CART UI =====
function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  renderCartDrawer();
}

function renderCartDrawer() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart"><div class="icon">🛒</div><p>Your cart is empty</p><a href="sneakers.html" class="btn btn-gold btn-sm" style="margin-top:12px">Shop Now</a></div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Size: ${item.size} | ${item.brand}</div>
          <div class="cart-item-price">KES ${(item.price * item.qty).toLocaleString()}</div>
          <div class="qty-control" style="margin-top:6px">
            <button class="qty-btn" onclick="updateCartQty('${item.key}',-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.key}',1)">+</button>
            <button class="qty-btn" onclick="removeFromCart('${item.key}')" style="margin-left:6px;color:var(--red)"><i class="fa fa-trash"></i></button>
          </div>
        </div>
      </div>`).join('');
  }
  const subtotal = getCartTotal();
  const delivery = subtotal >= 3000 ? 0 : 200;
  const total = subtotal + delivery;
  const subEl = document.getElementById('cartSubtotal');
  const delEl = document.getElementById('cartDelivery');
  const totEl = document.getElementById('cartTotal');
  if (subEl) subEl.textContent = `KES ${subtotal.toLocaleString()}`;
  if (delEl) delEl.textContent = delivery === 0 ? 'FREE' : `KES ${delivery}`;
  if (totEl) totEl.textContent = `KES ${total.toLocaleString()}`;
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('show');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

// ===== TOAST NOTIFICATIONS =====
function showToast(type, title, msg) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = document.getElementById('toastIcon');
  if (!toast) return;
  toast.className = 'toast';
  if (type === 'success') { toast.classList.add('success'); toastIcon.textContent = '✅'; }
  else if (type === 'error') { toast.classList.add('error'); toastIcon.textContent = '❌'; }
  else { toastIcon.textContent = 'ℹ️'; }
  toastTitle.textContent = title;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ===== PROMO CODES =====
const PROMO_CODES = {
  'RAYS10':    { discount: 0.10, label: '10% off', category: null },
  'NEWUSER':   { discount: 0.15, label: '15% off for new users', category: null },
  'KIDS20':    { discount: 0.20, label: '20% off kids', category: 'kids' },
  'JERSEY15':  { discount: 0.15, label: '15% off jerseys', category: 'jerseys' }
};

let appliedPromo = null;

// Called by checkout.html Apply button
function applyPromo() {
  const input = document.getElementById('promoInput');
  const msg   = document.getElementById('promoMsg');
  if (!input) return;
  const code  = input.value.trim().toUpperCase();
  const promo = PROMO_CODES[code];
  if (promo) {
    appliedPromo = { ...promo, code };
    if (msg) { msg.textContent = `✅ ${promo.label} applied!`; msg.style.color = 'var(--green)'; }
    showToast('success', '🎁 Promo Applied!', promo.label);
    // Trigger re-render of totals if on checkout page
    if (typeof renderOrderSummary === 'function') renderOrderSummary();
    input.style.borderColor = 'var(--green)';
  } else {
    if (msg) { msg.textContent = '❌ Invalid promo code'; msg.style.color = 'var(--red)'; }
    showToast('error', '❌ Invalid Code', 'Try RAYS10, NEWUSER, KIDS20, or JERSEY15');
    input.style.borderColor = 'var(--red)';
  }
  setTimeout(() => { if(input) input.style.borderColor = ''; }, 3000);
}

// Internal version used by other functions
function applyPromoCode(code) {
  const promo = PROMO_CODES[code.toUpperCase().trim()];
  if (!promo) return { valid: false, message: 'Invalid promo code' };
  appliedPromo = { ...promo, code: code.toUpperCase().trim() };
  return { valid: true, message: `${promo.label} applied!`, discount: promo.discount };
}

function calcPromoDiscount(subtotal) {
  if (!appliedPromo) return 0;
  return Math.round(subtotal * appliedPromo.discount);
}

// ===== FLASH SALE COUNTDOWN =====
function startCountdown(endTime, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const pad = n => String(n).padStart(2,'0');
  function tick() {
    const now = Date.now();
    let diff = Math.max(0, endTime - now);
    const h = Math.floor(diff / 3600000); diff %= 3600000;
    const m = Math.floor(diff / 60000); diff %= 60000;
    const s = Math.floor(diff / 1000);
    const boxes = container.querySelectorAll('.flash-time-box .num');
    if (boxes.length >= 3) { boxes[0].textContent = pad(h); boxes[1].textContent = pad(m); boxes[2].textContent = pad(s); }
    if (diff > 0) setTimeout(tick, 1000);
  }
  tick();
}

// Flash sale ends in ~8 hours from page load (stored in sessionStorage to persist on refresh)
const _flashKey = 'raysFlashEnd';
let flashEnd = parseInt(sessionStorage.getItem(_flashKey) || '0');
if (!flashEnd || flashEnd < Date.now()) {
  flashEnd = Date.now() + 8 * 3600000;
  sessionStorage.setItem(_flashKey, flashEnd);
}
document.addEventListener('DOMContentLoaded', () => startCountdown(flashEnd, 'flashTimer'));

// ===== NAVBAR SCROLL =====
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    });
  }
  // Mobile menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
  // Initialize
  updateCartUI();
  updateWishlistIcons();
  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === path || (path === '' && href === 'index.html'))) a.classList.add('active');
  });
});

// ===== SMART SEARCH ENGINE =====
const BRANDS = ['Nike','Adidas','Jordan','Puma','New Balance','Converse','Vans','ASICS','Skechers','Reebok','Under Armour','Jako'];
const CATEGORIES = ['sneakers','jerseys','kids','running','basketball','casual','lifestyle','football'];
const COLORS = ['white','black','red','blue','green','grey','gray','yellow','pink','navy','gold','multi','beige'];

function parseSearch(query) {
  const q = query.toLowerCase();
  const result = { brand: null, category: null, color: null, size: null, raw: q };
  BRANDS.forEach(b => { if (q.includes(b.toLowerCase())) result.brand = b; });
  CATEGORIES.forEach(c => { if (q.includes(c)) result.category = c; });
  COLORS.forEach(c => { if (q.includes(c)) result.color = c; });
  const sizeMatch = q.match(/\b(size\s*)?(\d{2})\b/);
  if (sizeMatch) result.size = parseInt(sizeMatch[2]);
  return result;
}

function searchProducts(query) {
  if (!query.trim()) return [];
  const parsed = parseSearch(query);
  return PRODUCTS.filter(p => {
    if (parsed.brand && p.brand.toLowerCase() !== parsed.brand.toLowerCase()) return false;
    if (parsed.category) {
      if (p.category !== parsed.category && p.subcat && p.subcat.toLowerCase() !== parsed.category) return false;
    }
    if (parsed.color && !p.colors.some(c => c.toLowerCase().includes(parsed.color))) return false;
    if (parsed.size && !p.sizes.includes(parsed.size)) return false;
    // Fallback: name/brand partial match
    if (!parsed.brand && !parsed.category && !parsed.color && !parsed.size) {
      const lq = query.toLowerCase();
      return p.name.toLowerCase().includes(lq) || p.brand.toLowerCase().includes(lq);
    }
    return true;
  }).slice(0, 8);
}

function renderSearchDropdown(results, dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;
  if (results.length === 0) { dropdown.style.display = 'none'; return; }
  dropdown.style.display = 'block';
  dropdown.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="addToCart(${p.id},'${p.sizes[0]}');closeSearchDropdown('${dropdownId}')">
      <div class="icon">${p.emoji}</div>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="meta">${p.brand} · ${p.category === 'jerseys' ? 'Jersey' : 'Size ' + p.sizes[0]}</div>
      </div>
      <div class="price">KES ${p.price.toLocaleString()}</div>
    </div>`).join('') +
    `<div class="search-tags">
      <span class="search-tag" onclick="closeSearchDropdown('${dropdownId}')">Nike</span>
      <span class="search-tag" onclick="closeSearchDropdown('${dropdownId}')">Adidas</span>
      <span class="search-tag" onclick="closeSearchDropdown('${dropdownId}')">Jerseys</span>
      <span class="search-tag" onclick="closeSearchDropdown('${dropdownId}')">Kids</span>
     </div>`;
}

function closeSearchDropdown(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

function initSearch(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const results = searchProducts(input.value);
    renderSearchDropdown(results, dropdownId);
  });
  document.addEventListener('click', e => {
    if (!input.contains(e.target)) closeSearchDropdown(dropdownId);
  });
}

// ===== FILTER SYSTEM =====
let activeFilters = {
  brands: [], sizes: [], colors: [], genders: [], subcats: [],
  minPrice: 0, maxPrice: 99999, inStock: false, onSale: false
};

function filterProducts(products, filters) {
  return products.filter(p => {
    if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
    if (filters.sizes.length && !filters.sizes.some(s => p.sizes.includes(typeof s === 'string' ? s : parseInt(s)))) return false;
    if (filters.colors.length && !p.colors.some(c => filters.colors.some(fc => c.toLowerCase().includes(fc.toLowerCase())))) return false;
    if (filters.genders.length && !filters.genders.includes(p.gender)) return false;
    if (filters.subcats.length && !filters.subcats.includes(p.subcat)) return false;
    if (p.price < filters.minPrice || p.price > filters.maxPrice) return false;
    if (filters.inStock && !p.inStock) return false;
    if (filters.onSale && !p.onSale) return false;
    return true;
  });
}

function sortProducts(products, sortBy) {
  const arr = [...products];
  switch (sortBy) {
    case 'price-asc':  return arr.sort((a,b) => a.price - b.price);
    case 'price-desc': return arr.sort((a,b) => b.price - a.price);
    case 'rating':     return arr.sort((a,b) => b.rating - a.rating);
    case 'reviews':    return arr.sort((a,b) => b.reviews - a.reviews);
    case 'newest':     return arr.sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0));
    default:           return arr;
  }
}

// ===== PRODUCT CARD RENDERER =====
function renderStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) s += '★';
    else if (rating >= i - 0.5) s += '½';
    else s += '☆';
  }
  return s;
}

function renderProductCard(p) {
  const discount = p.originalPrice > p.price ? Math.round((1 - p.price/p.originalPrice)*100) : 0;
  const badgeHtml = p.badge === 'new'  ? `<span class="badge badge-new">NEW</span>` :
                    p.badge === 'sale' ? `<span class="badge badge-sale">SALE</span>` :
                    p.badge === 'hot'  ? `<span class="badge badge-hot">HOT</span>`  : '';
  const sizeDisplay = p.sizes.slice(0, 4).map(s => `<span class="size-chip">${s}</span>`).join('');
  const wishlisted = isWishlisted(p.id) ? 'wishlisted' : '';
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-img">
      <span class="img-emoji">${p.emoji}</span>
      <div class="product-badges">${badgeHtml}</div>
      <div class="product-actions">
        <button class="product-action-btn ${wishlisted}" data-wishlist-id="${p.id}" onclick="toggleWishlist(${p.id})" title="Wishlist">
          <i class="fa${isWishlisted(p.id) ? 's' : 'r'} fa-heart"></i>
        </button>
        <button class="product-action-btn" onclick="showQuickView(${p.id})" title="Quick View">
          <i class="fa fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand">${p.brand}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${renderStars(p.rating)}</span>
        <span class="rating-count">(${p.reviews})</span>
      </div>
      <div class="product-price">
        <span class="price-current">KES ${p.price.toLocaleString()}</span>
        ${discount > 0 ? `<span class="price-old">KES ${p.originalPrice.toLocaleString()}</span><span class="price-discount">-${discount}%</span>` : ''}
      </div>
      <div class="product-sizes">${sizeDisplay}</div>
      <button class="add-to-cart" onclick="addToCart(${p.id},'${p.sizes[0]}')">
        <i class="fa fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  </div>`;
}

function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (products.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--gray)"><div style="font-size:3rem;margin-bottom:12px">😔</div><p>No products match your filters. Try adjusting them.</p></div>`;
    return;
  }
  container.innerHTML = products.map(renderProductCard).join('');
}

// ===== QUICK VIEW (simple modal alert replacement) =====
function showQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  showToast('success', p.name, `KES ${p.price.toLocaleString()} · ${p.brand} · Rating: ${p.rating}★`);
}

// ===== JERSEY CUSTOMIZER =====
function initJerseyCustomizer() {
  const nameInput = document.getElementById('jerseyName');
  const numberInput = document.getElementById('jerseyNumber');
  const fontOpts = document.querySelectorAll('.font-opt');
  const nameDisplay = document.getElementById('jerseyNameDisplay');
  const numberDisplay = document.getElementById('jerseyNumberDisplay');
  if (!nameInput) return;

  nameInput.addEventListener('input', () => {
    if (nameDisplay) nameDisplay.textContent = nameInput.value.toUpperCase() || 'NAME';
  });
  numberInput.addEventListener('input', () => {
    if (numberDisplay) numberDisplay.textContent = numberInput.value || '10';
  });
  fontOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      fontOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      if (nameDisplay) nameDisplay.style.fontFamily = opt.dataset.font || 'Poppins';
      if (numberDisplay) numberDisplay.style.fontFamily = opt.dataset.font || 'Poppins';
    });
  });
}

function addCustomJerseyToCart() {
  const nameInput = document.getElementById('jerseyName');
  const numberInput = document.getElementById('jerseyNumber');
  const sizeSelect = document.getElementById('jerseySize');
  const baseSelect = document.getElementById('jerseyBase');
  if (!nameInput || !numberInput) return;
  const name = nameInput.value.trim();
  const number = numberInput.value.trim();
  if (!name || !number) { showToast('error', 'Missing Info', 'Enter both name and number'); return; }
  const size = sizeSelect ? sizeSelect.value : 'M';
  const baseName = baseSelect ? baseSelect.options[baseSelect.selectedIndex].text : 'Custom Jersey';
  const key = `custom-${Date.now()}`;
  cart.push({ key, productId: 0, size, qty: 1, name: `${baseName} — ${name} #${number}`, brand: 'Custom', price: 3500 + 300, emoji: '⚽' });
  saveCart();
  showToast('success', '🎽 Custom Jersey Added!', `${name} #${number} (Size ${size}) — KES 3,800`);
}

// ===== LOYALTY POINTS =====
function addPoints(amount) {
  loyaltyPoints += Math.floor(amount / 10);
  savePoints();
  updatePointsDisplay();
}

function updatePointsDisplay() {
  const el = document.getElementById('pointsDisplay');
  if (el) el.textContent = loyaltyPoints.toLocaleString();
}

// ===== FILTER PAGE INIT =====
function initFilterPage(category) {
  const sortEl = document.getElementById('sortSelect');
  if (sortEl) sortEl.addEventListener('change', applyFiltersAndRender);

  // Brand checkboxes
  document.querySelectorAll('[data-filter-brand]').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.brands = [...document.querySelectorAll('[data-filter-brand]:checked')].map(c => c.value);
      applyFiltersAndRender();
    });
  });
  // Size chips
  document.querySelectorAll('[data-filter-size]').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      activeFilters.sizes = [...document.querySelectorAll('[data-filter-size].active')].map(c => c.dataset.filterSize);
      applyFiltersAndRender();
    });
  });
  // Color chips
  document.querySelectorAll('[data-filter-color]').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      activeFilters.colors = [...document.querySelectorAll('[data-filter-color].active')].map(c => c.dataset.filterColor);
      applyFiltersAndRender();
    });
  });
  // Gender chips
  document.querySelectorAll('[data-filter-gender]').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      activeFilters.genders = [...document.querySelectorAll('[data-filter-gender].active')].map(c => c.dataset.filterGender);
      applyFiltersAndRender();
    });
  });
  // Subcat chips
  document.querySelectorAll('[data-filter-subcat]').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      activeFilters.subcats = [...document.querySelectorAll('[data-filter-subcat].active')].map(c => c.dataset.filterSubcat);
      applyFiltersAndRender();
    });
  });
  // Price range
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  const priceRange = document.getElementById('priceRange');
  if (priceMin) priceMin.addEventListener('input', () => { activeFilters.minPrice = parseInt(priceMin.value)||0; applyFiltersAndRender(); });
  if (priceMax) priceMax.addEventListener('input', () => { activeFilters.maxPrice = parseInt(priceMax.value)||99999; applyFiltersAndRender(); });
  if (priceRange) priceRange.addEventListener('input', () => { activeFilters.maxPrice = parseInt(priceRange.value); if(priceMax) priceMax.value = priceRange.value; applyFiltersAndRender(); });

  // In stock / on sale
  const inStockCb = document.getElementById('filterInStock');
  const onSaleCb = document.getElementById('filterOnSale');
  if (inStockCb) inStockCb.addEventListener('change', () => { activeFilters.inStock = inStockCb.checked; applyFiltersAndRender(); });
  if (onSaleCb) onSaleCb.addEventListener('change', () => { activeFilters.onSale = onSaleCb.checked; applyFiltersAndRender(); });

  // Clear all
  const clearBtn = document.getElementById('clearFilters');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    activeFilters = { brands:[], sizes:[], colors:[], genders:[], subcats:[], minPrice:0, maxPrice:99999, inStock:false, onSale:false };
    document.querySelectorAll('[data-filter-brand],[data-filter-size],[data-filter-color],[data-filter-gender],[data-filter-subcat]').forEach(el => { el.checked = false; el.classList.remove('active'); });
    if (inStockCb) inStockCb.checked = false;
    if (onSaleCb) onSaleCb.checked = false;
    if (priceMin) priceMin.value = 0;
    if (priceMax) priceMax.value = 99999;
    applyFiltersAndRender();
  });

  applyFiltersAndRender();

  function applyFiltersAndRender() {
    let filtered = PRODUCTS.filter(p => p.category === category);
    filtered = filterProducts(filtered, activeFilters);
    const sortBy = sortEl ? sortEl.value : 'default';
    filtered = sortProducts(filtered, sortBy);
    renderProducts(filtered, 'productsGrid');
    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.textContent = filtered.length;
    renderActiveFilters();
  }
}

function renderActiveFilters() {
  const container = document.getElementById('activeFiltersRow');
  if (!container) return;
  const chips = [];
  activeFilters.brands.forEach(b => chips.push(`<div class="active-filter">${b}<button onclick="removeFilter('brand','${b}')">✕</button></div>`));
  activeFilters.sizes.forEach(s => chips.push(`<div class="active-filter">Size ${s}<button onclick="removeFilter('size','${s}')">✕</button></div>`));
  activeFilters.colors.forEach(c => chips.push(`<div class="active-filter">${c}<button onclick="removeFilter('color','${c}')">✕</button></div>`));
  container.innerHTML = chips.join('');
}

function removeFilter(type, value) {
  if (type === 'brand') activeFilters.brands = activeFilters.brands.filter(b => b !== value);
  if (type === 'size') activeFilters.sizes = activeFilters.sizes.filter(s => s !== value);
  if (type === 'color') activeFilters.colors = activeFilters.colors.filter(c => c !== value);
  const el = document.querySelector(`[data-filter-${type}="${value}"]`);
  if (el) { el.checked = false; el.classList.remove('active'); }
  const sortEl = document.getElementById('sortSelect');
  // detect current page category from page data attribute or URL
  const path = window.location.pathname;
  let category = 'sneakers';
  if (path.includes('jerseys')) category = 'jerseys';
  else if (path.includes('kids')) category = 'kids';
  let filtered = PRODUCTS.filter(p => p.category === category);
  filtered = filterProducts(filtered, activeFilters);
  filtered = sortProducts(filtered, sortEl ? sortEl.value : 'default');
  renderProducts(filtered, 'productsGrid');
  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = filtered.length;
  renderActiveFilters();
}
