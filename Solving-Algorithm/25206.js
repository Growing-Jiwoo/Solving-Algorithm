const input = require('fs').readFileSync('25206.txt').toString().trim().split(/\r?\n/);

const GRADE_ARRAY = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0
};

let sumCreditGrade = 0;
let sumCredit = 0;

for (let i = 0; i < input.length; i++) {
    const credit = Number(input[i].split(' ')[1]);
    const grade = input[i].split(' ')[2];

    if (grade !== 'P') {
        sumCreditGrade += GRADE_ARRAY[grade] * credit;
        sumCredit += credit;
    }
}

const result = (sumCreditGrade / sumCredit).toFixed(6);

console.log(result);