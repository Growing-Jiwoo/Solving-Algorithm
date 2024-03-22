let input = require("fs")
  .readFileSync("9996.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const pattern = input[1];

const isMatch = (fileName, pattern) => {
  const regexPattern = pattern.replace(/\*/g, ".*");
  const regex = new RegExp("^" + regexPattern + "$");
  return regex.test(fileName);
};

for (let i = 2; i < N + 2; i++) {
  const fileName = input[i];
  const result = isMatch(fileName, pattern) ? "DA" : "NE";
  console.log(result);
}
