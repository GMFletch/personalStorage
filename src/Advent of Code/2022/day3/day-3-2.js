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
const round2 = round1.reduce((returnArray, currentElf, elfIndex) => {
    if (elfIndex % 3 === 0) {
        returnArray.push([]);
    }
    const groupIndex = Math.floor(elfIndex / 3);
    returnArray[groupIndex].push(currentElf);
    return returnArray;
}, []);
// console.log(round2);
const round3 = round2.reduce((sum, currentGrup) => {
    const recurringLetter = findMatchInGroup(currentGrup);
    return sum + findLetterNumber(recurringLetter);
}, 0);
console.log(round3);
function findMatchInGroup(groupArray) {
    const firstElfItems = groupArray[0].split("");
    const packListLength = firstElfItems.length;
    let returnLetter = "";
    for (const letter of firstElfItems) {
        const tempIndex2ndElf = groupArray[1].indexOf(letter);
        const tempIndex3rdElf = groupArray[2].indexOf(letter);
        if (tempIndex2ndElf > -1 && tempIndex3rdElf > -1) {
            returnLetter = letter;
            break;
        }
    }
    return returnLetter;
}
function findLetterNumber(letter) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    if (lowerCase.includes(letter)) {
        return letter.charCodeAt(0) - 96;
    }
    return letter.charCodeAt(0) - 38;
}
