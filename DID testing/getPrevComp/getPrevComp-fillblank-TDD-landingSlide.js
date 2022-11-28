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

const defaultComp = getPrevComp({
  slideID: ID1,
  compName: compStateArray[0].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('defaultComp');
console.log(defaultComp);

const noInputsComp = getPrevComp({
  slideID: ID1,
  compName: compStateArray[4].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('noInputsComp');
console.log(noInputsComp);

const noDataComp = getPrevComp({
  slideID: ID1,
  compName: compStateArray[1].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('noDataComp');
console.log(noDataComp);

const partialDataComp = getPrevComp({
  slideID: ID1,
  compName: compStateArray[2].concat(compAbr),
  compType: compType,
  utils,
  components,
});

console.log('partialDataComp');
console.log(partialDataComp);

const completeDataComp = getPrevComp({
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

// import getText from './getText';
// import getMixed from './getMixed';
// import getData from './getData'; // not used due to update for library - needs components
// import saveData from './saveData'; // not used due to update for library - needs components

function getPrevComp(obj) {
  if (typeof obj !== 'object') {
    console.warn(
      'Error in getPrevComp DID Library function: Be sure argument for getPrevComp is a single object.'
    );
    console.warn('argment passed to getPrevComp shown below');
    console.log(obj);
    console.warn('typeof argment passed to getPrevComp shown below');
    console.log(typeof obj);
    return;
  }

  const { slideID, compName, compType, utils, components } = obj;

  if (
    typeof slideID !== 'string' ||
    typeof compName !== 'string' ||
    typeof compType !== 'string'
  ) {
    console.warn(
      'Error in getPrevComp DID Library function: Be sure argument for getPrevComp is a single object containing keys for slideID, compName and compType. Each of the values should be strings.'
    );
    console.warn('argment passed to getPrevComp shown below');
    console.log(obj);
    return;
  }

  const compTypeToLower = compType.toLowerCase();

  const slideNum = utils.getSlideNum(slideID);

  switch (compTypeToLower) {
    case 'complextable':
    case 'tablecomplex': {
      const defComplexTable = {
        data: {
          rows: [
            [
              {
                alignment: 'center',
                ariaLabel: 'Please add text',
                className: '',
                colSpan: 1,
                editable: true,
                inputType: 'text',
                math: true,
                merged: false,
                mixedText: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: '',
                      },
                    ],
                  },
                ],
                numberOfLines: '1',
                rowSpan: 1,
                scope: 'col',
                showAreaToolTip: true,
                type: 'singleline',
                value: '',
              },
            ],
            [
              {
                alignment: 'center',
                ariaLabel: 'Please add text',
                className: '',
                colSpan: 1,
                editable: true,
                inputType: 'text',
                math: true,
                merged: false,
                mixedText: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: '',
                      },
                    ],
                  },
                ],
                numberOfLines: '1',
                rowSpan: 1,
                showAreaToolTip: true,
                type: 'singleline',
                value: '',
              },
            ],
          ],
        },
        isDefault: true,
        type: 'complextable',
      };

      const prevComplexTable = JSON.parse(
        JSON.stringify(
          utils.getFromSlide(slideID, compName, defComplexTable) ||
            defComplexTable
        )
      );

      const tempArray = [];
      for (let i = 0, L = prevComplexTable.data.rows.length; i < L; i++) {
        for (
          let j = 0, Lj = prevComplexTable.data.rows[i].length;
          j < Lj;
          j++
        ) {
          tempArray.push(prevComplexTable.data.rows[i][j]);
        }
      }

      prevComplexTable.data.hasData = tempArray.some((cell) => {
        return typeof cell.scope !== 'undefined' ? false : getText(cell);
      });
      prevComplexTable.data.isComplete = tempArray.every((cell) => {
        return cell.merged || typeof cell.scope !== 'undefined'
          ? true
          : getText(cell);
      });

      prevComplexTable.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
      prevComplexTable.data.slideNum = slideNum;
      prevComplexTable.data.flagText = prevComplexTable.data.isComplete
        ? ''
        : prevComplexTable.data.goBackString;
      // DID NOT BUILD OUT getCell AND fillCells like in original tables; potential addition for the future

      return { ...prevComplexTable };
    }
    case 'fib':
    case 'fillblank': {
      const defFib = {
        data: { values: [] },
        isDefault: true,
        type: 'fillblank',
      };

      // get previous data
      const prevFib = JSON.parse(
        JSON.stringify(utils.getFromSlide(slideID, compName, defFib) || defFib)
      );

      const isDefault = !!prevFib.isDefault;

      // check previous data, fill in useful data
      prevFib.data.hasData = isDefault
        ? false
        : prevFib.data.values.some((blank) => getText(blank));
      prevFib.data.isComplete = isDefault
        ? false
        : prevFib.data.values.every((blank) => getText(blank));
      prevFib.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
      prevFib.data.slideNum = slideNum;
      prevFib.data.flagText = prevFib.data.isComplete
        ? ''
        : prevFib.data.goBackString;
      // add some useful methods
      prevFib.getInput = function (position, leaveBlanks = false) {
        const emptyVal = leaveBlanks ? '' : this.data.goBackString;
        let text = this.data?.values?.[position]?.text
          ? this.data.values[position].text
          : emptyVal;
        return { ...this.data.values[position], text };
      };
      // add array with processed inputs
      prevFib.data.processedInputs = prevFib.data.values.map((val) => {
        const tempVal = getText(val);
        return tempVal === '' ? prevFib.data.goBackString : tempVal;
      });

      return { ...prevFib };
    }
    case 'ggb':
    case 'geogebra': {
      const ggbInnerData = obj.ggbInnerData;
      const storageComp = (function () {
        const allComps = Object.keys(components).sort();
        const firstComp = allComps[0];
        if (!firstComp) {
          console.warn(
            'Error in getPrevComp DID Library function: No components found on slide.'
          );
          return;
        }
        return firstComp;
      })();
      const defGGB = {
        data: {},
        innerData: ggbInnerData,
        isDefault: true,
        type: 'geogebra',
      };
      if (typeof ggbInnerData !== 'object') {
        console.warn(
          'Error in getPrevComp DID Library function: Be sure argument for getPrevComp includes property of ggbInnerData and that it is an object that includes your desired innerData.'
        );
        console.warn('argment passed to getPrevComp shown below');
        console.log(obj);
        console.warn('ggbInnerData passed to getPrevComp shown below');
        console.log(ggbInnerData);
        console.warn('typeof ggbInnerData passed to getPrevComp shown below');
        console.log(typeof ggbInnerData);
        return;
      }

      // get previous data
      const prevGGB = JSON.parse(
        JSON.stringify(utils.getFromSlide(slideID, compName, false) || false)
      );

      // check previous data - if any of the checks are truthy, hasData is true; else it is false
      const hasData = !!(
        prevGGB ||
        Object.keys(prevGGB).includes('innerData') ||
        Object.keys(prevGGB.innerData).length
      );
      let returnGGB = hasData ? prevGGB : defGGB;

      // fill in other useful data
      returnGGB.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
      returnGGB.data.hasData = hasData;
      returnGGB.data.slideNum = slideNum;
      // set text value
      returnGGB.data.flagText = hasData ? '' : returnGGB.data.goBackString;
      // record if there was already data so it doesn't wrongfully overwritten
      // maintain a record of whether we've had data
      const existingData = getData(
        `oldData${slideID + compName}`,
        components[storageComp]
      );
      const hadData = hasData || existingData?.data?.hadData || false;
      if (hasData) {
        // if we have new data, (over)write to save it
        returnGGB.data.hadData = hadData;
        // create a dummy object to pass to updateData
        const newData = {};
        newData[`oldData${slideID + compName}`] = { ...returnGGB };
        saveData(newData, components[storageComp]);
      } else if (existingData?.data?.hasData) {
        // if we don't have new data but there is oldData, grab it
        returnGGB = { ...existingData };
      }

      return { ...returnGGB };
    }
    case 'input': {
      const defInput = {
        data: {
          text: '',
        },
        isDefault: true,
        type: 'input',
      };
      // get previous data
      const prevInput = JSON.parse(
        JSON.stringify(
          utils.getFromSlide(slideID, compName, defInput) || defInput
        )
      );
      // fill in other useful data
      prevInput.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
      prevInput.data.hasData = !!prevInput.data.text;
      prevInput.data.slideNum = slideNum;
      // set text values
      prevInput.data.text = prevInput.data.hasData
        ? prevInput.data.text
        : prevInput.data.goBackString;
      prevInput.data.flagText = prevInput.data.hasData
        ? ''
        : prevInput.data.goBackString;

      return { ...prevInput };
    }
    case 'richtexteditor': {
      const defRTE = {
        data: {
          text: '',
        },
        isDefault: true,
        type: 'richtexteditor',
        // localData: { inputs: [] },
      };

      // get previous data
      const prevRTE = JSON.parse(
        JSON.stringify(utils.getFromSlide(slideID, compName, defRTE) || defRTE)
      );

      // fill in other useful data
      prevRTE.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
      const goBackString = prevRTE.data.goBackString;
      const noLocalData = typeof prevRTE?.localData?.inputs === 'undefined';
      prevRTE.data.inputs = noLocalData
        ? []
        : prevRTE.localData.inputs.map((blank) => {
            const tempVal = getText(blank);
            return !!tempVal ? tempVal : goBackString;
          });
      const tempInputs = prevRTE?.localData?.inputs;
      prevRTE.data.hasData =
        noLocalData || prevRTE.isDefault
          ? false
          : tempInputs.length === 0
          ? true
          : tempInputs.some((input) => getText(input));
      prevRTE.data.isComplete =
        noLocalData || prevRTE.isDefault
          ? false
          : tempInputs.length === 0
          ? true
          : tempInputs.every((input) => getText(input));
      prevRTE.data.slideNum = slideNum;

      // set text values
      prevRTE.data.flagText = prevRTE.data.isComplete
        ? ''
        : prevRTE.data.goBackString;

      return { ...prevRTE };
    }
    case 'select': {
      const defSelect = {
        data: {
          selected: [],
          options: [{ label: '', value: '0' }],
        },
        isDefault: true,
        type: 'select',
      };
      // get previous data
      const prevSelect = JSON.parse(
        JSON.stringify(
          utils.getFromSlide(slideID, compName, defSelect) || defSelect
        )
      );
      let selLabels = prevSelect.data.options
        .map((opt) => {
          if (prevSelect.data.selected.includes(opt.value)) {
            return opt.label;
          }
        })
        .filter((label) => !!label);
      // fill in other useful data
      prevSelect.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
      prevSelect.data.hasData = !!prevSelect.data.selected.length;
      prevSelect.data.chosenLabels = selLabels.length
        ? [...selLabels]
        : [prevSelect.data.goBackString];
      prevSelect.data.slideNum = slideNum;
      // set text value
      prevSelect.data.flagText = prevSelect.data.hasData
        ? ''
        : prevSelect.data.goBackString;

      return { ...prevSelect };
    }
    case 'table':
    case 'tableorig': {
      const defTable = {
        data: { rows: [], columns: [] },
        isDefault: true,
        type: 'table',
      };

      const defRow = {
        value: '',
        editable: true,
        className: '',
        math: true,
        inputType: 'text',
        type: 'singleline',
        numberOfLines: '1',
        ariaLabel: 'Please add text',
        mixedText: [
          {
            type: 'paragraph',
            children: [
              {
                text: '',
              },
            ],
          },
        ],
        alignment: 'center',
      };

      const defColumn = {
        value: '',
        editable: true,
        type: 'singleline',
        numberOfLines: '1',
        alignment: 'center',
        ariaLabel: 'Please add text',
      };

      defTable.data.columns.push(defColumn);
      defTable.data.rows.push([defRow]);

      // get previous data
      const prevTable = JSON.parse(
        JSON.stringify(
          utils.getFromSlide(slideID, compName, defTable) || defTable
        )
      );

      // check previous data, fill in useful data
      prevTable.data.hasData =
        // LEVI - REVISIT THIS - CAN I CHECK THIS FROM THE TABLE ITSELF?
        // uncomment following line for original tables where students edit headers:
        // prevTable.data.columns.some(({ value }) => value) ||
        prevTable.data.rows.some((row) => row.some((cell) => getText(cell)));
      prevTable.data.isComplete = prevTable.data.rows.every((row) =>
        row.every((cell) => getText(cell))
      );
      prevTable.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
      prevTable.data.slideNum = slideNum;
      prevTable.data.flagText = prevTable.data.isComplete
        ? ''
        : prevTable.data.goBackString;
      // add some useful methods
      prevTable.getCell = function (row, col, leaveBlanks = false) {
        const emptyVal = leaveBlanks ? '' : this.data.goBackString;
        let value = this.data?.rows?.[row]?.[col]?.value
          ? this.data.rows[row][col].value
          : emptyVal;
        let mixedText = this.data?.rows?.[row]?.[col]?.mixedText
          ? [...this.data.rows[row][col].mixedText]
          : [{ children: [{ text: emptyVal }] }];
        return { ...this.data.rows[row][col], value, mixedText };
      };
      prevTable.fillCells = function (
        tableName,
        rowStart = 0,
        colStart = 0,
        leaveBlanks = false,
        cellUpdates = {}
      ) {
        const emptyVal = leaveBlanks ? '' : this.data.goBackString;
        for (let i = 0, L = prevTable.data.columns.length; i < L; i++) {
          for (let j = 0, K = prevTable.data.rows.length; j < K; j++) {
            if (this.getCell(j, i).merged) {
              continue;
            }
            let cellVal = this.getCell(j, i, true).value
              ? this.getCell(j, i, true).value
              : emptyVal;
            const rawMixed = this.getCell(j, i, true).mixedText;
            const cellMixed = getMixed(rawMixed)
              ? getMixed(rawMixed)
              : emptyVal;
            const fillVal =
              this.getCell(j, i, true).inputType === 'mixed'
                ? cellMixed
                : cellVal;
            components[tableName].updateCell(j + rowStart, i + colStart, {
              ...cellUpdates,
              value: fillVal,
            });
          }
        }
      };

      return { ...prevTable };
    }
    default: {
      console.warn(
        'Error in getPrevComp DID Library function: Please enter a valid component type for compType. These include "complextable", "fillblank", "geogebra", "input", "select", and "table".'
      );
      console.warn('argment passed to getPrevComp shown below');
      console.log(obj);
      console.warn('component type passed to getPrevComp shown below');
      console.log(compType);
      return;
    }
  }
}

///----*----*----*----*----*----*----*----*----*----
//    END: Main code
//
//    START: Other library files
//----*----*----*----*----*----*----*----*----*----

function getMixed(obj) {
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

function getText(obj) {
  switch (getTextType(obj)) {
    case 'text': {
      return typeof obj.text !== 'undefined'
        ? obj.text.trim()
        : obj.value.trim();
    }
    case 'math': {
      const tempText = obj.text?.trim();
      const tempValue = obj.value?.trim();
      return typeof tempText !== 'undefined'
        ? tempText === ''
          ? ''
          : `$${tempText}$`
        : tempValue === ''
        ? ''
        : `$${tempValue}$`;
    }
    case 'mixed': {
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
    default: {
      console.warn(
        'In getText DID library function: Unexpected textType provided by getTextType DID library function for obj shown below'
      );
      console.log(obj);
      return '';
    }
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

function getData(dataName, component) {
  if (!component) {
    console.error(
      'getData error: Be sure to pass the component you used for storage!'
    );
    return;
  } // make sure a comp is passed
  return component?.storage?.[dataName];
}

function saveData(dataObj = {}, component) {
  if (!component) {
    console.error(
      'saveData error: Be sure to pass a component to use for storage!'
    );
    return;
  } // make sure a comp is passed
  if (!component?.storage) {
    component.storage = {};
  }
  component.storage = { ...component.storage, ...dataObj };
}
