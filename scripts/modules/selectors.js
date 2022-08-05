const items = document.querySelectorAll('.questions__item');
const buttons = document.querySelectorAll('.questions__item-btn');
const textWrapper = document.querySelectorAll('.questions__text-wrapper');
const menu = document.querySelector('.navigation__list');
const openMenuBtn = document.querySelector('.menu__toggle');
const menuOverlay = document.querySelector('.navigation');
const modalForm = document.querySelector('.header__callback-form');
const modalOverlay = document.querySelector('.header__callback');
const openModal = document.querySelectorAll('.menu__button');
const navigationLogo = document.querySelector('.menu__nav-logo');
const form = document.querySelector('.header__callback-form');
const formTelInput = document.querySelector('.header__callback-tel');

export default {
  items,
  buttons,
  textWrapper,
  menu,
  openMenuBtn,
  menuOverlay,
  modalForm,
  modalOverlay,
  openModal,
  navigationLogo,
  form,
  formTelInput,
};
