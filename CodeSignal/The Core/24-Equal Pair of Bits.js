function solution(n, m) {
  return (function () {
    const nString = n.toString(2).split('').reverse();
    const mString = m.toString(2).split('').reverse();
    let same = false;
    let returnNum = 0;
    let i = 0;
    while (!same) {
      let testN = nString[i] === '1' ? '1' : '0';
      let testM = mString[i] === '1' ? '1' : '0';
      console.log(testN);
      console.log(testM);
      same = testN === testM;
      if (same) {
        returnNum = i;
      } else {
        i++;
      }
    }
    return Math.pow(2, returnNum);
  })();
}
