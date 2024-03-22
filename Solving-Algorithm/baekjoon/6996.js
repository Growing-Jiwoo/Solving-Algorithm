const [N, ...input] = require("fs")
  .readFileSync("6996.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((comp) => {
  const compareStr1 = comp.split(" ")[0].split("").sort().join("");
  const compareStr2 = comp.split(" ")[1].split("").sort().join("");
  const str1 = comp.split(" ")[0];
  const str2 = comp.split(" ")[1];

  compareStr1 === compareStr2
    ? console.log(`${str1} & ${str2} are anagrams.`)
    : console.log(`${str1} & ${str2} are NOT anagrams.`);
});
