import Swiper from 'swiper';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import { addSwiperClass, removeSwiperClass } from './util';

// GALLERY блок. свайпер. инициализация свайпера происходит только при переключении на десктопную версию
const gallerySlider = document.querySelector('.gallery__swiper');
const galleryBreakpoint = window.matchMedia('(max-width: 1439px)');
const gallerySwiperWrapper = document.querySelector('.gallery__swiper-wrapper');
const gallerySwiperContainer = document.querySelector('.gallery__swiper');
const gallerySlides = document.querySelectorAll('.gallery__slide');
const DESKTOP_MIN_WIDTH = 1440;
let gallerySwiper;

const initGallerySwiper = () => {
  gallerySwiper = new Swiper(gallerySlider, {
    slideClass: 'gallery__slide',
    modules: [Navigation, Grid],
    navigation: {
      prevEl: '.gallery__button--prev',
      nextEl: '.gallery__button--next',
      clickable: true,
    },
    loop: true,
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 6,
        grid: {
          rows: 1,
          fill: 'fill',
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        grid: {
          rows: 1,
          fill: 'fill',
        },
      },
    },
  });
};

const galleryBreakpointChecker = () => {
  if (galleryBreakpoint.matches) {
    addSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    initGallerySwiper();
  } else {
    removeSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    gallerySwiper.destroy();
  }
};

const initGallerySlider = () => {
  galleryBreakpoint.addEventListener('change', galleryBreakpointChecker);

  if (window.innerWidth < DESKTOP_MIN_WIDTH) {
    addSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    initGallerySwiper();
  }
}

export { initGallerySlider };
