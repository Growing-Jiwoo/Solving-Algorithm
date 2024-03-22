let input = require('fs').readFileSync('11478.txt').toString().trim();

let setArray = [];


for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
        setArray.push(input.substring(i, j + 1))
    }
}

console.log(new Set(setArray).size);