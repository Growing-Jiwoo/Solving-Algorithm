const input = require("fs")
  .readFileSync("3052.txt")
  .toString()
  .trim()
  .split("\n");
let remainders = new Set();

for (let i = 0; i < 10; i++) {
  let number = parseInt(input[i]);
  let remainder = number % 42;
  remainders.add(remainder);
}

console.log(remainders.size);
