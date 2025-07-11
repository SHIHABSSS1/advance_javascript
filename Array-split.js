const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const part = numbers.slice(0, 5);
console.log(part);

const together1 = numbers.join(" ");
console.log(together1);

//plice method , remove ba kete fela

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const removed = numbers1.splice(5, 10);
console.log(`splice ,Removed elements: ${removed}`);

const together = numbers1.join(" ");
console.log(together);