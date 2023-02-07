function solution(n) {
  return Math.floor(n / 10) + (n % 10);
}

/*
initial solution

function solution(n) {
  const numString = n.toString();
  return parseInt(numString[0]) * 10 + parseInt(numString[1]);
}
*/
