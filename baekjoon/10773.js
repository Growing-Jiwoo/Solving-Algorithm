const [N, ...input] = require('fs').readFileSync('10773.txt').toString().trim().split('\n').map(Number);;

let result = [];
let sum = 0;

for(i=0 ; i < N ; i++){
    input[i] != 0 ? result.push(input[i]) : result.pop();
}

for (let i = 0; i < result.length; i += 1) {
    sum += result[i];
}

console.log(sum)