import { getData } from './api.js';

const description = document.querySelector('.hero_description');
const DATA_URL = 'https://baconipsum.com/api/?type=lucky';

const initText = (data) => {
  description.textContent = data;
};

const onGetSuccess = (data) => initText(data);

const onGetError = () => console.log('Ошибка в AJAX запросе');

const initDescriptionText = () => getData(DATA_URL, onGetSuccess, onGetError);

export { initDescriptionText };
