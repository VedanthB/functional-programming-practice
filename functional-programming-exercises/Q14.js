/* 
Q13.  Given an array of integers return an array where odd numbers are incremented and even numbers are decremented.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addOddAndSubtractEven = (arr) => {
  return arr.map((num) => (num % 2 === 0 ? num - 1 : num + 1));
};

console.log(addOddAndSubtractEven(arr));
