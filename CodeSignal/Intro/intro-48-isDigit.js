function solution(symbol) {
  return !isNaN(symbol);
}

/*
initial solution

function solution(symbol) {
  const regTest = /\d/g;
  return symbol.match(regTest) === null ? false : true;
}
*/
