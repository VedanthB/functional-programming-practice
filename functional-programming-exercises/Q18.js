/* 
Q17.  Given an array of strings return an array of obj with keys as item and value as number of char in the string
*/

const arr = ["apple", "orange", "mango", "kiwi"];

const returnObjWithLength = (item) => {
  let obj = {};
  obj[item] = item.length;
  return obj;
};

const returnLengthObjArr = (arr) => {
  return arr.map((i) => returnObjWithLength(i));
};

console.log(returnLengthObjArr(arr));
