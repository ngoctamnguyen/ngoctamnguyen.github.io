"use strict";

class User {
    static staticMethod() {
        console.log(this);
    console.log(this === User);
    }
    }



// class User() {};

// User.staticMethod = function() {
//     console.log(this);
//     console.log(this === User);
// };

User.staticMethod(); // true