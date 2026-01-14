let arr = [];

while (arr.length < 4) {
  let i = Math.floor(Math.random() * 6);
  arr.push(i);
}

console.log(`Generated Array: ${arr}`);
arr.forEach((item, index) => {
  console.log(`The ${index}. index is ${item}`);
});

// Dynamic last element finding
console.log("The last Element: ", arr[arr.length - 1]);

let sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(`The sum of arr: ${sum}`);

console.log(
  "Sorted array: ",
  arr.sort((a, b) => a - b)
);

const toStart = Math.floor(Math.random() * 6);
const toEnd = Math.floor(Math.random() * 6);
arr.push(toEnd);
arr.unshift(toStart);

console.log(`added to Start ${toStart}, added to End ${toEnd}`);
console.log(`The updated array is : ${arr}`);

arrNew = arr
  .map((item) => {
    return item * 3;
  })
  .filter((item) => {
    return item >= 8;
  });

console.log("Multiply each element with 3 and filter the element less than 8");
console.log("The result is: ", arrNew);

console.log(`Change the array to string with seperator * : ${arr.join("*")}`);

console.log(`First 3 element is : ${arr.slice(0, 3)}`);
