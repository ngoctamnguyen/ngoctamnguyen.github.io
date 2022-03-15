"use strict";
function User() {
    console.log(new.target);
  }
  
  // without "new":
  User(); // undefined
  
  // with "new":
  new User(); // function User { ... }"

  const tam = new User();
  console.log(tam);