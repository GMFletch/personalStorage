function solution(st) {
  return recursor(st);
  function recursor(string, num = 0) {
    const tempStringArray = string.split('');
    for (let i = 0; i < num; i++) {
      tempStringArray.push(string[num - 1 - i]);
    }
    const tempString = tempStringArray.join('');
    if (tempString === tempString.split('').reverse().join('')) {
      return tempString;
    } else {
      num++;
      return recursor(string, num);
    }
  }
}
