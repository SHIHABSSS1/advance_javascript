function add(num1, num2){
    return num1 + num2 + arguments[3] + arguments[3];
}

const result1 = add(5, 10, 15, 20);
console.log(result1);

// method 2

function add(num3, num4) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const result2 = add(5, 10, 15, 20);
console.log(result2); // Output: 50