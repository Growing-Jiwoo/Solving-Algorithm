const input = require('fs').readFileSync('2857.txt').toString().trim().split(/\r?\n/);

const result = []

input.forEach(element => {
    const compareArray = element.split("-");
    compareArray.forEach(element => {
        if (element.includes("FBI")) {
            result.push(input.indexOf(compareArray.join('-')) + 1)

        }
    });
});

result.length > 0 ? console.log(result.join(" ")) : console.log("HE GOT AWAY!")