const input = require("fs")
  .readFileSync("2530.txt")
  .toString()
  .trim()
  .split("\n");

const [hour, minute, second] = input[0].split(" ").map(Number);
const time = Number(input[1]);

const totalSeconds = hour * 3600 + minute * 60 + second + time;
const endTime = totalSeconds % 86400;

const endHour = Math.floor(endTime / 3600);
const endMinute = Math.floor((endTime % 3600) / 60);
const endSecond = endTime % 60;

console.log(`${endHour} ${endMinute} ${endSecond}`);
