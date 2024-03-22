let input = require("fs").readFileSync("1652.txt").toString().trim().split(' ').join('').split('')
const compareArray = ['U', 'C', 'P', 'C'];
let cnt = 0;

input.forEach(element => {
    element === compareArray[cnt] ? cnt++ : null
});

console.log(cnt === 4 ? 'I love UCPC': 'I hate UCPC')