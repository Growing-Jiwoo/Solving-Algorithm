let input = require("fs")
  .readFileSync("9655.txt")
  .toString()
  .trim()
  .split("\n");
let N = parseInt(input[0]);

N % 2 === 0 ? console.log("CY") : console.log("SK");
