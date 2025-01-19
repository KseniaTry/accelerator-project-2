import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { addSwiperClass, removeSwiperClass } from './util';

// Блок adv. инициализация свайпера происходит только при переключении на десктопную версию
const advSlider = document.querySelector('.advantages__swiper');
const advList = document.querySelector('.advantages__list');
const advSwiperContainer = document.querySelector('.advantages__swiper');
const advItems = document.querySelectorAll('.advantages__item');
const advBreakpoint = window.matchMedia('(min-width: 1440px)');
const advNextButton = document.querySelector('.advantages__button--next');
const SLIDES_MAX_ID = 4;
const DESKTOP_MIN_WIDTH = 1440;
let advSwiper;

const initAdvSwiper = () => {
  advSwiper = new Swiper(advSlider, {
    slideClass: 'advantages__item',
    modules: [Navigation],
    navigation: {
      prevEl: '.advantages__button--prev',
      nextEl: '.advantages__button--next',
      clickable: true,
    },
    direction: 'horizontal',
    slidesPerColumn: 1,
    loop: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    spaceBetween: 30,
    slidesOffsetAfter: 0,
    allowTouchMove: false,
    centeredSlides: true,
  });

  advSwiper.slideToLoop(2, 0);

  advNextButton.addEventListener('click', () => {
    const activeSlideIndex = advSwiper.realIndex;
    let nextSlideIndex = activeSlideIndex + 2;

    if (nextSlideIndex > SLIDES_MAX_ID) {
      nextSlideIndex = 0;
    }

    advSwiper.slideToLoop(nextSlideIndex);
  });
};

const advBreakpointChecker = () => {
  if (advBreakpoint.matches) {
    addSwiperClass(advSwiperContainer, advList, advItems);
    initAdvSwiper();
  } else {
    removeSwiperClass(advSwiperContainer, advList, advItems);
    advSwiper.destroy();
  }
};

const initAdvSlider = () => {
  advBreakpoint.addEventListener('change', advBreakpointChecker);

  if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
    addSwiperClass(advSwiperContainer, advList, advItems);
    initAdvSwiper();
  }
};

export { initAdvSlider };
