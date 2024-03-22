const input = require("fs")
  .readFileSync("11814.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const members = [];

for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(" ");
  members.push({ age: parseInt(age), name, order: i });
}

members.sort((a, b) => a.age - b.age || a.order - b.order);

for (const member of members) {
  console.log(`${member.age} ${member.name}`);
}
