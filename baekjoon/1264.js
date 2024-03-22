const input = require('fs').readFileSync('1264.txt').toString().trim().split('\n')

const compareArray = ['a', 'e', 'i', 'o', 'u']
let cnt = 0;

for (i = 0; i < input.length - 1; i++) {

    for (j = 0; j < input[i].split('').length; j++) {
        compareArray.includes(input[i].split('')[j].toLowerCase()) ? cnt++ : null;
    }
    console.log(cnt);
    cnt = 0;

}