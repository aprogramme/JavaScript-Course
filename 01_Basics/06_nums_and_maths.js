// ***************************** Numbers *****************************

const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(1));

const otherNumber = 134.7566
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());

// ***************************** Maths *****************************

console.log(Math);
console.log(Math.abs(-5));   // 5
console.log(Math.round(3.4));  // 3
console.log(Math.ceil(3.4));  // 4
console.log((Math.floor(3.4)));  // 3
console.log((Math.sqrt(81)));   // 9
console.log(Math.min(3, 7, 2, 1));
console.log(Math.max(3, 7, 2, 1));
console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20


console.log(Math.floor((Math.random() * (max - min + 1) + min)));