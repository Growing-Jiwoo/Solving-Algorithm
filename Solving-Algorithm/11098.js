const input = require('fs').readFileSync('11098.txt').toString().trim().split(/\r?\n/);

const n = parseInt(input[0]);

let currentIndex = 1;

for (let i = 0; i < n; i++) {
    const p = parseInt(input[currentIndex]);
    currentIndex++;

    let maxPrice = -1;
    let mostExpensivePlayer = '';

    for (let j = 0; j < p; j++) {
        const currentPlayerInfo = input[currentIndex].split(' ');
        const price = parseInt(currentPlayerInfo[0]);
        const name = currentPlayerInfo[1];

        if (price > maxPrice) {
            maxPrice = price;
            mostExpensivePlayer = name;
        }

        currentIndex++;
    }

    console.log(mostExpensivePlayer);
}