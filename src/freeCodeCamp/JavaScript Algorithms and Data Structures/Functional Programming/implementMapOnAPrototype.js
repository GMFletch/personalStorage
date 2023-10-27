Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((el, index, array) => {
    newArray.push(callback(el, index, array));
  });
  console.log(newArray);
  // Only change code above this line
  return newArray;
};
