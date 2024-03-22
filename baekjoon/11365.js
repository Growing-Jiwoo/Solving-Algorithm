const input = require('fs').readFileSync('11365.txt').toString().trim().split("\n").map(str => str.replace(/\r/g, ''));

for (let i = 0; i < input.length; i++) {
    if (input[i] === "END") {
        break;
    }
    else {
        console.log(input[i].split("").reverse().join(""));
    }
}