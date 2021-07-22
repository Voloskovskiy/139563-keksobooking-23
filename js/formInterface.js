const disabledForm = () => {
  const bookingForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');

  bookingForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');

  const interactivElements = [];
  Object.assign(interactivElements, mapFilters.children, bookingForm.children);
  for (let interactivElement of interactivElements) {
    interactivElement.disabled = true;
  }
};

const activateForm = () => {
  const bookingForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');

  bookingForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  
  const interactivElements = [];
  Object.assign(interactivElements, mapFilters.children, bookingForm.children);
  for (let interactivElement of interactivElements) {
    interactivElement.disabled = false;
  }
};

const clearForm = () => {
  const bookingForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  bookingForm.reset();
  mapFilters.reset();
};

export {disabledForm, activateForm, clearForm}