let [N, ...input] = require('fs').readFileSync('2675.txt').toString().trim().split("\n");

// let result = [];

// input.forEach(element => {
//   for(i = 0 ; i < element.split(" ")[1].length ; i++){
//     for(j = 0 ; j < element.split(" ")[0] ; j++){
//       result.push(element.split(" ")[1].split(" ")[0].split("")[i])
//     }
//   }
//   console.log(result.join(""))
//   result = []
// });

let result = "";

for(a = 0 ; a < N ; a ++){
  for(i = 0 ; i < input[a].split(" ")[1].length ; i++){
    for(j = 0 ; j < input[a].split(" ")[0] ; j++){
      result += input[a].split(" ")[1].split(" ")[0].split("")[i]
    }
  }
  console.log(result)
  result = ""
}