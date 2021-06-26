document.querySelectorAll(".form__input-tel").forEach(function (mask) {
    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(mask);
});

new JustValidate('.call__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          let phone = document.querySelector('.form__input-tel').inputmask.unmaskedvalue()          
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: {
        required: 'Обязательное поле',
        minLength: 'Имя должно содержать от 2 символов'
      },
      tel: {
        function: 'Некорректный номер',
        required: 'Обязательное поле'
      }

    },
    colorWrong: 'black'
});

new JustValidate('.call__form-popup', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
            const phone = document.querySelector('.form__input-tel-popup').inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: {
        required: 'Обязательное поле',
        minLength: 'Имя должно содержать от 2 символов'
      },
      tel: {
        function: 'Некорректный номер',
        required: 'Обязательное поле'
      }

    },
    colorWrong: 'black'
});