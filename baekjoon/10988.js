let input = require('fs').readFileSync('10988.txt').toString().trim().split('');

input.join('') === input.reverse().join('') ? console.log('1') : console.log('0')