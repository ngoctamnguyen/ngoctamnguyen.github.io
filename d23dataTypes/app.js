"use strict";

const { createWriteStream } = require("fs");

/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate ,checkSpam, extractCurrencyValue, camelize}; //add all of your function names here that you need for the node mocha tests


/**
 * Uppercase the first character
 * @param {string} 
 * @returns {string} returns the string str with the uppercased first character
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * @param {string} 
 * @returns {boolean} returns true if str contains ‘viagra’ or ‘XXX’, otherwise false
 */
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * @param {string} 
 * @param {number} make string length equal to maxlength
 * @returns {string} returns string has length less than or equal maxlength
 */
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

/**
 * @param {string} currency number
 * @returns {number} returns the numeric value from string
 */
function extractCurrencyValue(str){
    return +str.slice(1);
}

/**
 * @param {Array} arr of numbers
 * @returns {number} the contiguous subarray of Array with the maximal sum of items.
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
}


/**
 * @param {string} 
 * @returns {string} return string that removes all dashes, each word after dash becomes uppercased
 */
 function camelize(str) {
    return str
      .split('-') 
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

