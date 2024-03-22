const input = require("fs")
  .readFileSync("10039.txt", "utf-8")
  .trim()
  .split("\n");

let result = 0;

input.map((value) => {
  if (+value < 40) value = 40;
  result += +value;
});

console.log(result / input.length);
