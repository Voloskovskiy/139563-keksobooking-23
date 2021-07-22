import {getDemoData} from './data.js';
import {renderBookingAd} from './renderAdCard.js';
import {disabledForm, activateForm, clearForm} from './formInterface.js';
import './formValidate.js';

disabledForm();
activateForm();

const generateBookingAd = getDemoData(1);

renderBookingAd(generateBookingAd);


//дальше функции на будущее
const INITIAL_COORD_MASTER_PLACEMARK = {
  lat: '55,4567423',
  lng: '36,3442323',
};
const INITIAL_MAP_STATE = {
  lat: '55,4567423',
  lng: '36,3442323',
};


//метод получения текущей координаты мастер метки и запись его в нужное поле
const getCoordinatesMasterPlacemark = () => {
  //тут получили потом
  const currentCoordinates = 0;
  document.querySelector('#address').value = currentCoordinates;
};

//функция полного сброса формы, фильтров и карты
const resetInterface = () => {
  //полная очистка 2х форм
  clearForm();
  //тут сброс метки и указание координаты стартововой
  getCoordinatesMasterPlacemark();
};

//нажатие кнопки "Сбросить"
document.querySelector('.ad-form__reset').addEventListener('click', function() {
  resetInterface();
});

//показ окна успешной при отправке формы 
const createSuccesPopup = () => {
  const modalSuccesTempalte = document.querySelector('#success').content.querySelector('.success');
  const modalSucces = modalSuccesTempalte.cloneNode(true);
};

