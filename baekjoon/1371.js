const input = require('fs').readFileSync('1371.txt').toString().trim().split(/\r?\n/);

let countObject = {};

for (i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].split('').length; j++) {
        if (input[i].split('')[j] !== " ") {
            countObject[input[i].split('')[j]] == null ? countObject[input[i].split('')[j]] = 1 : countObject[input[i].split('')[j]] += 1
        }
    }
}

const maxValues = Math.max(...Object.values(countObject))

const selected = Object.keys(countObject).filter((key) => {
    return countObject[key] === maxValues;
});

console.log(selected.sort().join(''))