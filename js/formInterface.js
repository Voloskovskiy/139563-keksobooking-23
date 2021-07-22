const disabledForm = function () {
  const bookingForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');

  bookingForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  
  const interactivElementsForm = bookingForm.children;
  for (let interactivElementForm of interactivElementsForm) {
    interactivElementForm.disabled = true;
  }

  const interactivElementsFilter = mapFilters.children;
  for (let interactivElementFilter of interactivElementsFilter) {
    interactivElementFilter.disabled = true;
  }
};

const activateForm = function () {
  const bookingForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');

  bookingForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  
  const interactivElementsForm = bookingForm.children;
  for (let interactivElementForm of interactivElementsForm) {
    interactivElementForm.disabled = false;
  }

  const interactivElementsFilter = mapFilters.children;
  for (let interactivElementFilter of interactivElementsFilter) {
    interactivElementFilter.disabled = false;
  }
};

export {disabledForm, activateForm}