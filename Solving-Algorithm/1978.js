const input = require("fs")
  .readFileSync("1978.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let primeCnt = 0;

for (let i = 0; i < N; i++) {
  if (numbers[i] < 2) {
    continue;
  }

  let isPrime = true;
  for (let j = 2; j * j <= numbers[i]; j++) {
    if (numbers[i] % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primeCnt++;
  }
}

console.log(primeCnt);
