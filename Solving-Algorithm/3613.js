let input = require('fs').readFileSync('C:/Users/KST_KJW/Desktop/[6] 개인 공부/[1] 백준 학습/Solving-Algorithm/3613.txt').toString().trim().split('');

let snake_index = input.indexOf("_")

let snake_count = input.join('').split('_').length - 1;

const findIndexArray = [];

let check_case = /^[A-Z]+$/; // 영문 대문자만
let check_case_lower = /^[a-z]+$/; // 영문 대문자만

let a = 0;
let b = 0;
let c = 0;

for(count = 0; count < input.length; count++) {
    if(input[count] == "_"){
      a++;
    }
    if(check_case.test(input[count])){
      b++;
    }
    if(input[count-1] == "_" && input[count] == "_" ){
      c++;
    }
}

if(input[0] === "_" || input[input.length-1] === "_" || check_case.test(input[0]) || !check_case_lower.test(input[0]) || a != 0 && b != 0 || c != 0){
    console.log(`Error!`)
}
else if(snake_index != -1){
    for(index = 0; index < input.length; index++) {
        if(input[index] == "_") {
          findIndexArray.push(index);
        }
      }
      
      for(i = 0 ; i < snake_count ; i++){
          input.splice(findIndexArray[i]+1, 1, input[findIndexArray[i]+1].toUpperCase())
      }
      console.log(input.join("").replace(/_/g,""))
      
} else {
  for (index = 0; index < input.length; index++) {
    if (check_case.test(input[index])) {
      findIndexArray.push(index);
    }
  }

  for (i = 0; i <= findIndexArray.length - 1; i++) {
    input.splice(findIndexArray[i], 1, `_${input[findIndexArray[i]].toLowerCase()}`)
  }
  console.log(input.join(""))
}