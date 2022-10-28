let input = require('fs').readFileSync('1904.txt').toString().split('\n');

let num = parseInt(input[0]);
let num_array = [];

num_array[0] = 0
num_array[1] = 1
num_array[2] = 2
num_array[3] = 3

for(i = 4 ; i <= num ; i++){
  num_array.push((num_array[i-1] + num_array[i-2]) % 15746)
}

console.log(`${num_array[num]}`)