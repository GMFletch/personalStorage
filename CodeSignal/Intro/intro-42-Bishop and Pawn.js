function solution(bishop, pawn) {
  const letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  function findUp(str) {
    return letterArr.length - letterArr.indexOf(str[0]) + parseInt(str[1]) - 1;
  }
  function findDown(str) {
    return letterArr.indexOf(str[0]) + parseInt(str[1]);
  }
  return findUp(bishop) === findUp(pawn) || findDown(bishop) === findDown(pawn);
}

/*
initial solution

function solution(bishop, pawn) {
  const letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const rows = 8;
  const cols = 8;
  const rowsAndColsMinus1 = rows + cols - 1;
  const upArrs = [];
  const downArrs = [];
  // create arrays of all diagonals; [['a8'], ['a7', 'b8'], ...]
  for (let i = 0; i < rowsAndColsMinus1; i++) {
    if (i < rows) {
      const numSquaresToPush = i + 1;
      const tempUpArrToPush = [];
      const tempDownArrToPush = [];
      for (let j = 0; j < numSquaresToPush; j++) {
        const tempUpNum = rows - numSquaresToPush + j + 1;
        const tempDownNum = numSquaresToPush - j;
        tempUpArrToPush.push(letterArr[j].concat(tempUpNum.toString()));
        tempDownArrToPush.push(letterArr[j].concat(tempDownNum.toString()));
      }
      upArrs.push(tempUpArrToPush);
      downArrs.push(tempDownArrToPush);
    } else {
      const numSquaresToPush = rowsAndColsMinus1 - i;
      const tempUpArrToPush = [];
      const tempDownArrToPush = [];
      for (let j = 0; j < numSquaresToPush; j++) {
        const tempUpNum = j + 1;
        const tempDownNum = rows - j;
        tempUpArrToPush.push(
          letterArr[i - rows + j + 1].concat(tempUpNum.toString())
        );
        tempDownArrToPush.push(
          letterArr[i - rows + j + 1].concat(tempDownNum.toString())
        );
      }
      upArrs.push(tempUpArrToPush);
      downArrs.push(tempDownArrToPush);
    }
  }
  let upIndex;
  let downIndex;
  upArrs.forEach(function (el, index) {
    if (el.includes(bishop)) {
      upIndex = index;
    }
  });
  downArrs.forEach(function (el, index) {
    if (el.includes(bishop)) {
      downIndex = index;
    }
  });
  return upArrs[upIndex].concat(downArrs[downIndex]).includes(pawn);
}
*/
