const input = require("fs").readFileSync("2018.txt").toString().trim();

const N = parseInt(input);

let count = 0;
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum = 0;
  for (let j = i; j <= N; j++) {
    sum += j;
    if (sum === N) {
      count++;
      break;
    } else if (sum > N) {
      break;
    }
  }
}

console.log(count);
