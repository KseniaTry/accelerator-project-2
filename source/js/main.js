import Swiper from "swiper";
import { Navigation, Pagination, Grid } from "swiper/modules";
import 'swiper/css';
import { addSwiperClass, removeSwiperClass } from "./util";

// header меню
const headerNavigation = document.querySelector('.header__navigation');
const headerButton = document.querySelector('.header__toggle');
const navigationItems = document.querySelectorAll('.header__navigation-item');
const pageBody = document.querySelector('.page-body');
const pageMain = document.querySelector('.page-main');
const footer = document.querySelector('.footer');

headerButton.addEventListener('click', () => {
  headerNavigation.classList.toggle('header__navigation--opened');
  headerButton.classList.toggle('header__toggle--opened');
  pageBody.classList.toggle('page-body--navigation-opened');
  pageMain.classList.toggle('overlay');
  footer.classList.toggle('overlay');
})

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener('click', () => {
    headerNavigation.classList.remove('header__navigation--opened');
    headerButton.classList.remove('header__toggle--opened');
    pageBody.classList.remove('page-body--navigation-opened');
    pageMain.classList.remove('overlay');
    footer.classList.remove('overlay');
  })
})

// hero swiper slider
const heroSlider = document.querySelector('.hero__swiper');

new Swiper(heroSlider, {
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

// tours swiper slider
const toursSlider = document.querySelector('.tours__swiper');

new Swiper(toursSlider, {
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

// TRAINING swiper slider
const trainingSlider = document.querySelector('.training__swiper');

new Swiper(trainingSlider, {
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

// REVIEWS swiper slider
const reviewsSlider = document.querySelector('.reviews__swiper');

new Swiper(reviewsSlider, {
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

// ADV блок. свайпер. инициализация свайпера происходит только при переключении на десктопную версию
const advSlider = document.querySelector('.advantages__swiper');
const advList = document.querySelector('.advantages__list');
const advSwiperContainer = document.querySelector('.advantages__swiper');
const advItems = document.querySelectorAll('.advantages__item');
const advBreakpoint = window.matchMedia("(min-width: 1440px)");
const advNextButton = document.querySelector('.advantages__button--next');
const SLIDES_COUNT = 4;
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

if (window.innerWidth >= 1440) {
  addSwiperClass(advSwiperContainer, advList, advItems);
  initAdvSwiper();
}

const advBreakpointChecker = () => {
  if (advBreakpoint.matches) {
    addSwiperClass(advSwiperContainer, advList, advItems);
    initAdvSwiper();
  } else {
    removeSwiperClass(advSwiperContainer, advList, advItems);
    advSwiper.destroy();
  }
};

advBreakpoint.addEventListener("change", advBreakpointChecker);

// GALLERY блок. свайпер. инициализация свайпера происходит только при переключении на десктопную версию
const gallerySlider = document.querySelector('.gallery__swiper');
const galleryBreakpoint = window.matchMedia("(max-width: 1439px)");
const gallerySwiperWrapper = document.querySelector('.gallery__swiper-wrapper');
const gallerySwiperContainer = document.querySelector('.gallery__swiper');
const gallerySlides = document.querySelectorAll('.gallery__slide');
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
};

if (window.innerWidth < 1440) {
  addSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
  initGallerySwiper();
}

const galleryBreakpointChecker = () => {
  if (galleryBreakpoint.matches) {
    addSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    initGallerySwiper();
  } else {
    removeSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    gallerySwiper.destroy();
  }
};

galleryBreakpoint.addEventListener('change', galleryBreakpointChecker);

// form
const consultationForm = document.querySelector('.consultation__form');
const consultationInputs = consultationForm.querySelectorAll('.consultation__input');

// исчезновение label если данные в поле введены и поле не в фокусе
consultationInputs.forEach((input) => {
  input.addEventListener('change', (evt) => {
    let label = document.querySelector(`[for="${evt.target.id}"]`);
    if (input.value !== '') {
      label.style.color = 'transparent';
    } else {
      label.style.color = 'rgba(45, 56, 63, 0.5)';
    }
  })
});

const BASE_URL = 'https://echo.htmlacademy.ru/';

const sendData = (onSuccess, body) => {
  fetch(
    BASE_URL,
    {
      method: 'POST',
      body
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error();
    }
  })
    .catch(() => {
      throw new Error();
    });
};

// очистка формы после отправки данных на сервер
const setUploadFormSubmit = (onSuccess) => {
  consultationForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        onSuccess();
      },
      new FormData(evt.target),
    );
  })
};

const resetFormData = () => {
  consultationForm.reset();

  consultationInputs.forEach((input) => {
    let label = document.querySelector(`[for="${input.id}"]`);
    label.style.color = 'rgba(45, 56, 63, 0.5)';
  })
};

setUploadFormSubmit(resetFormData);


