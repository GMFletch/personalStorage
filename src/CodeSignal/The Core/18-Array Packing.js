function solution(a) {
  let returnString = '';
  a.forEach(function (el) {
    let eightZeros = '00000000';
    let tempString = el.toString(2);
    const tempStringLength = tempString.length;
    if (tempString.length < 8) {
      tempString = eightZeros.slice(0, 8 - tempStringLength).concat(tempString);
    }
    console.log(tempString);
    returnString = tempString.concat(returnString);
  });
  console.log(returnString);
  return parseInt(returnString, 2);
}
