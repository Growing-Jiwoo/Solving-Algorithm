const [N, ...input] = require('fs').readFileSync('10102.txt').toString().trim().split('\n');

const compareArray = input.join().split('');

let cntA = 0;
let cntB = 0;

for (i = 0; i < N; i++) {
  compareArray[i] === "A" ? cntA++ : cntB++;
}

console.log((cntA > cntB) ? "A" : (cntA < cntB) ? "B" : "Tie");
