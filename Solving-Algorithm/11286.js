const input = require('fs').readFileSync('11286.txt').toString().trim();

const charCode = input.charCodeAt(0) - 44032;
const characterIndex = charCode + 1;

console.log(characterIndex);
