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
  allowTouchMove: true,
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

// tours swiper slider
const toursSlider = document.querySelector('.tours__swiper');

new Swiper(toursSlider, {
  slideClass: 'tours__slide',
  modules: [Navigation, Pagination],
  loop: true, // слайдер зациклен
  navigation: {
    prevEl: '.tours__button--prev',
    nextEl: '.tours__button--next',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true, // возможность переключения тачем
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 18,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  }
});

// TRAINING swiper slider
const trainingSlider = document.querySelector('.training__swiper');

new Swiper(trainingSlider, {
  slideClass: 'training__slide',
  modules: [Navigation, Pagination],
  loop: true, // слайдер зациклен
  navigation: {
    prevEl: '.training__button--prev',
    nextEl: '.training__button--next',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true, // возможность переключения тачем
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: true,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false,
    },
  }
});
