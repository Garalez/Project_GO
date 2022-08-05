import {modalControl, modalValidate} from './modules/modal.js';
import {accordion} from './modules/acc.js';
import {menuControl} from './modules/menu.js';
import './modules/swiper.js';

const init = () => {
  modalControl();
  accordion();
  menuControl();
  modalValidate();
};

init();
