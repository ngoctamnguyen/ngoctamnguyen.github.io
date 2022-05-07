
/*Iterating over a Map*/
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
const myObj = [{x:1}, {y:6}, {z:8}];
const myName = "TAM"; //a string
const mySet = new Set([1, 1, 2, 2, 3, 3]); //a set

function ofloop(arr) {
for (const entry of arr) {
  console.log(entry);
}
}
ofloop(iterable);
// ['a', 1]
// ['b', 2]
// ['c', 3]
ofloop(myObj);
// { x: 1 }
// { y: 6 }
// { z: 8 }
ofloop(myName);
// T
// A
// M
ofloop(mySet);
// 1
// 2
// 3
ofloop(myIterible); //error

/*for....in */
const myIterible = [3, 5, 7];
iterable.foo = 'hello'; //add foo to myTeriable
function inLoop(arr) {
for (const i in iterable) {
  console.log(i); 
}
}

inLoop(myIterible);
// 1
// 2
// 3
// foo