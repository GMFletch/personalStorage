const { text1, text2, input1, input2, input3, table1, table2, table3 } =
  components;

const inputTestingComps = [input1, input2, input3];

const textTestingTypes = ['text', 'math', 'mixed'];

function testInputsAndTables() {
  testInputs(1);
  testTables(table1, 4);
  testTables(table2, 7);
}

testInputsAndTables();

function testInputs(startingRow = 1) {
  for (let i = 0, L = textTestingTypes.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        didUtils.getTextType(inputTestingComps[i].data) === textTestingTypes[i]
          ? 'pass'
          : 'FAIL',
      className:
        didUtils.getTextType(inputTestingComps[i].data) === textTestingTypes[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: didUtils.getTextType(inputTestingComps[i].data),
      className:
        didUtils.getTextType(inputTestingComps[i].data) === textTestingTypes[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}

function testTables(testingTable, startingRow = 4) {
  for (let i = 0, L = textTestingTypes.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        didUtils.getTextType(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === textTestingTypes[i]
          ? 'pass'
          : 'FAIL',
      className:
        didUtils.getTextType(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === textTestingTypes[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: didUtils.getTextType(
        testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
      ),
      className:
        didUtils.getTextType(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === textTestingTypes[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}
