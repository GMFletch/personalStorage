function solution(upSpeed, downSpeed, desiredHeight) {
  return Math.floor((desiredHeight - downSpeed) / (upSpeed - downSpeed));
}
