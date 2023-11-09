"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputAsJS_3_1_js_1 = __importDefault(require("./inputAsJS-3-1.js"));
// console.log(inputData);
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// upperCase.split("").forEach((letter) => {
//   console.log(letter.charCodeAt(0) - 38);
// });
// lowerCase.split("").forEach((letter) => {
//   console.log(letter.charCodeAt(0) - 96);
// });
const round1 = inputAsJS_3_1_js_1.default.split(`\n`);
const round2 = round1.reduce((sum, currentElf) => {
    const recurringLetter = findMatch(currentElf);
    return sum + findLetterNumber(recurringLetter);
}, 0);
console.log(round2);
function findMatch(packList) {
    const packListLength = packList.length;
    const firstHalf = packList.substring(0, packListLength / 2);
    const secondHalf = packList.substring(packListLength / 2);
    const firstHalfArray = firstHalf.split("");
    let returnIndex = -1;
    for (const letter of firstHalfArray) {
        // console.log(letter);
        const tempIndex = secondHalf.indexOf(letter);
        if (tempIndex > -1) {
            returnIndex = tempIndex;
            break;
        }
    }
    return secondHalf[returnIndex];
}
function findLetterNumber(letter) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    if (lowerCase.includes(letter)) {
        return letter.charCodeAt(0) - 96;
    }
    return letter.charCodeAt(0) - 38;
}
