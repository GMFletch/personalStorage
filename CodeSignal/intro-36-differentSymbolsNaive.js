function solution(s) {
  let returnString = '';
  for (let i = 0, L = s.length; i < L; i++) {
    returnString = returnString.concat(returnString.includes(s[i]) ? '' : s[i]);
    // console.log(returnString);
  }
  return returnString.length;
}
