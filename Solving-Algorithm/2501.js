const input = require("fs")
  .readFileSync("2495.txt")
  .trim()
  .split(" ")
  .map(Number);

const N = input[0];
const K = input[1];

let count = 0;
let result = 0;

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    count++;
    if (count === K) {
      result = i;
      break;
    }
  }
}

console.log(result);
