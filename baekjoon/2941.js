let input = require('fs').readFileSync('2941.txt').toString().trim();

const compareArray = ['c=', 'c-','dz=','d-','lj','nj','s=','z='];

let cnt = 0;

for (let i = 0; i < compareArray.length; i++) {
    while (input !== input.replace(compareArray[i], '')) {
        cnt += 1;
        input = input.replace(compareArray[i], ' ');
    }
}
console.log(cnt + input.split(' ').join('').length)
