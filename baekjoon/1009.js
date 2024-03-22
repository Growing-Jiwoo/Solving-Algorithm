let input = require("fs")
  .readFileSync("1009.txt")
  .toString()
  .trim()
  .split("\n");
let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let result = Math.pow(a % 10, b % 4 === 0 ? 4 : b % 4) % 10;

  console.log(result === 0 ? 10 : result);
}
