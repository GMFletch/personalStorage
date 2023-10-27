function solution(product) {
  let returnVal = -1;
  let i = 1;
  while (returnVal === -1 && i < 1000000) {
    if (productFinder(i) === product) {
      returnVal = i;
    }
    i++;
  }
  function productFinder(num) {
    const numArr = num.toString().split('');
    let tempProd = 1;
    numArr.forEach(function (el) {
      tempProd = tempProd * parseInt(el);
    });
    return tempProd;
  }
  return returnVal;
}
