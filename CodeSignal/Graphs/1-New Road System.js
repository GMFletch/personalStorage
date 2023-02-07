function solution(roadRegister) {
  let length = roadRegister.length;
  let incoming = [];
  for (let row = 0; row < length; row++) {
    let tempIncoming = 0;
    for (let col = 0; col < length; col++) {
      if (roadRegister[row][col]) {
        tempIncoming++;
      }
    }
    incoming.push(tempIncoming);
  }
  for (let col = 0; col < length; col++) {
    let tempOutgoing = 0;
    for (let row = 0; row < length; row++) {
      if (roadRegister[row][col]) {
        tempOutgoing++;
      }
    }
    if (tempOutgoing !== incoming[col]) {
      return false;
    }
  }
  return true;
}
