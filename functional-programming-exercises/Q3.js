/* 
### Q3. Write a function `birthday()` to take a persons name and age in an obj and increase age.
*/

const birthday = (obj) => {
  return { ...obj, age: obj.age + 1 };
};

birthday({ name: "John", age: 10 });
