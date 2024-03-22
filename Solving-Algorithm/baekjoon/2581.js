const input = require("fs")
  .readFileSync("2581.txt")
  .toString()
  .trim()
  .split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let sum = 0;
let minPrime = Infinity;

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    sum += i;
    minPrime = Math.min(minPrime, i);
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minPrime);
}
