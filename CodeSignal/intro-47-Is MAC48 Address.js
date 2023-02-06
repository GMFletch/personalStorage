function solution(inputString) {
  const regTest = /^([\dabcdef][\dabcdef]-){5}[\dabcdef][\dabcdef]$/gi;
  return inputString.match(regTest) === null ? false : true;
}
