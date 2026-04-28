/* ===== MAIN JS ===== */

// Header scroll
window.addEventListener('scroll', () => {
  document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.mobile-nav');
  btn?.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    nav?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Animate on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-anim]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });

  // Spin wheel auto show
  setTimeout(() => {
    if (!localStorage.getItem('spin_shown')) openSpinPopup();
  }, 6000);
});

// Spin wheel popup
function openSpinPopup() {
  document.getElementById('spin-overlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
  localStorage.setItem('spin_shown', '1');
  if (typeof initSpinCanvas === 'function') initSpinCanvas();
}
function closeSpinPopup() {
  document.getElementById('spin-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}
window.openSpinPopup = openSpinPopup;
window.closeSpinPopup = closeSpinPopup;

// Tabs
function openTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('on'));
  document.getElementById('tab-' + id)?.classList.add('on');
  if (btn) btn.classList.add('on');
  if (id === 'reviews') {
    document.querySelectorAll('.rev-bar-fill').forEach(b => { b.style.width = b.dataset.w + '%'; });
  }
}
window.openTab = openTab;

// Copy to clipboard
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => cartShowToast('Copiat în clipboard!'));
}
window.copyText = copyText;

// Countdown (per sesiune)
function startCountdown(hEl, mEl, sEl, totalSeconds) {
  let remaining = totalSeconds;
  const tick = () => {
    if (remaining <= 0) return;
    remaining--;
    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
    setTimeout(tick, 1000);
  };
  tick();
}
window.startCountdown = startCountdown;

// Social proof fluctuation
function startViewerCount(elId, base) {
  const el = document.getElementById(elId);
  if (!el) return;
  let n = base;
  setInterval(() => { n = Math.max(5, Math.min(50, n + Math.floor(Math.random() * 3) - 1)); el.textContent = n; }, 7000);
}
window.startViewerCount = startViewerCount;
