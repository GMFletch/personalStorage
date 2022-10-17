const { text1, button1, input1, input2, input3, table1, table2, table3 } =
  components;

const inputTestingComps = [input1, input2, input3];

const textTestingTypes = ['text', 'math', 'mixed'];

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

function getText(obj) {
  function returnTextType(obj) {
    return obj.math ? 'math' : obj.inputType === 'mixed' ? 'mixed' : 'text';
  }
  switch (returnTextType(obj)) {
    case 'text':
      return !!obj.text ? obj.text : obj.value;
    case 'math':
      return `$${!!obj.text ? obj.text : obj.value}$`;
    case 'mixed':
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
    default:
      console.warn('hit default in input comp switch statement');
      break;
  }
}

// function returnTextType(obj) {
//   return obj.math ? 'math' : obj.inputType === 'mixed' ? 'mixed' : 'text';
// }

function testInputs(startingRow = 1) {
  for (let i = 0, L = textTestingTypes.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        getText(inputTestingComps[i].data) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        getText(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    // table3.updateCell(startingRow + i, 2, {
    //   value:
    //     returnTextType(inputTestingComps[i].data) === textTestingTypes[i]
    //       ? 'pass'
    //       : 'FAIL',
    //   className:
    //     returnTextType(inputTestingComps[i].data) === textTestingTypes[i]
    //       ? 'bg-success'
    //       : 'bg-danger',
    // });
    table3.updateCell(startingRow + i, 4, {
      value: getText(inputTestingComps[i].data),
      className:
        getText(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    // table3.updateCell(startingRow + i, 5, {
    //   value: returnTextType(inputTestingComps[i].data),
    //   className:
    //     returnTextType(inputTestingComps[i].data) === textTestingTypes[i]
    //       ? 'bg-success'
    //       : 'bg-danger',
    // });
  }
}

function testTables(testingTable, startingRow = 4) {
  for (let i = 0, L = textTestingTypes.length; i < L; i++) {
    table3.updateCell(startingRow + i, 1, {
      value:
        getText(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'pass'
          : 'FAIL',
      className:
        getText(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    // table3.updateCell(startingRow + i, 2, {
    //   value:
    //     returnTextType(
    //       testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
    //     ) === textTestingTypes[i]
    //       ? 'pass'
    //       : 'FAIL',
    //   className:
    //     returnTextType(
    //       testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
    //     ) === textTestingTypes[i]
    //       ? 'bg-success'
    //       : 'bg-danger',
    // });
    table3.updateCell(startingRow + i, 4, {
      value: getText(
        testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
      ),
      className:
        getText(
          testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
        ) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
    // table3.updateCell(startingRow + i, 5, {
    //   value: returnTextType(
    //     testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
    //   ),
    //   className:
    //     returnTextType(
    //       testingTable.data.rows[testingTable.type === 'table' ? 0 : 1][i]
    //     ) === textTestingTypes[i]
    //       ? 'bg-success'
    //       : 'bg-danger',
    // });
  }
}
