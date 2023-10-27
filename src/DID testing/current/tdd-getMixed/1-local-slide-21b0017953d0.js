function getMixed(obj) {
  // are you actually mixed? No? Return ""
  if (obj.inputType !== 'mixed') {
    return '';
  } else {
    return obj.mixedText[0]?.children
      .map((child) => {
        if (child.text) {
          return child.text;
        } else if (child.latex) {
          return `$${child.latex}$`;
        } else {
          return '';
        }
      })
      .filter((val) => !!val)
      .join('');
  }
}

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
  console.log('input1');
  console.log(input1);
  console.log('table1');
  console.log(table1);
  console.log('table2');
  console.log(table2);
  testInputsAndTables();
});

function testInputs(startingRow = 1) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        getMixed(inputTestingComps[i].data) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        getMixed(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: getMixed(inputTestingComps[i].data),
      className:
        getMixed(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}

function testTables(testingTable, startingRow = 4) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        getMixed(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        getMixed(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    table3.updateCell(startingRow + i, 3, {
      value: getMixed(
        testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
      ),
      className:
        getMixed(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}
