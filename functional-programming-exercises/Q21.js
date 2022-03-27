/* 
### Q20. write a function `compose()` which can take any number of functions as args and return a function which will run  them in order when called with an arg


const incement = num => num + 1
const square = num => num * num
const incrementSquare = compose(incement, square)
incrementSquare(12) // 119 


*/

const compose =
  (...functions) =>
  (arg) => {
    return functions.reduceRight((acc, element) => element(acc), arg);
  };

const incement = (num) => num + 1;

const square = (num) => num * num;

const incrementSquare = compose(incement, square);
console.log(incrementSquare);

incrementSquare(12);
