const input = require("fs").readFileSync("1110.txt").toString().trim();

let N = parseInt(input);

let currentNum = N;
let cycleLength = 0;

for (; currentNum !== N || cycleLength === 0; ) {
  let sum = Math.floor(currentNum / 10) + (currentNum % 10);
  currentNum = (currentNum % 10) * 10 + (sum % 10);
  cycleLength++;
}

console.log(cycleLength);
