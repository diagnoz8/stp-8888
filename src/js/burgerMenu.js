const burgerBtnIcon = document.querySelector('[data-el="burger-svg"]');
const exitBtnIcon = document.querySelector('[data-el="exit-svg"]');
const menuBtnEl = document.querySelector('[data-button]');
const burgerMenuEl = document.querySelector('[data-menu="burger"]');
const burgerUseEl = document.querySelector('[data-el="burger-use"]');
const sections = document.querySelectorAll('[data-section]');
const menuLis = document.querySelectorAll('[data-li="menuLink"');

const handleMenuEvents = e => {
  const isOpen = burgerMenuEl.dataset.menuvisible === 'open';

  if (isOpen) {
    burgerMenuEl.dataset.menuvisible = 'close';
    [...sections].forEach(section => (section.style.opacity = 1));
    menuBtnEl.dataset.button = 'burger-open';
    burgerBtnIcon.dataset.visible = 'true';
    exitBtnIcon.dataset.visible = 'false';
  } else {
    burgerMenuEl.dataset.menuvisible = 'open';
    [...sections]
      .filter(section => section.dataset.section !== 'header')
      .forEach(section => (section.style.opacity = 0.5));
    menuBtnEl.dataset.button = 'burger-close';
    exitBtnIcon.dataset.visible = 'true';
    burgerBtnIcon.dataset.visible = 'false';
  }
};

menuBtnEl.addEventListener('click', handleMenuEvents);

menuLis.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuEl.dataset.menuvisible = 'close';
    [...sections].forEach(section => (section.style.opacity = 1));
    menuBtnEl.dataset.button = 'burger-open';
    burgerBtnIcon.dataset.visible = 'true';
    exitBtnIcon.dataset.visible = 'false';
  });
});
