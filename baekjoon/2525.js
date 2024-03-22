const input = require("fs").readFileSync("2525.txt", "utf8").trim().split("\n");

const currentTime = input[0].split(" ").map(Number);
const cookingTime = parseInt(input[1]);

let totalMinutes = currentTime[0] * 60 + currentTime[1] + cookingTime;

const endHour = Math.floor(totalMinutes / 60) % 24;
const endMinute = totalMinutes % 60;

console.log(endHour, endMinute);
