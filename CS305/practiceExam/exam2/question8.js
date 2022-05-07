"use strict";
let user1 = [{x:1}, {y:6}, {z:8}];
let user2 = {x:1, y:6, z:8};
let user3 = [{x:1}, [{y:6}, {z:8}]];
function foo1 () {
    const  arr = [];
    for (const element of user1) {arr.push(element);}
    return arr;
}
console.log(foo1());

function foo2 () {
    const  arr = [];
    for (const element in user1) {arr.push(element);}
    return arr;
}
console.log(foo2());

function foo3 () {
    const  arr = [];
    for (const element in user2) {arr.push(element);}
    return arr;
}
console.log(foo3());

function foo4 () {
    const  arr = [];
    for (const element of user3) {arr.push(element.x);}
    return arr;
}
console.log(foo4());