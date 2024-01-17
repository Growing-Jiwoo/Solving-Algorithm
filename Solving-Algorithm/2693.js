const input = require("fs")
  .readFileSync("2693.txt", "utf-8")
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const cases = input.slice(1).map((line) => line.split(" ").map(Number));

for (let i = 0; i < N; i++) {
  const A = cases[i];

  A.sort((a, b) => b - a);
  console.log(A[2]);
}
