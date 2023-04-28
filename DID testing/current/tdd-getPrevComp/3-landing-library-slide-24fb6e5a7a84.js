const { text1, text2, text3, text4, text5, table1, table2, table3, table4 } =
  components;

const ID1 = 'slide-46ac1455f764';

const otherSlideNum = utils.getSlideNum(ID1);

const defaultTable = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'defaultTable',
  compType: 'table',
  utils,
  components,
});

const noDataTable = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'noDataTable',
  compType: 'table',
  utils,
  components,
});

const partialDataTable = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'partialDataTable',
  compType: 'table',
  utils,
  components,
});

const completeDataTable = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'completeDataTable',
  compType: 'table',
  utils,
  components,
});

console.log(defaultTable);
console.log(noDataTable);
console.log(partialDataTable);
console.log(completeDataTable);

// console.log('tableDefaultTest start');
tableDefaultTest();

// console.log('tableEmptyTest start');
tableEmptyTest();

// console.log('tablePartialTest start');
tablePartialTest();

// console.log('tableCompleteTest start');
tableCompleteTest();

// console.log('end of tests');

function tableDefaultTest() {
  table1.updateCell(0, 1, {
    value: defaultTable?.isDefault ? 'pass' : 'FAIL',
    className: defaultTable?.isDefault ? 'bg-success' : 'bg-danger',
  });
  // rows === 1; headers are not included for orig table
  table1.updateCell(1, 1, {
    value: defaultTable.data.rows.length === 1 ? 'pass' : 'FAIL',
    className: defaultTable.data.rows.length === 1 ? 'bg-success' : 'bg-danger',
  });
  table1.updateCell(2, 1, {
    value:
      defaultTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      defaultTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table1.updateCell(3, 1, {
    value: !defaultTable.data.hasData ? 'pass' : 'FAIL',
    className: !defaultTable.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table1.updateCell(4, 1, {
    value: !defaultTable.data.isComplete ? 'pass' : 'FAIL',
    className: !defaultTable.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}

function tableEmptyTest() {
  table2.updateCell(0, 1, {
    value: typeof noDataTable.isDefault === 'undefined' ? 'pass' : 'FAIL',
    className:
      typeof noDataTable.isDefault === 'undefined' ? 'bg-success' : 'bg-danger',
  });
  // rows === 1; headers are not included for orig table
  table2.updateCell(1, 1, {
    value: noDataTable.data.rows.length === 1 ? 'pass' : 'FAIL',
    className: noDataTable.data.rows.length === 1 ? 'bg-success' : 'bg-danger',
  });
  table2.updateCell(2, 1, {
    value:
      noDataTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      noDataTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table2.updateCell(3, 1, {
    value: !noDataTable.data.hasData ? 'pass' : 'FAIL',
    className: !noDataTable.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table2.updateCell(4, 1, {
    value: !noDataTable.data.isComplete ? 'pass' : 'FAIL',
    className: !noDataTable.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}

function tablePartialTest() {
  table3.updateCell(0, 1, {
    value: typeof partialDataTable.isDefault === 'undefined' ? 'pass' : 'FAIL',
    className:
      typeof partialDataTable.isDefault === 'undefined'
        ? 'bg-success'
        : 'bg-danger',
  });
  // rows === 4; headers are not included for orig table
  table3.updateCell(1, 1, {
    value: partialDataTable.data.rows.length === 4 ? 'pass' : 'FAIL',
    className:
      partialDataTable.data.rows.length === 4 ? 'bg-success' : 'bg-danger',
  });
  table3.updateCell(2, 1, {
    value:
      partialDataTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      partialDataTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table3.updateCell(3, 1, {
    value: partialDataTable.data.hasData ? 'pass' : 'FAIL',
    className: partialDataTable.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table3.updateCell(4, 1, {
    value: !partialDataTable.data.isComplete ? 'pass' : 'FAIL',
    className: !partialDataTable.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}

function tableCompleteTest() {
  table4.updateCell(0, 1, {
    value: typeof completeDataTable.isDefault === 'undefined' ? 'pass' : 'FAIL',
    className:
      typeof completeDataTable.isDefault === 'undefined'
        ? 'bg-success'
        : 'bg-danger',
  });
  // rows === 1; headers are not included for orig table
  table4.updateCell(1, 1, {
    value: completeDataTable.data.rows.length === 1 ? 'pass' : 'FAIL',
    className:
      completeDataTable.data.rows.length === 1 ? 'bg-success' : 'bg-danger',
  });
  table4.updateCell(2, 1, {
    value:
      completeDataTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'pass'
        : 'FAIL',
    className:
      completeDataTable.data.goBackString ===
      '$\\color{707070}\\text{[no input yet on slide '.concat(
        otherSlideNum,
        ']}$'
      )
        ? 'bg-success'
        : 'bg-danger',
  });
  table4.updateCell(3, 1, {
    value: completeDataTable.data.hasData ? 'pass' : 'FAIL',
    className: completeDataTable.data.hasData ? 'bg-success' : 'bg-danger',
  });
  table4.updateCell(4, 1, {
    value: completeDataTable.data.isComplete ? 'pass' : 'FAIL',
    className: completeDataTable.data.isComplete ? 'bg-success' : 'bg-danger',
  });
}
