import inputData from "./textAsJS.js";

const round1: string[] = inputData
  .replaceAll(`\n`, "x")
  .replaceAll(`;`, "")
  .split("xx");

const round2 = round1.reduce(
  (
    overall: {
      highestIndex: number;
      highestCals: number;
      secondIndex: number;
      secondCals: number;
      thirdIndex: number;
      thirdCals: number;
    },
    currentElf,
    index
  ) => {
    const totalCalsForCurrentElf = currentElf
      .split("x")
      .reduce((totalCarried: number, currentItem: string) => {
        totalCarried + parseInt(currentItem);
        return totalCarried + parseInt(currentItem);
      }, 0);
    switch (true) {
      case totalCalsForCurrentElf > overall.highestCals.valueOf(): {
        // set as new highest, and shift everything down
        console.log("highest");
        console.log("index: %o, cals: %o", index, totalCalsForCurrentElf);
        console.log(
          "highestIndex: %o, highestCals: %o",
          overall.highestIndex,
          overall.highestCals
        );
        const newSecond = setHighest(totalCalsForCurrentElf, index);
        const newThird = setSecond(
          newSecond.removedNum,
          newSecond.removedIndex
        );
        setThird(newThird.removedNum, newThird.removedIndex);
        break;
      }
      case totalCalsForCurrentElf > overall.secondCals.valueOf(): {
        // set as new second, and shift everything down
        console.log("second");
        console.log("index: %o, cals: %o", index, totalCalsForCurrentElf);
        console.log(
          "highestIndex: %o, highestCals: %o",
          overall.highestIndex,
          overall.highestCals
        );
        const newThird = setSecond(totalCalsForCurrentElf, index);
        setThird(newThird.removedNum, newThird.removedIndex);
        break;
      }
      case totalCalsForCurrentElf > overall.thirdCals.valueOf(): {
        // set as new third
        console.log("third");
        console.log("index: %o, cals: %o", index, totalCalsForCurrentElf);
        console.log(
          "highestIndex: %o, highestCals: %o",
          overall.highestIndex,
          overall.highestCals
        );
        setThird(totalCalsForCurrentElf, index);
        break;
      }
      default: {
        // do nothing!
        break;
      }
    }
    function setHighest(
      number: number,
      index: number
    ): { removedNum: number; removedIndex: number } {
      const returnObj = {
        removedNum: overall.highestCals.valueOf(),
        removedIndex: overall.highestIndex.valueOf(),
      };
      overall.highestCals = number.valueOf();
      overall.highestIndex = index.valueOf();
      return returnObj;
    }
    function setSecond(
      number: number,
      index: number
    ): { removedNum: number; removedIndex: number } {
      const returnObj = {
        removedNum: overall.secondCals.valueOf(),
        removedIndex: overall.secondIndex.valueOf(),
      };
      overall.secondCals = number.valueOf();
      overall.secondIndex = index.valueOf();
      return returnObj;
    }
    function setThird(number: number, index: number): void {
      overall.thirdCals = number;
      overall.thirdIndex = index;
    }
    return overall;
  },
  {
    highestIndex: 0,
    highestCals: 0,
    secondIndex: 0,
    secondCals: 0,
    thirdIndex: 0,
    thirdCals: 0,
  }
);

console.log(round2);
console.log(round2.highestCals + round2.secondCals + round2.thirdCals);
