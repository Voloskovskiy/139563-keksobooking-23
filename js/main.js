import {getDemoData} from './data.js';
import {renderBookingAd} from './renderAdCard.js';
import {disabledForm, activateForm} from './formInterface.js';
import './formValidate.js';

disabledForm();
activateForm();
const generateBookingAd = getDemoData(1);

renderBookingAd(generateBookingAd);
