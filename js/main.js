import {getDemoData} from './data.js';
import {renderBookingAd} from './renderAdCard.js';

//генерация демо данных
const generateBookingAd = getDemoData(1);

//отрисовка обьекта на странице
renderBookingAd(generateBookingAd);