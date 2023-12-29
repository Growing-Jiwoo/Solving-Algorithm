const input = require("fs")
  .readFileSync("2750.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);

for (const number of numbers) {
  console.log(number);
}
