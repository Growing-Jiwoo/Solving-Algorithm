let input = require('fs').readFileSync('C:/Users/KST_KJW/Desktop/[6] 개인 공부/[1] 백준 학습/Solving-Algorithm/1100.txt').toString().trim().split('\n').map(str => str.replace(/\r/g, ''));

function countWhitePieces(chessboard) {
    let count = 0;
    for (let i = 0; i < chessboard.length; i++) {
        for (let j = 0; j < chessboard[i].length; j++) {
            if ((i + j) % 2 === 0 && chessboard[i][j] !== '.') {
                count++;
            }
        }
    }
    return count;
}

console.log(countWhitePieces(input));