
  // Отримуємо посилання на елемент з класом "header__location-btn"
  var locationBtnElement = document.querySelector('.header__location-btn');

  // Отримуємо посилання на модальне вікно з локацією
  var modalLocationElement = document.querySelector('.modal-location');
  var modalLocationElementContainer = document.querySelector('.modal-location__container');
  // Додаємо обробник подій на клік по елементу "header__location-btn"
  locationBtnElement.addEventListener('click', function() {
    // Додаємо клас "visible" до модального вікна
    modalLocationElement.classList.add('visible');
    modalLocationElementContainer.classList.add('visible')
  });

  // Отримуємо посилання на елемент з класом "modal-location__close"
  var modalLocationCloseElement = document.querySelector('.modal-location__close');

  // Додаємо обробник подій на клік по елементу "modal-location__close"
  modalLocationCloseElement.addEventListener('click', function() {
    // Видаляємо клас "visible" з модального вікна
    modalLocationElement.classList.remove('visible');
    modalLocationElementContainer.classList.remove('visible')
  });
