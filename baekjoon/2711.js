const [N, ...input] = require('fs').readFileSync('2711.txt').toString().trim().split('\n');

for (i = 0; i < N; i++) {
    console.log(input[i].split(' ')[1].split('').filter((_, index) => index != input[i].split(' ')[0] - 1).join(''))
}
