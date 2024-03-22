const input = require('fs').readFileSync('2864.txt').toString().trim().split(' ')

const A = parseInt(input[0].replace(/6/g, '5'));
const B = parseInt(input[1].replace(/6/g, '5'));

const C = parseInt(input[0].replace(/5/g, '6'));
const D = parseInt(input[1].replace(/5/g, '6'));

const minSum = A + B;
const maxSum = C + D;

console.log(minSum + ' ' + maxSum);