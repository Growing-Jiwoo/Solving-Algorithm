const input = require('fs').readFileSync('3059.txt').toString().trim().split('\n');
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const alphabetCnt = new Array(26).fill(0);
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
        const index = input[i].charCodeAt(j) - 65;
        alphabetCnt[index]++;
    }

    for (let j = 0; j < 26; j++) {
        if (alphabetCnt[j] === 0) {
            sum += j + 65;
        }
    }

    console.log(sum);
}