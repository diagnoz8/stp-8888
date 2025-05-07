const cookiesPopUp = document.querySelector('[data-popup="cookies"]');
const acceptCookiesBtn = document.querySelector(
  '[data-button="accept-cookies"]'
);
const declineCookiesBtn = document.querySelector(
  '[data-button="decline-cookies"]'
);
const hideCookiesPopup = () => {
  cookiesPopUp.dataset.throw = 'false';
  document.body.classList.remove('no-scroll'); // Дозволити скрол
  setTimeout(() => {
    cookiesPopUp.remove();
  }, 350);
};

if (localStorage.getItem('cookiesAccepted') === null) {
  cookiesPopUp.dataset.throw = 'true';
  document.body.classList.add('no-scroll'); // Заборонити скрол
  acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookiesPopup();
  });

  declineCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    hideCookiesPopup();
  });
} else {
  cookiesPopUp.remove();
}
