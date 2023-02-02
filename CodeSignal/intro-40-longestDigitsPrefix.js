function solution(inputString) {
  const match = inputString.match(/^\d+/g);
  console.log(match);
  return match === null ? '' : match[0];
}
