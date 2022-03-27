/* 
Q5. Given an array of numbers return an obj for each item 
*/

const arr = [1, 2, 3, 4, 5, 6, 6, 77, 88, 44, 21];

const returnObj = (item) => {
  return { item };
};

const result = arr.map(returnObj);

console.log(result);
