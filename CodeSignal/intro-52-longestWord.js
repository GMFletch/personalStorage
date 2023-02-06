function solution(text) {
  const regTest = /[a-z]+/gi;
  const words = text.match(regTest).sort(function (a, b) {
    return b.length - a.length;
  });
  return words[0];
}

/*
// did not pass because \w is too broad - it also includes numbers

function solution(text) {
  const regTest = /\w+/gi;
  const words = text.match(regTest).sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(words);
  return words[0];
}
*/

/*
// did not pass because \w is too broad - it also includes numbers

function solution(text) {
  const regTest = /\w+/g;
  const words = text.match(regTest);
  const mappedWordCount = words.map(function (el) {
    return el.length;
  });
  return words[mappedWordCount.indexOf(Math.max(...mappedWordCount))];
}
*/
