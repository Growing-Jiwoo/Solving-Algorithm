let [N, M] = require("fs")
  .readFileSync("11005.txt")
  .toString()
  .trim()
  .split(" ");
let result = "";

while (N > 0) {
  let remainder = N % M;
  if (remainder < 10) {
    result = remainder + result;
  } else {
    result = String.fromCharCode(remainder + 55) + result;
  }
  N = Math.floor(N / M);
}

console.log(result);
