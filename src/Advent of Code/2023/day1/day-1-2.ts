import fs from "fs";
fs.readFile(
  "src/Advent of Code/2023/day1/input-1.txt",
  "utf8",
  function (err, text) {
    processText(text);
  }
);
function processText(input: string): number {
  const round1 = input.split(`\n`);
  // console.log(round1);
  const round2 = round1.reduce((total, currentLine, lineIndex) => {
    const stringWithReplace = part2Adjust(currentLine);
    // console.log(stringWithReplace);
    const firstDigit = stringWithReplace.match(/\d/);
    const secondDigit = stringWithReplace
      .split("")
      .reverse()
      .join("")
      .match(/\d/);
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

function part2Adjust(str: string): string {
  // console.log(str);
  const replacedString = str
    .replaceAll("one", "1")
    .replaceAll("two", "2")
    .replaceAll("three", "3")
    .replaceAll("four", "4")
    .replaceAll("five", "5")
    .replaceAll("six", "6")
    .replaceAll("seven", "7")
    .replaceAll("eight", "8")
    .replaceAll("nine", "9");
  return replacedString;
}
