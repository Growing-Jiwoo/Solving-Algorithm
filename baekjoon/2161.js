const input = require("fs")
  .readFileSync("2161.txt")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);

const cards = [];

for (let i = 1; i <= N; i++) {
  cards.push(i);
}

const answer = [];

while (answer.length !== N) {
  answer.push(cards.shift());
  cards.push(cards.shift());
}

console.log(answer.join(" "));
