"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests

/*Copy an array*/
function copyArray(arr){
    let newArr = [];
    newArr = arr;
    return newArr;
}

/*Concatenate an array and a new array*/
function concat(arr1, arr2){
    return arr1.concat(arr2);
}

/*Concatenate an array and a new array element*/
function concat1(arr1, ...arr2) {
    
}

/*Use an array as arguments*/
function findMin(...numbers) {
    return Math.min(...numbers);
}

console.log(findMin(...oldArr));

function combineObjs(obj1, obj2){
    let newObj = {};
    //use spread operator to merge 2 object;
    newObj = {...obj1, ...obj2};

    //Or use assign function
    //newObj = Object.assign(obj1, obj2);

    return newObj;
}