/* 
Q7. Write your own map using for loop 
*/

Array.prototype.customMap = function (callback) {
  const resultArr = [];

  // this refers to the arr
  for (let index = 0; index < this.length; index++) {
    resultArr[index] = callback(this[index], index);
  }

  return resultArr;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.customMap((i) => i + 2));
