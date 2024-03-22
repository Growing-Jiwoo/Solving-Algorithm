const input = require('fs').readFileSync('2902.txt').toString().trim().split('-');

let resultArray = [];

for (i = 0; i < input.length; i++) {
    resultArray.push(input[i][0]);
}

console.log(resultArray.join(""));