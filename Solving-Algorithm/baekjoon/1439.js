let input = require('fs').readFileSync('1439.txt').toString().trim().split('');

let array0 = [];
let array1 = [];
let string = "";

function solution(min_num, max_num, array){
for (let i = 0; i < input.length; i++) {
    if (input[i] === min_num) {
        string += input[i];
        if (input[i + 1] === max_num || input[i + 1] === undefined) {
            array.push(string);
            string = "";
        }
    }
}
}

solution("0","1",array0)
solution("1","0",array1)

console.log(Math.min(array0.length, array1.length));