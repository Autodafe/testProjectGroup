// JavaScript-код для функциональности кнопки и бургерного меню
const burgerButton = document.querySelector('.burger-button');
const mainHeader = document.querySelector('.main-header');

const initBurgerButton = () => {
  mainHeader.classList.remove('no-js');
  burgerButton.addEventListener('click', () => mainHeader.classList.toggle('is-open'));
}

export { initBurgerButton };
