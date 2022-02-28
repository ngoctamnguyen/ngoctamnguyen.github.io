"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
//module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@param {number} number will be doubled
 *@returns {number} double the input
 */
function double(num){
    return 2*num;
}


/**
 * @param {number} input the number
 * @returns {number} 100 times the input
 */
 function times100(num){
     return 100*num;
 }


/**
 * @param {array} input an array of number
 * @param {function} Calling a function to manipulate the inputed number
 * @returns {Array} creates a new array with function mapped to each element
 */
 function myMap(arr, func){
    let newArr = [];
    for (let i = 0; i< arr.length; i++) {
        newArr[i] = func(arr[i]);
    }
    return newArr;
}

