const input = require('fs').readFileSync('9506.txt').toString().trim().split('\n').map(Number);
input.pop();

console.log(input.map(function solution(num) {
    const divisor = [1];
    let sum = 1;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            divisor.push(i);
            sum += i;
        }
    }

    if (sum === num) {
        return `${num} = ` + divisor.join(' + ');
    } else {
        return `${num} is NOT perfect.`;
    }
}).join('\n'));