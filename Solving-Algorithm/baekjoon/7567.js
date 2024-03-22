const input = require('fs').readFileSync('7567.txt').toString().trim();

let height = 10;
let prev = input[0];

for (let i = 1; i < input.length; i++) {
    const data = input[i];
    if (data === prev) {
        height += 5;
    }
    else {
        height += 10;
        prev = data;
    }
}

console.log(height);