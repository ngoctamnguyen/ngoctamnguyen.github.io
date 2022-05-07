"use strict";

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// //Use the map function to map the people array to the following:
// [{ fullName: "John Smith", id: 1 },
// { fullName: "Pete Hunt", id: 2 },]

// let tam = people.map((item,index) => [{fullName: item.name}, {id: index}]);

// console.log(tam);
// // [
// //     [ { fullName: 'John' }, { id: 0 } ],
// //     [ { fullName: 'Pete' }, { id: 1 } ]
// //   ]



const bar = [{x:1, y:2}, {x:10, y:4}]
console.log("expect [3, 14]:", smash(bar));

function smash(arr){
return arr.map(({x, y}) => x + y );
}
