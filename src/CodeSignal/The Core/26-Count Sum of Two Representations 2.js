function solution(n, l, r) {
  let testArr = [];
  let numOfSolutions = 0;
  for (let i = l; i <= r; i++) {
    testArr.push(i);
  }
  for (let i = l; i <= r; i++) {
    if (testArr.includes(n - i)) {
      numOfSolutions++;
    }
  }
  return numOfSolutions;
}
