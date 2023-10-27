function solution(n) {
  return (function () {
    let orig = n.toString(2);
    if (orig.length % 2 === 1) {
      orig = '0'.concat(orig);
    }
    console.log('orig');
    console.log(orig);
    console.log(parseInt(orig, 2));
    let reversedString = '';
    for (let i = 0, L = orig.length / 2; i < L; i++) {
      reversedString = reversedString.concat(orig[2 * i + 1], orig[2 * i]);
    }
    console.log('reversedString');
    console.log(reversedString);
    return parseInt(reversedString, 2);
  })();
}
