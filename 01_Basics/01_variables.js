const accountId = 123456
let accountEmail = "aayush@google.com"
var accountPassword = "3417347"
accountCity = "Patna"
let accountState

// accountId = 34        // accountId is constant and can't be changed

accountEmail = "aayush.com"
accountPassword = "212121"
accountCity = "bangaluru"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])