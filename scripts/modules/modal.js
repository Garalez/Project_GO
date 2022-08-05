import selectors from './selectors.js';
const {
  modalForm,
  modalOverlay,
  openModal,
  navigationLogo,
  form,
  formTelInput,
} = selectors;


export const modalControl = () => {
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

export const modalValidate = () => {
  const telMask = new Inputmask('+7 (999)-99-99-99');
  telMask.mask(formTelInput);

  const validation = new JustValidate(form);
  validation
      .addField('.header__callback-name', [
        {
          rule: 'required',
          errorMessage: 'Укажите ваше имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Не короче 2 символов',
        },
      ])
      .addField('.header__callback-tel', [
        {
          rule: 'required',
          errorMessage: 'Укажите ваш телефон',
        },
        {
          validator(value) {
            const phone = formTelInput.inputmask.unmaskedvalue();
            return !!(Number(phone) && phone.length === 10);
          },
          errorMessage: 'Укажите ваш телефон',
        },
      ]);
};
