const cookiesPopUp = document.querySelector('[data-popup="cookies"]');
const acceptCookiesBtn = document.querySelector(
  '[data-button="accept-cookies"]'
);
const declineCookiesBtn = document.querySelector(
  '[data-button="decline-cookies"]'
);
cookiesPopUp.addEventListener('click', e => {
  e.preventDefault();
  isAccepted = e.target === acceptCookiesBtn;
  if (isAccepted) {
    localStorage.setItem('cookiesAccepted', 'true');
  } else {
    localStorage.setItem('cookiesAccepted', 'false');
  }
});
