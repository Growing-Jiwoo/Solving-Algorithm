const [N, ...input] = require("fs")
  .readFileSync("10825.txt", "utf8")
  .toString()
  .trim()
  .split("\n");
const students = input.map((item) => item.split(" "));

const sortStudents = students.sort((a, b) => {
  const [nameA, scoreA1, scoreA2, scoreA3] = a;
  const [nameB, scoreB1, scoreB2, scoreB3] = b;

  if (+scoreA1 !== +scoreB1) {
    return +scoreB1 - +scoreA1;
  }
  if (+scoreA2 !== +scoreB2) {
    return +scoreA2 - +scoreB2;
  }
  if (+scoreA3 !== +scoreB3) {
    return +scoreB3 - +scoreA3;
  }
  return nameA.localeCompare(nameB);
});

const name = sortStudents.map((student) => {
  return student[0];
});

console.log(name.join("\n"));
