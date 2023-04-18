Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((el, index, array) => {
    if (callback(el, index, array)) {
      newArray.push(el);
    }
  });
  // Only change code above this line
  return newArray;
};
