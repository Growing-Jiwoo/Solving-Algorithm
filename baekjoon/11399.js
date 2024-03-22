let input = require("fs")
  .readFileSync("11399.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const times = input[1].split(" ").map(Number);

times.sort((a, b) => a - b);

let totalSum = 0;
let currentSum = 0;

for (let i = 0; i < N; i++) {
  currentSum += times[i];
  totalSum += currentSum;
}

console.log(totalSum);
