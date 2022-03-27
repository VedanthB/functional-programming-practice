/* 
Q1. Take an obj with your mothers name and age, now create an obj  for your sibling with age diff
*/

const myObj = { motherName: "sheetal", age: 20 };
const siblingObj = { ...myObj, age: myObj.age - 8 };
