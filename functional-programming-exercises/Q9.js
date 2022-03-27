/* 
Q7. Write your own reduce using for loop 
*/

Array.prototype.customReduce = function (callback, accumulator) {
  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }

  return accumulator;
};

const arr = [1, 2, 3, 4];

const add = (previousValue, currentValue) => previousValue + currentValue;

const result = arr.customReduce(add, 0);

result;
