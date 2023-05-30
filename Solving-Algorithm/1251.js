const input = require('fs').readFileSync('1251.txt').toString().trim().split('');

let res = []

for (let i = 1; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        const first = input.slice(0, i);
        const second = input.slice(i, j);
        const third = input.slice(j);

        console.log(first, second, third)

        first.reverse();
        second.reverse();
        third.reverse();

        res.push([...first, ...second, ...third].join(''));
    }
}

console.log(res.sort()[0]);