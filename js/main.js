const generateRandomNumber = function(from, to){
  from = Math.abs(from);
  to = Math.abs(to);
  if (from>=to) {
    const tmp = to;
    to = from;
    from = tmp;
  }
  return +Math.floor(Math.random() * (to - from + 1) ) + from;
};
const generateRandomFloorNumber = function(from, to, afterComma){
  from = Math.abs(from)*(10*afterComma);
  to = Math.abs(to)*(10*afterComma);
  if (from>=to) {
    const tmp = to;
    to = from;
    from = tmp;
  }
  return +((Math.floor(Math.random() * (to - from + 1) ) + from)/(10*afterComma)).toFixed(afterComma);
};


const PHOTOS_URLS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
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
const shuffleArray = (elements) => {
  for (let i = elements.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  return elements;
};
const getRandomArrayElement = (elements) => {
  return elements[generateRandomNumber(0, elements.length - 1)];
};
const getRandomArrayElementAndDelete = (elements) => {
  return elements[generateRandomNumber(0, elements.length - 1)];
};
const getRandomArrayElementList = (elements) => {
  return shuffleArray(elements).slice(generateRandomNumber(0, elements.length - 1));
};
const getUniqueArrayElement  = (elements) => {
  const INDEX_ELEMET = generateRandomNumber(0, elements.length - 1);
  const ELEMENT_VALUE = elements[INDEX_ELEMET];
  elements.splice(INDEX_ELEMET,1);
  return ELEMENT_VALUE;
};

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
      price: generateRandomNumber(1000000,100000000),
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

const generateBookingAd = new Array(10).fill(null).map(() => createBuilding());

console.log(generateBookingAd);