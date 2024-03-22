const input = require("fs")
  .readFileSync("1085.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

const distance = [x, y, w - x, h - y];
const result = Math.min(...distance);

console.log(result);
