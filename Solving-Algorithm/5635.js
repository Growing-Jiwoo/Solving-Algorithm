const [N, ...input] = require('fs').readFileSync('5635.txt').toString().trim().split('\n');

let compareObj = {}

for (i = 0; i < N; i++) {
    compareObj[input[i].split(' ')[0]] = new Date(`${input[i].split(' ')[3]}-${input[i].split(' ')[2]}-${input[i].split(' ')[1]}`.replace('\r', ''));
}

const earliest = new Date(Math.min(...Object.values(compareObj)));
const latest = new Date(Math.max(...Object.values(compareObj)));

console.log(Object.keys(compareObj).find(key => compareObj[key].toISOString() == latest.toISOString()))
console.log(Object.keys(compareObj).find(key => compareObj[key].toISOString() == earliest.toISOString()))