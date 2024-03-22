const input = require("fs")
  .readFileSync("10845.txt")
  .toString()
  .trim()
  .split("\n");
let N = parseInt(input[0]);

let queue = [];
let front = 0;
let back = 0;
let output = [];

for (let i = 1; i <= N; i++) {
  let [command, arg] = input[i].split(" ");

  if (command === "push") {
    queue[back++] = parseInt(arg);
  } else if (command === "pop") {
    output.push(front === back ? -1 : queue[front++]);
  } else if (command === "size") {
    output.push(back - front);
  } else if (command === "empty") {
    output.push(front === back ? 1 : 0);
  } else if (command === "front") {
    output.push(front === back ? -1 : queue[front]);
  } else if (command === "back") {
    output.push(front === back ? -1 : queue[back - 1]);
  }
}

console.log(output.join("\n"));
