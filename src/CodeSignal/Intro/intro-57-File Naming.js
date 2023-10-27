function solution(names) {
  const returnArray = [];
  while (names.length > 0) {
    let tempName = names.shift();
    switch (true) {
      case !returnArray.includes(tempName):
        returnArray.push(tempName);
        break;
      case !returnArray.includes(tempName.concat('(1)')):
        returnArray.push(tempName.concat('(1)'));
        break;
      default:
        let i = 2;
        let repeatedName = true;
        while (repeatedName) {
          if (!returnArray.includes(tempName.concat('(', i.toString(), ')'))) {
            repeatedName = false;
            returnArray.push(tempName.concat('(', i.toString(), ')'));
          }
          i++;
        }
        break;
    }
  }
  return returnArray;
}
