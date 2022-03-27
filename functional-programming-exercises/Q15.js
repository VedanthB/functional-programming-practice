/* 
Q14.  Given an array of integers return an obj with all odd and even numbers added separately.
*/

/*  */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addEvenAndOddSeparately = (arr) => {
  const addOdd = (acc, element) => (element % 2 !== 0 ? acc + element : acc);
  const addEven = (acc, element) => (element % 2 === 0 ? acc + element : acc);

  const oddResult = arr.reduce(addOdd);
  const evenResult = arr.reduce(addEven);

  return { even: evenResult, odd: oddResult };
};

const result = addEvenAndOddSeparately(arr);
