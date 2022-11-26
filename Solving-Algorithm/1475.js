let input = require('fs').readFileSync('1475.txt').toString().trim().split('');

function getElCount(arr) {
  let card = {6:0, 9:0}
  for(const el of arr) {
    card[el] = (card[el] || 0) + 1;
  }

    card[6] = Math.ceil((card[6] + card[9])/2)

    card[9] = 0

  return card;
}

console.log(Math.max.apply(null, Object.values(getElCount(input))))