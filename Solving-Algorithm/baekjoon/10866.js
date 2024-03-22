const input = require("fs")
  .readFileSync("10866.txt")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const commands = input.slice(1);

const deque = [];

let result = "";
for (let i = 0; i < N; i++) {
  const [command, value] = commands[i].split(" ");

  switch (command) {
    case "push_front":
      deque.unshift(parseInt(value));
      break;
    case "push_back":
      deque.push(parseInt(value));
      break;
    case "pop_front":
      result += deque.length ? deque.shift() + "\n" : "-1\n";
      break;
    case "pop_back":
      result += deque.length ? deque.pop() + "\n" : "-1\n";
      break;
    case "size":
      result += deque.length + "\n";
      break;
    case "empty":
      result += deque.length ? "0\n" : "1\n";
      break;
    case "front":
      result += deque.length ? deque[0] + "\n" : "-1\n";
      break;
    case "back":
      result += deque.length ? deque[deque.length - 1] + "\n" : "-1\n";
      break;
  }
}

console.log(result.trim());
