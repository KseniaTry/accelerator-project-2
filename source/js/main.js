// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation, Pagination, Grid } from "swiper/modules";
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


// REVIEWS swiper slider
const reviewsSlider = document.querySelector('.reviews__swiper');

new Swiper(reviewsSlider, {
  slideClass: 'reviews__slide',
  modules: [Navigation, Pagination],
  loop: true, // слайдер зациклен
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

// ADV блок. свайпер. инициализация свайпера происходит только при переключении на десктопную версию
const advSlider = document.querySelector('.advantages__swiper');
const advList = document.querySelector('.advantages__list');
const advSwiperContainer = document.querySelector('.advantages__swiper');
const advItems = document.querySelectorAll('.advantages__item');
const breakpoint = window.matchMedia("(min-width: 1440px)");
const advNextButton = document.querySelector('.advantages__button--next');
const SLIDES_COUNT = 4;
let advSwiper;

const initSwiper = () => {
  advSwiper = new Swiper(advSlider, {
    slideClass: 'advantages__item',
    modules: [Navigation, Pagination],
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
    let activeSlideIndex = advSwiper.realIndex;
    let nextSlideIndex = activeSlideIndex + 2;

    if (nextSlideIndex > SLIDES_COUNT) {
      nextSlideIndex = 1;
    }

    advSwiper.slideToLoop(nextSlideIndex);

    console.log('active ' + activeSlideIndex);
    console.log('next ' + nextSlideIndex);
  })
}


const addSwiperClass = () => {
  advSwiperContainer.classList.add('swiper');
  advList.classList.add('swiper-wrapper');

  advItems.forEach((advItem) => {
    advItem.classList.add('swiper-slide');
  })
}

const removeSwiperClass = () => {
  advSwiperContainer.classList.remove('swiper');
  advList.classList.remove('swiper-wrapper');

  advItems.forEach((advItem) => {
    advItem.classList.remove('swiper-slide');
  });
}

if (window.innerWidth >= 1440) {
  addSwiperClass();
  initSwiper();
}

const breakpointChecker = () => {
  if (breakpoint.matches) {
    addSwiperClass();
    initSwiper();
  } else {
    removeSwiperClass();
    advSwiper.destroy();
  }
};

breakpoint.addEventListener("change", breakpointChecker);

// GALLERY блок. свайпер. инициализация свайпера происходит только при переключении на десктопную версию
const gallerySlider = document.querySelector('.gallery__swiper')

advSwiper = new Swiper(gallerySlider, {
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
        fill: "fill",
    },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
      grid: {
        rows: 1,
        fill: "fill",
    },
    },
  },
});
