const input = require('fs').readFileSync('1254.txt').toString().trim();

let reverseInput = input.split("").reverse().join("");

if (reverseInput == input) {
    console.log(reverseInput.length);
    return;
}

for (let i = 1; i < input.length; i++) {
    let arr = input.split("").slice(i).join("");
    const reverseArray = input.split("").slice(i).reverse().join("");
    if (arr === reverseArray) {
        console.log(input.length + i)
        break;
    }
}