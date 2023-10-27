function solution(upSpeed, downSpeed, desiredHeight) {
  return upSpeed >= desiredHeight
    ? 1
    : Math.ceil((desiredHeight - downSpeed) / (upSpeed - downSpeed));
}
