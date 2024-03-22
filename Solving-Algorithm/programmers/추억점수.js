function solution(name, yearning, photo) {
  let result = [];
  let sum = 0;
  photo.forEach((v) => {
    sum = 0;
    v.filter((filterValue) => {
      if (name.includes(filterValue) === true) {
        let index = name.indexOf(filterValue);
        sum += yearning[index];
      }
    });
    result.push(sum);
  });
  return result;
}
