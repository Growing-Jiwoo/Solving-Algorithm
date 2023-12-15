const input = require("fs")
  .readFileSync("2217.txt")
  .toString()
  .trim()
  .split("\n");
let N = parseInt(input[0]);
let ropes = [];

for (let i = 1; i <= N; i++) {
  ropes.push(parseInt(input[i]));
}

ropes.sort((a, b) => b - a);

let maxWeight = 0;

for (let i = 0; i < N; i++) {
  let weight = ropes[i] * (i + 1);
  maxWeight = Math.max(maxWeight, weight);
}

console.log(maxWeight);
