"use strict";

//module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@param {number} number - the number will be doubled
 *@returns {number} number - doubled number
 */
function double(num){
    return 2*num;
}


/**
 * @param {number} number - input a number
 * @returns {number} number - 100 times of the inputed number
 */
 function times100(num){
     return 100*num;
 }


/**
 * @param {array} Array - input an array of number
 * @param {function} Function - Calling function
 * @returns {Array} Array -  creates a new array with function mapped to each element
 */
 function myMap(arr, func){
    let newArr = [];
    for (let i = 0; i< arr.length; i++) {
        newArr[i] = func(arr[i]);
    }
    return newArr;
}

