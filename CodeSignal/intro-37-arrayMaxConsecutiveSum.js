function solution(inputArray, k) {
  let max = 0;
  for (let i = 0, L = inputArray.length - k + 1; i < L; i++) {
    let tempSum = 0;
    for (let j = 0; j < k; j++) {
      tempSum += inputArray[i + j];
    }
    if (tempSum > max) {
      max = tempSum;
    }
  }
  return max;
}
