// header меню
const headerNavigation = document.querySelector('.header__navigation');
const headerButton = document.querySelector('.header__toggle');
const navigationItems = document.querySelectorAll('.header__navigation-item');
const pageBody = document.querySelector('.page-body');
const pageMain = document.querySelector('.page-main');
const footer = document.querySelector('.footer');

const switchMenu = () => {
  headerButton.addEventListener('click', () => {
    headerNavigation.classList.toggle('header__navigation--opened');
    headerButton.classList.toggle('header__toggle--opened');
    pageBody.classList.toggle('page-body--navigation-opened');
    pageMain.classList.toggle('overlay');
    footer.classList.toggle('overlay');
  });
};

const closeMenuOnItemClick = () => {
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener('click', () => {
      headerNavigation.classList.remove('header__navigation--opened');
      headerButton.classList.remove('header__toggle--opened');
      pageBody.classList.remove('page-body--navigation-opened');
      pageMain.classList.remove('overlay');
      footer.classList.remove('overlay');
    });
  });
};

export { switchMenu, closeMenuOnItemClick };
