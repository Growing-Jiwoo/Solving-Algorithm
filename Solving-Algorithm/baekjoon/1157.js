let input = require('fs').readFileSync('1157.txt').toString().toUpperCase().trim().split('')

function getElCount(arr) {
  let obj = {}
  for(const el of arr) {
    obj[el] = (obj[el] || 0) + 1;
  }
  return obj;
}

const max_value = Math.max.apply(null, Object.values(getElCount(input)))

let max_arr = []

for (value in getElCount(input)) {
  if(max_value == getElCount(input)[value]){
    max_arr.push(value)
  }
  else{
    continue
  }
}

if(max_arr.length !== 1){
  console.log("?")
}
else{
  console.log(max_arr[0])
}