const [N, ...input] = require('fs').readFileSync('1159.txt').toString().trim().split('\n');

let cntObj = {};
const sortArray = input.sort();

for (let i = 0; i < N; i++) {
  const firstLetter = sortArray[i][0];
  cntObj[firstLetter] ? cntObj[firstLetter]++ : cntObj[firstLetter] = 1;
}

const keys = Object.keys(cntObj).filter(key => cntObj[key] >= 5);

console.log(keys.length > 0 ? keys.join('') : 'PREDAJA');
