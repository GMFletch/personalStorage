const { text1, button1, input1, input2, input3, table1, table2, table3 } =
  components;

const inputTestingComps = [input1, input2, input3];

const successTexts = [
  'words and 1 num',
  '$3x+1$',
  'words $4x$ and numbers $+2$ here',
];

function testInputsAndTables() {
  testInputs(1);
  testTables(table1, 4);
  testTables(table2, 7);
}

testInputsAndTables();

button1.on('click', () => {
  testInputsAndTables();
});

function testInputs(startingRow = 1) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
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
    table3.updateCell(startingRow + i, 3, {
      value: getText(inputTestingComps[i].data),
      className:
        getText(inputTestingComps[i].data) === successTexts[i]
          ? 'bg-success'
          : 'bg-danger',
    });
  }
}

function testTables(testingTable, startingRow = 4) {
  for (let i = 0, L = successTexts.length; i < L; i++) {
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
    table3.updateCell(startingRow + i, 3, {
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
  }
}

function getText(obj) {
  switch (getTextType(obj)) {
    case 'text':
      return typeof obj.text !== 'undefined'
        ? obj.text.trim()
        : obj.value.trim();
    case 'math':
      const tempText = obj.text?.trim();
      const tempTextOrValue =
        typeof tempText !== 'undefined' ? tempText : obj.value?.trim();
      return tempTextOrValue === ''
        ? ''
        : tempTextOrValue.charAt(0) === '$' &&
          tempTextOrValue.charAt(tempTextOrValue.length - 1) === '$'
        ? tempTextOrValue
        : `$${tempTextOrValue}$`;
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
      console.warn(
        'In getText DID library function: Unexpected textType provided by getTextType DID library function for obj shown below'
      );
      console.log(obj);
      return '';
  }
}

function getTextType(obj) {
  const tempVal =
    obj.math || obj.inputType === 'math'
      ? 'math'
      : obj.inputType === 'mixed'
      ? 'mixed'
      : obj.inputType === 'text'
      ? 'text'
      : '';
  if (tempVal === '') {
    console.warn(
      'In getTextType DID library function: Unknown inputType for obj shown below'
    );
    console.log(obj);
  }
  return tempVal;
}
