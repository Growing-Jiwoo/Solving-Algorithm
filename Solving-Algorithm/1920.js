const input = require("fs")
  .readFileSync("1920.txt")
  .toString()
  .trim()
  .split("\n");

const [N, value1, M, value2] = input.map((v) => v.split(" "));

const setArray = new Set(value1);

const result = value2.map((value) => (setArray.has(value) ? 1 : 0));

console.log(result.join("\n"));
