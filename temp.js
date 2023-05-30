const myArray = [1, 2, , 4];

const return1 = myArray.map((x) => 2 * x);

const return2 = Array.apply(null, { length: 9 });

console.log(return1);
console.log(return2);
