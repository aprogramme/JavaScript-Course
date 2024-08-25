// Singleton
// Object.create 

// Object literals

const mySym = Symbol("keys1")

const jsUser = {
    name: "Aayush",
    "full name": "Aayush Raj",
    // mySym: "myKey1",
    [mySym]: "myKey1",       // symbol
    age: 20,
    location: "Ludhiana",
    email: "aayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);

jsUser.email = "aayush@microsoft.com"
// Object.freeze(jsUser)           // value is fixed and can't be changed
jsUser.email = "aayush@uber.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greeting1 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting1());