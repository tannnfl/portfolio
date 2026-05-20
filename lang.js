function applyLang(lang) {
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.textContent = lang === 'zh' ? el.dataset.zh : el.dataset.en;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('portfolio-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-zh]').forEach(el => {
    if (!el.dataset.en) el.dataset.en = el.textContent.trim();
  });
  const saved = localStorage.getItem('portfolio-lang') || 'en';
  applyLang(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
