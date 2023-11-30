const input = require('fs').readFileSync('2908.txt').toString().trim().split(" ").map(Number);

const [A, B] = input;

const reverseA = parseInt(A.toString().split('').reverse().join(''));
const reverseB = parseInt(B.toString().split('').reverse().join(''));

const result = Math.max(reverseA, reverseB);

console.log(result);