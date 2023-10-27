const myArr = [{ num: 1 }, { num: 2 }, { num: 3 }];

const updater = () => {
  const someVal = 5;
  return { someVal };
};

console.log(updater().someVal);

let newVal = updater().someVal;

newVal = newVal + 3;
console.log(updater().someVal);
console.log(newVal);
