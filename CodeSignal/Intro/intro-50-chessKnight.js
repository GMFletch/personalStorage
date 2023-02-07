function solution(cell) {
  const letter = cell[0];
  const num = cell[1];
  let colRating = ['a', 'h'].includes(letter)
    ? 1
    : ['b', 'g'].includes(letter)
    ? 2
    : 3;
  let numRating = ['1', '8'].includes(num)
    ? 1
    : ['2', '7'].includes(num)
    ? 2
    : 3;
  const overallRating = colRating + numRating;
  return overallRating === 6 ? 8 : overallRating === 5 ? 6 : overallRating;
}
