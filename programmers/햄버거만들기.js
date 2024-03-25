function solution(ingredient) {
  let hamburger = 0;
  const stack = [];

  for (let v of ingredient) {
    stack.push(v);

    if (stack.slice(-4).join("") == "1231") {
      stack.splice(-4);
      hamburger++;
    }
  }
  return hamburger;
}
