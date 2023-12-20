const input = require("fs").readFileSync("2740.txt", "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

// 행렬 A 입력
const matrixA = [];
for (let i = 1; i <= N; i++) {
  matrixA.push(input[i].split(" ").map(Number));
}

// 행렬 B의 크기 및 입력
const [M2, K] = input[N + 1].split(" ").map(Number);

// 행렬 B 입력
const matrixB = [];
for (let i = N + 2; i <= N + 1 + M2; i++) {
  matrixB.push(input[i].split(" ").map(Number));
}

// 행렬 곱셈
const resultMatrix = Array.from(Array(N), () => Array(K).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    for (let l = 0; l < M; l++) {
      resultMatrix[i][j] += matrixA[i][l] * matrixB[l][j];
    }
  }
}

// 결과 출력
for (let row of resultMatrix) {
  console.log(row.join(" "));
}
