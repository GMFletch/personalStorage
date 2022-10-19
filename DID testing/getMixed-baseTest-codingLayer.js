const { text1, button1, input1, input2, input3, table1, table2, table3 } =
  components;

const inputTestingComps = [input1, input2, input3];

const successTexts = ['words $4x$ and numbers $+2$ here'];

const testTypes = ['initiallyMixed', 'changedToMixed'];

console.log('input2');
console.log(input2);
console.log('input3');
console.log(input3);
console.log('table1');
console.log(table1);
console.log('table2');
console.log(table2);

input2.updateInput({ inputType: 'mixed' });
console.log('input2');
console.log(input2);

input3.data.inputType = 'mixed';
console.log('input3');
console.log(input3);

testInputs(1);
testTables(table1, 3);
testTables(table2, 5);

button1.on('click', () => {
  testInputs(1);
  testTables(table1, 3);
  testTables(table2, 5);
});

console.log(didUtils.sandbox.getMixed);

function testInputs(startingRow = 1) {
  for (let i = 0, L = successTexts.length * testTypes.length; i < L; i++) {
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
