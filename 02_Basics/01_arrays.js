const myarr = [0, 1, 2, 3, 4, 5, 6]
// console.log(myarr[0]);

// shallow Copy : A shallow copy of an object is a copy whose properties share the same references .
// deep Copy : A shallow copy of an object is a copy whose properties do not share the same references .

const myHeros = ["superman", "ironman", "batman", "spiderman"]

const myarr1 = new Array(1, 2, 3, 4)
console.log(myarr1[0]);

// myarr.push(7)
// myarr.push(8)
// myarr.pop()

// myarr.unshift(9)
// myarr.shift()
console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));

const newArr = myarr.join()
// console.log(myarr);
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

console.log("A ", myarr);
const myn1 = myarr.slice(0, 3)
console.log("Slice: ",myn1);

const myn2 = myarr.splice(0, 3)
console.log("B ", myarr);
console.log("Splice:",myn2);

