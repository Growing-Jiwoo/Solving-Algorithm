const input = require("fs").readFileSync("1676.txt", "utf8").trim().split("\n");
const N = parseInt(input[0]);

let count = 0;
for (let i = 5; i <= N; i *= 5) {
  count += Math.floor(N / i);
}

console.log(count);
