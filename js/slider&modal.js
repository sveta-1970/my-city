/* 
        Чек ліст:
        1. Додати атрибути для модалки на кнопки в галереї
        2. Додати верстку модального вікна
        3. Підключити стилі модального вікна
        4. Підключити стилі слайдеру
        5. Підключити скрипти бібліотек модального вікна та слайдеру
        6. Написати скрипт запуску  модального вікна та слайдеру
        7. Змінити назву міста в модалці
*/




let slideToShow = 0;

//Вибираємо всі кнопки галереї
const modalBtns = document.querySelectorAll(".gallery-modal-btn");

modalBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    //треба зберегти атрибут  data-index з номером картинки і передати його значення слайдеру
    const slideNumberToShow = button.getAttribute("data-index");

    slideToShow = Number(slideNumberToShow);

    console.log(slideToShow);
  });
});
//Запуск бібліотеки модального вікна
//с сайта https://micromodal.vercel.app/ розділ Usage
//передаємо параметр, з якого треба починати показ - slideToShow
MicroModal.init({
  onShow: function () {
    slider.go(slideToShow);
  },
});

//Запуск бібліотеки слайдеру
//вибираємо контейнер модального вікна, в якому збережені всі зображення - ".splide"
const sliderContainer = document.querySelector(".splide");

//створюємо новій слайдер и розміщуємо слайдер-контейнер в нього
const slider = new Splide(sliderContainer).mount();
