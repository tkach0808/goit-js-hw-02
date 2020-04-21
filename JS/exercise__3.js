'use strict';

const findLongestWord = function(string) {
  const toArrSting = string.split(' ');
  let LongestWord = '';
  for (let i = 0; i < toArrSting.length; i += 1) {
    if (toArrSting[i].length > LongestWord.length) {
      LongestWord = toArrSting[i];
    }
  }
  return LongestWord;

  //   return string.split(' ').reduce((a, b) => (b.length > a.length ? b : a));
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
