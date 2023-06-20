function logger() {
  // console.log('in logger, args: %o', args);

  let tempString = '';
  for (let i = 0, L = arguments.length - 1; i <= L; i++) {
    tempString = tempString.concat(arguments[i], i === L ? '' : ', ');
  }
  console.log(tempString);
}

logger('words', 'more words');
