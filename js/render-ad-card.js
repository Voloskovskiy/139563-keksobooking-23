const bookingElementTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderBookingAd = (element) => {
  const bookingTemplateClone = bookingElementTemplate.cloneNode(true);
  bookingTemplateClone.querySelector('.popup__title').textContent = element.offer.title;
  bookingTemplateClone.querySelector('.popup__text--address').textContent = element.offer.address;
  bookingTemplateClone.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  const bookingPopupObjectType = bookingTemplateClone.querySelector('.popup__type');
  switch(element.offer.type) {
    case 'flat':
      bookingPopupObjectType.textContent = 'Квартира';
      break;
    case 'bungalow':
      bookingPopupObjectType.textContent = 'Бунгало';
      break;
    case 'house':
      bookingPopupObjectType.textContent = 'Дом';
      break;
    case 'palace':
      bookingPopupObjectType.textContent = 'Дворец';
      break;
    case 'hotel':
      bookingPopupObjectType.textContent = 'Отель';
      break;
    default:
      bookingPopupObjectType.remove();
      break;
  }
  bookingTemplateClone.querySelector('.popup__text--capacity').textContent =  `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  bookingTemplateClone.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  bookingTemplateClone.querySelector('.popup__description').textContent = element.offer.description;
  bookingTemplateClone.querySelector('.popup__avatar').src = element.author.avatar;
  const bookingPopupObjectFeatures = bookingTemplateClone.querySelector('.popup__features');
  bookingPopupObjectFeatures.textContent = '';
  if (element.offer.features) {
    for (const featureClass of element.offer.features) {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(`popup__feature--${featureClass}`);
      bookingPopupObjectFeatures.appendChild(featureItem);
    }
  }

  const bookingPopupObjectPhoto = bookingTemplateClone.querySelector('.popup__photos');
  bookingPopupObjectPhoto.textContent = '';
  if (element.offer.photos) {
    for (const photoSrc of element.offer.photos) {
      const photoItem = document.createElement('img');
      photoItem.src = photoSrc;
      photoItem.alt = 'Фотография жилья';
      photoItem.width = '45';
      photoItem.height = '40';
      bookingPopupObjectPhoto.appendChild(photoItem);
    }
  }
  return bookingTemplateClone;
};

export {renderBookingAd};
