const { text1, text2, text3, text4, text5, table1, table2, table3, table4 } =
  components;

const ID1 = 'slide-46ac1455f764';

const otherSlideNum = utils.getSlideNum(ID1);

const defaultTable = getPrevComp({
  slideID: ID1,
  compName: 'defaultTable',
  compType: 'table',
  utils,
  components,
});

const noDataTable = getPrevComp({
  slideID: ID1,
  compName: 'noDataTable',
  compType: 'table',
  utils,
  components,
});

const partialDataTable = getPrevComp({
  slideID: ID1,
  compName: 'partialDataTable',
  compType: 'table',
  utils,
  components,
});

const completeDataTable = getPrevComp({
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
    value: defaultTable.isDefault ? 'pass' : 'FAIL',
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

// import getText from './getText';
// import getMixed from './getMixed';
// import getData from './getData'; // not used due to update for library - needs components
// import saveData from './saveData'; // not used due to update for library - needs components

/*
  assumptions:
  1. for use with complextable, fillblank, geogebra, input, richtexteditor, select, and table components
  2. defaults from most components have been removed; when doing library pass in the future, consideration will need to paid to account for these changes ('smoke test'); for example, when a default table is returned on a slide, that slide will need to prevent any functionality pushing data from the prevTable to a table on that slide - there will only be one row/cell returned, so assumptions that the returned table maps to a table on that slide will be faulty; similar concerns for complextable, fillblank, select, and table components

  notes:
  1. changed isDefault to false for components that are retrieved successfully (previously property was undefined if not the default)
  2. added rte to error message
  3. added 'slide' to goBackString so mathML and Katex match; removed <p></p> and block style from goBackString (mathML); added brackets to goBackString (mathML)

  future recommendations:
  -table-
  1. potential issue with tables where students are able to edit headers; possible solution of checking columns if they are editable and then comparing/merging with results of rows
  2. consideration for tables; should flagText/goBackString be changed to something like "incomplete input on slide X" instead of "no input yet on slide X" when there is data, but just not complete?
  3. unsure of the specific use cases for getCell and fillCells; think some rework is needed to update those two functions for tables to take advantage of getText, getTextType, etc.
  -fillblank-
  1. unsure of the specific use cases for getInput; I (Levi) think the added "processedInputs" removes the need for this functionality
  -complextable-
  1. currently, does not have getCell and fillCells functions like original tables; would need to be built out in the future
  2. currently, hasData and isComplete ignore header cells; consider if additional functionality should be built in to consider headers
*/

function getPrevComp(obj) {
  if (typeof obj !== 'object') {
    console.warn(
      'Error in getPrevComp DID Library function: Be sure argument for getPrevComp is a single object.'
    );
    console.warn('argument passed to getPrevComp shown below');
    console.log(obj);
    console.warn('typeof argument passed to getPrevComp shown below');
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
    console.warn('argument passed to getPrevComp shown below');
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
          rows: [],
        },
        isDefault: true,
        type: 'complextable',
      };

      const defRow = {
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
      };

      defComplexTable.data.rows.push([defRow], [defRow]);

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
      if (typeof prevComplexTable.isDefault === 'undefined') {
        prevComplexTable.isDefault = false;
      }
      const isDefault = prevComplexTable.isDefault;
      prevComplexTable.data.hasData = isDefault
        ? false
        : tempArray.some((cell) => {
            return typeof cell.scope !== 'undefined' ? false : getText(cell);
          });
      prevComplexTable.data.isComplete = isDefault
        ? false
        : tempArray.every((cell) => {
            return cell.merged || typeof cell.scope !== 'undefined'
              ? true
              : getText(cell);
          });

      prevComplexTable.data.goBackString = `<math style="color:707070;" xmlns="http://www.w3.org/1998/Math/MathML"><mtext><mi>\\[</mi>no input yet on slide ${slideNum}<mi>\\]</mi></mtext></math>`;
      prevComplexTable.data.goBackStringKatex = `$\\color{707070}\\text{[no input yet on slide ${slideNum}]}$`;
      prevComplexTable.data.slideNum = slideNum;
      prevComplexTable.data.flagText = prevComplexTable.data.isComplete
        ? ''
        : prevComplexTable.data.goBackString;
      prevComplexTable.data.flagTextKatex = prevComplexTable.data.isComplete
        ? ''
        : prevComplexTable.data.goBackStringKatex;
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

      if (typeof prevFib.isDefault === 'undefined') {
        prevFib.isDefault = false;
      }
      const isDefault = prevFib.isDefault;

      // check previous data, fill in useful data
      prevFib.data.hasData = isDefault
        ? false
        : prevFib.data.values.some((blank) => getText(blank));
      prevFib.data.isComplete = isDefault
        ? false
        : prevFib.data.values.every((blank) => getText(blank));
      prevFib.data.goBackString = `<math style="color:707070;" xmlns="http://www.w3.org/1998/Math/MathML"><mtext><mi>\\[</mi>no input yet on slide ${slideNum}<mi>\\]</mi></mtext></math>`;
      prevFib.data.goBackStringKatex = `$\\color{707070}\\text{[no input yet on slide ${slideNum}]}$`;
      prevFib.data.slideNum = slideNum;
      prevFib.data.flagText = prevFib.data.isComplete
        ? ''
        : prevFib.data.goBackString;
      prevFib.data.flagTextKatex = prevFib.data.isComplete
        ? ''
        : prevFib.data.goBackStringKatex;
      // add some useful methods
      prevFib.getInput = function (position, leaveBlanks = false) {
        const emptyVal = leaveBlanks ? '' : this.data.goBackString;
        let text = this.data?.values?.[position]?.text
          ? this.data.values[position].text
          : emptyVal;
        return { ...this.data.values[position], text };
      };
      prevFib.getInputKatex = function (position, leaveBlanks = false) {
        const emptyVal = leaveBlanks ? '' : this.data.goBackStringKatex;
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
      prevFib.data.processedInputsKatex = prevFib.data.values.map((val) => {
        const tempVal = getText(val);
        return tempVal === '' ? prevFib.data.goBackStringKatex : tempVal;
      });

      return { ...prevFib };
    }
    case 'ggb':
    case 'geogebra': {
      const ggbInnerDataDefault = obj.ggbInnerDataDefault;
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
        innerData: ggbInnerDataDefault,
        isDefault: true,
        type: 'geogebra',
      };
      if (typeof ggbInnerDataDefault !== 'object') {
        console.warn(
          'Error in getPrevComp DID Library function: Be sure argument for getPrevComp includes property of ggbInnerDataDefault and that it is an object that includes your desired innerData.'
        );
        console.warn('argument passed to getPrevComp shown below');
        console.log(obj);
        console.warn('ggbInnerDataDefault passed to getPrevComp shown below');
        console.log(ggbInnerDataDefault);
        console.warn(
          'typeof ggbInnerDataDefault passed to getPrevComp shown below'
        );
        console.log(typeof ggbInnerDataDefault);
        return;
      }

      // get previous data
      let prevGGB = JSON.parse(
        JSON.stringify(utils.getFromSlide(slideID, compName, defGGB) || defGGB)
      );

      // check previous data - if any of the checks are truthy, hasData is true; else it is false

      if (typeof prevGGB.isDefault === 'undefined') {
        prevGGB.isDefault = false;
      }
      const hasData =
        prevGGB.isDefault ||
        !Object.keys(prevGGB).includes('innerData') ||
        !Object.keys(prevGGB.innerData).length
          ? false
          : true;

      // fill in other useful data
      if (typeof prevGGB.innerData === 'undefined') {
        prevGGB.innerData = ggbInnerDataDefault;
      }
      prevGGB.data.goBackString = `<math style="color:707070;" xmlns="http://www.w3.org/1998/Math/MathML"><mtext><mi>\\[</mi>no input yet on slide ${slideNum}<mi>\\]</mi></mtext></math>`;
      prevGGB.data.goBackStringKatex = `$\\color{707070}\\text{[no input yet on slide ${slideNum}]}$`;
      prevGGB.data.hasData = hasData;
      prevGGB.data.slideNum = slideNum;
      // set text value
      prevGGB.data.flagText = hasData ? '' : prevGGB.data.goBackString;
      prevGGB.data.flagTextKatex = hasData
        ? ''
        : prevGGB.data.goBackStringKatex;
      // record if there was already data so it doesn't wrongfully overwritten
      // maintain a record of whether we've had data
      const existingData = getData(
        `oldData${slideID + compName}`,
        components[storageComp]
      );
      const hadData = hasData || existingData?.data?.hadData || false;
      if (hasData) {
        // if we have new data, (over)write to save it
        prevGGB.data.hadData = hadData;
        // create a dummy object to pass to updateData
        const newData = {};
        newData[`oldData${slideID + compName}`] = { ...prevGGB };
        saveData(newData, components[storageComp]);
      } else if (existingData?.data?.hasData) {
        // if we don't have new data but there is oldData, grab it
        prevGGB = { ...existingData };
      }

      return { ...prevGGB };
    }
    case 'input': {
      const defInput = {
        data: {
          text: '',
          inputType: 'text',
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

      if (typeof prevInput.isDefault === 'undefined') {
        prevInput.isDefault = false;
      }

      // fill in other useful data
      prevInput.data.goBackString = `<math style="color:707070;" xmlns="http://www.w3.org/1998/Math/MathML"><mtext><mi>\\[</mi>no input yet on slide ${slideNum}<mi>\\]</mi></mtext></math>`;
      prevInput.data.goBackStringKatex = `$\\color{707070}\\text{[no input yet on slide ${slideNum}]}$`;
      prevInput.data.hasData = prevInput.isDefault
        ? false
        : !!getText(prevInput.data);
      const hasData = prevInput.data.hasData;
      prevInput.data.slideNum = slideNum;
      // set text values if no data
      if (!hasData) {
        // if mixed, put goBackString in data.mixedText[0].children[0].text
        if (prevInput.data.inputType === 'mixed') {
          prevInput.data.mixedText[0].children[0].text =
            prevInput.data.goBackString.slice();
          prevInput.data.mixedText[0].children[0].textKatex =
            prevInput.data.goBackStringKatex.slice();
        }
        // if text or math, put goBackString in data.text
        else {
          prevInput.data.text = prevInput.data.goBackString.slice();
          prevInput.data.textKatex = prevInput.data.goBackStringKatex.slice();
        }
      }
      prevInput.data.flagText = hasData
        ? ''
        : prevInput.data.goBackString.slice();
      prevInput.data.flagTextKatex = hasData
        ? ''
        : prevInput.data.goBackStringKatex.slice();

      return { ...prevInput };
    }
    case 'rte':
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

      if (typeof prevRTE.isDefault === 'undefined') {
        prevRTE.isDefault = false;
      }

      // fill in other useful data
      prevRTE.data.goBackString = `<math style="color:707070;" xmlns="http://www.w3.org/1998/Math/MathML"><mtext><mi>\\[</mi>no input yet on slide ${slideNum}<mi>\\]</mi></mtext></math>`;
      prevRTE.data.goBackStringKatex = `$\\color{707070}\\text{[no input yet on slide ${slideNum}]}$`;
      const isDefault = prevRTE.isDefault;
      const noLocalData = typeof prevRTE?.localData?.inputs === 'undefined';
      prevRTE.data.inputs = noLocalData
        ? []
        : prevRTE.localData.inputs.map((blank) => {
            const tempVal = getText(blank);
            return tempVal ? tempVal : prevRTE.data.goBackString;
          });
      prevRTE.data.inputsKatex = noLocalData
        ? []
        : prevRTE.localData.inputs.map((blank) => {
            const tempVal = getText(blank);
            return tempVal ? tempVal : prevRTE.data.goBackStringKatex;
          });
      const tempInputs = prevRTE?.localData?.inputs;
      prevRTE.data.hasData =
        noLocalData || isDefault
          ? false
          : tempInputs.length === 0
          ? true
          : tempInputs.some((input) => getText(input));
      prevRTE.data.isComplete =
        noLocalData || isDefault
          ? false
          : tempInputs.length === 0
          ? true
          : tempInputs.every((input) => getText(input));
      prevRTE.data.slideNum = slideNum;

      // set text values
      prevRTE.data.flagText = prevRTE.data.isComplete
        ? ''
        : prevRTE.data.goBackString;
      prevRTE.data.flagTextKatex = prevRTE.data.isComplete
        ? ''
        : prevRTE.data.goBackStringKatex;

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

      if (typeof prevSelect.isDefault === 'undefined') {
        prevSelect.isDefault = false;
      }

      let selLabels = prevSelect.data.options
        .map((opt) => {
          if (prevSelect.data.selected.includes(opt.value)) {
            return opt.label;
          }
        })
        .filter((label) => !!label);
      // fill in other useful data
      prevSelect.data.goBackString = `<math style="color:707070;" xmlns="http://www.w3.org/1998/Math/MathML"><mtext><mi>\\[</mi>no input yet on slide ${slideNum}<mi>\\]</mi></mtext></math>`;
      prevSelect.data.goBackStringKatex = `$\\color{707070}\\text{[no input yet on slide ${slideNum}]}$`;
      prevSelect.data.hasData = !!prevSelect.data.selected.length;
      prevSelect.data.chosenLabels = selLabels.length
        ? [...selLabels]
        : [prevSelect.data.goBackString];
      prevSelect.data.chosenLabelsKatex = selLabels.length
        ? [...selLabels]
        : [prevSelect.data.goBackStringKatex];
      prevSelect.data.slideNum = slideNum;
      // set text value
      prevSelect.data.flagText = prevSelect.data.hasData
        ? ''
        : prevSelect.data.goBackString;
      prevSelect.data.flagTextKatex = prevSelect.data.hasData
        ? ''
        : prevSelect.data.goBackStringKatex;

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

      if (typeof prevTable.isDefault === 'undefined') {
        prevTable.isDefault = false;
      }

      // check previous data, fill in useful data
      const isDefault = prevTable.isDefault;
      prevTable.data.hasData = isDefault
        ? false
        : // uncomment following line for original tables where students edit headers:
          // prevTable.data.columns.some(({ value }) => value) ||
          prevTable.data.rows.some((row) => row.some((cell) => getText(cell)));
      prevTable.data.isComplete = isDefault
        ? false
        : prevTable.data.rows.every((row) =>
            row.every((cell) => getText(cell))
          );
      prevTable.data.goBackString = `<math style="color:707070;" xmlns="http://www.w3.org/1998/Math/MathML"><mtext><mi>\\[</mi>no input yet on slide ${slideNum}<mi>\\]</mi></mtext></math>`;
      prevTable.data.goBackStringKatex = `$\\color{707070}\\text{[no input yet on slide ${slideNum}]}$`;
      prevTable.data.slideNum = slideNum;
      prevTable.data.flagText = prevTable.data.isComplete
        ? ''
        : prevTable.data.goBackString;
      prevTable.data.flagTextKatex = prevTable.data.isComplete
        ? ''
        : prevTable.data.goBackStringKatex;
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
      prevTable.getCellKatex = function (row, col, leaveBlanks = false) {
        const emptyVal = leaveBlanks ? '' : this.data.goBackStringKatex;
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
      prevTable.fillCellsKatex = function (
        tableName,
        rowStart = 0,
        colStart = 0,
        leaveBlanks = false,
        cellUpdates = {}
      ) {
        const emptyVal = leaveBlanks ? '' : this.data.goBackStringKatex;
        for (let i = 0, L = prevTable.data.columns.length; i < L; i++) {
          for (let j = 0, K = prevTable.data.rows.length; j < K; j++) {
            if (this.getCellKatex(j, i).merged) {
              continue;
            }
            let cellVal = this.getCellKatex(j, i, true).value
              ? this.getCellKatex(j, i, true).value
              : emptyVal;
            const rawMixed = this.getCellKatex(j, i, true).mixedText;
            const cellMixed = getMixed(rawMixed)
              ? getMixed(rawMixed)
              : emptyVal;
            const fillVal =
              this.getCellKatex(j, i, true).inputType === 'mixed'
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
        'Error in getPrevComp DID Library function: Please enter a valid component type for compType. These include "complextable", "fillblank", "geogebra", "input", "rte", "select", and "table".'
      );
      console.warn('argument passed to getPrevComp shown below');
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
