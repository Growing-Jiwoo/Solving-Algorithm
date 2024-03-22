const [N, ...input] = require("fs")
  .readFileSync("11650.txt")
  .toString()
  .trim()
  .split("\n");

let points = input.map((point) => point.split(" ").map(Number));

points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let sortedPoints = points.map((coords) => coords.join(" "));

console.log(sortedPoints.join("\n"));
