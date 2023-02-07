function solution(min1, min2_10, min11, s) {
  switch (true) {
    case s / min1 < 1:
      return 0;
    case (s - min1) / min2_10 < 9:
      return Math.floor((s - min1) / min2_10 + 1);
    default:
      return Math.floor((s - min1 - 9 * min2_10) / min11) + 10;
  }
}
