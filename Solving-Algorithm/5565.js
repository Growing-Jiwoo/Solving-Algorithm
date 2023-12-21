const input = require("fs").readFileSync("5565.txt", "utf8").trim().split("\n");

const totalPrice = parseInt(input[0]);
let sumOfPrices = 0;

for (let i = 1; i <= 9; i++) {
  const price = parseInt(input[i]);
  sumOfPrices += price;
}

const missingPrice = totalPrice - sumOfPrices;
console.log(missingPrice);
