const typeObject = document.querySelector('#type');
const priceOfObjectType = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

typeObject.addEventListener('input', function (evt){
  const currentTypeValue = evt.target.options[evt.target.selectedIndex].value;
  let minPrice = 0;
  switch(currentTypeValue) {
    case 'flat': 
      minPrice = 1000;
      break;
    case 'bungalow': 
      minPrice = 0;
      break;
    case 'house':
      minPrice = 5000;
      break;
    case 'palace':
      minPrice = 10000;
      break;
    case 'hotel':
      minPrice = 3000;
      break;
    default:
      break;
  }
  priceOfObjectType.min = minPrice;
  priceOfObjectType.placeholder = minPrice;
  if (priceOfObjectType.value < minPrice && priceOfObjectType.value.length > 0) {
    priceOfObjectType.setCustomValidity('Цена от '+ minPrice);
    priceOfObjectType.reportValidity();
  }
  else{
    priceOfObjectType.setCustomValidity('Необходимо ввести цену за ночь');
  }
});

const timeSynchronization = function (evt) {
  let pairedItemSelector = 'select[name="timein"]';

  if (evt.target.matches('select[name="timein"]')) {
    pairedItemSelector = 'select[name="timeout"]';
  }

  const pairedItem = document.querySelector(pairedItemSelector);
  pairedItem.value = evt.target.options[evt.target.selectedIndex].value;
};

timeIn.addEventListener('input', timeSynchronization);
timeOut.addEventListener('input', timeSynchronization);

const changeAvailabilityCapacity = function (evt) {
  let AvailabilityItems = [];
  switch(evt.target.options[evt.target.selectedIndex].value) {
    case '1': 
      AvailabilityItems = ['1'];
      break;
    case '2': 
      AvailabilityItems = ['1', '2'];
      break;
    case '3':
      AvailabilityItems = ['1', '2', '3'];
      break;
    case '100':
      AvailabilityItems = ['0'];
      break;
    default:
      
    break;
  }
  for (let capacityItem of capacity) {
    if (AvailabilityItems.indexOf(capacityItem.value) === -1) {
      capacityItem.disabled = true;
    }
    else{
      capacityItem.disabled = false;
    }
  };

};
roomNumber.addEventListener('input', changeAvailabilityCapacity);