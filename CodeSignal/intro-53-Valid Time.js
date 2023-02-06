function solution(time) {
  return parseInt(time.slice(0, 2)) < 24 && parseInt(time.slice(3)) < 60;
}
