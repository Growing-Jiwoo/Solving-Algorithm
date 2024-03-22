const input = require('fs').readFileSync('3062.txt').toString().trim().split('\n');


const T = parseInt(input[0], 10);

for (let i = 1; i <= T; i++) {
    const testCase = parseInt(input[i], 10);

    const reversed = parseInt(testCase.toString().split('').reverse().join(''));
    const sum = testCase + reversed;
    const sumStr = sum.toString();

    const isSymmetrical = sumStr === sumStr.split('').reverse().join('');

    console.log(isSymmetrical ? 'YES' : 'NO');
}