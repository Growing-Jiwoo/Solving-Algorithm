const input = require("fs")
  .readFileSync("5086.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (a === 0 && b === 0) {
    break;
  }

  let result = "neither";

  if (b % a === 0) {
    result = "factor";
  } else if (a % b === 0) {
    result = "multiple";
  }

  console.log(result);
}
