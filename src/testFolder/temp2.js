import makeEditXML from "./ggbCode/editXML";
import makeEnableButton from "./ggbCode/enableButton";
import makeGetCanvas from "./ggbCode/getCanvas";
import makeGgbReadText from "./ggbCode/ggbReadText";
import makeIsPoly from "./ggbCode/isPoly";
import makeLibClickFunction from "./ggbCode/libClickFunction";
import makeLibClientFunction from "./ggbCode/libClientFunction";
import makeLibDefineKeyboardInstructions from "./ggbCode/libDefineKeyboardInstructions";
import makeLibKeyFunction from "./ggbCode/libKeyFunction";
import makeManageAddedList from "./ggbCode/manageAddedList";
import makePointIncrement from "./ggbCode/pointIncrement";
import makeReadKeyboardInstructions from "./ggbCode/readKeyboardInstructions";
import makeRegisterHoverListener from "./ggbCode/registerHoverListener";
import makeRegisterSafeObjectClickListener from "./ggbCode/registerSafeObjectClickListener";
import makeRegisterSafeObjectUpdateListener from "./ggbCode/registerSafeObjectUpdateListener";
import makeSetAriaLabel from "./ggbCode/setAriaLabel";
import makeSetScreenReaderParameter from "./ggbCode/setScreenReaderParameter";
import makeSetTabOrder from "./ggbCode/setTabOrder";
import makeShowSelection from "./ggbCode/showSelection";
import makeTextResizer from "./ggbCode/textResizer";
import makeUpdateKeyboardInstructions from "./ggbCode/updateKeyboardInstructions";
import setGGBCanvases from "./ggbCode/setupGGBCanvases";
import makeUnavailableButtonText from "./ggbCode/libUnavailableButtonText";

export default function ({
  name = "",
  ggbObject,
  defineKeyboardInstructions = function () {},
  buttonClicks = {},
  statusName = "AAppletStatus",
  preventCustomFocusIndicators = false,
  pointIncrements = {},
} = {}) {
  function logError(funcName) {
    return function (...args) {
      console.error(`Tried to call ${funcName} with args ${args}`);
    };
  }

  function setAtStart() {
    textResizer();
    setGGBCanvases();
    ggbObject.setErrorDialogsActive(false);
    const dialog =
      document.getElementById("instructions") ||
      document.createElement("dialog");
    if (![...document.body.children].includes(dialog)) {
      document.body.appendChild(dialog);
      dialog.setAttribute("id", "instructions");
    }
  }

  const returnObj = {};
  returnObj.selectedObject = { name: "" };
  returnObj.unavailableButtonText = ggbObject
    ? makeUnavailableButtonText({ ggbObject })()
    : logError("unavailableButtonText");
  returnObj.isPoly = ggbObject ? makeIsPoly({ ggbObject }) : logError("isPoly");
  returnObj.getCanvas = name ? makeGetCanvas({ name }) : logError("getCanvas");
  returnObj.setAriaLabel = makeSetAriaLabel();
  returnObj.setScreenReaderParameter = makeSetScreenReaderParameter();
  returnObj.ggbReadText = ggbObject
    ? makeGgbReadText({ ggbObject })
    : logError("ggbReadText");
  const libDefineKeyboardInstructions = makeLibDefineKeyboardInstructions({
    defineKeyboardInstructions,
    statusName,
    ggbObject,
  });

  returnObj.readKeyboardInstructions = ggbObject
    ? makeReadKeyboardInstructions({
        ggbReadText: returnObj.ggbReadText,
        libDefineKeyboardInstructions,
      })
    : logError("readKeyboardInstructions");
  returnObj.updateKeyboardInstructions = ggbObject
    ? makeUpdateKeyboardInstructions({
        libDefineKeyboardInstructions,
        ggbObject,
      })
    : logError("updateKeyboardInstructions");
  const pointIncrement = makePointIncrement({
    ggbObject,
    pointIncrements,
    updateKeyboardInstructions: returnObj.updateKeyboardInstructions,
  });
  returnObj.enableButton = ggbObject
    ? makeEnableButton({ ggbObject })
    : logError("enableButton");
  returnObj.registerSafeObjectUpdateListener = ggbObject
    ? makeRegisterSafeObjectUpdateListener({ ggbObject })
    : logError("registerSafeObjectUpdateListener");
  returnObj.registerSafeObjectClickListener = ggbObject
    ? makeRegisterSafeObjectClickListener({ ggbObject })
    : logError("registerSafeObjectClickListener");
  returnObj.registerHoverListener =
    name && ggbObject
      ? makeRegisterHoverListener({
          name,
          ggbObject,
          getCanvas: returnObj.getCanvas,
        })
      : logError("registerHoverListener");
  returnObj.editXML = ggbObject
    ? makeEditXML({ ggbObject })
    : logError("editXML");
  const showSelection = ggbObject
    ? makeShowSelection({
        ggbObject,
        isPoly: returnObj.isPoly,
        editXML: returnObj.editXML,
      })
    : logError("showSelection");
  const barButtons = [
    "ggbButton1",
    "ggbButton2",
    "ggbButton3",
    "ggbButton4",
    "ggbButton5",
  ];
  returnObj.libClientFunction = ggbObject
    ? makeLibClientFunction({
        updateKeyboardInstructions: returnObj.updateKeyboardInstructions,
        showSelection,
        readKeyboardInstructions: returnObj.readKeyboardInstructions,
        ggbObject,
        statusName,
        barButtons,
        preventCustomFocusIndicators,
        selectedObject: returnObj.selectedObject,
        pointIncrement,
      })
    : logError("libClientFunction");
  returnObj.libClickFunction = ggbObject
    ? makeLibClickFunction({
        ggbReadText: returnObj.ggbReadText,
        readKeyboardInstructions: returnObj.readKeyboardInstructions,
        updateKeyboardInstructions: returnObj.updateKeyboardInstructions,
        ggbObject,
        barButtons,
        buttonClicks,
      })
    : logError("libClickFunction");
  returnObj.libKeyFunction = ggbObject
    ? makeLibKeyFunction({
        ggbReadText: returnObj.ggbReadText,
        ggbObject,
        statusName,
        selectedObject: returnObj.selectedObject,
        updateKeyboardInstructions: returnObj.updateKeyboardInstructions,
        pointIncrement,
      })
    : logError("libKeyFunction");
  returnObj.manageAddedList = ggbObject
    ? makeManageAddedList({ ggbObject })
    : logError("manageAddedList");
  returnObj.setTabOrder = ggbObject
    ? makeSetTabOrder({ ggbObject, statusName })
    : logError("setTabOrder");
  const textResizer = ggbObject
    ? makeTextResizer({ ggbObject })
    : logError("textResizer");

  setAtStart();

  return returnObj;
}
