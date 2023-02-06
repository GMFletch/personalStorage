function solution(s) {
  let returnString = '';
  while (s.length !== 0) {
    letterCounter(s);
    // console.log('returnString');
    // console.log(returnString);
    // console.log('s');
    // console.log(s);
  }
  return returnString;

  function letterCounter(string) {
    let tempCount = 1;
    while (string[0] === string[tempCount]) {
      tempCount++;
    }
    returnString = returnString.concat(
      tempCount === 1 ? '' : tempCount.toString(),
      string[0]
    );
    s = s.slice(tempCount);
    // console.log('s');
    // console.log(s);
  }
}
