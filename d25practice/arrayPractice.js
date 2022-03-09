"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


let numArray = [5, 0, 7, 77, -20, 300, 51, 2];
let peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
   /* 1. use map*/
     return arr.map((item) => ({ name: item.name, age: item.age * 2 }));
     
    /*2. use for loop*/
        //  let newArr = [];
        //  for (const people of arr) {
        //       newArr.push({name: people.name, ages: people.age * 2});
        //   }
        //  return newArr;
}
console.log(doubleAges(peopleArray));

function filterEven(arr){
    return arr.filter(item => item%2 === 0);
}

function filterOver10(arr) {
    return arr.filter((item) => item.age > 10);
}

function findEvenNum(arr){
    return arr.find(item => item % 2 === 0);
}
console.log(findEvenNum(numArray));

function findEvenAge(arr){
    return arr.find((item) => (item.age % 2) === 0);
}


function includesEvenNum(arr) {

    return arr.includes(item => item % 2 ===0);
  
  }
console.log(includesEvenNum(numArray));

function includesEvenAge(arr){

    return arr.includes(item => item.age % 2 === 0);
}

console.log(includesEvenAge(peopleArray));