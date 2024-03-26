const COMMENT = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAME = ['Алексей', 'Маша', 'Витя', 'Саша', 'Марина', 'Люба', 'Слава', 'Федор', 'Лиля', 'Семен'];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

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

// eslint-disable-next-line no-console
console.log(getPhotoDescription());
