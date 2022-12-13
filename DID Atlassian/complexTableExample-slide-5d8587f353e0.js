const { text1, table1 } = components;

const ID1 = 'slide-3cf0723dd2cf';

const prevTable = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'table1',
  compType: 'complexTable',
  utils,
  components,

  // ignore/delete the following if not ggb
  ggbInnerDataDefault: { exampleVal1: 1, exampleVal2: 2 },
});

console.log(prevTable);

// uses of prevTable

for (let row = 1, numRows = prevTable.data.rows.length; row < numRows; row++) {
  for (
    let col = 0, numCols = prevTable.data.rows[0].length;
    col < numCols;
    col++
  ) {
    table1.updateCell(
      row,
      col,
      prevTable.data.rows[row][col].inputType === 'mixed'
        ? { value: didUtils.getText(prevTable.data.rows[row][col]) }
        : prevTable.data.rows[row][col]
    );
  }
}
