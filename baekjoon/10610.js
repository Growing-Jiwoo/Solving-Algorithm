const input = require('fs').readFileSync('10610.txt').toString().trim();

let mirco = input.split("").sort();
let result = input.split("").sort((a, b) => b - a).join('');

mirco[0] != 0 ? console.log(-1) : sortMircoArray(mirco);

function sortMircoArray(num) {

    let sum_num = 0

    num.forEach((element, index) => {
        sum_num += parseInt(num[index])
    });

    sum_num % 3 == 0 ? console.log(result) : console.log(-1)

}