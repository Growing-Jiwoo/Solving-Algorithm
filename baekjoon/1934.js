const input = require("fs").readFileSync("1934.txt", "utf8").trim().split("\n");
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  let gcd = a;
  let tempB = b;
  while (tempB !== 0) {
    const temp = tempB;
    tempB = gcd % tempB;
    gcd = temp;
  }

  const lcm = (a * b) / gcd;

  console.log(lcm);
}
