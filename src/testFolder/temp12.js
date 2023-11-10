function ggbOnInit(name, ggbObject) {
  loadUtils().then(function (setupGGB) {
    const buttonClicks = defineButtonClickScripts();
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
      editXML,
      isPoly,
      selectedObject,
    } = setupGGB({
      name,
      ggbObject,
      defineKeyboardInstructions,
      buttonClicks,
      statusName: "AAppletStatus",
      preventCustomFocusIndicators: false,
    });
    const ggbcanvas = getCanvas();

    /*
     * IGNORE above
     * EDIT below
     */
    const points = ["A", "B", "C", "D"];

    setAriaLabel(ggbcanvas, "Geometry World Symmetry Explorer Interactive");

    points.forEach(function (point) {
      registerSafeObjectUpdateListener(point, pointUpdated);
    });

    // listeners here; keep these, add your own as needed
    ggbObject.registerClientListener(function (clientEvent) {
      clientFunction(clientEvent);
      libClientFunction(clientEvent);
    });
    ggbObject.registerClickListener(function (clickedName) {
      clickListenerFunction(clickedName);
      libClickFunction(clickedName);
    });
    ggbcanvas.addEventListener("keyup", function (keyEvent) {
      keyit(keyEvent);
      libKeyFunction(keyEvent);
    });

    function defineButtonClickScripts() {
      // defines button scripts
      // keep this function, but you can delete anything/everything inside it
      return {
        ggbButton1() {
          ggbObject.evalCommand(
            "CopyFreeObject(Segment(IntersectNear, IntersectFar))"
          );
          ggbObject.evalCommand("SelectObjects(q1)");
          // ggbObject.evalCommand("SelectObjects()");
        },
        ggbButton2() {
          deleteThem();
        },
        ggbButton3() {},
        ggbButton4() {},
        ggbButton5() {},
      };
    }

    function defineKeyboardInstructions(obj) {
      // takes a GGB object name as an argument, returns its keyboard text.
      const keyboardInstructions = {
        A: "Press the arrow keys to move this point.",
        B: "Press the arrow keys to move this point.",
        C: "Press the arrow keys to move this point.",
        D: "Press the arrow keys to move this point.",
        F: "Press the arrow keys to move this point.",
        ggbButton1: ggbObject.getValue("ggbButton1Enabled")
          ? "Press space to create a segment."
          : unavailableButtonText,
        ggbButton2: ggbObject.getValue("ggbButton2Enabled")
          ? "Press space to reset all activities."
          : unavailableButtonText,
        //   ggbButton3: ggbObject.getValue("ggbButton3Enabled")
        //     ? "Press space to ___."
        //     : unavailableButtonText,
        //   ggbButton4: ggbObject.getValue("ggbButton4Enabled")
        //     ? "Press space to ___."
        //     : unavailableButtonText,
        //   ggbButton5: ggbObject.getValue("ggbButton5Enabled")
        //     ? "Press space to ___."
        //     : unavailableButtonText,
<<<<<<< HEAD
      };
      return keyboardInstructions[obj];
=======
        };
        return keyboardInstructions[obj];
      }
  
      function clientFunction(clientEvent) {
        const {type, target} = clientEvent

        function fold(){
            if (type === "select" && target !== "button1") {
                ggbObject.setValue("time", 0);
            }
            if (type === "dragEnd" && target === "F") {
                ggbObject.setAnimating("time", true);
                ggbObject.startAnimation();
            }
            if (ggbObject.getValue("time") === 1) {
                ggbObject.stopAnimation();
                ggbObject.setAnimating("time", false);
            }
        }

        console.log("client event: %o", clientEvent)
        switch (type) {
            case "select":
                congruence()
                if(points.include(target)){
                    ggbObject.setAnimating("time", false);
                    ggbObject.stopAnimation();
                }
                break;
            case "deselect":
                // congruence()
                break
            case "dragEnd":{
                fold()
                break
            }
            default:
                break;
        }
        // fold()
      }
  
      function clickListenerFunction(clickedName) {
        console.log("clicked name: %o", clickedName)
        // clickedName is a string
      }
  
      function keyit(keyEvent) {
        console.log("keyit: %o", keyEvent)
        // feel free to delete key or code depending on your preferences
        // const { key, code } = keyEvent;
      }
        
        function deleteThem() {
            let segmentList = [];
            segmentList = ggbObject.getAllObjectNames("segment");
            // console.log(segmentList)
            segmentList.splice(segmentList.indexOf("a"), 1);
            segmentList.splice(segmentList.indexOf("b"), 1);
            segmentList.splice(segmentList.indexOf("c"), 1);
            segmentList.splice(segmentList.indexOf("d"), 1);
            for (let i = 0; i < segmentList.length; i++) {
                if(segmentList[i] === "buttonBarBorder"){
                    null
                }else{
                    ggbObject.deleteObject(segmentList[i]);
                }
            }
        }

        // function halo(point){
        //     const haloSize = 10;
        //     const HexyColor = "\"" + ggbObject.getColor(point) + "\"";
        //     ggbObject.setPointStyle(point, 10);
        //     ggbObject.evalCommand(point + "Halo:(x - x(" + point + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + point + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" + haloSize + "^2");
        //     ggbObject.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
        //     ggbObject.setFilling(point + "Halo", 0.25);
        //     ggbObject.setLineThickness(point + "Halo", 0);
        //     ggbObject.setFixed(point + "Halo", false, false);
        // }

        function congruence() {
            const lengthA = ggbObject.getValue("Length(a)");
            const lengthB = ggbObject.getValue("Length(b)");
            const lengthC = ggbObject.getValue("Length(c)");
            const lengthD = ggbObject.getValue("Length(d)");
        
            const sideLengths = [lengthA, lengthB, lengthC, lengthD];
            const sideNames = ["a", "b", "c", "d"];
            const congruent = [];
            const congruentB = [];
            if (lengthA === lengthB && lengthA === lengthC && lengthA === lengthD) {
                congruent.push("a");
                congruent.push("b");
                congruent.push("c");
                congruent.push("d");
              } else {
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (sideLengths[i] === sideLengths[j] && i !== j) {
                            if (
                                congruent.length >= 2 &&
                                congruent.indexOf(sideNames[i]) === -1 &&
                                congruent.indexOf(sideNames[j]) === -1 &&
                                ggbObject.getValue(`Length(${congruent[0]})`) === sideLengths[i]
                            ) {
                                congruent.push(sideNames[j]);
                            }
                            if (congruent.length < 2) {
                                congruent.push(sideNames[i]);
                                congruent.push(sideNames[j]);
                            }
                            if (congruentB.length < 2 && congruent.length >= 2 && ggbObject.getValue(`Length(${congruent[0]})`) !== sideLengths[i]) {
                                congruentB.push(sideNames[i]);
                                congruentB.push(sideNames[j]);
                            }
                            if (
                                congruentB.length >= 2 &&
                                congruentB.indexOf(sideNames[i]) === -1 &&
                                congruentB.indexOf(sideNames[j]) === -1 &&
                                ggbObject.getValue(`Length(${congruentB[0]})`) === sideLengths[i]
                            ) {
                                congruentB.push(sideNames[j]);
                            }
                        }
                    }
        
                }
            }
           console.log(congruent, congruentB);
            ggbObject.evalCommand(`SetDecoration(a,0)`);
            ggbObject.evalCommand(`SetDecoration(b,0)`);
            ggbObject.evalCommand(`SetDecoration(c,0)`);
            ggbObject.evalCommand(`SetDecoration(d,0)`);
            for (let i = 0, L = congruent.length; i < L; i++) {
                ggbObject.evalCommand(`SetDecoration(${congruent[i]},1)`);
            }
            for (let i = 0, L = congruentB.length; i < L; i++) {
                ggbObject.evalCommand(`SetDecoration(${congruentB[i]},2)`);
            }
        }
      // add new stuff above this line
    });
  
    /*
     * IGNORE BELOW
     */
    function loadUtils() {
      function parseJS(JSString) {
        return Function("" + JSString)();
      }
      if (!window.didUtils || !window.didUtils.setupGGB) {
        return fetch(
          "https://cdn.digital.greatminds.org/did-utils/latest/index.js",
          {
            cache: "no-cache",
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
>>>>>>> c561101af83b90596179f04bd90079d527712e03
    }

    function clientFunction(clientEvent) {
      const { type, target } = clientEvent;
      console.log("client event: %o", clientEvent);
      switch (type) {
        case "select": {
          if (points.includes(target)) {
            selectedObject.name = target;
            congruence();
          }
          break;
        }
        case "deselect": {
          // congruence()
          // TODO: Do we need to set selectedObject.name to ""?
          break;
        }
        case "dragEnd": {
          fold(type, target);
          // if dragEnded on A, B, C, or D
          if (points.includes(target)) {
            ggbObject.setValue(
              "storedXFor".concat(target),
              ggbObject.getXcoord(target)
            );
            ggbObject.setValue(
              "storedYFor".concat(target),
              ggbObject.getYcoord(target)
            );
          }

          break;
        }
        default: {
          break;
        }
      }
    }

    function clickListenerFunction(clickedName) {
      console.log("clicked name: %o", clickedName);
      // clickedName is a string
    }

    function keyit(keyEvent) {
      console.log("keyit: %o", keyEvent);
      // feel free to delete key or code depending on your preferences
      // const { key, code } = keyEvent;
    }

    function fold(passedType, passedTarget) {
      if (passedType === "select" && passedTarget !== "button1") {
        ggbObject.setValue("time", 0);
      }
      if (passedType === "dragEnd" && passedTarget === "F") {
        ggbObject.setAnimating("time", true);
        ggbObject.startAnimation();
      }
      if (ggbObject.getValue("time") === 1) {
        ggbObject.stopAnimation();
        ggbObject.setAnimating("time", false);
      }
    }

    function pointUpdated() {
      if (
        ggbObject.getXcoord(selectedObject.name) !==
          ggbObject.getValue("storedXFor".concat(selectedObject.name)) ||
        ggbObject.getYcoord(selectedObject.name) !==
          ggbObject.getValue("storedYFor".concat(selectedObject.name))
      ) {
        points.forEach((letter) => {
          const tempLowerCase = letter.toLowerCase();
          editXML(letter.toLowerCase(tempLowerCase), "decoration", "type", "0");
        });
        deleteThem();
      }
    }

    function deleteThem() {
      let segmentList = [];
      segmentList = ggbObject.getAllObjectNames("segment");
      // console.log(segmentList)
      segmentList.splice(segmentList.indexOf("a"), 1);
      segmentList.splice(segmentList.indexOf("b"), 1);
      segmentList.splice(segmentList.indexOf("c"), 1);
      segmentList.splice(segmentList.indexOf("d"), 1);
      for (let i = 0; i < segmentList.length; i++) {
        if (segmentList[i] === "buttonBarBorder") {
          null;
        } else {
          ggbObject.deleteObject(segmentList[i]);
        }
      }
    }

    function congruence() {
      const lengthA = ggbObject.getValue("Length(a)");
      const lengthB = ggbObject.getValue("Length(b)");
      const lengthC = ggbObject.getValue("Length(c)");
      const lengthD = ggbObject.getValue("Length(d)");

      const sideLengths = [lengthA, lengthB, lengthC, lengthD];
      const sideNames = ["a", "b", "c", "d"];
      const congruent = [];
      const congruentB = [];
      if (lengthA === lengthB && lengthA === lengthC && lengthA === lengthD) {
        congruent.push("a");
        congruent.push("b");
        congruent.push("c");
        congruent.push("d");
      } else {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (sideLengths[i] === sideLengths[j] && i !== j) {
              if (
                congruent.length >= 2 &&
                congruent.indexOf(sideNames[i]) === -1 &&
                congruent.indexOf(sideNames[j]) === -1 &&
                ggbObject.getValue(`Length(${congruent[0]})`) === sideLengths[i]
              ) {
                congruent.push(sideNames[j]);
              }
              if (congruent.length < 2) {
                congruent.push(sideNames[i]);
                congruent.push(sideNames[j]);
              }
              if (
                congruentB.length < 2 &&
                congruent.length >= 2 &&
                ggbObject.getValue(`Length(${congruent[0]})`) !== sideLengths[i]
              ) {
                congruentB.push(sideNames[i]);
                congruentB.push(sideNames[j]);
              }
              if (
                congruentB.length >= 2 &&
                congruentB.indexOf(sideNames[i]) === -1 &&
                congruentB.indexOf(sideNames[j]) === -1 &&
                ggbObject.getValue(`Length(${congruentB[0]})`) ===
                  sideLengths[i]
              ) {
                congruentB.push(sideNames[j]);
              }
            }
          }
        }
      }
      points.forEach((letter) => {
        const tempLowerCase = letter.toLowerCase();
        const tempDecoration = congruentB.includes(tempLowerCase)
          ? "2"
          : congruent.includes(tempLowerCase)
          ? "1"
          : "0";
        editXML(
          letter.toLowerCase(tempLowerCase),
          "decoration",
          "type",
          tempDecoration
        );
      });
    }
    // add new stuff above this line
  });

  /*
   * IGNORE BELOW
   */
  function loadUtils() {
    function parseJS(JSString) {
      return Function("" + JSString)();
    }
    if (!window.didUtils || !window.didUtils.setupGGB) {
      return fetch(
        "https://cdn.digital.greatminds.org/did-utils/latest/index.js",
        {
          cache: "no-cache",
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
