/* 
Q6. Given an array of numbers calculate sum
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const add = (previousValue, currentValue) => previousValue + currentValue;

const result = arr.reduce(add, 0);

result;
