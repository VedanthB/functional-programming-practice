/* 
Q19. Write a function which can log any text with your username, another function which can log any text with userID, now compose both functions to give one function which can log any text with both username and id 
*/

const nameLogger = (str) => `Ved says:  ${str}`;

const userIDLogger = (str) => `userID: 123, ${str}`;

console.log(userIDLogger(nameLogger("heloo")));
