const { rte1, table1 } = components;

const ID1 = 'slide-7a8b9d606afa';

const prevTable1 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'table1',
  compType: 'table',
  utils,
  components,
});

console.log('prevTable1');
console.log(prevTable1);

// setting a single cell of the table1 here to the values entered on the previous slide
table1.updateCell(0, 0, {
  value: didUtils.getText(prevTable1.data.rows[0][0]),
});

/*
  the prevTable of an old/original table has a few helpful methods built in.

  1. prevTable1.getCell(row, col, leaveBlanks = false) will return a given cell, and return the goBackString if it is empty when leaveBlanks is false
  2. prevTable1.getCellKatex(row, col, leaveBlanks = false) does the same thing, but returns goBackStringKatex if the cell is empty instead
  3. prevTable1.fillCells('table1', rowStart = 0, colStart = 0, leaveBlanks = false, cellUpdates = {}) will fill the cells of table1 on this slide with the data from prevTable1
  4. prevTable1.fillCellsKatex('table1', rowStart = 0, colStart = 0, leaveBlanks = false, cellUpdates = {}) will fill the cells of table1 on this slide with the data from prevTable1

*/

// using prevTable1.fillCellsKatex()
prevTable1.fillCellsKatex('table1');

/*

  Alternative for fillCells for now

  for (let i = 0, rows = table1.data.rows.length; i < rows; i++) {
    for (let j = 0, cols = table1.data.rows[0].length; j < cols; j++) {
      const tempVal = didUtils.getText(prevTable1.data.rows[i][j]);
      table1.updateCell(i, j, {
        value: tempVal === '' ? prevTable1.data.goBackStringKatex : tempVal,
      });
    }
  }

*/

rte1.updateData({
  text: `prevTable1.isDefault: ${prevTable1.isDefault}\n\n
  prevTable1.data.slideNum: ${prevTable1.data.slideNum}\n\n
  prevTable1.data.hasData: ${prevTable1.data.hasData}\n\n
  prevTable1.data.isComplete: ${prevTable1.data.isComplete}\n\n
  see coding layer for examples of accessing a cell directly - it includes brackets and does not currently render properly here\n\n
  didUtils.getText(prevTable1.data.rows-1-0): ${didUtils.getText(
    prevTable1.data.rows[0][0]
  )}\n\n
  didUtils.getText(prevTable1.data.rows-2-0): ${didUtils.getText(
    prevTable1.data.rows[1][0]
  )}\n\n
  didUtils.getText(prevTable1.data.rows-3-0): ${didUtils.getText(
    prevTable1.data.rows[2][0]
  )}\n\n
  didUtils.getText(prevTable1.data.rows-1-1): ${didUtils.getText(
    prevTable1.data.rows[0][1]
  )}\n\n
  didUtils.getText(prevTable1.data.rows-2-1): ${didUtils.getText(
    prevTable1.data.rows[1][1]
  )}\n\n
  didUtils.getText(prevTable1.data.rows-3-1): ${didUtils.getText(
    prevTable1.data.rows[2][1]
  )}\n\n
  prevTable1.data.goBackString: ${prevTable1.data.goBackString}\n\n
  prevTable1.data.goBackStringKatex: ${prevTable1.data.goBackStringKatex}\n\n
  prevTable1.data.flagText: ${prevTable1.data.flagText}\n\n
  prevTable1.data.flagTextKatex: ${prevTable1.data.flagTextKatex}`,
});
