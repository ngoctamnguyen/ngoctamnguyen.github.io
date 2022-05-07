"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myMap(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
//IMPLEMENTATION NEEDED
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
//IMPLEMENTATION NEEDED
}


/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
function myReduce(arr, func, initialValue) {
    let result = initialValue;
    for ( let i = 0; i < arr.length; i++){
        result = func(arr[i], result);
    }
    //IMPLEMENTATION NEEDED
    return result ;
    }