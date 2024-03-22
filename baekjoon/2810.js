const input = require('fs').readFileSync('2810.txt').toString().split('\n');
const seats = input[1].trim();

let cupHolders = 0;
let noCupHolders = 0;

for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 'L') {
        cupHolders++;
        i++;
    } else {
        noCupHolders++;
    }
}

console.log(cupHolders + Math.min(cupHolders, 1) + noCupHolders)