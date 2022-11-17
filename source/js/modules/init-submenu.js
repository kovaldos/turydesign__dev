// Подменю в бургер-меню -- Начало --
// Burger submenu -- Start --

export function initSubmenu() {
  const submenuBtns = document.querySelectorAll('[data-submenu-toggle]');
  if (submenuBtns.length) {
    const submenuBody = document.querySelector('[data-submenu-body]');
    submenuBtns.forEach((submenuBtn) => {
      submenuBtn.addEventListener('click', () => {
        submenuBtn.nextElementSibling.classList.add('is-active');
      });
      submenuBody.addEventListener('click', (e) => {
        const links = submenuBody.querySelectorAll('.main-nav__sublink');
        const backBtn = submenuBody.querySelector('.main-nav__submenu-back');
        links.forEach((link) => {
          if (e.target === link) {
            document.body.classList.remove('scroll-lock');
            submenuBody.classList.remove('is-active');
            e.target.closest('.main-nav').classList.remove('is-active');
            document.querySelector('.main-nav__toggle').classList.remove('is-active');
          }
          if (e.target === backBtn) {
            submenuBody.classList.remove('is-active');
          }
        });
      });
    });
  }
}
// Подменю в бургер-меню -- Конец --
// Burger submenu -- End --
