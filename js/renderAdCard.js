const BOOKING_AD_CONTAINER = document.querySelector('#map-canvas');
const BOOKING_ELEMENT_TEMPLATE = document.querySelector('#card').content;
const BOOKING_AD_FRAGMENT = document.createDocumentFragment();

const renderBookingAd = function (elements) {
  elements.forEach((element) => {
    let bookingTemplateClone = BOOKING_ELEMENT_TEMPLATE.cloneNode(true);
    bookingTemplateClone.querySelector('.popup__title').textContent = element.offer.title;
    bookingTemplateClone.querySelector('.popup__text--address').textContent = element.offer.address;
    bookingTemplateClone.querySelector('.popup__text--price').textContent = element.offer.price + ' ₽/ночь';
    
    switch(element.offer.type) {
      case 'flat': 
        bookingTemplateClone.querySelector('.popup__type').textContent = 'Квартира';
        break;
      case 'bungalow': 
        bookingTemplateClone.querySelector('.popup__type').textContent = 'Бунгало';
        break;
      case 'house':
        bookingTemplateClone.querySelector('.popup__type').textContent = 'Дом';
        break;
      case 'palace':
        bookingTemplateClone.querySelector('.popup__type').textContent = 'Дворец';
        break;
      case 'hotel':
        bookingTemplateClone.querySelector('.popup__type').textContent = 'Отель';
        break;
      default:
        bookingTemplateClone.querySelector('.popup__type').remove();
        break;
    }
    
    bookingTemplateClone.querySelector('.popup__text--capacity').textContent =  element.offer.rooms + ' комнаты для ' +  element.offer.guests + ' гостей';
    bookingTemplateClone.querySelector('.popup__text--time').textContent = 'Заезд после ' + element.offer.checkin + ', выезд до ' +  element.offer.checkout;
    bookingTemplateClone.querySelector('.popup__description').textContent = element.offer.description;
    bookingTemplateClone.querySelector('.popup__avatar').src = element.author.avatar;

    bookingTemplateClone.querySelector('.popup__features').textContent = '';
    for (let featureClass of element.offer.features) {
      let featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add('popup__feature--${}' + featureClass);
      bookingTemplateClone.querySelector('.popup__features').appendChild(featureItem);
    }

    bookingTemplateClone.querySelector('.popup__photos').textContent = '';
    for (let photoSrc of element.offer.photos) {
      let photoItem = document.createElement('img');
      photoItem.src = photoSrc;
      photoItem.alt = 'Фотография жилья';
      photoItem.width = '45';
      photoItem.height = '40';
      bookingTemplateClone.querySelector('.popup__photos').appendChild(photoItem);
    }
    
    BOOKING_AD_FRAGMENT.appendChild(bookingTemplateClone);
  });
  BOOKING_AD_CONTAINER.appendChild(BOOKING_AD_FRAGMENT);
};

export {renderBookingAd}