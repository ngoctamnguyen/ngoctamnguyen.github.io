"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary, objectToJson, jsonToObject }; //add all of your function names here that you need for the node mocha tests
 let salaries = {
     "John": 100,
     "Pete": 300,
     "Mary": 250
   };



function topSalary(salaries) {

   // return Object.keys(salaries).reduce((max, salary) => salaries[max] > salaries[salary] ? max : salary)
    let maxSalary = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
          maxSalary = salary;
         maxName = name;
        }
      }
    return maxName;
   
  }

  console.log(topSalary(salaries));


  function objectToJson(obj){
    return JSON.stringify(obj);
  }

  function jsonToObject(str){
    return JSON.parse(str);
  }
  let user = {
    name: "John Smith",
    age: 35
  };
  let str = '{"name":"John Smith","age":35}';  

  console.log(objectToJson(user),{"name":"John Smith","age":35});
  console.log(jsonToObject(str));