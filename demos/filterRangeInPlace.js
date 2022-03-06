"use strict";

let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr,a,b) {
    arr.forEach((item, index) => {if (item < a || item > b) arr.splice(index,1);});
    //arr.forEach((item,index) => {(item < a || item > b) ? arr.splice(index,1) : ""})
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);// [1,3]
