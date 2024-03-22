let input = require("fs")
  .readFileSync("10828.txt")
  .toString()
  .trim()
  .split("\n");
let N = parseInt(input[0]);
let stack = [];
let output = [];

for (let i = 1; i <= N; i++) {
  let [command, arg] = input[i].split(" ");

  if (command === "push") {
    stack.push(+arg);
  } else if (command === "pop") {
    output.push(stack.length === 0 ? -1 : stack.pop());
  } else if (command === "size") {
    output.push(stack.length);
  } else if (command === "empty") {
    output.push(stack.length === 0 ? 1 : 0);
  } else if (command === "top") {
    output.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}

console.log(output.join("\n"));
