const input = require('fs').readFileSync('1373.txt').toString().trim();

let answer = '';

const paddedInput = input.padStart(Math.ceil(input.length / 3) * 3, '0');

for (let i = 0; i < paddedInput.length; i += 3) {
    const octalDigit = parseInt(paddedInput.slice(i, i + 3), 2).toString(8);
    answer += octalDigit;
}

console.log(answer.replace(/^0+/, '') || '0');
