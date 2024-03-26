function solution(n, m, section) {
  let answer = 0;
  let paintArea = new Array(n).fill(0);

  section.forEach((sec) => {
    paintArea[sec - 1] = 1;
  });

  let idx = 0;
  while (idx < n) {
    if (paintArea[idx] === 1) {
      answer++;
      idx += m;
    } else {
      idx++;
    }
  }

  return answer;
}
