// Primitive Datatypes:
// 7 types : String, Number, Boolean, Null, undefined, Symbol, Bigint

const score = 100  // number
const scoreValue = 100.03  // number
const isLoggedIn = false  // boolean
const temp = null  // null
let userEmail  // undefined

const id = Symbol('123')  // symbol
const anotherId = Symbol('123')
// console.log(id === anotherId);  // false

const bigNumber = 36454292837364563738n  // bigint


// Reference Type (Non primitive)
// Array, Objects, Functions 

const heros = ["batman", "ironman", "spiderman", "thor"]  // array
// console.log(heros);

let myObj = {         // objects
    name: "Aayush",
    age: 22,
}
// console.log(myObj);


const myfun = function(){         // function
    console.log("Hello World");
}


console.log(typeof bigNumber);