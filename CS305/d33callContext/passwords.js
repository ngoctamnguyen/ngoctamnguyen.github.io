"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */


function askPassword(ok, fail, password) {
  let pass = 'rockstar';
  if (pass === password) {
      return ok();
  } else {
      return fail();
  }
}

let user = {
    name: 'John',

    loginOk: function loginOk() {
      return  `${this.name} logged in`;
    },

    loginFail: function() {
      return `${this.name} failed to log in` ;
    }

};

console.log(askPassword(() => user.loginOk(), () => user.loginFail(), "rockstar"));
console.log(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar"));
console.log(askPassword(() => user.loginOk.call(user), () =>user.loginFail.call(user), "rockstar"));
console.log(askPassword(() => user.loginOk.apply(user), () =>user.loginFail.apply(user, []), "rockstar"));

// console.log(askPassword(user.loginOk.call(user), user.loginFail.call(user), 'rockstar')); //error: TypeError: ok is not a function
// console.log(askPassword(user.loginOk.apply(user), user.loginFail.apply(user), 'rockstar')); //error: TypeError: ok is not a function
console.log("**************************************************************************")

function askPassword2(ok, fail, password) {
  let pass = 'rockstar';
  if (pass === password) {
      return ok();
  } else {
      return fail();
  }
}

let user2 = {
  name : 'John',
  login : function(answer) {
    if (answer) {
      return this.name + ' logged in';
    } else {
      return this.name + ' failed to log in';
    }
  }
};

console.log(askPassword2(() => user2.login(true), () => user2.login(false), "rockstar")); 

// console.log(askPassword2(user2.login.call(user2), user2.login.call(user2), 'rockstar')); //error TypeError: ok is not a function
// console.log(askPassword2(user2.login.apply(user2), user2.login.apply(user2), 'rockstar')); //error TypeError: ok is not a function

/* WHY ERROR?
Functions provide a built-in method bind that sets the value of ‘this’ for the function
➢ Similar to wrapper in that have a function call with parameters that is returned but not executed
➢ Similar to call and apply except that bind does not execute the function
➢ Returns ‘a’ new function object with the new value of ‘this’ as the context
*/


//askPassword2(() => user2.login(true), () => user2.login(false), 'rocstar');

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests