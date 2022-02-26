"use strict";

/**
 * 
 * @param {Number} num is any number
 * @param {Number} exponent is a positive integer
 * @returns {Number}  number to the power of the exponent
 */
function pow(num, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * num;
    }
    return result;
}

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
 function maxOfThree(a, b, c){ 
    let max = a
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    return max;
}