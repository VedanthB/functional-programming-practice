/* 
 Q11.  Given an array of integers find the biggest number
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 66];

const biggestNumber = (arr) => {
  let findBiggestNumber = (previousValue, currentValue) =>
    currentValue > previousValue
      ? (previousValue = currentValue)
      : previousValue;

  let result = arr.reduce(findBiggestNumber);
  return result;
};

console.log(biggestNumber(arr));
