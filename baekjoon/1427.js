let input = require('fs').readFileSync('1427.txt').toString().trim().split('');

const result = input.sort((a, b) => b - a);

console.log(result.join(''));