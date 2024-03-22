const input = require('fs').readFileSync('2935.txt').toString().trim().split('\n');

const [num1, operator, num2] = input;

if (operator === '*') {
    console.log(`${BigInt(num1) * BigInt(num2)}`);
} else {
    console.log(`${BigInt(num1) + BigInt(num2)}`);
}
