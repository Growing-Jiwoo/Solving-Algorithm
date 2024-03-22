const input = require('fs').readFileSync('10987.txt').toString().trim();
const compareArray = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let i = 0; i < input.length; i++) {
    if (compareArray.includes(input[i])) {
        count++;
    }
}

console.log(count);