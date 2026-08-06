/* ===== RAYS FOOTWEAR — CHECKOUT.JS ===== */
// store.js loads first and declares `cart` at module level.
// To avoid SyntaxError from duplicate `let cart`, we always read from localStorage.

let appliedPromoLocal = null;
let deliveryCity = 'nairobi';

const PROMO_CODES_CO = {
  'RAYS10':   { discount: 0.10, label: '10% off' },
  'NEWUSER':  { discount: 0.15, label: '15% off' },
  'KIDS20':   { discount: 0.20, label: '20% off kids' },
  'JERSEY15': { discount: 0.15, label: '15% off jerseys' }
};

function getCart()        { return JSON.parse(localStorage.getItem('raysCart') || '[]'); }
function getDeliveryFee() { return deliveryCity === 'nairobi' ? 200 : 350; }
function getSubtotal()    { return getCart().reduce((s, i) => s + i.price * i.qty, 0); }
function getPromoDiscount(sub) { return appliedPromoLocal ? Math.round(sub * appliedPromoLocal.discount) : 0; }
function getTotal()       { const s = getSubtotal(); return s + getDeliveryFee() - getPromoDiscount(s); }

// ===== RENDER ORDER SUMMARY =====
function renderOrderSummary() {
  const currentCart = getCart();
  const sub   = getSubtotal();
  const del   = getDeliveryFee();
  const disc  = getPromoDiscount(sub);
  const total = sub + del - disc;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  const itemsEl = document.getElementById('orderItems');
  if (itemsEl) {
    itemsEl.innerHTML = currentCart.length === 0
      ? `<p style="color:var(--gray);text-align:center;padding:20px">Cart is empty. <a href="sneakers.html" style="color:var(--gold)">Go shopping!</a></p>`
      : currentCart.map(i => `
          <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05)">
            <div style="width:50px;height:50px;background:var(--dark3);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0">${i.emoji || '👟'}</div>
            <div style="flex:1">
              <div style="color:var(--white);font-size:0.82rem;font-weight:600">${i.name}</div>
              <div style="color:var(--gray);font-size:0.75rem">Size: ${i.size} &times; ${i.qty}</div>
            </div>
            <div style="color:var(--gold);font-weight:700;font-size:0.85rem">KES ${(i.price * i.qty).toLocaleString()}</div>
          </div>`).join('');
  }

  set('summarySubtotal',    `KES ${sub.toLocaleString()}`);
  set('summaryDelivery',    del === 0 ? 'FREE' : `KES ${del}`);
  set('summaryDiscount',    `-KES ${disc.toLocaleString()}`);
  set('summaryTotal',       `KES ${total.toLocaleString()}`);
  set('mpesaAmount',        `KES ${total.toLocaleString()}`);
  set('mpesaAmountConfirm', `KES ${total.toLocaleString()}`);

  const discRow = document.getElementById('discountRow');
  if (discRow) discRow.style.display = disc > 0 ? 'flex' : 'none';
}

// ===== APPLY PROMO =====
function applyPromo() {
  const input = document.getElementById('promoInput');
  const msg   = document.getElementById('promoMsg');
  if (!input) return;
  const code  = input.value.trim().toUpperCase();
  const promo = PROMO_CODES_CO[code];
  if (promo) {
    appliedPromoLocal = promo;
    if (msg) { msg.textContent = `✅ ${promo.label} applied!`; msg.style.color = 'var(--green)'; }
    input.style.borderColor = 'var(--green)';
    renderOrderSummary();
    showToastCo('success', '🎁 Promo Applied!', promo.label);
  } else {
    appliedPromoLocal = null;
    if (msg) { msg.textContent = '❌ Invalid promo code'; msg.style.color = 'var(--red)'; }
    input.style.borderColor = 'var(--red)';
    showToastCo('error', '❌ Invalid Code', 'Try RAYS10, NEWUSER, KIDS20, or JERSEY15');
  }
  setTimeout(() => { input.style.borderColor = ''; }, 3000);
}

// ===== PAYMENT TABS =====
function switchPayment(tab) {
  document.querySelectorAll('.pay-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  ['mpesa', 'card', 'other'].forEach(name => {
    const el = document.getElementById('pay-' + name);
    if (el) el.style.display = name === tab ? 'block' : 'none';
  });
}

// ===== CITY CHANGE =====
function onCityChange() {
  const el = document.getElementById('deliveryCity');
  if (el) deliveryCity = el.value === 'nairobi' ? 'nairobi' : 'other';
  renderOrderSummary();
}

// ===== FORM VALIDATION =====
function validateForm() {
  let valid = true;
  ['custName', 'custPhone', 'custEmail', 'custAddress'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) { el.style.borderColor = 'var(--red)'; valid = false; }
    else el.style.borderColor = '';
  });
  if (!valid) showToastCo('error', '⚠️ Missing Fields', 'Please fill in all required fields');
  return valid;
}

// ===== ORDER ID =====
function generateOrderId() {
  return 'RF' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
}
