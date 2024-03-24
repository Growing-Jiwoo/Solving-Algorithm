function solution(keymap, targets) {
  let answer = [];

  targets.forEach((v, idx) => {
    let count = 0;
    let found = false;
    const splitStr = v.split("");

    splitStr.forEach((str) => {
      let compare = [];

      keymap.forEach((key) => {
        let indexInKeyMap = key.indexOf(str);
        if (indexInKeyMap !== -1) compare.push(indexInKeyMap + 1);
      });

      if (compare.length === 0) {
        count = -1;
        found = true;
      } else {
        count += Math.min(...compare);
      }
    });

    if (!found) {
      answer.push(count);
    } else {
      answer.push(-1);
    }
  });

  return answer;
}
