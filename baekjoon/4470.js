const input = require('fs').readFileSync('4470.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const lines = input.slice(1);

for (let i = 0; i < N; i++) {
    console.log(`${i + 1}. ${lines[i]}`);
}