const fs = require("fs");
const input = fs.readFileSync("1057.txt").toString().trim().split("\n");

let [N, kim, lim] = input[0].split(" ").map(Number);

let round = 1;

while (true) {
  if (Math.abs(kim - lim) === 1 && Math.min(kim, lim) % 2 === 1) {
    console.log(round);
    break;
  }

  kim = Math.ceil(kim / 2);
  lim = Math.ceil(lim / 2);
  round++;
}
