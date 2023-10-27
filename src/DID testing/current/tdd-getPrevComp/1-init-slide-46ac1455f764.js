const { text1 } = components;

const { getText, getMixed, getData, saveData } = didUtils;

text1.getPrevCompFunction = function (obj) {
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
            // const rawMixed = this.getCellKatex(j, i, true).mixedText;
            // const cellMixed = getMixed(rawMixed)
            //   ? getMixed(rawMixed)
            //   : emptyVal;
            // const fillVal =
            //   this.getCellKatex(j, i, true).inputType === 'mixed'
            //     ? cellMixed
            //     : cellVal;
            components[tableName].updateCell(j + rowStart, i + colStart, {
              ...cellUpdates,
              value: cellVal,
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
};
