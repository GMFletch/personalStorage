const {
  text1,
  text2,
  text3,
  text4,
  text5,
  table1,
  table2,
  table3,
  table4,
  table2a,
} = components;

const ID1 = 'slide-7e97af503a44';
const compType = 'fillblank';
const compAbr = 'FIB';

const otherSlideNum = utils.getSlideNum(ID1);
const compStateArray = [
  'default',
  'noData',
  'partialData',
  'completeData',
  'noInputs',
];
const tablesArr = [table1, table2, table3, table4, table2a];

const defaultComp = didUtils.getPrevComp({
  slideID: ID1,
  compName: compStateArray[0].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('defaultComp');
console.log(defaultComp);

const noInputsComp = didUtils.getPrevComp({
  slideID: ID1,
  compName: compStateArray[4].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('noInputsComp');
console.log(noInputsComp);

const noDataComp = didUtils.getPrevComp({
  slideID: ID1,
  compName: compStateArray[1].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('noDataComp');
console.log(noDataComp);

const partialDataComp = didUtils.getPrevComp({
  slideID: ID1,
  compName: compStateArray[2].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('partialDataComp');
console.log(partialDataComp);

const completeDataComp = didUtils.getPrevComp({
  slideID: ID1,
  compName: compStateArray[3].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('completeDataComp');
console.log(completeDataComp);

// console.log('defaultTest start');
defaultTest(defaultComp, tablesArr[0]);

// console.log('noInputsTest start');
noInputsTest(noInputsComp, tablesArr[4]);

// console.log('noDataTest start');
noDataTest(noDataComp, tablesArr[1]);

// console.log('partialDataTest start');
partialDataTest(partialDataComp, tablesArr[2]);

// console.log('completeDataTest start');
completeDataTest(completeDataComp, tablesArr[3]);

// console.log('end of tests');

function defaultTest(tempComp, table) {
  table.updateCell(0, 1, {
    value: tempComp.isDefault ? 'pass' : 'FAIL',
    className: tempComp?.isDefault ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(1, 1, {
    value: tempComp.data.processedInputs.length === 0 ? 'pass' : 'FAIL',
    className:
      tempComp.data.processedInputs.length === 0 ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(2, 1, {
    value:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table.updateCell(3, 1, {
    value: !tempComp.data.hasData ? 'pass' : 'FAIL',
    className: !tempComp.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(4, 1, {
    value: !tempComp.data.isComplete ? 'pass' : 'FAIL',
    className: !tempComp.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}

function noInputsTest(tempComp, table) {
  table.updateCell(0, 1, {
    value: typeof tempComp.isDefault === 'undefined' ? 'pass' : 'FAIL',
    className:
      typeof tempComp.isDefault === 'undefined' ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(1, 1, {
    value: tempComp.data.processedInputs.length === 0 ? 'pass' : 'FAIL',
    className:
      tempComp.data.processedInputs.length === 0 ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(2, 1, {
    value:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table.updateCell(3, 1, {
    value: !tempComp.data.hasData ? 'pass' : 'FAIL',
    className: !tempComp.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(4, 1, {
    value: tempComp.data.isComplete ? 'pass' : 'FAIL',
    className: tempComp.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}

function noDataTest(tempComp, table) {
  table.updateCell(0, 1, {
    value: typeof tempComp.isDefault === 'undefined' ? 'pass' : 'FAIL',
    className:
      typeof tempComp.isDefault === 'undefined' ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(1, 1, {
    value: tempComp.data.processedInputs.every((el) => {
      return (
        el ===
        '$\\color{707070}\\text{[no input yet on slide '.concat(
          otherSlideNum,
          ']}$'
        )
      );
    })
      ? 'pass'
      : 'FAIL',
    className: tempComp.data.processedInputs.every((el) => {
      return (
        el ===
        '$\\color{707070}\\text{[no input yet on slide '.concat(
          otherSlideNum,
          ']}$'
        )
      );
    })
      ? 'bg-success'
      : 'bg-danger',
  });
  table.updateCell(2, 1, {
    value:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table.updateCell(3, 1, {
    value: !tempComp.data.hasData ? 'pass' : 'FAIL',
    className: !tempComp.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(4, 1, {
    value: !tempComp.data.isComplete ? 'pass' : 'FAIL',
    className: !tempComp.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}

function partialDataTest(tempComp, table) {
  table.updateCell(0, 1, {
    value: typeof tempComp.isDefault === 'undefined' ? 'pass' : 'FAIL',
    className:
      typeof tempComp.isDefault === 'undefined' ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(1, 1, {
    value:
      tempComp.data.processedInputs[0] === '1' &&
      tempComp.data.processedInputs[1] === tempComp.data.goBackString
        ? 'pass'
        : 'FAIL',
    className:
      tempComp.data.processedInputs[0] === '1' &&
      tempComp.data.processedInputs[1] === tempComp.data.goBackString
        ? 'bg-success'
        : 'bg-danger',
  });
  table.updateCell(2, 1, {
    value:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table.updateCell(3, 1, {
    value: tempComp.data.hasData ? 'pass' : 'FAIL',
    className: tempComp.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(4, 1, {
    value: !tempComp.data.isComplete ? 'pass' : 'FAIL',
    className: !tempComp.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}

function completeDataTest(tempComp, table) {
  table.updateCell(0, 1, {
    value: typeof tempComp.isDefault === 'undefined' ? 'pass' : 'FAIL',
    className:
      typeof tempComp.isDefault === 'undefined' ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(1, 1, {
    value:
      tempComp.data.processedInputs[0] === '1' &&
      tempComp.data.processedInputs[1] === '$2$'
        ? 'pass'
        : 'FAIL',
    className:
      tempComp.data.processedInputs[0] === '1' &&
      tempComp.data.processedInputs[1] === '$2$'
        ? 'bg-success'
        : 'bg-danger',
  });
  table.updateCell(2, 1, {
    value:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      tempComp.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table.updateCell(3, 1, {
    value: tempComp.data.hasData ? 'pass' : 'FAIL',
    className: tempComp.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table.updateCell(4, 1, {
    value: tempComp.data.isComplete ? 'pass' : 'FAIL',
    className: tempComp.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}
