const input = require('fs').readFileSync('1769.txt').toString().trim().split('').map(Number);

function solution(numbers) {
    let cnt = 0;

    while (numbers.length > 1) {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        numbers = sum.toString().split('').map(Number);
        cnt++;
    }

    console.log(cnt);

    numbers[0] % 3 === 0 ? console.log("YES") : console.log("NO")
}

solution(input);
