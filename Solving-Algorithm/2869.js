const input = require('fs').readFileSync('2869.txt').toString().trim().split(" ").map(Number);
const [A, B, V] = input;
console.log(Math.ceil((V - B) / (A - B)));
