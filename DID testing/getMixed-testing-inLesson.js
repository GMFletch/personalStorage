const { text1, button1, input1, table1, table2, table3 } = components;

const inputTestingComps = [input1];

const successTexts = ['words $4x$ and numbers $+2$ here'];

function testInputsAndTables() {
  testInputs(1);
  testTables(table1, 2);
  testTables(table2, 3);
}

testInputsAndTables();

button1.on('click', () => {
  testInputsAndTables();
});

function testInputs(startingRow = 1) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        didUtils.sandbox.getMixed(inputTestingComps[i].data) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        didUtils.sandbox.getMixed(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: didUtils.sandbox.getMixed(inputTestingComps[i].data),
      className:
        didUtils.sandbox.getMixed(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}

function testTables(testingTable, startingRow = 4) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        didUtils.sandbox.getMixed(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        didUtils.sandbox.getMixed(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: didUtils.sandbox.getMixed(
        testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
      ),
      className:
        didUtils.sandbox.getMixed(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}
