function solution(a, b) {
  let returnNum = 0;
  for (let i = a; i <= b; i++) {
    returnNum += i
      .toString(2)
      .split('')
      .filter(function (el) {
        return el === '1';
      }).length;
  }
  return returnNum;
}
