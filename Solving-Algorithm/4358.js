const input = require('fs').readFileSync('4358.txt').toString().trim().split(/\r?\n/);

let countObject = {};

input.forEach(element => { countObject[element] == null ? countObject[element] = 1 : countObject[element] += 1 });

console.log(Object.keys(countObject).sort().map(key => `${key} ${(countObject[key] / input.length * 100).toFixed(4)}`).join('\n'));