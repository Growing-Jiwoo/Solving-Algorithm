let input = require('fs').readFileSync('1316.txt').toString().trim().split('\n')

let result = []
let result2 = []
let count = 0;
let arrUnique = []

for(i = 1 ; i <= input[0] ; i++){
  
    for(j = 0 ; j < input[i].split('').length ; j++){

      result.push(input[i].split('')[j])

      if(input[i].split('')[j] != input[i].split('')[j+1]){

        arrUnique = [...new Set(result)];
        
        if(result2.includes(arrUnique.length)){
          count -= 1
          break;
        }
        result2.push(arrUnique.length)
      }
      
    }
    count += 1
    result = []
    result2 = []

}

console.log(count)