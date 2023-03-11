let input = require('fs').readFileSync('1259.txt').toString().trim().split("\n");


for (i = 0 ; i < input.length ; i++){
    
    if(input[i] === "0"){
        break;
    }

    let reverseStr = input[i];
    let compareStr = input[i].split("").reverse().join('');

    reverseStr === compareStr ? console.log("yes") : console.log("no");

}
