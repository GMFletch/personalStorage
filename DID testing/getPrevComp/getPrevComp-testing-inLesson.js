/*
  assumptions:
  1. for use with complextable, fillblank, geogebra, input, select, and table components
  2. defaults from most components have been removed; when doing library pass in the future, consideration will need to paid to account for these changes ('smoke test'); for example, when a default table is returned on a slide, that slide will need to prevent any functionality pushing data from the prevTable to a table on that slide - there will only be one row/cell returned, so assumptions that the returned table maps to a table on that slide will be faulty; similar concerns for complextable, fillblank, select, and table components

  future recommendations:
  -tables-
  1. issue with getText returning data for math cells impacts table.data.hasData and table.data.isComplete
  2. potential issue with tables where students are able to edit headers; possible solution of checking columns if they are editable and then comparing/merging with results of rows
  3. consideration for tables; should flagText/goBackString be changed to something like "incomplete input on slide X" instead of "no input yet on slide X" when there is data, but just not complete?
  4. work/help needed to update fillCells function for tables to take advantage of getText, getTextType, etc.
*/

//import getTextType from './getTextType'; // not used due to specific requirements for library - needs full object, but only math and inputType are passed here
//import getText from './getText';
//import getMixed from './getMixed';
//import getData from '../getData'; // not used due to update for library - needs components
//import saveData from '../saveData'; // not used due to update for library - needs components

const ID1 = 'slide-4cc0d50a863a';

const constName = getPrevComp({
  slideID: ID1,
  compName: 'table0',
  compType: 'table',
  utils,
  components,

  // Ignore the following options unless using specified component

  fibNumInputs: (numFibInputs = 1), // ignore if not fib
  ggbInnerData: { exampleVal1: 1, exampleVal2: 2 }, // ignore if not ggb
});

console.log(constName);

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
    case 'tablecomplex':
      // NO EXISTING CODE FOR complextable. BE SURE TO DOUBLE CHECK/VERIFY FINAL CODE
      const inpComplexTableSize = obj?.tableSize;
      const inpComplexRows = inpComplexTableSize?.rows;
      const inpComplexColumns = inpComplexTableSize?.columns;
      // establish default in same data structure as original
      const defComplexTable = {
        data: { rows: [], columns: [] },
        isDefault: true,
        type: 'complextable',
      };
      const prevComplexTable =
        utils.getFromSlide(slideID, compName, defComplexTable) ||
        defComplexTable;
      return { ...prevComplexTable };
    case 'fib':
    case 'fillblank':
      const fibNumInputs = obj.fibNumInputs;
      // establish default in same data structure as original
      const defFib = {
        data: { values: [] },
        fibNumInputs,
        isDefault: true,
        type: 'fillblank',
      };
      if (
        typeof fibNumInputs !== 'number' ||
        !Number.isInteger(fibNumInputs) ||
        fibNumInputs < 0
      ) {
        console.warn(
          'Error in getPrevComp DID Library function: Be sure argument for getPrevComp includes property of fibNumInputs and has a value that is a positive integer (and is the correct number of inputs/blanks!).'
        );
        console.warn('argment passed to getPrevComp shown below');
        console.log(obj);
        console.warn('fibNumImputs passed to getPrevComp shown below');
        console.log(fibNumInputs);
        return;
      }
      const prelimFib = utils.getFromSlide(slideID, compName, defFib) || defFib;
      const numInputs = !!prelimFib.data?.values?.length
        ? prelimFib.data.values.length
        : fibNumInputs;
      for (let i = 0; i < numInputs; i++) {
        defFib.data.values.push({ text: '', inputType: 'text' });
      }

      // get previous data
      const prevFib = utils.getFromSlide(slideID, compName, defFib) || defFib;

      // check previous data, fill in useful data
      prevFib.data.hasData = prevFib.data.values.some(
        ({ text, inputType }) => !!text
      );
      prevFib.data.isComplete = prevFib.data.values.every(
        ({ text, inputType }) => !!text
      );
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

      return { ...prevFib };
    case 'ggb':
    case 'geogebra':
      const ggbInnerData = obj.ggbInnerData;
      const storageComp = getFirstComponent(components);
      // ADD IN STORAGE COMP HERE
      // establish default in same data structure as original
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
      const prevGGB = utils.getFromSlide(slideID, compName, false) || false;

      // check previous data
      const hasData = !prevGGB
        ? false
        : !Object.keys(prevGGB).includes('innerData')
        ? false
        : !Object.keys(prevGGB.innerData).length
        ? false
        : true;
      const returnGGB = hasData ? prevGGB : defGGB;

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
    case 'input':
      // establish default in same data structure as original
      const defInput = {
        data: {
          text: '',
        },
        isDefault: true,
        type: 'input',
      };
      // get previous data
      const prevInput =
        utils.getFromSlide(slideID, compName, defInput) || defInput;

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
    case 'select':
      // establish default in same data structure as original
      const defSelect = {
        data: {
          selected: [],
          options: [{ label: '', value: '0' }],
        },
        isDefault: true,
        type: 'select',
      };
      // get previous data
      const prevSelect =
        utils.getFromSlide(slideID, compName, defSelect) || defSelect;
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
    case 'table':
    case 'tableorig':
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
      const prevTable =
        utils.getFromSlide(slideID, compName, defTable) || defTable;

      if (prevTable.isDefault) {
        console.log('default table');
        return prevTable;
      }

      console.log(JSON.parse(JSON.stringify(prevTable)));

      function getInputTypeForGetPrevComp(inputTypeProp, mathProp) {
        return mathProp
          ? 'math'
          : inputTypeProp === 'mixed'
          ? 'mixed'
          : inputTypeProp === 'text'
          ? 'text'
          : '';
      }

      console.log('got to here 1');
      // check previous data, fill in useful data
      prevTable.data.hasData =
        // uncomment following line for original tables where students edit headers:
        //prevTable.data.columns.some(({ value }) => value) ||
        /*
        prevTable.data.rows.some((row) =>
          row.some(({ value, mixedText, inputType, math }) =>
            getInputTypeForGetPrevComp(inputType, math) === 'mixed'
              ? getMixed(mixedText)
              : value
          )
        );
        */
        prevTable.data.rows.some((row) => row.some((cell) => getText(cell)));
      console.log('got to here 2');
      /*
prevTable.data.isComplete =
        //LEVI - REVISIT THIS SECTION
        // uncomment following line for original tables where students edit headers:
        //prevTable.data.columns.every(({ value }) => value) &&
        prevTable.data.rows.every((row) =>
          row.every(({ value, mixedText, inputType, math }) =>
            getInputTypeForGetPrevComp(inputType, math) === 'mixed'
              ? getMixed(mixedText)
              : value
          )
        );
*/

      prevTable.data.isComplete = prevTable.data.rows.every((row) =>
        row.every((cell) => getText(cell))
      );
      console.log('got to here 3');
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
        for (let i = 0, L = numColumns; i < L; i++) {
          for (let j = 0, K = numRows; j < K; j++) {
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
    default:
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

function getData(dataName, component) {
  if (!component) {
    console.error(
      'getData error: Be sure to pass the component you used for storage!'
    );
    return;
  } // make sure a comp is passed
  return component?.storage?.[dataName];
}

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

function getTextType(obj) {
  const tempVal = obj.math
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

function getText(obj) {
  switch (getTextType(obj)) {
    case 'text':
      return typeof obj.text !== 'undefined' ? obj.text : obj.value;
    case 'math':
      return `$${typeof obj.text !== 'undefined' ? obj.text : obj.value}$`;
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

function getFirstComponent(componentsArray) {
  const allComps = Object.keys(componentsArray).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    console.warn(
      'Error in getPrevComp DID Library function: Unable to find a component in the getFirstComponent function'
    );
    return;
  } // make sure at least 1 comp exists
  return firstComp;
}
