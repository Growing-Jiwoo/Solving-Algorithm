const input = parseInt(
  require("fs").readFileSync("2164.txt").toString().trim()
);

const Q = Array.from({ length: +input }, (value, idx) => (value = idx + 1));
let idx = 0;

while (idx !== Q.length - 1) {
  idx % 2 === 0 ? idx++ : Q.push(Q[idx++]);
}

console.log(Q[idx]);
