import {Swiper} from '../plugins/swiper-bundle.esm.browser.min.js';

new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});

