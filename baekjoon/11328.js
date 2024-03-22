const [N, ...input] = require("fs")
  .readFileSync("11328.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((comp) => {
  const compareStr1 = comp.split(" ")[0].split("").sort().join("");
  const compareStr2 = comp.split(" ")[1].split("").sort().join("");

  compareStr1 === compareStr2
    ? console.log("Possible")
    : console.log("Impossible");
});
