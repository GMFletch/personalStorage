import inputData from "./inputAsJS-5-1.js";

// console.log(inputData);

const crateArray = ["G"];

const round1: string[] = inputData.split(`\n`);

// console.log(round1);

const round2 = round1.reduce((sum, pair) => {
  const firstSplit = pair.split(",");
  const secondSplit = [firstSplit[0].split("-"), firstSplit[1].split("-")];
  const doesContain = contains(secondSplit);
  return sum + (doesContain ? 1 : 0);
}, 0);

function contains(arr: string[][]): boolean {
  const firstContainsSecond =
    parseInt(arr[0][0]) <= parseInt(arr[1][0]) &&
    parseInt(arr[0][1]) >= parseInt(arr[1][1]);
  const secondContainsFirst =
    parseInt(arr[1][0]) <= parseInt(arr[0][0]) &&
    parseInt(arr[1][1]) >= parseInt(arr[0][1]);
  return firstContainsSecond || secondContainsFirst;
}

console.log(round2);
