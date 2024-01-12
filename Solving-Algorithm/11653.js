const input = require("fs")
  .readFileSync("11653.txt", "utf-8")
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let factors = [];

for (let i = 2; i * i <= N; i++) {
  while (N % i === 0) {
    factors.push(i);
    N = N / i;
  }
}

if (N > 1) {
  factors.push(N);
}

for (const factor of factors) {
  console.log(factor);
}
