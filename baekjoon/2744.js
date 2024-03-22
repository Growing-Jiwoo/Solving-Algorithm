const input = require('fs').readFileSync('2744.txt').toString().trim().split('');

let result = [];

for (i = 0; i < input.length; i++) {
    input[i] === input[i].toUpperCase() ? result.push(input[i].toLowerCase()) : result.push(input[i].toUpperCase());
}

console.log(result.join(''))