import {isEscEvent} from './utils.js';
import {resetInterface} from './form-interface.js';

const onCloseModalError = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('click', closeModalError);
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
};
const onCloseModalSuccess = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('click', closeModalSuccess);
  document.removeEventListener('keydown', onSuccessPopupEscKeydown);
  resetInterface();
};
const onErrorPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onCloseModalError();
  }
};
const onSuccessPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onCloseModalSuccess();
  }
};
const openSuccessModal = () => {
  const modalSuccesTempalte = document.querySelector('#success').content.querySelector('.success');
  const modalSucces = modalSuccesTempalte.cloneNode(true);
  document.querySelector('body').appendChild(modalSucces);
  document.addEventListener('click', onCloseModalSuccess);
  document.addEventListener('keydown', onSuccessPopupEscKeydown);
};
const openErrorModal = () => {
  const modalSuccesTempalte = document.querySelector('#error').content.querySelector('.error');
  const modalSucces = modalSuccesTempalte.cloneNode(true);
  document.querySelector('body').appendChild(modalSucces);
  document.addEventListener('click', onCloseModalError);
  document.querySelector('.error__button').addEventListener('click', onCloseModalError);
  document.addEventListener('keydown', onErrorPopupEscKeydown);
};

export {onSuccessPopupEscKeydown, onErrorPopupEscKeydown, openSuccessModal, openErrorModal};
