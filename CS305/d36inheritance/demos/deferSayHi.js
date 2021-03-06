"use strict";
/*
Please note: we use this in f.apply to make our decoration work for object methods.

So if the wrapper function is called as an object method, then this is passed to the original method f.
*/
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

let user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
}

user.sayHi = user.sayHi.defer(1000);

user.sayHi();