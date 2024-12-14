// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


// header меню
const headerNavigation = document.querySelector('.header__navigation');
const headerButton = document.querySelector('.header__toggle');

headerButton.addEventListener('click', () => {
  headerNavigation.classList.toggle('header__navigation--opened');
})
