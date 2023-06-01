const input = require('fs').readFileSync('11945.txt').toString().trim().split(',');

let sum = 0;
for (let i = 0; i < input.length; i++) {
    sum += parseInt(input[i]);
}

console.log(sum);