/* 
### Q18. write a function which takes your name and returns a function which would add your name to anything that function says

example :

 `const vedSays = giveYourName(”ved”)`
 `vedSays("whats up")` should log `ved says... whats up`
*/

const giveYourName = (name) => (msg) =>
  console.log(`${name} says.....  ${msg}`);

const vedSays = giveYourName("ved");

vedSays("whats up");
