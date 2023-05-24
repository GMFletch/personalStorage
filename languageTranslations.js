function ggbOnInit(name, ggbObject) {
  loadUtils().then(function (setupGGB) {
    // you may replace the following function call with the name of your status text object as a string
    // if you do, you can delete the function defineStatusName
    const statusName = defineStatusName();
    const {
      getCanvas,
      setAriaLabel,
      readKeyboardInstructions,
      updateKeyboardInstructions,
      ggbReadText,
      libClientFunction,
      libClickFunction,
      libKeyFunction,
      registerSafeObjectUpdateListener,
      registerSafeObjectClickListener,
      registerHoverListener,
    } = setupGGB({
      name,
      ggbObject,
      defineKeyboardInstructions,
      buttonClicks: {},
      statusName,
    });
    const ggbcanvas = getCanvas(name);

    /*
     * IGNORE above
     * EDIT below
     */

    setAriaLabel(ggbcanvas, 'Plotting Points Interactive');

    function defineStatusName() {
      // put the name of your GGB status text object here
      return 'AAppletStatus';
    }

    let selectedObject = '';
    const pointsArray = ['A', 'B', 'C'];
    const xyArray = ['X', 'Y'];

    // listeners here; keep these, add your own as needed
    ggbObject.registerClientListener(function (a) {
      clientFunction(a);
      libClientFunction(a);
    });
    ggbObject.registerClickListener(function (a) {
      clickListenerFunction(a);
      libClickFunction(a);
    });
    ggbcanvas.addEventListener('keyup', function (event) {
      keyit(event);
      libKeyFunction(event);
    });

    ggbObject.registerClientListener(clientFunction);
    ggbObject.registerObjectClickListener('AAppletStatus', space);

    function defineKeyboardInstructions(obj) {
      // takes a GGB object name as an argument, returns its keyboard text.
      const keyboardInstructions = {
        A: 'Press the arrow keys to move this point.', // example for a point
        B: 'Press the arrow keys to move this point.', // example for a point
        C: 'Press the arrow keys to move this point.', // example for a point
      };
      return keyboardInstructions[obj];
    }

    function clientFunction(a) {
      switch (a.type) {
        case 'select': {
          selectedObject = a.target;
          if (pointsArray.includes(selectedObject)) {
            ggbObject.setLayer(selectedObject.concat('Label'), 4);
            ggbObject.setLayer(selectedObject, 5);
            if (selectedObject === 'A') {
              ggbObject.setValue('flag', false);
            }
            // does the order matter here for B and C? If so, can still take care of that with if statements
            ggbObject.setVisible(
              'increment'.concat(selectedObject, 'Text'),
              true
            );
            ggbObject.evalCommand(
              'ReadText(increment'.concat(selectedObject, 'Text)')
            );
          }
          break;
        }
        case 'deselect': {
          selectedObject = '';
          pointsArray.forEach(function (el, index) {
            ggbObject.setLayer(el, 5 - index);
            ggbObject.setLayer(el.concat('Label'), 3 - index);
            ggbObject.setVisible('increment'.concat(el, 'Text'), false);
          });
          break;
        }
        case 'dragEnd': {
          if (pointsArray.includes(selectedObject)) {
            ggbObject.setValue(
              'step'.concat(selectedObject, 'X'),
              ggbObject.getValue('step3')
            );
            ggbObject.setValue(
              'step'.concat(selectedObject, 'Y'),
              ggbObject.getValue('step3')
            );
            ggbObject.evalCommand(
              'ReadText(increment'.concat(selectedObject, 'Text)')
            );
          }
          break;
        }
      }
    }

    function clickListenerFunction(a) {
      // switch (a) {}
    }

    function space() {
      const currentCount = ggbObject.getValue('clickCounter');
      ggbObject.evalCommand('ReadText(promptText'.concat(currentCount, ')'));
      ggbObject.setValue('clickCounter', (currentCount + 1) % 4);
    }

    function keyit(event) {
      switch (event.code) {
        case 'ArrowLeft':
        // falls through
        case 'ArrowRight':
        // falls through
        case 'ArrowUp':
        // falls through
        case 'ArrowDown': {
          const pointIndex = pointsArray.indexOf(selectedObject);
          if (pointIndex > -1) {
            const xMovementMax = ggbObject.getValue('xMovementMax');
            const yMovementMax = ggbObject.getValue('yMovementMax');
            const tempXCoord = ggbObject.getXcoord(selectedObject);
            const tempYCoord = ggbObject.getYcoord(selectedObject);
            switch (tempXCoord) {
              // when tempXCoord === xMovementMax, do the following...
              case xMovementMax: {
                switch (tempYCoord) {
                  case yMovementMax: {
                    ggbObject.evalCommand('ReadText(Q1MaxText)');
                    break;
                  }
                  case 0: {
                    ggbObject.evalCommand('ReadText(Q4MaxText)');
                    break;
                  }
                  default: {
                    ggbObject.evalCommand('ReadText(xMaxText)');
                    break;
                  }
                }
                break;
              }
              // when tempXCoord === 0, do the following...
              case 0: {
                switch (tempYCoord) {
                  case yMovementMax: {
                    ggbObject.evalCommand('ReadText(Q2MaxText)');
                    break;
                  }
                  case 0: {
                    ggbObject.evalCommand('ReadText(Q3MaxText)');
                    break;
                  }
                  default: {
                    ggbObject.evalCommand('ReadText(xMinText)');
                    break;
                  }
                }
                break;
              }
              // when tempXCoord is not at min or max, do the following...
              default: {
                switch (tempYCoord) {
                  case yMovementMax: {
                    ggbObject.evalCommand('ReadText(yMaxText)');
                    break;
                  }
                  case 0: {
                    ggbObject.evalCommand('ReadText(yMinText)');
                    break;
                  }
                }
              }
            }
            break;
          }
          break;
        }
        case 'KeyX': {
          ggbObject.evalCommand('SelectObjects(AAppletStatus)');
          break;
        }
        case 'Space': {
          const pointIndex = pointsArray.indexOf(selectedObject);
          if (pointIndex > -1) {
            const tempStepValue = ggbObject.getValue(
              'step'.concat(selectedObject, 'X')
            );
            const nextStep = (tempStepValue % 3) + 1;
            ggbObject.setValue('step'.concat(selectedObject, 'X'), nextStep);
            ggbObject.setValue('step'.concat(selectedObject, 'Y'), nextStep);
            // xyArray.forEach(function (el) {
            //   ggbObject.setValue('step'.concat(selectedObject, el), nextStep);
            // })
            ggbObject.evalCommand(
              'ReadText(increment'.concat(selectedObject, 'Text)')
            );
          }
          break;
        }
      }
    }
  });

  /*
   * IGNORE BELOW
   */
  function loadUtils() {
    function parseJS(JSString) {
      return Function('' + JSString)();
    }
    if (!window.didUtils || !window.didUtils.setupGGB) {
      return fetch(
        'https://cdn.digital.greatminds.org/did-utils/latest/index.js',
        {
          cache: 'no-cache',
        }
      )
        .then(function (response) {
          return response.text();
        })
        .then(function (codingText) {
          parseJS(codingText);
        })
        .then(function () {
          return window.didUtils.setupGGB;
        });
    }
    return Promise.resolve(window.didUtils.setupGGB);
  }
}
