const [N, M] = require("fs")
  .readFileSync("2163.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(N * M - 1);
