const input = require('fs').readFileSync('27866.txt').toString().trim().split("\n");

const findStr = input[0]
const index = input[1]

console.log(findStr[index - 1])