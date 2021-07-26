import {isEscEvent} from './utils.js';
import {resetInterface} from './form-interface.js';

const onErrorPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModalError();
  }
};
const onSuccessPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModalSuccess();
  }
};
const closeModalError = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('click', closeModalError);
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
};
const closeModalSuccess = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('click', closeModalSuccess);
  document.removeEventListener('keydown', onSuccessPopupEscKeydown);
  resetInterface();
};
const openSuccessModal = () => {
  const modalSuccesTempalte = document.querySelector('#success').content.querySelector('.success');
  const modalSucces = modalSuccesTempalte.cloneNode(true);
  document.querySelector('body').appendChild(modalSucces);
  document.addEventListener('click', closeModalSuccess);
  document.addEventListener('keydown', onSuccessPopupEscKeydown);
};
const openErrorModal = () => {
  const modalSuccesTempalte = document.querySelector('#error').content.querySelector('.error');
  const modalSucces = modalSuccesTempalte.cloneNode(true);
  document.querySelector('body').appendChild(modalSucces);
  document.addEventListener('click', closeModalError);
  document.querySelector('.error__button').addEventListener('click', closeModalError);
  document.addEventListener('keydown', onErrorPopupEscKeydown);
};

export {onSuccessPopupEscKeydown, onErrorPopupEscKeydown, openSuccessModal, openErrorModal};
