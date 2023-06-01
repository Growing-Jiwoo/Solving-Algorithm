const input = require('fs').readFileSync('10822.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const fishBreads = input.slice(1);

for (let i = 0; i < N; i++) {
    let reversedBread = '';
    for (let j = M - 1; j >= 0; j--) {
        reversedBread += fishBreads[i][j];
    }
    console.log(reversedBread);
}