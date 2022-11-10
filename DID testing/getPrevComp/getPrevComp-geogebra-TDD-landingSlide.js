const { text1, text2, text3, text4, table1, table2, table3 } = components;

const ID1 = 'slide-41365e0aafee';
const compType = 'geogebra';
const compAbr = 'GGB';

const otherSlideNum = utils.getSlideNum(ID1);
const compStateArray = ['default', 'noInteraction', 'movedPoint'];
const tablesArr = [table1, table2, table3];

console.log('start');

const defaultComp = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'compNotThere',
  compType: compType,
  utils,
  components,

  // Ignore the following options unless using specified component
  ggbInnerData: { xValForA: 3, yValForA: 4 }, // ignore if not ggb
});

console.log('defaultComp');
console.log(defaultComp);

const noInteraction = didUtils.getPrevComp({
  slideID: ID1,
  compName: compStateArray[1].concat(compAbr),
  compType: compType,
  utils,
  components,

  // Ignore the following options unless using specified component
  ggbInnerData: { xValForA: 3, yValForA: 4 }, // ignore if not ggb
});

console.log('noInteraction');
console.log(noInteraction);

const movedPoint = didUtils.getPrevComp({
  slideID: ID1,
  compName: compStateArray[2].concat(compAbr),
  compType: compType,
  utils,
  components,

  // Ignore the following options unless using specified component
  ggbInnerData: { xValForA: 3, yValForA: 4 }, // ignore if not ggb
});

console.log('movedPoint');
console.log(movedPoint);

// // console.log('defaultTest start');
// defaultTest(defaultComp, tablesArr[0]);

// // console.log('noInteractionTest start');
// noInteractionTest(noInputsComp, tablesArr[4]);

// // console.log('movedPointTest start');
// movedPointTest(noDataComp, tablesArr[1]);

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

function noInteractionTest(tempComp, table) {
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

function movedPointTest(tempComp, table) {
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
