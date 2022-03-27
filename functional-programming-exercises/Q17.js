/* 
Q16.  Given an array of strings return an array with stings which have vowels 
*/

const arr = ["apple", "orange", "mango", "bfcd", "ddssxs"];

const checkIfStringIsArray = (str) => {
  let letter = str.toLowerCase();
  let word = letter.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  //   console.log(word);
  const result = word.filter((letter) => vowels.includes(letter));
  //   console.log(result);
  return result.length > 0 ? true : false;
};

const findStringsWithArray = (arr) => {
  return arr.filter((i) => checkIfStringIsArray(i));
};

console.log(findStringsWithArray(arr));
