function solution(n) {
  let prod = 1;
  let val = 1;
  while (n > prod * val) {
    prod = prod * val;
    val++;
  }
  return prod * val;
}
