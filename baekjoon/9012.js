let input = require('fs').readFileSync('9012.txt').toString().trim().split('\n')

let result = []

for(i = 1 ; i <= input[0] ; i++){
    for(j = 0 ; j < input[i].split('').length ; j++){

      result.push(input[i].split('')[j])
  
      if(result[result.length-2] + result[result.length-1] === "()"){
        result.pop()
        result.pop()
      }

    }

    if(result.length === 0){
      console.log("YES")
    }
    else{
      console.log("NO")
    }

    result = []
}