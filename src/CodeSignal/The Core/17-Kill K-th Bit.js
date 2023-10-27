function solution(n, k) {
  return parseInt(
    n
      .toString(2)
      .slice(0, n.toString(2).length - k)
      .concat('0', n.toString(2).slice(n.toString(2).length - k + 1)),
    2
  );
}
