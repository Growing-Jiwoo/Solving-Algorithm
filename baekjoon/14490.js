let [num1, num2] = require('fs').readFileSync('14490.txt').toString().trim().split(':').map(Number);

function gcd(num1, num2) {
    return num2 === 0 ? num1 : gcd(num2, num1 % num2);
}

const gcdNum = gcd(num1, num2);
const Num1 = num1 / gcdNum;
const Num2 = num2 / gcdNum;

console.log(`${Num1}:${Num2}`);