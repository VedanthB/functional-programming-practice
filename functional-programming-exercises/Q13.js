/* 
Q11.  Given an array of integers find the  numbers divisible by 10
*/

const arr = [20, 33, 40, 60, 44, 5, 5, 66, 77, 8];

const numbersDivisibleByTen = (arr) => {
  const checkDivisibilityByTen = (num) => {
    let str = num.toString();
    let lastDigit = str.charAt(str.length - 1);

    if (parseInt(lastDigit) === 0) {
      return true;
    } else {
      return false;
    }
  };

  return arr.filter(checkDivisibilityByTen);
};

console.log(numbersDivisibleByTen(arr));
