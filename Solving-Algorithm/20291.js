const [N, ...input] = require('fs').readFileSync('20291.txt').toString().trim().split(/\r?\n/);

let countingObj = {}

for (i = 0; i < N; i++) {
    const extension = input[i].split(".")[1]

    countingObj.hasOwnProperty(extension) ? countingObj[extension] += 1 : countingObj[extension] = 1;
}

const sortKeys = Object.keys(countingObj).sort();

for (const key of sortKeys) {
    console.log(`${key} ${countingObj[key]}`);
}
