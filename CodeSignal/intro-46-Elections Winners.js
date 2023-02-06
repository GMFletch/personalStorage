function solution(votes, k) {
  let max = Math.max(...votes);
  let count = 0;
  if (k === 0) {
    votes.forEach(function (el) {
      if (el === max) {
        count++;
      }
    });
    return count === 1 ? 1 : 0;
  } else {
    votes.forEach(function (el) {
      if (el + k > max) {
        count++;
      }
    });
    return count;
  }
}
