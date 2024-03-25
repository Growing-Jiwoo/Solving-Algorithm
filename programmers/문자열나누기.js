function solution(s) {
  let x = "";
  let cnt = 0;
  let answer = 0;
  for (const compareStr of s) {
    if (cnt === 0) {
      answer++;
      x = compareStr;
    }
    compareStr === x ? cnt++ : cnt--;
  }
  return answer;
}
