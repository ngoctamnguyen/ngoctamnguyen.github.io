//"use strict";

let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }};

//setTimeout(function() { user.sayHi(); }, 1000);
//Or
setTimeout(() => user.sayHi(), 1000);

//Works because ‘this’ references the calling object and now the user object is calling the function
// This anonymous function wrapper technique can be used whenever you want to pass a function as a
// callback along with arguments
// ➢ In this case we are, in effect, passing the ‘this’ argument for the function cal