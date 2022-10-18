const { text1, button1, input1, input2, input3, table1, table2, table3 } =
  components;

const inputTestingComps = [input1, input2, input3];

const successTexts = [
  'words and 1 num',
  '$3x+1$',
  'words $4x$ and numbers $+2$ here',
];

testInputs(1);
testTables(table1, 4);
testTables(table2, 7);

button1.on('click', () => {
  testInputs(1);
  testTables(table1, 4);
  testTables(table2, 7);
});

function testInputs(startingRow = 1) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        didUtils.sandbox.getText(inputTestingComps[i].data) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        didUtils.sandbox.getText(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: didUtils.sandbox.getText(inputTestingComps[i].data),
      className:
        didUtils.sandbox.getText(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}

function testTables(testingTable, startingRow = 4) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        didUtils.sandbox.getText(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        didUtils.sandbox.getText(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: didUtils.sandbox.getText(
        testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
      ),
      className:
        didUtils.sandbox.getText(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}
