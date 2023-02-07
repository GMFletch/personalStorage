function solution(code) {
  let returnString = '';
  for (let i = 0, L = code.length / 8; i < L; i++) {
    returnString = returnString.concat(
      String.fromCharCode(parseInt(code.slice(i * 8, (i + 1) * 8), 2))
    );
  }
  return returnString;
}

/*
not my solution, but initially wanted something like this regex - forgot you could do this.

function solution(code) {
  return code.match(/.{8}/g).reduce((a,b)=>a+String.fromCharCode(parseInt(b,2)),"")
}
*/
