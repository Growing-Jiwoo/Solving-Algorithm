const input = require("fs")
  .readFileSync("10817.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

input.sort((a, b) => b - a);
console.log(input[1]);
