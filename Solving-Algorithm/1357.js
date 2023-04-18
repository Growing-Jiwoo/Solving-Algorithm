const input = require('fs').readFileSync('1357.txt').toString().trim().split(" ");

let [A, B] = input;

let compA = Number(A.split("").reverse().join(""))
let compB = Number(B.split("").reverse().join(""))

const result = Number((compA + compB).toString().split("").reverse().join(""));

console.log(result)