let input = require('fs').readFileSync('1541.txt').toString().trim().split("-");
const N = input.length;
let result = 0;
let sum = 0;
for (let i = 0; i < N; i++) {

    input[i] = input[i].split("+");

    for (let j = 0; j < input[i].length; j++) {
        input[i][j] = Number(input[i][j]);

        sum += input[i][j];
    }

    input[i] = sum;
    sum = 0;
}

result += input[0];

for (let i = 1; i < N; i++) {
    result -= input[i];
}

console.log(result);