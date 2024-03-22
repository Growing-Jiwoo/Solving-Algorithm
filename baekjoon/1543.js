let [N, ...input] = require('fs').readFileSync('1543.txt').toString().trim().split("\n");

let count = N.split(input).length - 1;

console.log(count);