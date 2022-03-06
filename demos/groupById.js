"use strict";

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  function groupById(arr) {
    return arr.reduce((obj, value) => { // create an empty obj like  arr
      obj[value.id] = value; //adds the first to object obj = john: {id: 'john', name: "John Smith", age: 20}
      return obj;
    }, {})
  }

  console.log(usersById);
  /*
  // after the call we should have:
    usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
