//Случайное положительое целое число в диапазоне
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
//Случайное положительое число с плавающей точкой в диапазоне
const generateRandomFloorNumber = function(from, to, afterComma=1){
  from = Math.abs(from);
  to = Math.abs(to);
  if (from>=to) {
    const tmp = to;
    to = from;
    from = tmp;
  }
  return +(Math.random() * (to - from) + from).toFixed(afterComma);
};
//Перемешанный массив
const shuffleArray = (elements) => {
  for (let i = elements.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  return elements;
};
//Случайный элемент массива
const getRandomArrayElement = (elements) => {
  return elements[generateRandomNumber(0, elements.length - 1)];
};
//Случайная последовательность из значений массива переменной длинны
const getRandomArrayElementList = (elements) => {
  return shuffleArray(elements).slice(generateRandomNumber(0, elements.length - 1));
};
//Рандомный неповторябщийся элемент массива
const getUniqueArrayElement  = (elements) => {
  const INDEX_ELEMET = generateRandomNumber(0, elements.length - 1);
  const ELEMENT_VALUE = elements[INDEX_ELEMET];
  elements.splice(INDEX_ELEMET,1);
  return ELEMENT_VALUE;
};

export {generateRandomNumber, generateRandomFloorNumber, getRandomArrayElement, getRandomArrayElementList, getUniqueArrayElement};