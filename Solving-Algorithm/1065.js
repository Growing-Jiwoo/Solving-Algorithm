const input = require('fs').readFileSync('3062.txt').toString().trim();

function isSingularNumber(num) {
    if (num < 100) {
        return true;
    }

    const digits = String(num).split('').map(Number);
    const commonDifference = digits[1] - digits[0];

    for (let i = 1; i < digits.length - 1; i++) {
        if (digits[i + 1] - digits[i] !== commonDifference) {
            return false;
        }
    }

    return true;
}

function countSingularNumbers(N) {
    let count = 0;

    for (let i = 1; i <= N; i++) {
        if (isSingularNumber(i)) {
            count++;
        }
    }

    return count;
}

const result = countSingularNumbers(input);
console.log(result);