// solution with filter and inline es5 anonymous function

function solution(inputArray, k) {
  return inputArray.filter(function (el, index) {
    return (index + 1) % k !== 0;
  });
}

/*
### solution with filter and inline arrow function

function solution(inputArray, k) {
  return inputArray.filter((el, index) => {
    return (index + 1) % k !== 0;
  });
}
*/

/*
### solution with filter and named function

function solution(inputArray, k) {
  return inputArray.filter(filterKthElement);

  function filterKthElement(el, index) {
    // console.log('el')
    // console.log(el)
    // console.log('index')
    // console.log(index)
    return (index + 1) % k !== 0;
  }
}
*/

/*
### initial solution

function solution(inputArray, k) {
  const returnArray = inputArray.slice();
  // console.log('returnArray at start');
  // console.log(returnArray);
  // ex: inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; k=3
  // modVal = 4
  // remove k*modVal, starting with k max and cycling to 1
  const modVal = Math.floor(inputArray.length / k);
  // console.log('modVal');
  // console.log(modVal);
  for (let i = 0; i < modVal; i++) {
    // splice(start, deleteCount)
    returnArray.splice(k * (modVal - i) - 1, 1);
    // console.log('i');
    // console.log(i);
    // console.log('k');
    // console.log(k);
    // console.log('returnArray');
    // console.log(returnArray);
  }
  // console.log('returnArray at end');
  // console.log(returnArray);
  return returnArray;
}
*/
