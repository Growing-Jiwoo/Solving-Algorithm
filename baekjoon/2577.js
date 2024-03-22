const input = require("fs")
  .readFileSync("2577.txt")
  .toString()
  .trim()
  .split("\n");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const result = (A * B * C).toString();

const countArray = Array(10).fill(0);

for (let i = 0; i < result.length; i++) {
  const num = parseInt(result[i]);
  countArray[num]++;
}

for (const count of countArray) {
  console.log(count);
}
