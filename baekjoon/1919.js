const input = require('fs').readFileSync('1919.txt').toString().trim().split('\n');
const str1 = input[0].trim();
const str2 = input[1].trim();

const freq1 = Array(128).fill(0);
const freq2 = Array(128).fill(0);

for (let i = 0; i < str1.length; i++) {
    freq1[str1.charCodeAt(i)]++;
}

for (let i = 0; i < str2.length; i++) {
    freq2[str2.charCodeAt(i)]++;
}

let diff = 0;

for (let i = 0; i < 128; i++) {
    diff += Math.abs(freq1[i] - freq2[i]);
}

console.log(diff);