import {
  COMMENT,
  NAME,
  MIN_LIKES,
  MAX_LIKES,
  MIN_AVATAR,
  MAX_AVATAR
} from './data.js';

//генерируем случайное число
const getRandomInteger = (a, b) => {
  const randomMin = Math.ceil(Math.min(a, b));
  const randomMax = Math.ceil(Math.max(a, b));
  const result = Math.random() * (randomMax - randomMin + 1) + randomMin;
  return Math.floor(result);
};

const createCount = () => {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
};

//Получаем случайное значение элемента массива
const gerRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

//Создаем уникальные Id в диапазонах
const getCommentId = createCount();
const getId = createCount();
const getPhotoId = createCount();

//Создаем объект фото
const getObjectComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: gerRandomArrayElement(COMMENT),
  name: gerRandomArrayElement(NAME)
});

const getPhotoDescription = () => ({
  id: getId(),
  url: `photos/-${getPhotoId()}.jpg`,
  description: 'Описание фото',
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomInteger(0, 30)}, getObjectComment)
});

export { getPhotoDescription };
