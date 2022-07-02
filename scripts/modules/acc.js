const items = document.querySelectorAll('.questions__item');
const buttons = document.querySelectorAll('.questions__item-btn');
const textWrapper = document.querySelectorAll('.questions__text-wrapper');

let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        textWrapper[i].style.height =
          items[i].classList.contains('questions__text_active') ?
          '' : `${heightWrapper}px`;
        items[i].classList.toggle('questions__text_active');
        items[i].classList.add('questions__item-open');
      } else {
        items[i].classList.remove('questions__text_active');
        textWrapper[i].style.height = '';
      }
    }
  });
});

