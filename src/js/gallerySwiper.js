import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Keyboard]);
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 32,

    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1,
  });
});
