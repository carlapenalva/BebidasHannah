document.addEventListener('DOMContentLoaded', () => {
  const toggleSearch = document.getElementById('toggle-search');
  const overlay = document.getElementById('search-overlay');
  const mobileInput = document.getElementById('buscador-mobile');
  const mainInput = document.getElementById('buscador');

  if (toggleSearch && overlay) {
    toggleSearch.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('open');
      overlay.setAttribute('aria-hidden', String(!isOpen));
      toggleSearch.setAttribute('aria-expanded', String(isOpen));
      if (isOpen && mobileInput) mobileInput.focus();
    });

    // cerrar al clicar fuera
    document.addEventListener('click', (e) => {
      if (!overlay.classList.contains('open')) return;
      if (e.target.closest('#search-overlay') || e.target.closest('#toggle-search') || e.target.closest('.buscando')) return;
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      toggleSearch.setAttribute('aria-expanded', 'false');
    });
  }

  // sincronizar móvil -> main
  document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'buscador-mobile' && mainInput) {
      mainInput.value = e.target.value;
      mainInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });

  // Enter en móvil dispara búsqueda (si tu lógica escucha #buscador)
  if (mobileInput && mainInput) {
    mobileInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        mainInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  }
});