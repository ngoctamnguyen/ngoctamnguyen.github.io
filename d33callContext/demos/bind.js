//"use strict";

let user = {
    firstName: "John"
    };
    function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
    }
    // bind this to user
let funcUser = func.bind(user);
funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

// Functions provide a built-in method bind that sets the value of ‘this’ for the function
// ➢ Similar to wrapper in that have a function call with parameters that is returned but not executed
// ➢ Similar to call and apply except that bind does not execute the function
// ➢ Returns ‘a’ new function object with the new value of ‘this’ as the context