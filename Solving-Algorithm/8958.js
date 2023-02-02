let [N, ...input] = require("fs").readFileSync("8958.txt").toString().trim().split('\n');
let cnt = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
    cnt = 0 , sum = 0;
	for (let j = 0; j < input[i].length; j++) {
        input[i][j] == 'O' ? cnt++ : cnt=0;
		sum += cnt;
	}
	console.log(sum);
}