const input = require('fs').readFileSync('11655.txt').toString().split('');

// 리팩토링 전

// let compareArray = [];
// let upperCnt = 0;
// let lowerCnt = 0;

// for (i = 0; i < input.length; i++) {
//     if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
//         upperCnt = input[i].charCodeAt(0);
//         for (j = 1; j <= 13; j++) {
//             upperCnt < 90 ? upperCnt += 1 : upperCnt = 65
//         }
//         compareArray.push(String.fromCharCode(upperCnt))
//     }
//     else if (input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122) {
//         lowerCnt = input[i].charCodeAt(0);

//         for (k = 1; k <= 13; k++) {
//             lowerCnt < 122 ? lowerCnt += 1 : lowerCnt = 97;
//         }
//         compareArray.push(String.fromCharCode(lowerCnt))
//     }
//     else {
//         compareArray.push(input[i])
//     }
// }

// console.log(compareArray.join(""))

// 리팩토링 후
const compareArray = [];

for (let i = 0; i < input.length; i++) {
    const currentCharCode = input[i].charCodeAt(0);

    if (currentCharCode >= 65 && currentCharCode <= 90) {
        const shiftedCode = ((currentCharCode - 65 + 13) % 26) + 65;
        compareArray.push(String.fromCharCode(shiftedCode));
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
        const shiftedCode = ((currentCharCode - 97 + 13) % 26) + 97;
        compareArray.push(String.fromCharCode(shiftedCode));
    } else {
        compareArray.push(input[i]);
    }
}

console.log(compareArray.join(''));