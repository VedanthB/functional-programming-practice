/* 
Q10. Given an array of integers find sum off all numbers at odd indices 
*/

const arr = [1, 2, 3, 4, 5, 6];

const sumOfIntegersAtOddIndices = (arr) => {
  const filterOddIndex = (item, i) => i % 2 !== 0;

  const oddIndicesArr = arr.filter(filterOddIndex);

  const add = (previousValue, currentValue) => previousValue + currentValue;

  return oddIndicesArr.reduce(add);
};

console.log(sumOfIntegersAtOddIndices(arr));
