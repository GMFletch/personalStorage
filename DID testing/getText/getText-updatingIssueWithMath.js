/*
  assumptions:
  1. for use with input components and cells within table and complextable components
  2. input components have a text property while cells in tables have a value property; regardless, this is where the "text" a student enters is stored
  3. for the input component, the data obj is passed to the getTextType function; for tables, a specific cell is passed to the function
  4. the text from the input component or cell is returned, regardless of whether it is text, math, or mixed

  future recommendations:
  1. if text type is changed programmatically, a potential error is introduced. If changing to or from math text but not changing math boolean as well as inputType, the text type will likely be returned with an erroneous result. Not sure that this function specifically should validate that potential error, but do want to note it.
  2. returns that there is data in math '$$' even if there is no data
*/

function getText(obj) {
  switch (getTextType(obj)) {
    case 'text':
      return typeof obj.text !== 'undefined' ? obj.text : obj.value;
    case 'math':
      const tempText = obj.text;
      const tempValue = obj.value;
      return typeof tempText !== 'undefined'
        ? tempText === ''
          ? ''
          : `$${tempText}$`
        : tempValue === ''
        ? ''
        : `$${tempValue}$`;
    case 'mixed':
      return obj.mixedText[0]?.children
        .map((child) => {
          if (child.text) {
            return child.text;
          } else if (child.latex) {
            return `$${child.latex}$`;
          } else {
            return '';
          }
        })
        .filter((val) => !!val)
        .join('');
    default:
      console.warn(
        'In getText DID library function: Unexpected textType provided by getTextType DID library function for obj shown below'
      );
      console.log(obj);
      return '';
  }
}

function getTextType(obj) {
  const tempVal = obj.math
    ? 'math'
    : obj.inputType === 'mixed'
    ? 'mixed'
    : obj.inputType === 'text'
    ? 'text'
    : '';
  if (tempVal === '') {
    console.warn(
      'In getTextType DID library function: Unknown inputType for obj shown below'
    );
    console.log(obj);
  }
  return tempVal;
}
