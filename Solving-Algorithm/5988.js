const [N, ...input] = require('fs').readFileSync('5988.txt').toString().trim().split('\n');

for (let i = 0; i < N; i++) {
    const num = BigInt(input[i]);
    num % BigInt(2) === BigInt(0) ? console.log("even") : console.log("odd");
}
