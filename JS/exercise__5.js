'use strict';

const checkForSpam = function(message) {
  const forbiddenWord = ['sale', 'spam'];
  if (
    message.toLowerCase().includes(forbiddenWord[0]) ||
    message.toLowerCase().includes(forbiddenWord[1])
  ) {
    return true;
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
