function solution(n) {
  return Math.pow(
    2,
    n
      .toString(2)
      .split('')
      .reverse()
      .map(function (el, index) {
        return el === '0' ? index : false;
      })
      .filter(function (el) {
        return typeof el === 'number';
      })[1]
  );
}
