"use strict";

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    let newArr = [];
    arr.forEach(item => newArr.includes(item) ? "": newArr.push(item));
    return newArr;
}


console.log(unique(strings));
