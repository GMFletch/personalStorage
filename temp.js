function ggbOnInit(name, ggbObject) {
  loadUtils().then(function (setupGGB) {
    const buttonClicks = defineButtonClickScripts();
    // you may replace the following function call with the name of your status text object as a string
    // if you do, you can delete the function defineStatusName
    const statusName = defineStatusName();
    const {
      getCanvas,
      setAriaLabel,
      readKeyboardInstructions,
      updateKeyboardInstructions,
      ggbReadText,
      enableButton,
      libClientFunction,
      libClickFunction,
      libKeyFunction,
      registerSafeObjectUpdateListener,
      registerSafeObjectClickListener,
      registerHoverListener,
      unavailableButtonText,
      setTabOrder,
      manageAddedList,
    } = setupGGB({
      name,
      ggbObject,
      defineKeyboardInstructions,
      buttonClicks,
      statusName,
    });
    const ggbcanvas = getCanvas(name);

    /*
     * IGNORE above
     * EDIT below
     */

    // listeners here; keep these, add your own as needed
    ggbObject.registerClientListener(function (a) {
      clientFunction(a);
      libClientFunction(a);
    });
    ggbObject.registerClickListener(function (a) {
      clickListenerFunction(a);
      libClickFunction(a);
    });
    ggbObject.registerClickListener(clickListenerFunction);
    ggbcanvas.addEventListener('keyup', function (event) {
      keyit(event);
      libKeyFunction(event);
    });

    setAriaLabel(ggbcanvas, 'Reflections Interactive');

    function defineStatusName() {
      // put the name of your GGB status text object here
      return 'AAppletStatus';
    }

    var plottedPoints = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    var initX = -12;
    var initY = -12;

    function defineButtonClickScripts() {
      // defines button scripts
      // keep this function, but you can delete anything/everything inside it
      return {
        ggbButton1: function () {
          enableButton(1, false);
          ggbObject.setValue('count', ggbObject.getValue('count') + 1);
          // ggbObject.setValue('checkAns', false);
        },
        ggbButton2: function () {
          enableButton(2, false);
          plottedPoints.forEach(function (el) {
            ggbObject.setLabelVisible(el, false);
            ggbObject.setVisible('text'.concat(el), true);
          });
          ggbObject.setValue('checkAns', true);
        },
        ggbButton3: function () {
          enableButton(1, false);
          enableButton(2, false);
          resetFunction();
        },
        ggbButton4: function () {},
        ggbButton5: function () {},
      };
    }

    function defineKeyboardInstructions(obj) {
      // takes a GGB object name as an argument, returns its keyboard text.
      if (plottedPoints.includes(obj)) {
        return 'Press the arrow keys to move this point.\\\\Press space to add the coordinates to the table.';
      }
      const keyboardInstructions = {
        ggbButton1: ggbObject.getValue('ggbButton1Enabled')
          ? 'Press space to show more points.'
          : unavailableButtonText,
        ggbButton2: ggbObject.getValue('ggbButton2Enabled')
          ? 'Press space to check your answers.'
          : unavailableButtonText,
        ggbButton3: ggbObject.getValue('ggbButton3Enabled')
          ? 'Press space to reset your work.'
          : unavailableButtonText,
        ggbButton4: ggbObject.getValue('ggbButton4Enabled')
          ? 'Press space to ___.'
          : unavailableButtonText,
        ggbButton5: ggbObject.getValue('ggbButton5Enabled')
          ? 'Press space to ___.'
          : unavailableButtonText,
      };
      return keyboardInstructions[obj];
    }

    var selectedObject = '';

    function checkForMaxMinDragSituation() {
      // const pointsLocation = ggbObject.getValueString("pointsLocation");
      // console.log(pointsLocation);

      let selectedObjectXCoord = ggbObject.getXcoord(selectedObject);
      let selectedObjectYCoord = ggbObject.getYcoord(selectedObject);
      let appletMaxXCoord = ggbObject.getValue('regionXmax');
      let appletMinXCoord = ggbObject.getValue('regionXmin');
      let appletMaxYCoord = ggbObject.getValue('regionYmax');
      let appletMinYCoord = ggbObject.getValue('regionYmin');
      // let situation =

      let minXOnly =
        selectedObjectXCoord === appletMinXCoord &&
        selectedObjectYCoord != appletMinYCoord &&
        selectedObjectYCoord != appletMaxYCoord;
      let maxXOnly =
        selectedObjectXCoord === appletMaxXCoord &&
        selectedObjectYCoord != appletMinYCoord &&
        selectedObjectYCoord != appletMaxYCoord;

      let minYOnly =
        selectedObjectYCoord === appletMinYCoord &&
        selectedObjectXCoord != appletMinXCoord &&
        selectedObjectXCoord != appletMaxXCoord;
      let maxYOnly =
        selectedObjectYCoord === appletMaxYCoord &&
        selectedObjectXCoord != appletMinXCoord &&
        selectedObjectXCoord != appletMaxXCoord;

      let minXAndMinY =
        selectedObjectXCoord === appletMinXCoord &&
        selectedObjectYCoord === appletMinYCoord;
      let maxXAndMinY =
        selectedObjectXCoord === appletMaxXCoord &&
        selectedObjectYCoord === appletMinYCoord;
      let maxXAndMaxY =
        selectedObjectXCoord === appletMaxXCoord &&
        selectedObjectYCoord === appletMaxYCoord;
      let minXAndMaxY =
        selectedObjectXCoord === appletMinXCoord &&
        selectedObjectYCoord === appletMaxYCoord;

      switch (true) {
        case minXOnly:
          ggbReadText(
            'This point is at its minimum x value for this interactive.'
          );
          break;
        case maxXOnly:
          ggbReadText(
            ' This point is at its maximum x value for this interactive.'
          );
          break;
        case minYOnly:
          ggbReadText(
            ' This point is at its minimum y value for this interactive.'
          );
          break;
        case maxYOnly:
          ggbReadText(
            ' This point is at its maximum y value for this interactive.'
          );
          break;
        case minXAndMinY:
          ggbReadText(
            ' This point is at its minimum x and y value for this interactive.'
          );
          break;
        case maxXAndMinY:
          ggbReadText(
            ' This point is at its maximum x value and minimum y value for this interactive.'
          );
          break;
        case maxXAndMaxY:
          ggbReadText(
            ' This point is at its maximum x and y value for this interactive.'
          );
          break;
        case minXAndMaxY:
          ggbReadText(
            ' This point is at its minimum x value and maximum y value for this interactive.'
          );
          break;
      }
    }

    function clientFunction(a) {
      // switch (a.type) {}
      var clientTarget = a.target;
      switch (a.type) {
        case 'select':
          selectedObject = clientTarget;
          if (plottedPoints.includes(clientTarget)) {
            ggbReadText('readText'.concat(clientTarget), true);
          }
          // switch (clientTarget) {
          //   case 'A':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextA', true);
          //     break;
          //   case 'B':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextB', true);
          //     break;
          //   case 'C':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextC', true);
          //     break;
          //   case 'D':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextD', true);
          //     break;
          //   case 'E':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextE', true);
          //     break;
          //   case 'F':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextF', true);
          //     break;
          //   case 'G':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextG', true);
          //     break;
          //   case 'H':
          //     //updateKeyboardInstructions(clientTarget);
          //     ggbReadText('readTextH', true);
          //     break;
          // }
          break;
        case 'deselect': {
          selectedObject = '';
          break;
        }
        case 'dragEnd': {
          selectedObject == clientTarget;
          if (plottedPoints.includes(clientTarget)) {
            ggbReadText('readText'.concat(clientTarget), true);
            setTimeout(function () {
              checkForMaxMinDragSituation();
            }, 100);
          }
          // switch (clientTarget) {
          //   case 'A':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextA', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          //   case 'B':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextB', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          //   case 'C':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextC', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          //   case 'D':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextD', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          //   case 'E':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextE', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          //   case 'F':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextF', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          //   case 'G':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextG', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          //   case 'H':
          //     //updateKeyboardInstructions(selectedObject);
          //     ggbReadText('readTextH', true);
          //     setTimeout(function () {
          //       checkForMaxMinDragSituation();
          //     }, 100);
          //     break;
          // }
          break;
        }
        case 'mouseDown': {
          break;
        }
      }
    }

    function clickListenerFunction(a) {
      //console.log("in clickListenerFunction");
    }

    function keyit(event) {
      switch (true) {
        case event.code == 'ArrowRight' ||
          event.code == 'ArrowUp' ||
          event.code == 'ArrowDown' ||
          event.code == 'ArrowLeft': {
          if (plottedPoints.includes(selectedObject)) {
            ggbReadText('readText'.concat(selectedObject), true);
            setTimeout(function () {
              checkForMaxMinDragSituation();
            }, 100);
          }
          // if (selectedObject == 'A') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('readTextA', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          // if (selectedObject == 'B') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('ReadTextB', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          // if (selectedObject == 'C') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('ReadTextC', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          // if (selectedObject == 'D') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('ReadTextD', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          // if (selectedObject == 'E') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('ReadTextE', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          // if (selectedObject == 'F') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('ReadTextF', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          // if (selectedObject == 'G') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('ReadTextG', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          // if (selectedObject == 'H') {
          //   //updateKeyboardInstructions(selectedObject);
          //   ggbReadText('ReadTextH', true);
          //   setTimeout(function () {
          //     checkForMaxMinDragSituation();
          //   }, 100);
          // }
          break;
        }
      }
    }

    function resetFunction() {
      plottedPoints.forEach(function (el, index) {
        ggbObject.setCoords(el, initX + (index % 2), initY);
        ggbObject.setLabelVisible(el, true);
        ggbObject.setVisible('text'.concat(el), false);
      });
      ggbObject.setValue('count', 0);
      ggbObject.setValue('checkAns', false);
    }

    //add new stuff above this line
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
