function solution(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const inputArr = inputString.split('');
  const countArr = new Array(alphabet.length).fill(0);
  const strLength = inputString.length;
  for (let i = 0, L = strLength; i < L; i++) {
    countArr[alphabet.indexOf(inputArr.shift())]++;
  }
  let result = true;
  for (let i = 1, L = countArr.length; i < L; i++) {
    if (countArr[i] > countArr[i - 1]) {
      result = false;
    }
  }
  return result;
}
