"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */


function askPassword(ok, fail, password) {
  let pass = 'rockstar';
  if (pass === password) {
      return ok;
  } else {
      return fail;
  }
}

let user = {
    name: 'John',

    loginOk() {
      return  this.name + ' logged in' ;
    },

    loginFail() {
      return this.name + ' failed to log in' ;
    }

};

let test = askPassword(user.loginOk.call(user), user.loginFail.call(user), 'rokstar');
console.log(test);

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

//askPassword2(() => user2.login(true), () => user2.login(false), 'rocstar');

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests