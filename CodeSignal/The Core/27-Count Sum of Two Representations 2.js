function solution(n, l, r) {
  const mean = (l + r) / 2;
  const numToMean = mean - l;
  return Math.floor(numToMean);
}
