const input = require("fs")
  .readFileSync("11008.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const [s, p] = input[i].split(" ");

  let time = 0;
  let str = s;

  while (str.length > 0) {
    if (str.includes(p)) {
      time++;
      str = str.replace(p, "");
    } else {
      time += str.length;
      str = "";
    }
  }

  console.log(time);
}
