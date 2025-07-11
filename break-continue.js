const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums.length; i++) {
  
  if (nums[i] > 5) {
    break;
  }
  console.log(`Break : ${nums[i]}`);
}

//continue statement example
const nums2 = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];
for (let ix = 0; ix < nums2.length; ix++) {
  if (nums2[ix] < 0) {
    continue;
  }
  console.log(`Continue : ${nums2[ix]}`);
}
