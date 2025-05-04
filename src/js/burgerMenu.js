const burgerBtnEl = document.querySelector('[data-button]');
const burgerMenuEl = document.querySelector('[data-menu="burger"]');
const burgerUseEl = document.querySelector('[data-el="burger-use"]');
const sections = document.querySelectorAll('[data-section]');
burgerBtnEl.addEventListener('click', e => {
  const isOpen = burgerMenuEl.dataset.menuvisible === 'open';

  if (isOpen) {
    burgerMenuEl.dataset.menuvisible = 'close';
    [...sections].forEach(section => (section.style.opacity = 1));
    burgerBtnEl.dataset.button = 'burger-open';
  } else {
    burgerMenuEl.dataset.menuvisible = 'open';
    [...sections]
      .filter(section => section.dataset.section !== 'header')
      .forEach(section => (section.style.opacity = 0.5));
    burgerBtnEl.dataset.button = 'burger-close';
  }
  const iconId = isOpen ? '#icon-burger-menu' : '#icon-exit-cross';
  burgerUseEl.setAttribute('href', `img/icons.svg${iconId}`);
});
