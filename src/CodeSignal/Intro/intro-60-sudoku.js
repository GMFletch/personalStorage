function solution(grid) {
  let isSolution = true;
  for (let i = 0; i < 9; i++) {
    checkRow(i);
    checkCol(i);
    checkSquare(i);
  }
  return isSolution;

  function checkRow(num) {
    const tempArr = [];
    for (let i = 0; i < 9; i++) {
      tempArr.push(grid[num][i]);
    }
    for (let i = 1; i <= 9; i++) {
      if (!tempArr.includes(i)) {
        isSolution = false;
      }
    }
  }

  function checkCol(num) {
    const tempArr = [];
    for (let i = 0; i < 9; i++) {
      tempArr.push(grid[i][num]);
    }
    for (let i = 1; i <= 9; i++) {
      if (!tempArr.includes(i)) {
        isSolution = false;
      }
    }
  }

  function checkSquare(num) {
    const tempArr = [];
    const tempSquareRowStart = Math.floor(num / 3) * 3;
    const tempSquareColStart = (num % 3) * 3;
    for (let i = 0; i < 9; i++) {
      tempArr.push(
        grid[tempSquareRowStart + Math.floor(i / 3)][
          tempSquareColStart + (i % 3)
        ]
      );
    }
    for (let i = 1; i <= 9; i++) {
      if (!tempArr.includes(i)) {
        isSolution = false;
      }
    }
  }
}
