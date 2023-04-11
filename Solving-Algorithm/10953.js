const [N, ...input] = require('fs').readFileSync('10953.txt').toString().trim().split('\n');

for (i = 0; i < N; i++) {
    const [a, b] = input[i].split(',')
    console.log(parseInt(a) + parseInt(b))
}
