function solution(value1, weight1, value2, weight2, maxW) {
  const situation =
    weight1 + weight2 <= maxW
      ? 'both'
      : weight1 > maxW && weight2 > maxW
      ? 'none'
      : weight1 <= maxW && weight2 <= maxW
      ? 'either'
      : 'onlyOption';
  switch (situation) {
    case 'both':
      return value1 + value2;
    case 'none':
      return 0;
    case 'either':
      return value1 > value2 ? value1 : value2;
    default:
      return weight1 <= maxW ? value1 : value2;
  }
}
