const modalForm = document.querySelector('.header__callback-form');
const modalOverlay = document.querySelector('.header__callback');
const openModal = document.querySelectorAll('.menu__button');
const navigationLogo = document.querySelector('.menu__nav-logo');
const openMenu = document.querySelector('.menu__toggle');
const navList = document.querySelector('.navigation');

const modalControl = () => {
  navigationLogo.addEventListener('click', () => {
    modalOverlay.classList.add('is-visible');
  });

  openModal.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlay.classList.add('is-visible');
    });
  });

  modalForm.addEventListener('click', e => {
    const target = e.target;
    if (target === modalOverlay ||
      target.classList.contains('header__callback-close')) {
      modalOverlay.classList.remove('is-visible');
    }
  });
};
modalControl();

const menuControl = () => {
  navList.addEventListener('click', e => {
    const target = e.target;
    if (target === navList ||
      target.classList.contains('menu__close')) {
      navList.classList.remove('navigation-active');
    }
  });

  openMenu.addEventListener('click', () => {
    navList.classList.add('navigation-active');
  });
};
menuControl();
