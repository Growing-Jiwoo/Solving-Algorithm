let fs = require("fs");
let input = fs.readFileSync("1931.txt").toString().split("\n");
const n = Number(input[0]);
input.shift();
input = input.map((element) => (element.split(" ")));


input.sort((a, b)=> a[0] - b[0]);

// console.log(input)
let start = input[0][1]

let min = 0;

for (let i = 0; i < n; i++) {
  console.log("HI")
  // console.log(input[i][0])
  // console.log(input[i][1])
  // console.log(Math.abs(Number(input[0][0]) - Number(input[0][1])))
  if(Math.abs(Number(input[0][0]) - Number(input[0][1])) > Math.abs(Number(input[i][0]) - Number(input[i][1]))){
    // return;
    cur
  }
  
}

// console.log(min)