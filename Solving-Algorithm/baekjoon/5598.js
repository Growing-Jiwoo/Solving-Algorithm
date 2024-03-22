const input = require('fs').readFileSync('5598.txt').toString().trim();

let result = '';

for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    let newCode;

    if (code >= 68 && code <= 90) {
        newCode = code - 3;
    } else if (code >= 65 && code <= 67) {
        newCode = code + 23;
    } else {
        newCode = code;
    }

    result += String.fromCharCode(newCode);
}

console.log(result);