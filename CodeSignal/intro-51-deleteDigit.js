function solution(n) {
  const numString = n.toString();
  const numLengthMinus1 = numString.length - 1;
  let max = Math.max(
    parseInt(numString.slice(1)),
    parseInt(numString.slice(0, numLengthMinus1))
  );
  console.log(max);
  for (let i = 1; i < numLengthMinus1; i++) {
    console.log(numString.slice(0, i).concat(' and ', numString.slice(i + 1)));
    max = Math.max(
      max,
      parseInt(numString.slice(0, i).concat(numString.slice(i + 1)))
    );
  }
  return max;
}
