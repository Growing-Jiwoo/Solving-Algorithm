const input = require('fs').readFileSync('2775.txt').toString().trim().split('\n');

function findResidents(k, n) {
    let dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[0][i] = i;
    }

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }

    return dp[k][n];
}

const T = parseInt(input[0]);
let currentIndex = 1;

for (let i = 0; i < T; i++) {
    const k = parseInt(input[currentIndex++]);
    const n = parseInt(input[currentIndex++]);
    const result = findResidents(k, n);
    console.log(result);
}