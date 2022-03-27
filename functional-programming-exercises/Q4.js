/* 
Q4. Write a function which can tell if a number is less than 10 or not, now supply this function to Array.filter() to get an array of numbers less than 10
*/

const isLessThanTen = (num) => (num < 10 ? true : false);

const arr = [1, 3, 5, 7, 9, 11, 23, 33, 55];

const result = arr.filter(isLessThanTen);
