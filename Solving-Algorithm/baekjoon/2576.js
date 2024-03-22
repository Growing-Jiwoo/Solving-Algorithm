let input = require("fs")
  .readFileSync("2576.txt")
  .toString()
  .trim()
  .split("\n");
let oddNumbers = [];
let sum = 0;

for (let i = 0; i < 7; i++) {
  const number = parseInt(input[i]);

  if (number % 2 !== 0) {
    oddNumbers.push(number);
    sum += number;
  }
}

if (oddNumbers.length === 0) {
  console.log("-1");
} else {
  console.log(sum);
  console.log(Math.min(...oddNumbers));
}
