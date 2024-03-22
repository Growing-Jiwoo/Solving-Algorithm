const [N, ...input] = require('fs').readFileSync('9093.txt').toString().trim().split('\n');

for (i = 0; i < N; i++) {
    let compareStr = input[i].split(" ")
    let result = compareStr.map((word) => {
        return word.split('').reverse().join('')
    })
    console.log(result.join(' '))
}