const input = require("fs")
  .readFileSync("11651.txt", "utf-8")
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const points = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push({ x, y });
}

points.sort((a, b) => {
  if (a.y !== b.y) {
    return a.y - b.y;
  } else {
    return a.x - b.x;
  }
});

console.log(points.map((point) => `${point.x} ${point.y}`).join("\n"));
