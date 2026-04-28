/* ===== CART — localStorage ===== */
const CART_KEY = 'wowteck_cart';

function cartGet() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function cartSave(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  cartUpdateBadge();
}

function cartAdd(slug, qty = 1) {
  const items = cartGet();
  const existing = items.find(i => i.slug === slug);
  if (existing) existing.qty = Math.min(99, existing.qty + qty);
  else {
    const product = getProduct(slug);
    if (!product) return;
    items.push({ slug, qty, title: product.title, price: product.price, emoji: product.emoji });
  }
  cartSave(items);
  cartShowToast('Produs adăugat în coș! 🛒');
  cartOpenDrawer();
}

function cartRemove(slug) {
  cartSave(cartGet().filter(i => i.slug !== slug));
  if (typeof renderCartDrawer === 'function') renderCartDrawer();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function cartUpdateQty(slug, qty) {
  const items = cartGet();
  const item = items.find(i => i.slug === slug);
  if (!item) return;
  if (qty <= 0) { cartRemove(slug); return; }
  item.qty = Math.min(99, qty);
  cartSave(items);
  if (typeof renderCartDrawer === 'function') renderCartDrawer();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function cartTotal() {
  return cartGet().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function cartCount() {
  return cartGet().reduce((sum, i) => sum + i.qty, 0);
}

function cartClear() {
  localStorage.removeItem(CART_KEY);
  cartUpdateBadge();
}

function cartUpdateBadge() {
  const count = cartCount();
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

function cartShowToast(msg, type = 'ok') {
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    wrap.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:.75rem;pointer-events:none;';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  const color = type === 'ok' ? '#22c55e' : '#e31e24';
  t.style.cssText = `display:flex;align-items:center;gap:.75rem;padding:.85rem 1.5rem;background:#1c1c1c;border:1px solid ${color}33;border-radius:12px;color:#fff;font-size:.88rem;font-weight:500;box-shadow:0 16px 48px rgba(0,0,0,.6);pointer-events:auto;white-space:nowrap;animation:toastIn .3s ease;`;
  t.innerHTML = `<span style="color:${color};">${type === 'ok' ? '✓' : '✕'}</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}
window.cartShowToast = cartShowToast;

function cartOpenDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}

function cartCloseDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}
window.cartCloseDrawer = cartCloseDrawer;

function renderCartDrawer() {
  const body = document.getElementById('cart-drawer-body');
  const footer = document.getElementById('cart-drawer-footer');
  if (!body) return;
  const items = cartGet();
  cartUpdateBadge();

  if (items.length === 0) {
    body.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:1rem;text-align:center;padding:2rem;">
      <div style="font-size:3rem;">🛒</div>
      <h3 style="font-family:'Montserrat',sans-serif;font-size:1.1rem;">Coșul este gol</h3>
      <p style="color:#666;font-size:.88rem;">Adaugă produse pentru a continua</p>
      <button onclick="cartCloseDrawer()" style="margin-top:.5rem;padding:.6rem 1.5rem;background:#e31e24;color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer;font-size:.85rem;">Continuă cumpărăturile</button>
    </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  body.innerHTML = items.map(item => `
    <div style="display:flex;gap:1rem;padding:1rem 0;border-bottom:1px solid #242424;">
      <div style="width:72px;height:72px;border-radius:6px;background:#141414;border:1px solid #242424;display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0;">${item.emoji}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:600;font-size:.88rem;color:#fff;margin-bottom:.25rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
          <a href="/product.html?slug=${item.slug}" style="color:#fff;text-decoration:none;">${item.title}</a>
        </div>
        <div style="font-size:.78rem;color:#666;margin-bottom:.5rem;">Retail · 1 PC</div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="font-family:'Montserrat',sans-serif;font-weight:700;color:#fff;">${formatPrice(item.price * item.qty)}</div>
          <div style="display:flex;align-items:center;gap:.5rem;">
            <button onclick="cartUpdateQty('${item.slug}', ${item.qty - 1})" style="width:26px;height:26px;border:1px solid #242424;border-radius:4px;background:transparent;color:#b0b0b0;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.borderColor='#e31e24';this.style.color='#e31e24'" onmouseout="this.style.borderColor='#242424';this.style.color='#b0b0b0'">−</button>
            <span style="font-size:.88rem;font-weight:600;min-width:20px;text-align:center;">${item.qty}</span>
            <button onclick="cartUpdateQty('${item.slug}', ${item.qty + 1})" style="width:26px;height:26px;border:1px solid #242424;border-radius:4px;background:transparent;color:#b0b0b0;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.borderColor='#e31e24';this.style.color='#e31e24'" onmouseout="this.style.borderColor='#242424';this.style.color='#b0b0b0'">+</button>
            <button onclick="cartRemove('${item.slug}');renderCartDrawer();" style="width:26px;height:26px;border:none;background:transparent;color:#666;cursor:pointer;font-size:.88rem;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.color='#e31e24'" onmouseout="this.style.color='#666'">✕</button>
          </div>
        </div>
      </div>
    </div>`).join('');

  if (footer) {
    footer.style.display = 'block';
    const totalEl = document.getElementById('cart-total-amount');
    if (totalEl) totalEl.textContent = formatPrice(cartTotal());
  }
}
window.renderCartDrawer = renderCartDrawer;

document.addEventListener('DOMContentLoaded', () => {
  cartUpdateBadge();
  document.getElementById('cart-overlay')?.addEventListener('click', cartCloseDrawer);
  document.querySelectorAll('[data-cart-open]').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); cartOpenDrawer(); }));
});
