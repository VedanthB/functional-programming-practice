/* 
Q10. Given an array of integers find sum off all odd numbers 
*/

const arr = [2, 2, 2, 2, 1, 1, 1, 1];

const checkOddAndAdd = (arr) => {
  const result = arr.reduce(
    (acc, element) => (element % 2 !== 0 ? acc + element : acc),
    0
  );

  return result;
};

console.log(checkOddAndAdd(arr));
