/* 
Q7. Write your own filter using for loop 
*/

Array.prototype.customFilter = function (callback) {
  const filterArr = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index) === true) {
      filterArr.push(this[index]);
    }
  }

  return filterArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.customFilter((i) => i < 5));
