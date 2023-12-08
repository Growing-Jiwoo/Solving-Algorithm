const [x, y] = require('fs').readFileSync('1924.txt').toString().trim().split(' ').map(Number);

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const date = new Date(`2007-${x}-${y}`);

const dayOfWeek = date.getDay();

console.log(daysOfWeek[dayOfWeek])