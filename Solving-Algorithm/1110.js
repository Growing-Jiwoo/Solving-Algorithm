const N = parseInt(require('fs').readFileSync('1110.txt').toString().trim());

let strN = N.toString();

let originalNumber = N;
let cycleLength = 0;

while (true) {
    if (N < 10) {
        strN = "0" + N.toString();
    }

    let sum = parseInt(strN[0]) + parseInt(strN[1]);

    strN = strN[1] + (sum % 10).toString();

    cycleLength++;

    if (parseInt(strN) === originalNumber) {
        break;
    }
}

console.log(cycleLength);