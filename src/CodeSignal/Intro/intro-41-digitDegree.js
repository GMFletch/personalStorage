function solution(n) {
  return recurse(n);
  function recurse(num, degree = 0) {
    if (num < 10) {
      return degree;
    }
    degree++;
    const string = num.toString();
    let sum = 0;
    for (let i = 0, L = string.length; i < L; i++) {
      sum += parseInt(string[i]);
    }
    return recurse(sum, degree);
  }
}
