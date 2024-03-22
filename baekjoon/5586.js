const input = require('fs').readFileSync('5586.txt').toString().trim();

let joiCount = 0;
let ioiCount = 0;

for (let i = 0; i < input.length - 2; i++) {
    const substr = input.substring(i, i + 3);

    if (substr === "JOI") {
        joiCount++;
    } else if (substr === "IOI") {
        ioiCount++;
    }
}

console.log(joiCount);
console.log(ioiCount);
