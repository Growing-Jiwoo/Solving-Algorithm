const [N, ...input] = require('fs').readFileSync('1037.txt').toString().trim().split("\n");

const divisors = input.join(" ").split(" ").map(Number);

divisors.sort((a, b) => a - b);

const result = divisors[0] * divisors[N - 1];

console.log(result)