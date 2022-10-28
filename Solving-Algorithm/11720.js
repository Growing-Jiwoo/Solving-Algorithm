// let input = require('fs').readFileSync('11720.txt').toString().split('\n');

// let cnt = input[0];
// let num = input[1];

// cnt = cnt.toString().split("")
// num = num.toString().split("")

// let sum = 0;
// for (let item in num) {
//   sum += Number(num[item])
// }

// console.log(sum)
const input = require('fs').readFileSync('11720.txt').toString().split('\n')
console.log(input[1].split('').reduce((a, b) => +a + +b))