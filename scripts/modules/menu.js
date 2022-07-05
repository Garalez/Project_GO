const menu = document.querySelector('.navigation__list');
const openMenuBtn = document.querySelector('.menu__toggle');
const menuOverlay = document.querySelector('.navigation');

const duration = 700;
const distance = menu.clientHeight;

const startAnimation = (duration, callback) => {
  let startAnimation = NaN;

  requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const progress = (timestamp - startAnimation) / duration;

    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  });
};

const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

const menuControl = () => {
  menuOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === menuOverlay ||
      target.classList.contains('menu__close') ||
      target.classList.contains('navigation__link')) {
      menu.style.top = '0px';
      startAnimation(duration, (progress) => {
        const top = easeInOut(progress) * distance;
        menu.style.transform = `translateY(${-top}px)`;
      });
      menuOverlay.classList.remove('navigation-active');
    }
  });

  openMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.add('navigation-active');
    menu.style.top = `${-distance}px`;
    startAnimation(duration, (progress) => {
      const top = easeInOut(progress) * distance;
      menu.style.transform = `translateY(${top}px)`;
    });
  });
};

menuControl();
