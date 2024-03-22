const [N, ...input] = require('fs').readFileSync('9086.txt').toString().trim().split('\n').map((line) => line.replace(/\n|\r|\s*/g, ""));;

for (i = 0; i < N; i++) {
    console.log(`${input[i][0]}${input[i][input[i].length - 1]}`)
}