'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  const inputToNumber = Number(input);
  if (Number.isNaN(inputToNumber)) {
    alert('Вы ввели не число, попробуйте ещё раз.');
  } else {
    numbers.push(inputToNumber);
  }
}

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }

// eslint-disable-next-line
for (const number of numbers) {
  total += number;
}
alert(total);
