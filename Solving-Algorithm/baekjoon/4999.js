const input = require('fs').readFileSync('4999.txt').toString().trim().split('\n');

const [A, B] = input;

A.length >= B.length ? console.log('go') : console.log('no') ;