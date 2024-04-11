const input = require("fs")
  .readFileSync("8892.txt")
  .toString()
  .trim()
  .split("\n");

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

const T = parseInt(input[0]);
let currentLine = 1;

for (let testCase = 0; testCase < T; testCase++) {
  const wordCnt = parseInt(input[currentLine++]);
  const words = [];

  for (let i = 0; i < wordCnt; i++) {
    words.push(input[currentLine++].trim());
  }

  let palindromeFound = false;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        const combined = words[i] + words[j];
        if (isPalindrome(combined)) {
          console.log(combined);
          palindromeFound = true;
          break;
        }
      }
    }
    if (palindromeFound) {
      break;
    }
  }

  if (!palindromeFound) {
    console.log(0);
  }
}
