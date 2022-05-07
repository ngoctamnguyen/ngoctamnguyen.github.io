"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
* If use web mocha, we ignore this module
*/ 

//module.exports = {maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray }; //add all of your function names here that you need for the node mocha tests

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

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for (const number of arr){
        tot *= number;
    }
    return tot;

}

/**
 * 
 * @param {Array} array of words
 * @returns {number} longest word 
 */

function findLongestWord(arr) {
    let longest = 0;
    for (const word of arr) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

/**
 * 
 * @param {Array} array of elements
 * @returns {Array} new array contained reverted of elements
 */
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length-1; i >=0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

/**
 * 
 * @param {Array} array of elements
 * @returns {Array} reverted of elements in old array
 */
function reverseArrayInPlace(arr) {
    let swap = '';
    let lastIndex = arr.length-1;
    let middle = Math.floor(arr.length/2);
    for (let i = 0; i < middle; i++) {
        swap = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = swap;
    }
    return arr;
}

/**
 * 
 * @param {Array} array of students answer
 *  @param {Array} array of correct answer
 * @returns {Array} array of number correct answers of each student
 */

function scoreExams(studentAnswers, correctAnswers) {
    let scores = [];
    let count = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        count = 0;
        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (correctAnswers[j] == studentAnswers[i][j] ) {
                count = count + 1;
            }
        }
        scores.push(count);
    }
    return scores;
}


/**
 * 
 * @param {number} number of inside array
 *  @param {number} number of element in each inside array
 * @returns {Array} 2 dimension array of increasing numbers
 */

function generateArray(numOfArr, numOfElement) {
    let newArr = [];
    let count = 1;
    for (let i = 0; i < numOfArr; i++) {
        newArr[i] = [];
        for ( let j = 0; j < numOfElement; j ++) {
            newArr[i][j] = count;
            count += 1;
        }
    }
    return newArr;
}

/*
function generateArray(row,colomun){
   let multiArray = [];
   let value = 1 ;

   for(let i=0;i<row;i++){
       let arr =[];
       for(let j =0;j<colomun;j++){
          arr.push(value);
          value++;
       }
       multiArray.push(arr);
   }
   
   return multiArray;

}
*/