const input = require('fs').readFileSync('11816.txt').toString()

function convertToDecimal(input) {
    if (input.startsWith("0x")) {
        return parseInt(input, 16);
    }
    else if (input.startsWith("0")) {
        return parseInt(input, 8);
    }
    else {
        return parseInt(input, 10);
    }
}

console.log(convertToDecimal(input));