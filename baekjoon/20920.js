const input = require('fs').readFileSync('20920.txt').toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(' ');
const compare = {};

for (let i = 1; i <= N; i++) {
  const currentValue = input[i];
  if (input[i].length >= Number(M)) {
    compare[currentValue] ? compare[currentValue] += 1 : compare[currentValue] = 1;
  }
}

const sortedCompareArray = Object.entries(compare)
  .sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }

    if (b[0].length !== a[0].length) {
      return b[0].length - a[0].length;
    }

    return a[0].localeCompare(b[0]);
  });

const sortedCompareObject = Object.fromEntries(sortedCompareArray);

console.log(Object.keys(sortedCompareObject).join("\n"));