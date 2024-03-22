const input = require('fs').readFileSync('25372.txt').toString().trim().split("\n");

const count = parseInt(input[0]);

let output = "";

for (let i = 1; i <= count; i++) {
    const password = input[i];
    let validity = "no";

    if (password.length >= 6 && password.length <= 9) {
        validity = "yes";
    }

    output += validity + "\n";
}

console.log(output);