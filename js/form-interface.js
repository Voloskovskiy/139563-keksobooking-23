import {setStartPlacemark, setStartMapPosition} from './create-map.js';
import {sendData} from './api.js';
const bookingForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disabledForm = () => {
  bookingForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');

  const interactivElements = [];
  Object.assign(interactivElements, mapFilters.children, bookingForm.children);
  for (const interactivElement of interactivElements) {
    interactivElement.disabled = true;
  }
};

const activateForm = () => {
  bookingForm.classList.remove('ad-form--disabled');

  for (const interactivElement of bookingForm.children) {
    interactivElement.disabled = false;
  }
};

const activateFilter = () => {
  mapFilters.classList.remove('ad-form--disabled');

  for (const interactivElement of mapFilters.children) {
    interactivElement.disabled = false;
  }
};

const clearForm = () => {
  bookingForm.reset();
  mapFilters.reset();
};

const resetInterface = () => {
  clearForm();
  setStartMapPosition();
  setStartPlacemark();
};
const clickResetButton = () => {
  document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
    evt.preventDefault();
    resetInterface();
  });
};
const setUserFormSubmit = (onSuccess, onFail) => {
  bookingForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

export {disabledForm, activateForm, activateFilter, resetInterface, setUserFormSubmit, clickResetButton};
