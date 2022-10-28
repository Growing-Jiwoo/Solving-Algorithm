const [...input] = require('fs').readFileSync('2775.txt').toString().trim().split('\n').map(Number);

// console.log(input)

let apart = [];

for(k = 0 ; k <= 10 ; k++){
    apart = Array.from(Array(10), () => new Array(k,0))
}

console.log(apart)
