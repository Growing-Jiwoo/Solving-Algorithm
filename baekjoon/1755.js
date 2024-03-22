const [M, N] = require("fs")
  .readFileSync("1755.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const numberArray = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const result = [];

for (let i = M; i <= N; i++) {
  const words = i
    .toString()
    .split("")
    .map((value) => numberArray[parseInt(value)]);
  const order = words.join(" ");
  result.push({ number: i, order });
}

result.sort((a, b) => a.order.localeCompare(b.order));

let output = "";

for (let i = 0; i < result.length; i++) {
  output += result[i].number + " ";

  if ((i + 1) % 10 === 0 || i === result.length - 1) {
    console.log(output);
    output = "";
  }
}
