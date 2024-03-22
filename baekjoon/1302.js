let [n, ...input] = require('fs').readFileSync('1302.txt').toString().trim().split('\n').sort();

let countObject = {};

input.forEach(element => {
    countObject[element] == null ? countObject[element] = 1 : countObject[element] += 1
});

let max = Math.max(...Object.values(countObject));

console.log(Object.keys(countObject).find(key => countObject[key] === max))
