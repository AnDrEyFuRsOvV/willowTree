// Получаем ссылку на элемент с классом "description__size"
var descriptionSizeElement = document.querySelector('.description__size');

// Получаем ссылку на модальное окно
var modalElement = document.querySelector('.modal');

// Получаем ссылку на элемент с классом "modal__container"
var modalContainerElement = document.querySelector('.modal__container');

// Добавляем обработчик события на клик по элементу "description__size"
descriptionSizeElement.addEventListener('click', function() {
  // Добавляем класс "visible" к модальному окну
  modalElement.classList.add('visible');
  // Добавляем класс "visible" к элементу "modal__container"
  modalContainerElement.classList.add('visible');
});

// Получаем ссылку на элемент с классом "modal__close"
var modalCloseElement = document.querySelector('.modal__close');

// Добавляем обработчик события на клик по элементу "modal__close"
modalCloseElement.addEventListener('click', function() {
  // Удаляем класс "visible" у модального окна
  modalElement.classList.remove('visible');
  // Удаляем класс "visible" у элемента "modal__container"
  modalContainerElement.classList.remove('visible');
});


