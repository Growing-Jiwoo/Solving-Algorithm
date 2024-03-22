let input = require("fs")
  .readFileSync("2587.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i];
}
let mean = Math.floor(sum / 5);

let sortedNumbers = input.slice().sort((a, b) => a - b);
let median = sortedNumbers[2];

console.log(mean);
console.log(median);
