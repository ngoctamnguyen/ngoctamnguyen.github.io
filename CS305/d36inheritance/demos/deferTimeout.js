"use strict";

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
      setTimeout(() => f1.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    console.log( a + b );
  }

  function f1(a) {
      console.log(a*2);
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 sec
  f1.defer(2000)(10);