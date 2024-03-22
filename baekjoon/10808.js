const input = require('fs').readFileSync('10808.txt').toString().trim().split('');

const alphabetCount = {};
for (let i = 0; i < 26; i++) {
    alphabetCount[String.fromCharCode(97 + i)] = 0;
}

for (let j = 0; j < input.length; j++) {
    alphabetCount[input[j]] += 1;
}

const alphabetValues = Object.values(alphabetCount);

console.log(alphabetValues.join(' '));