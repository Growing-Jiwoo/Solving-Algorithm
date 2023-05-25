const input = require('fs').readFileSync('2495.txt').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let maxCount = 1;
    let count = 1;

    for (let j = 1; j < input[i].length; j++) {
        if (input[i][j] === input[i][j - 1]) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 1;
        }
    }

    console.log(maxCount);
}