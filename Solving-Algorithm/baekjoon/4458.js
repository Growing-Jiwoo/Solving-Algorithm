const [N, ...input] = require('fs').readFileSync('4458.txt').toString().trim().split('\n');

console.log(input.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('\n'));
