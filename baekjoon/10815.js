const input = require("fs")
  .readFileSync("10815.txt")
  .toString()
  .trim()
  .split("\n");

const result = [];
const numbers = {};

const nCard = input[1].split(" ");
const mCard = input[3].split(" ");

nCard.forEach((num) => {
  numbers[num] = true;
});

mCard.forEach((num, idx) => {
  result.push(numbers[mCard[idx]] ? "1" : "0");
});

console.log(result.join(" "));
