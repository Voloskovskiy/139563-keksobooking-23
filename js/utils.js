const ALERT_SHOW_TIME = 5000;
const generateRandomNumber = (from, to) => {
  from = Math.abs(from);
  to = Math.abs(to);
  if (from>=to) {
    const tmp = to;
    to = from;
    from = tmp;
  }
  return +Math.floor(Math.random() * (to - from + 1) ) + from;
};
const generateRandomFloorNumber = (from, to, afterComma=1) => {
  from = Math.abs(from);
  to = Math.abs(to);
  if (from>=to) {
    const tmp = to;
    to = from;
    from = tmp;
  }
  return +(Math.random() * (to - from) + from).toFixed(afterComma);
};
const shuffleArray = (elements) => {
  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  return elements;
};
const getRandomArrayElement = (elements) => elements[generateRandomNumber(0, elements.length - 1)];
const getRandomArrayElementList = (elements) => shuffleArray(elements).slice(generateRandomNumber(0, elements.length - 1));
const getUniqueArrayElement = (elements) => {
  const INDEX_ELEMET = generateRandomNumber(0, elements.length - 1);
  const ELEMENT_VALUE = elements[INDEX_ELEMET];
  elements.splice(INDEX_ELEMET,1);
  return ELEMENT_VALUE;
};
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {generateRandomNumber, generateRandomFloorNumber, getRandomArrayElement, getRandomArrayElementList, getUniqueArrayElement, showAlert, isEscEvent, debounce};
