const burgerBtnEl = document.querySelector('[data-button]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerUseEl = document.querySelector('[data-el="burger-use"]');
burgerBtnEl.addEventListener('click', e => {
  const isOpen = burgerMenuEl.dataset.visible === 'open';

  burgerMenuEl.dataset.visible = isOpen ? 'close' : 'open';
  burgerBtnEl.dataset.button = isOpen ? 'burger-open' : 'burger-close';
  const iconId = isOpen ? '#burger-menu' : '#icon-icon-';
  burgerUseEl.setAttribute('href', `/img/icons.svg${iconId}`);
});
