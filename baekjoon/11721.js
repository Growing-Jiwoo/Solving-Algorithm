let input = require('fs').readFileSync('11721.txt').toString().trim();

console.log(input.match(new RegExp(`.{1,${10}}`, 'g')).join('\n'))