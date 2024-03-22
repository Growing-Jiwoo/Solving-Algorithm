const input = require('fs').readFileSync('1969.txt').toString().trim().split('\n');
const [n, m] = num.split(" ")
const dna = input.slice(1);

let result = '';
let distance = 0;

for (let i = 0; i < m; i++) {
    const count = { A: 0, C: 0, G: 0, T: 0 };
    for (let j = 0; j < n; j++) {
        count[dna[j][i]]++;
    }
    const maxCount = Math.max(...Object.values(count));
    const maxChar = Object.keys(count).find(key => count[key] === maxCount);
    result += maxChar;
    distance += n - maxCount;
}

console.log(result);
console.log(distance);