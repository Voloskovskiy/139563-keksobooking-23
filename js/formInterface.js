const disabledForm = function () {
  let bookingForm = document.querySelector('.ad-form');
  let mapFilters = document.querySelector('.map__filters');

  bookingForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  
  let interactivElementsForm = bookingForm.children;
  for (let interactivElementForm of interactivElementsForm) {
    interactivElementForm.disabled = true;
  }

  let interactivElementsFilter = mapFilters.children;
  for (let interactivElementFilter of interactivElementsFilter) {
    interactivElementFilter.disabled = true;
  }
};

const activateForm = function () {
  let bookingForm = document.querySelector('.ad-form');
  let mapFilters = document.querySelector('.map__filters');

  bookingForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  
  let interactivElementsForm = bookingForm.children;
  for (let interactivElementForm of interactivElementsForm) {
    interactivElementForm.disabled = false;
  }

  let interactivElementsFilter = mapFilters.children;
  for (let interactivElementFilter of interactivElementsFilter) {
    interactivElementFilter.disabled = false;
  }
};

export {disabledForm, activateForm}