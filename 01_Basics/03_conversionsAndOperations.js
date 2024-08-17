// *********************************** Conversions ***********************************

// let score = "33avc"
// let score = null
// let score = undefined
let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => "33"
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 2

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 2 => false
// "" => false
// "Aayush" => true


let someNumber = 22
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *********************************** Operations ***********************************


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello "
let str2 = "Aayush"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 1);

// console.log(true);
// console.log(+true);
// console.log(false);
// console.log(+false);

// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;  // prefix
gameCounter++;  // postfix
console.log(gameCounter);