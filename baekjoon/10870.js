const input = require('fs').readFileSync('10870.txt').toString().trim();
const n = parseInt(input);

let fib = [0, 1];

for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

const result = fib[n];
console.log(result);