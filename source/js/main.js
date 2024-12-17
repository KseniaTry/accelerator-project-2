// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';


// header меню
const headerNavigation = document.querySelector('.header__navigation');
const headerButton = document.querySelector('.header__toggle');
const navigationItems = document.querySelectorAll('.navigation__item');

headerButton.addEventListener('click', () => {
  headerNavigation.classList.toggle('header__navigation--opened');
})

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener('click', () => {
    headerNavigation.classList.remove('header__navigation--opened');
  })
})

// hero swiper slider
const heroSlider = document.querySelector('.hero__swiper');

new Swiper(heroSlider, {
  slideClass: 'hero__slide',
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.hero__button',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet hero__bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active hero__bullet--active',
  },
  breakpoints: {
    1400: {
      allowTouchMove: false,
      pagination: {
        clickable: true,
      }
    },
  }
});
