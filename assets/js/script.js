'use strict';

// Navegación mínima: About / Resume
(function () {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('article[data-page]');
  if (!navLinks.length || !pages.length) return;

  function show(targetLabel) {
    const target = String(targetLabel).trim().toLowerCase(); // "Resume" -> "resume"

    // Mostrar/ocultar páginas
    pages.forEach((p) => p.classList.toggle('active', p.dataset.page === target));

    // Marcar pestaña activa + accesibilidad
    navLinks.forEach((btn) => {
      const isActive = btn.textContent.trim().toLowerCase() === target;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    window.scrollTo(0, 0);
  }

  // Click en tabs
  navLinks.forEach((btn) => btn.addEventListener('click', () => show(btn.textContent)));

  // Estado inicial
  const current = document.querySelector('article[data-page].active');
  show(current ? current.dataset.page : 'about');
})();
