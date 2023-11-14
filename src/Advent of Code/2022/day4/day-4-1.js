"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputAsJS_4_1_js_1 = __importDefault(require("./inputAsJS-4-1.js"));
// console.log(inputData);
const round1 = inputAsJS_4_1_js_1.default.split(`\n`);
// console.log(round1);
const round2 = round1.reduce((sum, pair) => {
    const firstSplit = pair.split(",");
    const secondSplit = [firstSplit[0].split("-"), firstSplit[1].split("-")];
    const doesContain = contains(secondSplit);
    return sum + (doesContain ? 1 : 0);
}, 0);
function contains(arr) {
    const firstContainsSecond = parseInt(arr[0][0]) <= parseInt(arr[1][0]) &&
        parseInt(arr[0][1]) >= parseInt(arr[1][1]);
    const secondContainsFirst = parseInt(arr[1][0]) <= parseInt(arr[0][0]) &&
        parseInt(arr[1][1]) >= parseInt(arr[0][1]);
    return firstContainsSecond || secondContainsFirst;
}
console.log(round2);
