const num1 = 5;
const num2 = "5";
// Using double equals (==) for comparison
if (num1 == num2) {
  console.log("condition is true.");
} else {
  console.log("condition is false");
}

// Using triple equals (===) for comparison
if (num1 === num2) {
  console.log("condition is true.");
} else {
  console.log("condition is false");
}

//(==)>Shudu value check korbe , data type check korbe na(===)value and data type check kore
//  1 & true are equal in value but not in type
const num3 = 1;
const num4 = true;
if(num3 == num4){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// 1 & false are not equal
const num5 = 1;
const num6 = false;
if(num5 == num6){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
//0 & false are equal in value and type
const num7 = 0;
const num8 = false;
if(num7 == num8){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// 0 & true are not equal
const num9 = 0;
const num10 = true;
if(num9 == num10){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}