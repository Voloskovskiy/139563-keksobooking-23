import {openSuccessModal, openErrorModal} from './render-modal.js';
import {disabledForm, setUserFormSubmit, clickResetButton} from './form-interface.js';
import {initMap} from './create-map.js';
import './form-validate.js';

disabledForm();
initMap();
setUserFormSubmit(openSuccessModal, openErrorModal);
clickResetButton();
