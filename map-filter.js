const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

//using map filter

const number2 = [1,3,5,7,9,11,13,15];
const result = number2.map(function(element){
    return element * element;
});
console.log(result);

//smart way with arrow function
const number3 = [1,3,5,7,9,11,13,];
const result2 = number3.map(x => x * x);
console.log(result2);

//filter method
const number4 = [1,2,3,4,5,6,7,8,9,10];
const result3 = number4.filter(x => x > 5 );
console.log(result3);