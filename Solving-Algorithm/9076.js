const input = require("fs")
  .readFileSync("9076.txt")
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const scores = input[i].split(" ").map(Number);

  scores.sort((a, b) => a - b);

  const diff = scores[3] - scores[1];

  if (diff >= 4) {
    console.log("KIN");
  } else {
    console.log(scores[1] + scores[2] + scores[3]);
  }
}
