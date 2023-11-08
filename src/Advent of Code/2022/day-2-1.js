"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// attempt 2: [Done] exited with code=0 in 0.062 seconds
const inputAsJS_2_1_js_1 = __importDefault(require("./inputAsJS-2-1.js"));
console.log(typeof inputAsJS_2_1_js_1.default);
const round1 = inputAsJS_2_1_js_1.default.replaceAll(` `, "").split(`\n`);
console.log(round1);
const round2 = round1.reduce((currentTotal, currentString) => {
    let scoreThisRound = 0;
    switch (currentString[0]) {
        case "A": {
            // opponent chose rock
            switch (currentString[1]) {
                case "X": {
                    // you chose rock
                    scoreThisRound = 4;
                    break;
                }
                case "Y": {
                    // you chose paper
                    scoreThisRound = 8;
                    break;
                }
                case "Z": {
                    // you chose scissors
                    scoreThisRound = 3;
                    break;
                }
                default: {
                    // error if getting here
                    console.warn("error in A switch statement");
                    break;
                }
            }
            break;
        }
        case "B": {
            // opponent chose paper
            switch (currentString[1]) {
                case "X": {
                    // you chose rock
                    scoreThisRound = 1;
                    break;
                }
                case "Y": {
                    // you chose paper
                    scoreThisRound = 5;
                    break;
                }
                case "Z": {
                    // you chose scissors
                    scoreThisRound = 9;
                    break;
                }
                default: {
                    // error if getting here
                    console.warn("error in B switch statement");
                    break;
                }
            }
            break;
        }
        case "C": {
            // opponent chose scissors
            switch (currentString[1]) {
                case "X": {
                    // you chose rock
                    scoreThisRound = 7;
                    break;
                }
                case "Y": {
                    // you chose paper
                    scoreThisRound = 2;
                    break;
                }
                case "Z": {
                    // you chose scissors
                    scoreThisRound = 6;
                    break;
                }
                default: {
                    // error if getting here
                    console.warn("error in C switch statement");
                    break;
                }
            }
            break;
        }
        default: {
            // error if getting here
            console.warn("error in currentString switch statement");
            break;
        }
    }
    return currentTotal + scoreThisRound;
}, 0);
console.log(round2);
// // attempt 1: [Done] exited with code=0 in 0.065 seconds
// import inputData from "./inputAsJS-2-1.js";
// console.log(typeof inputData);
// const round1: string[] = inputData.replaceAll(` `, "").split(`\n`);
// console.log(round1);
// const round2 = round1.reduce((currentTotal, currentString) => {
//   let scoreThisRound = 0;
//   switch (currentString) {
//     case "AX": {
//       // opponent chose rock, you chose rock
//       scoreThisRound = 4;
//       break;
//     }
//     case "AY": {
//       // opponent chose rock, you chose paper
//       scoreThisRound = 8;
//       break;
//     }
//     case "AZ": {
//       // opponent chose rock, you chose scissors
//       scoreThisRound = 3;
//       break;
//     }
//     case "BX": {
//       // opponent chose paper, you chose rock
//       scoreThisRound = 1;
//       break;
//     }
//     case "BY": {
//       // opponent chose paper, you chose paper
//       scoreThisRound = 5;
//       break;
//     }
//     case "BZ": {
//       // opponent chose paper, you chose scissors
//       scoreThisRound = 9;
//       break;
//     }
//     case "CX": {
//       // opponent chose scissors, you chose rock
//       scoreThisRound = 7;
//       break;
//     }
//     case "CY": {
//       // opponent chose scissors, you chose paper
//       scoreThisRound = 2;
//       break;
//     }
//     case "CZ": {
//       // opponent chose scissors, you chose scissors
//       scoreThisRound = 6;
//       break;
//     }
//     default: {
//       // error if getting here
//       console.warn("error in currentString switch statement");
//       break;
//     }
//   }
//   return currentTotal + scoreThisRound;
// }, 0);
// console.log(round2);
