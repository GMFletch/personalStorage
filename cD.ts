import getData from "./getData";
import saveData from "./saveData";
import onInit from "./onInit";
import validateNum from "./validateNum";
import fakeSubmit from "./fakeSubmit";
import type {
  autorun,
  component,
  genericFunction,
  genericObject,
  utils,
  validateNumType,
} from "../types";

export default function ({
  components,
  utils,
  autorun,
}: {
  components: genericObject;
  utils: utils;
  autorun: autorun;
}) {
  const returnObj: {
    saveData?: genericFunction;
    getData?: genericFunction;
    onInit?: genericFunction;
    validateNum?: genericFunction;
    fakeSubmit?: genericFunction;
  } = {};
  if (components) {
    const allComps = Object.keys(components).sort();
    const firstComp = components[allComps[0]];

    const tempSaveData = function (
      dataObj: genericObject = {},
      component: component
    ) {
      const tarComp = component ? component : firstComp;
      saveData(dataObj, tarComp);
    };

    const tempGetData = function (dataName: string, component: component) {
      const tarComp = component ? component : firstComp;
      return getData(dataName, tarComp);
    };

    const tempOnInit = function (callback: genericFunction) {
      onInit(callback, firstComp);
    };

    returnObj.saveData = tempSaveData;
    returnObj.getData = tempGetData;
    returnObj.onInit = tempOnInit;
  }
  if (utils) {
    const tempValidateNum = function ({
      input,
      types = [],
      range = [],
    }: validateNumType) {
      return validateNum({ input, types, range, utils });
    };

    returnObj.validateNum = tempValidateNum;
  }
  if (autorun) {
    const tempFakeSubmit = function (
      comp: component,
      button: component,
      filled = true
    ) {
      fakeSubmit(comp, button, filled);
    };

    returnObj.fakeSubmit = tempFakeSubmit;
  }
  return returnObj;
}
