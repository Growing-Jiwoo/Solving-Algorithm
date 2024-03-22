let input = require('fs').readFileSync('C:/Users/KST_KJW/Desktop/[6] 개인 공부/[1] 백준 학습/Solving-Algorithm/10798.txt')
    .toString()
    .trim()
    .split('\n').map(str => str.replace(/\r/g, ''));

let maxLength = Math.max(...input.map(i => i.length));

let result = [];

for (i = 0; i < maxLength; i++) {
    for (j = 0; j < input.length; j++) {
        input[j][i] === undefined ? null : result.push(input[j][i])
    }
}

console.log(result.join(''));