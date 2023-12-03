import inputData from "./inputAsJS-5-1.js";
// console.log(inputData);
const round1 = inputData.split(`\n`);
// console.log(round1);
const round2 = round1.reduce((sum, pair) => {
    const firstSplit = pair.split(",");
    const secondSplit = [firstSplit[0].split("-"), firstSplit[1].split("-")];
    // const doesContain = contains(secondSplit);
    // return sum + (doesContain ? 1 : 0);
    const hasNoOverlapsBool = hasNoOverlaps(secondSplit);
    return sum + (hasNoOverlapsBool ? 0 : 1);
}, 0);
function hasNoOverlaps(arr) {
    const firstDoesNotOverlapSecond = parseInt(arr[0][1]) < parseInt(arr[1][0]);
    const secondDoesNotOverlapsFirst = parseInt(arr[1][1]) < parseInt(arr[0][0]);
    return firstDoesNotOverlapSecond || secondDoesNotOverlapsFirst;
}
// function contains(arr: string[][]): boolean {
//   const firstContainsSecond =
//     parseInt(arr[0][0]) <= parseInt(arr[1][0]) &&
//     parseInt(arr[0][1]) >= parseInt(arr[1][1]);
//   const secondContainsFirst =
//     parseInt(arr[1][0]) <= parseInt(arr[0][0]) &&
//     parseInt(arr[1][1]) >= parseInt(arr[0][1]);
//   return firstContainsSecond || secondContainsFirst;
// }
console.log(round2);
