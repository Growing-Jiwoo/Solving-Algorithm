const input = require('fs').readFileSync('2607.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const target = input[1].split("");
let answer = 0;

for (let i = 2; i < N + 1; i++) {
    const compare = [...target];
    const word = input[i].split("");

    let cnt = 0;

    for (let w of word) {
        const index = compare.indexOf(w);
        index !== -1 ? compare.splice(index, 1) : cnt++;
    }

    if (cnt < 2 && compare.length < 2) answer++;
}

console.log(answer);