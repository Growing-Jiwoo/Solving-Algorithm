let input = require('fs').readFileSync('11656.txt').toString().trim();

let array = []

for(i = 0 ; i < input.length ; i++){
    array.push(input.substring(i))
}

console.log(array.sort().join('\n'))