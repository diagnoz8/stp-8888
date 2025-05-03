const burgerBtnEl = document.querySelector('[data-button]');
const burgerMenuEl = document.querySelector('[data-visible]');

burgerBtnEl.addEventListener('click', e => {
  const isOpen = burgerMenuEl.dataset.visible === 'open';

  burgerMenuEl.dataset.visible = isOpen ? 'close' : 'open';
  burgerBtnEl.dataset.button = isOpen ? 'burger-open' : 'burger-close';
});
