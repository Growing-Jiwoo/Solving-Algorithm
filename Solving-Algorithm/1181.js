let input = require('fs').readFileSync('C:/Users/KST_KJW/Desktop/[6] 개인 공부/[1] 백준 학습/Solving-Algorithm/1181.txt').toString().trim().split('\n');

// 풀이1
let setarr = [...new Set(input)];

setarr.shift();

let result = setarr.sort().sort((a, b) => a.length - b.length).join("\n");

console.log(result)


// 풀이2
// let setarr = [...new Set(input)];

// setarr.shift();

// let result = setarr.sort().sort((a, b) => a.length - b.length);

// result.forEach((element,index,value) => {
//     console.log(value[index])
// });