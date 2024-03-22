const input = require('fs').readFileSync('2789.txt').toString().trim().split('');

const compareString = 'CAMBRIDGE'

let result = ""

for (i = 0; i < input.length; i++) {
    compareString.includes(input[i]) === false ? result += input[i] : null
}

console.log(result)
