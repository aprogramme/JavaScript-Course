const name = "aayush"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aayush-07')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);   // 8

// console.log(gameName.toUpperCase());

// console.log(gameName);

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf("y"));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(0.3)
console.log(anotherString);

const newString1 = "     aayush  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://google.com/aayush%80raj"
console.log(url.replace('%80', '-'))

console.log(url.includes('aayush'))

console.log(gameName.split('-'));

