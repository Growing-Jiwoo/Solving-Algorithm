const input = require("fs")
  .readFileSync("2609.txt")
  .toString()
  .trim()
  .split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

let a = num1;
let b = num2;

while (b !== 0) {
  const remainder = a % b;
  a = b;
  b = remainder;
}

const gcd = a;
const lcm = (num1 * num2) / gcd;

console.log(gcd);
console.log(lcm);
