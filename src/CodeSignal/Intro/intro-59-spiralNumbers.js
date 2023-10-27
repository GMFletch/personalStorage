function solution(n) {
  let direction = 'right';
  let tempRow = 0;
  let tempCol = 0;
  const returnArray = [];
  for (let row = 0; row < n; row++) {
    returnArray.push([]);
    for (let col = 0; col < n; col++) {
      returnArray[row].push(0);
    }
  }
  for (let i = 1, L = n * n + 1; i < L; i++) {
    returnArray[tempRow][tempCol] = i;
    pathFinder(i);
  }
  function pathFinder() {
    switch (direction) {
      case 'right':
        if (returnArray[tempRow][tempCol + 1] === 0) {
          tempCol++;
        } else {
          tempRow++;
          direction = 'down';
        }
        break;
      case 'down':
        if (returnArray[tempRow + 1]?.[tempCol] === 0) {
          tempRow++;
        } else {
          tempCol--;
          direction = 'left';
        }
        break;
      case 'left':
        if (returnArray[tempRow][tempCol - 1] === 0) {
          tempCol--;
        } else {
          tempRow--;
          direction = 'up';
        }
        break;
      case 'up':
        if (returnArray[tempRow - 1]?.[tempCol] === 0) {
          tempRow--;
        } else {
          tempCol++;
          direction = 'right';
        }
        break;
      default:
        console.log('error in switch statement');
        break;
    }
  }
  return returnArray;
}
