// СЛАЙДЕРЫ
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

// hero swiper slider
const heroSlider = document.querySelector('.hero__swiper');

const heroSwiper = new Swiper(heroSlider, {
  slideClass: 'hero__slide',
  modules: [Pagination],
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
    1440: {
      allowTouchMove: false,
      pagination: {
        clickable: true,
      }
    },
  }
});

heroSwiper.init();

// tours swiper slider
const toursSlider = document.querySelector('.tours__swiper');

const toursSwiper = new Swiper(toursSlider, {
  slideClass: 'tours__slide',
  modules: [Navigation],
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

toursSwiper.init();

// TRAINING swiper slider
const trainingSlider = document.querySelector('.training__swiper');

const trainingSwiper = new Swiper(trainingSlider, {
  slideClass: 'training__slide',
  modules: [Navigation],
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

trainingSwiper.init();

// REVIEWS swiper slider
const reviewsSlider = document.querySelector('.reviews__swiper');

const reviewsSwiper = new Swiper(reviewsSlider, {
  slideClass: 'reviews__slide',
  modules: [Navigation],
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true, // возможность переключения тачем
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
      allowTouchMove: false,
    },
  }
});

reviewsSwiper.init();

