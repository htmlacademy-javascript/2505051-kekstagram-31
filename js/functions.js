// Функция для проверки длины строки

const checkLength = (string = '', maxSymbols = 1) => (string.length <= maxSymbols);

function comparessStringLength(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

// Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return string === reversed;
};
const veryPalindrome = (string) => {
  const normalisedString = string.replaceAll(' ', '').toUpperCase();
  let reverseString = normalisedString.split('').reverse().join('');
  return reverseString === normalisedString;
}

