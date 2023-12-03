import fs from "fs";
fs.readFile("src/Advent of Code/2023/day1/input-1.txt", "utf8", function (err, text) {
    processText(text);
});
function processText(input) {
    // console.log(input);
    const round1 = input.split(`\n`);
    // console.log(round1);
    const round2 = round1.reduce((total, currentLine, lineIndex) => {
        const firstDigit = currentLine.match(/\d/);
        const secondDigit = currentLine.split("").reverse().join("").match(/\d/);
        let numToAdd = 0;
        // put in `if" because firstDigit or secondDigit could be null
        if (firstDigit && secondDigit) {
            const pairedDigits = firstDigit[0].concat(secondDigit[0]);
            numToAdd = parseInt(pairedDigits);
        }
        return total + numToAdd;
    }, 0);
    console.log(round2);
    return round2;
}
