const consultationForm = document.querySelector('.consultation__form');
const consultationInputs = consultationForm.querySelectorAll('.consultation__input');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

// функции для валидации
const isValidPhone = (phone) => {
  const pattern = /^([+]?[0-9\s\-\(\)]{3,25})*$/i;
  return pattern.test(phone);
}

const isValidEmail = (email) => {
  const pattern = /^[А-Яа-я0-9A-Za-z]+([._-]?[А-Яа-я0-9A-Za-z]+)@[А-Яа-я0-9A-Za-z]+([._-]?[А-Яа-я0-9A-Za-z]+)(.[А-Яа-я0-9A-Za-z]{2,5})$/;
  return pattern.test(email);
}

// исчезновение label если данные в поле введены и поле не в фокусе
const changeLabel = () => {
  consultationInputs.forEach((input) => {
    input.addEventListener('change', (evt) => {
      const label = document.querySelector(`[for="${evt.target.id}"]`);
      if (input.value !== '') {
        label.style.color = 'transparent';
      } else {
        label.style.color = 'rgba(45, 56, 63, 0.5)';
      }
    });
  });
}

// очистка формы при возвращении назад после успешной отправки
const resetForm = () => {
  window.addEventListener("unload", () => {
    consultationForm.reset();
  });
}

// валидация формы
const validateForm = () => {
  consultationForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const phone = phoneInput.value;
    const email = emailInput.value;

    if (!isValidPhone(phone)) {
      alert('Номер телефона может содержать только цифры, знаки +,(,),-. Длина от 3 до 25 символов');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Email должен содержать символ @, латинские или кириллические символы или цифры');
      return;
    }

    consultationForm.submit();
  });
}

export { validateForm, resetForm, changeLabel };
