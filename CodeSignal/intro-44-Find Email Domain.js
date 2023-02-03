function solution(address) {
  return recursor(address);
  function recursor(str) {
    let tempStr = str.slice(str.split('').indexOf('@') + 1);
    if (tempStr.includes('@')) {
      return recursor(tempStr);
    } else {
      return tempStr;
    }
  }
}
