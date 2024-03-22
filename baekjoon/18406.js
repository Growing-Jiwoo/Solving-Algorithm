const input = require('fs').readFileSync('18406.txt').toString().trim();

const halfLength = input.length / 2;
const leftHalf = input.substring(0, halfLength);
const rightHalf = input.substring(halfLength);

let sumOfLeftDigits = 0;
let sumOfRightDigits = 0;

for (let i = 0; i < leftHalf.length; i++) {
    sumOfLeftDigits += parseInt(leftHalf[i]);
    sumOfRightDigits += parseInt(rightHalf[i]);
}

sumOfLeftDigits === sumOfRightDigits ? console.log("LUCKY") : console.log("READY")