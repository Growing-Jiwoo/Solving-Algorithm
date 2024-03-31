const input = require("fs")
  .readFileSync("13420.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  const [operand1, operator, operand2, equals, result] = input[i].split(" ");
  let calculatedResult;

  if (operator === "+") {
    calculatedResult = BigInt(operand1) + BigInt(operand2);
  } else if (operator === "-") {
    calculatedResult = BigInt(operand1) - BigInt(operand2);
  } else if (operator === "*") {
    calculatedResult = BigInt(operand1) * BigInt(operand2);
  } else if (operator === "/") {
    calculatedResult = BigInt(operand1) / BigInt(operand2);
  }

  BigInt(result) === calculatedResult
    ? console.log("correct")
    : console.log("wrong answer");
}
