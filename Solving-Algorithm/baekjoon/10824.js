const input = require('fs').readFileSync('10824.txt').toString().trim().split(' ');

console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]));