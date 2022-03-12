"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
      };
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
    return function(x) {
        return x >= low && x <= high;
      };
}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { 
        console.log("I am shooter ", j); 
        return j;
      };
    shooters.push(shooter);
    i++;
  }
   return shooters;
  }

  let army = makeArmy();

  console.log(army);
//   [
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter],
//     [Function: shooter]
//   ]
  army[0](); // the shooter number 0 shows 10
  army[9](); // and number 5 also outputs 10...
