import {setStartPlacemark, setStartMapPosition} from './create-map.js';
import {initialValidate} from './form-validate.js';
import {sendData} from './api.js';
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const avatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const photoObject = document.querySelector('#images');
const previewPhotoObjectContainer = document.querySelector('.ad-form__photo-container');
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
  initialValidate();
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
  previewAvatar.src = 'img/muffin-grey.svg';
  const previewPhotoObjectCollection = previewPhotoObjectContainer.querySelectorAll('.ad-form__photo')
  for (const photoObjectItem of previewPhotoObjectCollection) {
    photoObjectItem.remove();
  } 
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
avatar.addEventListener('change', () => {
  const file = avatar.files[0];
  const fileName = file.name.toLowerCase();
    
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
    
  if (matches) {
    avatar.setCustomValidity('');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      previewAvatar.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
  else {
    avatar.setCustomValidity('Вы выбрали не фото');
  }
  avatar.reportValidity();
});
photoObject.addEventListener('change', () => {
  const file = photoObject.files;
  
  //previewPhotoObjectContainer.innerHTML = '';
  for (const objectImage of file) {
    const fileName = objectImage.name.toLowerCase();
    
    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });
      
    if (matches) {
      photoObject.setCustomValidity('');
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const objectImageTemplate = `<div class="ad-form__photo"><img src="${reader.result}"></div>`;
        previewPhotoObjectContainer.innerHTML += objectImageTemplate;
      });
      reader.readAsDataURL(objectImage);
    }
    else {
      photoObject.setCustomValidity('Вы выбрали не фото');
    }
    photoObject.reportValidity();
  }
});
export {disabledForm, activateForm, activateFilter, resetInterface, setUserFormSubmit, clickResetButton};
