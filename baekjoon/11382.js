const input = require("fs")
  .readFileSync("11382.txt", "utf-8")
  .trim()
  .split(" ");

let result = 0;

input.map((value) => {
  result += +value;
});

console.log(result);
