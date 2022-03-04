"use strict";

let arr = [5, 3, 8, 1];
function filterRange(arr,a,b) {
    let newArr = [];
    arr.forEach(item => {(item >= a && item <= b) ? newArr.push(item) : "";})
    return newArr;
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered);// [1,3]
