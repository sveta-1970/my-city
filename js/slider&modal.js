//Запуск бібліотеки модального вікна
//с сайта https://micromodal.vercel.app/ розділ Usage
MicroModal.init();

//Запуск бібліотеки слайдеру
//вибираємо контейнер модального вікна, в якому збережені всі зображення - ".splide"
const sliderContainer = document.querySelector(".splide");

//створюємо новій слайдер и розміщуємо слайдер-контейнер в нього
 new Splide(sliderContainer).mount();