import {generateRandomNumber, generateRandomFloorNumber, getRandomArrayElement, getRandomArrayElementList, getUniqueArrayElement} from './utils.js';
const PHOTOS_URLS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const PLASE_TYPES = [
  'palace', 
  'flat', 
  'house', 
  'bungalow', 
  'hotel',
];
const FEATURES = [
  'wifi', 
  'dishwasher', 
  'parking', 
  'washer', 
  'elevator', 
  'conditioner',
];
const CHECKINS = [
  '12:00', 
  '13:00', 
  '14:00',
];
const CHECKOUTS = [
  '12:00', 
  '13:00', 
  '14:00',
];
const USER_AVATAR = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

const createBuilding = () => {
  const COORDINATES = {
    lat: generateRandomFloorNumber(35.65000, 35.70000, 5),
    lng: generateRandomFloorNumber(139.70000, 139.80000, 5),
  };
  return {
    author: {
      avatar: 'img/avatars/user'+getUniqueArrayElement(USER_AVATAR)+'.png',
    },
    offer: {
      title: 'KeksoHotel',
      address: COORDINATES.lat + ', ' + COORDINATES.lng,
      price: generateRandomNumber(1000,5000),
      type: getRandomArrayElement(PLASE_TYPES),
      rooms: generateRandomNumber(1,10),
      guests: generateRandomNumber(1,15),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArrayElementList(FEATURES),
      description: "Продающее описание KeksoHotel",
      photos: getRandomArrayElementList(PHOTOS_URLS),
    },
    location: COORDINATES,
  }
};
const getDemoData = function (count) {
  return new Array(count).fill(null).map(() => createBuilding());
};

export {getDemoData};