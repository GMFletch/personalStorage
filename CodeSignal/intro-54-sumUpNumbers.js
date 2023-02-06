function solution(inputString) {
  const regTest = /[0-9]+/gi;
  const numStrings = inputString.match(regTest);
  return numStrings === null
    ? 0
    : numStrings
        .map(function (el) {
          return parseInt(el);
        })
        .reduce(function (acc, curr) {
          return acc + curr;
        });
}
