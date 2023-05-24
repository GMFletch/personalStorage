const pointObject = updateSelectedPoint();

function updateSelectedPoint() {
  const pointArray = ['A', 'B', 'H', 'I', 'J', 'K', 'N', 'O'];
  const segArray = [
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'o'],
    ['t', 'u'],
  ];
  const tempObj = {};
  pointArray.forEach(function (el, index) {
    const tempFloor = Math.floor(index / 2);
    tempObj[el] = el;
    tempObj[el].point = ggbObject.getValue(segArray[tempFloor][index % 2]);
    tempObj[el].attachedSeg = ggbObject.getValue(
      segArray[tempFloor][(index + 1) % 2]
    );
    tempObj[el].otherSeg = ggbObject.getValue('b');
    tempObj[el].slopeTri = ggbObject.getValue('b');
    tempObj[el].otherPoint = ggbObject.getValue('b');
    tempObj[el].rise = ggbObject.getValue('b');
    tempObj[el].run = ggbObject.getValue('b');
  });

  return tempObj;
}
