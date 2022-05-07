"use strict";

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 sec

  /***error
  function f(a, b) {
    console.log( a + b );
  }
  f.defer(1000)(1, 2); // shows 3 after 1 second
  */