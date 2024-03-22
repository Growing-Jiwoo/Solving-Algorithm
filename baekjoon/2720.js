const input = require("fs")
  .readFileSync("2720.txt")
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input[0]);
const testCases = input.slice(1).map(Number);

for (let i = 0; i < T; i++) {
  let change = testCases[i];
  const quarters = Math.floor(change / 25);
  change %= 25;
  const dimes = Math.floor(change / 10);
  change %= 10;
  const nickels = Math.floor(change / 5);
  const pennies = change % 5;
  console.log(`${quarters} ${dimes} ${nickels} ${pennies}`);
}
