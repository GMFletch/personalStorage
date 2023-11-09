"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// attempt 1: [Done] exited with code=0 in 0.306 seconds
const inputAsJS_2_1_js_1 = __importDefault(require("./inputAsJS-2-1.js"));
console.log(typeof inputAsJS_2_1_js_1.default);
const round1 = inputAsJS_2_1_js_1.default.replaceAll(` `, "").split(`\n`);
console.log(round1);
const round2 = round1.reduce((currentTotal, currentString) => {
    let scoreThisRound = 0;
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    const lose = 0;
    const draw = 3;
    const win = 6;
    switch (currentString[0]) {
        case "A": {
            // opponent chose rock
            switch (currentString[1]) {
                case "X": {
                    // you need to lose, so you choose scissors
                    scoreThisRound = lose + scissors;
                    break;
                }
                case "Y": {
                    // you need to draw, so you choose rock
                    scoreThisRound = draw + rock;
                    break;
                }
                case "Z": {
                    // you need to win, so you choose paper
                    scoreThisRound = win + paper;
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
                    // you need to lose, so you choose rock
                    scoreThisRound = lose + rock;
                    break;
                }
                case "Y": {
                    // you need to draw, so you choose paper
                    scoreThisRound = draw + paper;
                    break;
                }
                case "Z": {
                    // you need to win, so you choose scissors
                    scoreThisRound = win + scissors;
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
                    // you need to lose, so you choose paper
                    scoreThisRound = lose + paper;
                    break;
                }
                case "Y": {
                    // you need to draw, so you choose scissors
                    scoreThisRound = draw + scissors;
                    break;
                }
                case "Z": {
                    // you need to win, so you choose rock
                    scoreThisRound = win + rock;
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
// // attempt 1: [Done] exited with code=0 in 0.306 seconds
// import inputData from "./inputAsJS-2-1.js";
// console.log(typeof inputData);
// const round1: string[] = inputData.replaceAll(` `, "").split(`\n`);
// console.log(round1);
// const round2 = round1.reduce((currentTotal, currentString) => {
//   let scoreThisRound = 0;
//   const rock = 1;
//   const paper = 2;
//   const scissors = 3;
//   const lose = 0;
//   const draw = 3;
//   const win = 6;
//   switch (currentString[0]) {
//     case "A": {
//       // opponent chose rock
//       switch (currentString[1]) {
//         case "X": {
//           // you need to lose, so you choose scissors
//           scoreThisRound = lose + scissors;
//           break;
//         }
//         case "Y": {
//           // you need to draw, so you choose rock
//           scoreThisRound = draw + rock;
//           break;
//         }
//         case "Z": {
//           // you need to win, so you choose paper
//           scoreThisRound = win + paper;
//           break;
//         }
//         default: {
//           // error if getting here
//           console.warn("error in A switch statement");
//           break;
//         }
//       }
//       break;
//     }
//     case "B": {
//       // opponent chose paper
//       switch (currentString[1]) {
//         case "X": {
//           // you need to lose, so you choose rock
//           scoreThisRound = lose + rock;
//           break;
//         }
//         case "Y": {
//           // you need to draw, so you choose paper
//           scoreThisRound = draw + paper;
//           break;
//         }
//         case "Z": {
//           // you need to win, so you choose scissors
//           scoreThisRound = win + scissors;
//           break;
//         }
//         default: {
//           // error if getting here
//           console.warn("error in B switch statement");
//           break;
//         }
//       }
//       break;
//     }
//     case "C": {
//       // opponent chose scissors
//       switch (currentString[1]) {
//         case "X": {
//           // you need to lose, so you choose paper
//           scoreThisRound = lose + paper;
//           break;
//         }
//         case "Y": {
//           // you need to draw, so you choose scissors
//           scoreThisRound = draw + scissors;
//           break;
//         }
//         case "Z": {
//           // you need to win, so you choose rock
//           scoreThisRound = win + rock;
//           break;
//         }
//         default: {
//           // error if getting here
//           console.warn("error in C switch statement");
//           break;
//         }
//       }
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
